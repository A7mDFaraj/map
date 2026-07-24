'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Building2, MapPin, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { SAUDI_REGIONS } from '../data/mapRegionsData';
import { CATEGORIES } from '../data/associationsData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    region: 'الرياض',
    city: '',
    category: 'تكنولوجيا وابتكار',
    email: '',
    phone: '',
    managerName: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        onClick={resetAndClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-8 max-w-2xl w-full border border-[#e4e6f0] shadow-2xl relative"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-6 left-6 p-2 rounded-xl bg-[#f6f7fb] text-[#5b6178] hover:bg-[#e7e9f2]"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              {/* Stepper Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#0c7fae]" />
                  <span className="text-xs font-bold text-[#0c7fae]">تسجيل جديد • خارطة الجمعيات</span>
                </div>
                <h3 className="text-2xl font-black text-[#263370]">تسجيل جمعية شبابية جديدة</h3>
                
                {/* Stepper Indicator Bar */}
                <div className="flex items-center justify-between mt-6 max-w-md mx-auto">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-[#263370] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      1
                    </div>
                    <span className={`text-xs font-bold ${step >= 1 ? 'text-[#263370]' : 'text-gray-400'}`}>البيانات الأساسية</span>
                  </div>

                  <div className={`h-1 w-12 rounded ${step >= 2 ? 'bg-[#0c7fae]' : 'bg-gray-200'}`} />

                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-[#0c7fae] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      2
                    </div>
                    <span className={`text-xs font-bold ${step >= 2 ? 'text-[#0c7fae]' : 'text-gray-400'}`}>التخصص والمنطقة</span>
                  </div>

                  <div className={`h-1 w-12 rounded ${step >= 3 ? 'bg-[#42b07a]' : 'bg-gray-200'}`} />

                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-[#42b07a] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      3
                    </div>
                    <span className={`text-xs font-bold ${step >= 3 ? 'text-[#42b07a]' : 'text-gray-400'}`}>المراجعة والتقديم</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">اسم الجمعية الشبابية *</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: جمعية الإبداع الشبابي"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">رقم الترخيص الرسمي *</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: 1002492"
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">اسم رئيس مجلس الإدارة / المدير *</label>
                      <input
                        type="text"
                        required
                        placeholder="الاسم الثلاثي"
                        value={formData.managerName}
                        onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-[#263370] hover:bg-[#1c2757] text-white font-bold text-sm flex items-center gap-2"
                      >
                        <span>التالي</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">المنطقة الإدارية *</label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      >
                        {SAUDI_REGIONS.map((r) => (
                          <option key={r.id} value={r.name}>{r.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">المدينة *</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: الرياض / الدمام / جازان"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">التخصص الرئيسي *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      >
                        {CATEGORIES.filter(c => c !== 'الكل').map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#5b6178] font-bold text-sm flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>السابق</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-[#0c7fae] hover:bg-[#0a6a91] text-white font-bold text-sm flex items-center gap-2"
                      >
                        <span>التالي</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">البريد الإلكتروني الرسمي *</label>
                      <input
                        type="email"
                        required
                        placeholder="info@org.sa"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#263370] mb-1.5">رقم التواصل الهاتف/الواتساب *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5X XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:border-[#0c7fae] focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-[#e4f5ec] border border-[#42b07a]/30 text-xs font-bold text-[#359465] flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 shrink-0" />
                      <span>سيتم مراجعة طلب التسجيل والتحقق من التوثيق الرسمي خلال 24 ساعة عمل.</span>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#5b6178] font-bold text-sm flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>السابق</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3 rounded-xl bg-[#42b07a] hover:bg-[#359465] text-white font-black text-sm flex items-center gap-2 shadow-lg"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>تأكيد وإرسال الطلب</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#42b07a]/15 text-[#42b07a] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-[#263370] mb-2">تم استلام طلب التسجيل بنجاح!</h3>
              <p className="text-[#5b6178] text-sm max-w-md mb-8 font-medium">
                شكراً لتقديم طلب الانضمام إلى الخارطة الرقمية للجمعيات الشبابية. سنقوم بالتواصل معكم عبر البريد الإلكتروني المرفق فور اكتمال التوثيق.
              </p>
              <button
                onClick={resetAndClose}
                className="px-8 py-3 rounded-xl bg-[#263370] text-white font-bold text-sm hover:bg-[#1c2757]"
              >
                العودة للرئيسية
              </button>
            </div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
