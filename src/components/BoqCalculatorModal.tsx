import React, { useState, useId } from 'react';
import { X, Calculator, Check, Printer, Calendar, FileSpreadsheet, ShieldAlert } from 'lucide-react';
import { BOQ_RATE_ITEMS, BoqRateItem } from '../data/contractorData';

interface BoqCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToAudit: (config: { flatType: string; area: number; grade: string; totalEst: number }) => void;
}

export const BoqCalculatorModal: React.FC<BoqCalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToAudit,
}) => {
  const [flatType, setFlatType] = useState<string>('3BHK');
  const [areaSqFt, setAreaSqFt] = useState<number>(1450);
  const [grade, setGrade] = useState<'silver' | 'gold' | 'platinum'>('gold');
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'boq-modular-kitchen',
    'boq-wardrobes',
    'boq-false-ceiling',
    'boq-painting',
    'boq-flooring',
    'boq-waterproofing',
    'boq-electrical',
  ]);

  const flatSizes: Record<string, number> = {
    '1BHK': 650,
    '2BHK': 1050,
    '3BHK': 1450,
    '4BHK': 2200,
    'Commercial': 1800,
  };

  const handleFlatTypeChange = (type: string) => {
    setFlatType(type);
    setAreaSqFt(flatSizes[type] || 1200);
  };

  const toggleScope = (id: string) => {
    if (selectedScopes.includes(id)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((s) => s !== id));
      }
    } else {
      setSelectedScopes([...selectedScopes, id]);
    }
  };

  // Quantity multiplier logic based on sq.ft
  const getItemQuantity = (item: BoqRateItem) => {
    switch (item.id) {
      case 'boq-modular-kitchen':
        return Math.round(areaSqFt * 0.022); // running ft of kitchen
      case 'boq-wardrobes':
        return Math.round(areaSqFt * 0.18); // sq ft of wardrobe surface
      case 'boq-false-ceiling':
        return Math.round(areaSqFt * 0.85); // false ceiling coverage
      case 'boq-painting':
        return Math.round(areaSqFt * 3.2); // total wall surface area
      case 'boq-flooring':
        return Math.round(areaSqFt * 0.75); // flooring area
      case 'boq-waterproofing':
        return Math.round(areaSqFt * 0.25); // wet areas (bathrooms/balconies)
      case 'boq-electrical':
        return Math.round(areaSqFt * 0.08); // switchboard electrical points
      default:
        return 100;
    }
  };

  const getItemRate = (item: BoqRateItem) => {
    if (grade === 'silver') return item.silverRate;
    if (grade === 'platinum') return item.platinumRate;
    return item.goldRate;
  };

  // Calculate items
  const activeItems = BOQ_RATE_ITEMS.filter((item) => selectedScopes.includes(item.id));
  const lineItems = activeItems.map((item) => {
    const qty = getItemQuantity(item);
    const rate = getItemRate(item);
    const amount = qty * rate;
    return {
      ...item,
      qty,
      rate,
      amount,
    };
  });

  const totalAmount = lineItems.reduce((acc, curr) => acc + curr.amount, 0);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handlePrint = () => {
    window.print();
  };

  const areaInputId = useId();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-fade-in">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#1e2228] text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[2px] bg-[#914c18] text-white flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-lg sm:text-xl font-medium leading-tight">
                Turnkey Line-Item BOQ Estimator
              </h2>
              <p className="text-[11px] font-sans-clean text-stone-300">
                Transparent rates aligned with Navi Mumbai market standards
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-[2px] bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Configuration & Estimate Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 bg-[#fbf9f5]">
          {/* Step 1: Flat Configuration */}
          <div className="space-y-2">
            <label className="text-[11px] font-sans-clean font-bold tracking-wider text-[#914c18] uppercase">
              1. Select Configuration
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {['1BHK', '2BHK', '3BHK', '4BHK', 'Commercial'].map((type) => (
                <button
                  key={type}
                  onClick={() => handleFlatTypeChange(type)}
                  className={`py-2 px-1 text-center rounded-[2px] font-sans-clean text-[12px] font-semibold border transition-all cursor-pointer ${
                    flatType === type
                      ? 'bg-[#1e2228] text-white border-[#1e2228]'
                      : 'bg-white text-[#45474b] border-[#cbd5e1] hover:bg-[#f0ece1]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Carpet Area Slider & Numeric Input */}
          <div className="space-y-1.5 bg-white p-3.5 rounded-[3px] border border-[#e2e8f0]">
            <div className="flex items-center justify-between text-xs font-sans-clean">
              <label htmlFor={areaInputId} className="font-semibold text-[#1e2228]">Carpet Area</label>
              <div className="flex items-center gap-1 font-bold text-[#914c18] tabular-nums font-mono text-[14px]">
                <input
                  id={areaInputId}
                  type="number"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Math.max(200, Number(e.target.value)))}
                  className="w-20 text-right py-0.5 px-1 border border-[#cbd5e1] rounded-[2px] text-xs font-bold font-mono"
                />
                <span className="text-[11px] text-[#75777b]">SQ.FT.</span>
              </div>
            </div>
            <input
              type="range"
              min="400"
              max="3500"
              step="50"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              className="w-full accent-[#914c18] cursor-pointer"
            />
          </div>

          {/* Step 2: Material Grade Tier */}
          <div className="space-y-2">
            <label className="text-[11px] font-sans-clean font-bold tracking-wider text-[#914c18] uppercase">
              2. Material Grade Specification
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setGrade('silver')}
                className={`p-2.5 rounded-[2px] border text-left cursor-pointer transition-all ${
                  grade === 'silver'
                    ? 'bg-[#1e2228] text-white border-[#1e2228]'
                    : 'bg-white text-[#1e2228] border-[#cbd5e1] hover:bg-[#f0ece1]'
                }`}
              >
                <div className="font-bold text-[13px]">Silver · Classic</div>
                <div className={`text-[10.5px] mt-0.5 leading-tight ${grade === 'silver' ? 'text-stone-300' : 'text-[#75777b]'}`}>
                  IS 710 BWR Ply, Asian Paints Tractor / Royale, Saint-Gobain
                </div>
              </button>

              <button
                onClick={() => setGrade('gold')}
                className={`p-2.5 rounded-[2px] border text-left cursor-pointer transition-all ${
                  grade === 'gold'
                    ? 'bg-[#1e2228] text-white border-[#1e2228]'
                    : 'bg-white text-[#1e2228] border-[#cbd5e1] hover:bg-[#f0ece1]'
                }`}
              >
                <div className="font-bold text-[13px] flex items-center justify-between">
                  <span>Gold · Branded</span>
                  <span className="text-[9px] bg-[#914c18] text-white px-1 rounded-[1px]">POPULAR</span>
                </div>
                <div className={`text-[10.5px] mt-0.5 leading-tight ${grade === 'gold' ? 'text-stone-300' : 'text-[#75777b]'}`}>
                  Century Club Prime Marine, Royale Luxury, Hafele hardware
                </div>
              </button>

              <button
                onClick={() => setGrade('platinum')}
                className={`p-2.5 rounded-[2px] border text-left cursor-pointer transition-all ${
                  grade === 'platinum'
                    ? 'bg-[#1e2228] text-white border-[#1e2228]'
                    : 'bg-white text-[#1e2228] border-[#cbd5e1] hover:bg-[#f0ece1]'
                }`}
              >
                <div className="font-bold text-[13px]">Platinum · Luxury</div>
                <div className={`text-[10.5px] mt-0.5 leading-tight ${grade === 'platinum' ? 'text-stone-300' : 'text-[#75777b]'}`}>
                  Natural Teak/PU Veneer, Blum Servo, Italian Marble
                </div>
              </button>
            </div>
          </div>

          {/* Step 3: Scope Items Toggles */}
          <div className="space-y-2">
            <label className="text-[11px] font-sans-clean font-bold tracking-wider text-[#914c18] uppercase">
              3. Include Turnkey Scope Work
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
              {BOQ_RATE_ITEMS.map((item) => {
                const isChecked = selectedScopes.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleScope(item.id)}
                    className={`flex items-center gap-2 p-2 rounded-[2px] border text-left transition-colors cursor-pointer ${
                      isChecked
                        ? 'bg-white border-[#914c18] text-[#1e2228]'
                        : 'bg-[#f0ece1]/60 border-[#e2e8f0] text-[#75777b]'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-[1px] border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#914c18] border-[#914c18] text-white' : 'border-[#75777b]'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="truncate text-[12px] font-medium">{item.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Line-Item BOQ Table matching design system */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-[11px] font-sans-clean font-bold tracking-wider text-[#914c18] uppercase">
              <span>Itemized Bill of Quantities (BOQ)</span>
              <span className="text-[#4a5568] lowercase">({lineItems.length} heads calculated)</span>
            </div>

            <div className="bg-white rounded-[3px] border border-[#e2e8f0] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[12px] font-sans-clean">
                  <thead>
                    <tr className="bg-[#f0ece1] border-b border-[#e2e8f0] text-[10.5px] uppercase tracking-wider text-[#4a5568] font-bold">
                      <th className="py-2 px-3">Item &amp; Grade Specification</th>
                      <th className="py-2 px-2 text-right">Qty</th>
                      <th className="py-2 px-2 text-right">Unit Rate</th>
                      <th className="py-2 px-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    {lineItems.map((item) => (
                      <tr key={item.id} className="hover:bg-[#fbf9f5]">
                        <td className="py-2.5 px-3">
                          <div className="font-semibold text-[#1e2228] leading-tight">
                            {item.item}
                          </div>
                          <div className="text-[10.5px] text-[#75777b] leading-tight mt-0.5">
                            {item.specification}
                          </div>
                        </td>
                        <td className="py-2.5 px-2 text-right font-mono tabular-nums text-[#4a5568]">
                          {item.qty} {item.unit}
                        </td>
                        <td className="py-2.5 px-2 text-right font-mono tabular-nums text-[#4a5568]">
                          ₹{item.rate}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono tabular-nums font-semibold text-[#1e2228]">
                          {formatINR(item.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#1e2228] text-white font-bold text-[13px]">
                      <td colSpan={3} className="py-2.5 px-3 uppercase tracking-wider text-xs">
                        Total Estimated Turnkey Outlay
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono tabular-nums text-[#fda468]">
                        {formatINR(totalAmount)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="text-[11px] text-[#75777b] flex items-center justify-between px-1">
              <span>* Includes on-site civil supervisor, debris removal &amp; cleaning.</span>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1 text-[#914c18] hover:underline cursor-pointer font-medium"
              >
                <Printer className="w-3 h-3" />
                <span>Print BOQ</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left w-full sm:w-auto">
            <div className="text-[11px] text-[#75777b] uppercase font-bold tracking-wider">
              Preliminary Outlay
            </div>
            <div className="font-editorial text-2xl font-bold text-[#1e2228] leading-none mt-0.5">
              {formatINR(totalAmount)}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-[2px] border border-[#cbd5e1] text-[#1e2228] font-sans-clean font-medium text-xs hover:bg-[#f0ece1] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onProceedToAudit({
                  flatType,
                  area: areaSqFt,
                  grade,
                  totalEst: totalAmount,
                });
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#914c18] hover:bg-[#763802] text-white font-sans-clean font-bold text-xs rounded-[2px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Audit with this BOQ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
