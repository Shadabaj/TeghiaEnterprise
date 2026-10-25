import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, MapPin, Building, Phone, User, ShieldCheck, MessageSquare } from 'lucide-react';
import { NEIGHBORHOODS, CONTRACTOR_INFO, SERVICE_SCOPE_OPTIONS } from '../data/contractorData';

interface SiteInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedArea?: string;
  preloadedBoq?: { flatType: string; area: number; grade: string; totalEst: number } | null;
}

export const SiteInspectionModal: React.FC<SiteInspectionModalProps> = ({
  isOpen,
  onClose,
  preselectedArea,
  preloadedBoq,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [neighborhood, setNeighborhood] = useState(preselectedArea || 'Kharghar (Sector 1 - 36)');
  const [society, setSociety] = useState('');
  const [propertyType, setPropertyType] = useState(preloadedBoq?.flatType || '3BHK');
  const [scope, setScope] = useState('Full Turnkey Renovation');
  const [preferredDate, setPreferredDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [preferredSlot, setPreferredSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const ref = `TEG-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello Teghia Enterprise,\n\nI have requested a Complimentary Site Audit on your website.\n\nBooking Ref: ${bookingRef}\nName: ${name}\nPhone: ${phone}\nLocation: ${neighborhood}\nSociety/Flat: ${society}\nType: ${propertyType}\nScope: ${scope}\nDate: ${preferredDate} (${preferredSlot})${
        preloadedBoq ? `\nEstimated BOQ: ₹${preloadedBoq.totalEst.toLocaleString('en-IN')}` : ''
      }\n\nPlease confirm the site engineer visit.`
    );
    window.open(`https://wa.me/${CONTRACTOR_INFO.phoneClean}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setSociety('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] w-full max-w-lg max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-fade-in">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#1e2228] text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[2px] bg-[#914c18] text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-lg sm:text-xl font-medium leading-tight">
                Schedule Complimentary Site Audit
              </h2>
              <p className="text-[11px] font-sans-clean text-stone-300">
                Digital moisture scan &amp; itemized BOQ delivery in 48 hours
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

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-[#fbf9f5]">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-sans-clean font-bold uppercase tracking-wider text-[#914c18]">
                  Survey Request Confirmed
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#1e2228]">
                  Site Inspection Booked!
                </h3>
                <p className="text-xs text-[#45474b]">
                  Booking Reference: <span className="font-mono font-bold text-[#1e2228]">{bookingRef}</span>
                </p>
              </div>

              <div className="bg-white p-4 rounded-[3px] border border-[#e2e8f0] text-left text-xs font-sans-clean space-y-2 max-w-sm mx-auto">
                <div className="flex items-center justify-between">
                  <span className="text-[#75777b]">Client:</span>
                  <span className="font-semibold text-[#1e2228]">{name} ({phone})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#75777b]">Location:</span>
                  <span className="font-semibold text-[#1e2228]">{neighborhood}</span>
                </div>
                {society && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#75777b]">Premises:</span>
                    <span className="font-semibold text-[#1e2228]">{society}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[#75777b]">Scheduled For:</span>
                  <span className="font-semibold text-[#1e2228]">{preferredDate} · {preferredSlot.split(' ')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#75777b]">Assigned Inspector:</span>
                  <span className="font-semibold text-[#914c18]"> Er Junaid Ansari / Engineer | MBA in Construction Management</span>
                </div>
              </div>

              <div className="pt-2 space-y-2 max-w-sm mx-auto">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 px-4 bg-[#10b981] hover:bg-[#059669] text-white font-sans-clean font-bold text-xs rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 bg-white border border-[#cbd5e1] text-[#1e2228] font-sans-clean font-medium text-xs rounded-[2px] hover:bg-[#f0ece1] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {preloadedBoq && (
                <div className="p-3 bg-[#f5efe4] border border-[#e2d8c3] rounded-[3px] text-xs space-y-1">
                  <div className="font-bold text-[#914c18] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Attached Preliminary BOQ Estimate</span>
                  </div>
                  <div className="text-[#45474b]">
                    {preloadedBoq.flatType} ({preloadedBoq.area} SQ.FT.) · {preloadedBoq.grade.toUpperCase()} Grade: ₹{preloadedBoq.totalEst.toLocaleString('en-IN')}
                  </div>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b] flex items-center gap-1">
                    <User className="w-3 h-3 text-[#914c18]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kulkarni"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b] flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#914c18]" />
                    <span>Phone (10-Digit Mobile) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9920734040"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none"
                  />
                </div>
              </div>

              {/* Neighborhood Node */}
              <div className="space-y-1">
                <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#914c18]" />
                  <span>Navi Mumbai Node *</span>
                </label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none cursor-pointer"
                >
                  {NEIGHBORHOODS.map((node) => (
                    <option key={node.id} value={node.name}>
                      {node.name} (SLA: {node.dispatchTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Society / Flat Details */}
              <div className="space-y-1">
                <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b] flex items-center gap-1">
                  <Building className="w-3 h-3 text-[#914c18]" />
                  <span>Society Name / Sector / Flat No</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hiranandani Crystal, Sector 7, Flat 1204"
                  value={society}
                  onChange={(e) => setSociety(e.target.value)}
                  className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none"
                />
              </div>

              {/* Property Type & Scope */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b]">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none cursor-pointer"
                  >
                    <option value="1BHK">1 BHK Apartment</option>
                    <option value="2BHK">2 BHK Apartment</option>
                    <option value="3BHK">3 BHK Apartment / Penthouse</option>
                    <option value="4BHK">4 BHK / Duplex</option>
                    <option value="Rowhouse">Rowhouse / Villa</option>
                    <option value="Commercial">Commercial Office / Clinic</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b]">
                    Scope Required
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none cursor-pointer"
                  >
                    {SERVICE_SCOPE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#914c18]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#45474b] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#914c18]" />
                    <span>Preferred Slot</span>
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-white border border-[#cbd5e1] rounded-[2px] p-2 text-xs text-[#1e2228] focus:border-[#1e2228] outline-none cursor-pointer"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Assurance Callout */}
              <div className="p-3 bg-[#f0ece1] rounded-[3px] border border-[#dcd7cb] text-[11px] text-[#4a5568] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#914c18] shrink-0 mt-0.5" />
                <span>
                  No obligation. Includes digital moisture scan report, laser leveling check, and guaranteed un-bundled BOQ quote within 48 hours.
                </span>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#1e2228] hover:bg-[#914c18] text-white font-sans-clean font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer shadow-sm"
                >
                  Confirm Free Inspection Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
