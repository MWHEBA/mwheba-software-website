import React, { useState } from 'react';
import { X, ArrowLeft, CheckCircle2, ShieldCheck, Send, MessageSquare, Building2, Clock, Sparkles } from 'lucide-react';
import { LeadFormData } from '../../types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [activeMode, setActiveMode] = useState<'audit' | 'fast'>('audit');
  const [auditStep, setAuditStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState('');

  // Diagnostic selections
  const [selectedFrictions, setSelectedFrictions] = useState<string[]>([]);
  const [scaleSize, setScaleSize] = useState<string>('2 إلى 5 فروع / نقاط بيع');

  const [formData, setFormData] = useState<LeadFormData>({
    projectType: initialService || 'الشركات التجارية ونقاط البيع (POS)',
    scopeSize: 'مؤسسة متوسطة (20–150 موظف)',
    timeline: 'خلال 1 إلى 3 أشهر',
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneWhatsapp: '',
    companyWebsite: '',
    projectDescription: '',
    currentFriction: ''
  });

  if (!isOpen) return null;

  const frictionOptions = [
    { id: 'f1', label: 'تشتت المخازن وعجز الجرد الدوري' },
    { id: 'f2', label: 'بطء الفوترة وتأخر تقفيل الخزائن وحسابات الكاشير' },
    { id: 'f3', label: 'تأخر تقارير الأرباح الدورية وصعوبة تسوية الحسابات' },
    { id: 'f4', label: 'فقدان متابعة عروض الأسعار والعملاء المحتملين' },
    { id: 'f5', label: 'تعقيد مسيرات الرواتب واحتساب نسب المناديب والمحاضرين' },
    { id: 'f6', label: 'الرغبة في التخلص من اشتراكات الـ SaaS الشهرية المتراكمة' }
  ];

  const scaleOptions = [
    'فرع واحد مركزي (Single Central Location)',
    '2 إلى 5 فروع / نقاط بيع (Multi-Branch)',
    '6 إلى 20 فرعاً ومستودعات كبرى (Enterprise Tier)',
    'مصنع وخطوط إنتاج متكاملة (Industrial / BOM)'
  ];

  const toggleFriction = (id: string) => {
    setSelectedFrictions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditStep < 3) {
      setAuditStep(auditStep + 1);
    } else {
      setIsSubmitting(true);
      const generatedRef = `MW-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generatedRef);

      // Hybrid Lead Capture: Save safely to LocalStorage
      try {
        const existingLeads = JSON.parse(localStorage.getItem('mwheba_leads') || '[]');
        existingLeads.push({
          refId: generatedRef,
          type: 'audit',
          scaleSize,
          selectedFrictions,
          date: new Date().toISOString(),
          ...formData
        });
        localStorage.setItem('mwheba_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('LocalStorage save skipped', err);
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 400);
    }
  };

  const handleSubmitFast = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const generatedRef = `MW-FAST-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefId(generatedRef);

    // Hybrid Lead Capture: Save safely to LocalStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('mwheba_leads') || '[]');
      existingLeads.push({
        refId: generatedRef,
        type: 'fast',
        date: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('mwheba_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.warn('LocalStorage save skipped', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 300);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setAuditStep(1);
    onClose();
  };

  const handleOpenWhatsApp = () => {
    const selectedFrictionLabels = frictionOptions
      .filter(f => selectedFrictions.includes(f.id))
      .map(f => `• ${f.label}`)
      .join('\n');

    const message = `مرحباً شركة موهبة، أود متابعة تقرير تدقيق النظام البرمجي.\nكود المتابعة: ${refId}\nالشركة: ${formData.companyName || 'غير محدد'}\nالاسم: ${formData.fullName || 'غير محدد'}\nالهاتف: ${formData.phoneWhatsapp || 'غير محدد'}\nالحجم: ${scaleSize}\nالتحديات التشغيلية:\n${selectedFrictionLabels || 'استشارة عامة'}`;

    const whatsappUrl = `https://wa.me/201229609292?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs text-start">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">

        {/* Header Bar */}
        <div className="bg-[#063B5C] px-6 py-4 flex items-center justify-between text-white border-b border-[#041D2E]">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-[#00ACD4]" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                دراسة متطلبات النظام والجاهزية الرقمية
              </h3>
              <p className="text-[11px] text-slate-300">
                شركة موهبة للحلول البرمجية — استشارة هندسية مخصصة
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        {!isSuccess && (
          <div className="bg-[#F8FAFC] px-6 py-2.5 border-b border-slate-200 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { setActiveMode('audit'); setAuditStep(1); }}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${activeMode === 'audit'
                    ? 'bg-white text-[#075D91] shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00ACD4]" />
                <span>معالج تدقيق الجاهزية (موصى به)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('fast')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${activeMode === 'fast'
                    ? 'bg-white text-[#075D91] shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>تواصل سريع مباشر (10 ثوانٍ)</span>
              </button>
            </div>

            {activeMode === 'audit' && (
              <span className="text-[11px] font-bold text-[#075D91] hidden sm:inline">
                الخطوة {auditStep} من 3
              </span>
            )}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-xs">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-lg font-bold text-slate-900">
                تم استلام طلبك وتوليد ملف دراسة النظام
              </h4>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                يقوم فريقنا الهندسي بمراجعة متطلبات منشأتك لتجهيز المعمارية المقترحة وخطة التنفيذ والتواصل معك خلال 24 ساعة.
              </p>

              <div className="bg-[#F5F9FB] p-3 rounded-lg border border-slate-200 max-w-xs mx-auto">
                <span className="text-[11px] text-slate-500 block mb-0.5">
                  كود المتابعة المرجعي
                </span>
                <span className="font-mono text-base font-extrabold text-[#075D91]">
                  {refId}
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>المتابعة المباشرة عبر الواتساب</span>
                </button>

                <a
                  href="tel:+201229609292"
                  className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-[#075D91] font-bold rounded-lg transition-all text-xs flex items-center justify-center gap-1.5"
                >
                  <span>اتصال مباشر: 01229609292</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-all text-xs cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </div>
          ) : activeMode === 'audit' ? (
            /* AUDIT MODE FLOW */
            <form onSubmit={handleSubmitAudit} className="space-y-5">
              {auditStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      1. ما هي أبرز التحديات التشغيلية التي تريد حلها؟
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      اختر كل ما ينطبق على وضع منشأتك الحالي لتخصيص الموديولات المقترحة:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {frictionOptions.map((item) => {
                      const isChecked = selectedFrictions.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleFriction(item.id)}
                          className={`p-3 rounded-lg border text-start transition-all cursor-pointer flex items-start gap-2.5 ${isChecked
                              ? 'bg-[#F5F9FB] border-[#075D91] text-[#075D91] ring-1 ring-[#075D91]'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                          <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${isChecked ? 'bg-[#075D91] border-[#075D91] text-white' : 'border-slate-300 bg-white'
                            }`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs font-medium leading-snug">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {auditStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      2. ما هو حجم نشاطك وتطلعاتك للنظام؟
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      يساعدنا ذلك في تحديد مواصفات السيرفر وقواعد البيانات المطلوبة:
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="block font-bold text-slate-800">
                      عدد الفروع / نقاط البيع الحالية:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scaleOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setScaleSize(opt)}
                          className={`p-2.5 rounded-lg border text-start text-xs transition-all cursor-pointer font-medium ${scaleSize === opt
                              ? 'bg-[#F5F9FB] border-[#075D91] text-[#075D91] font-bold ring-1 ring-[#075D91]'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="block font-bold text-slate-800">
                      نوع النظام الأساسي المطلوب:
                    </label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden"
                      placeholder="مثال: نظام تجاري ونقاط بيع، مطبعة، إدارة خدمات"
                    />
                  </div>
                </div>
              )}

              {auditStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      3. بيانات التواصل لإرسال التقرير التشخيصي
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      سيتم إرسال الملخص والاتصال بك خلال ساعات العمل الرسمية:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        اسم المسؤول / صانع القرار *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden"
                        placeholder="م. محمد أحمد"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        اسم الشركة / المؤسسة *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden"
                        placeholder="شركة التوريدات المتحدة"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        رقم الهاتف / الواتساب *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneWhatsapp}
                        onChange={(e) => handleInputChange('phoneWhatsapp', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden font-mono"
                        placeholder="012XXXXXXXX أو 010XXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        البريد الإلكتروني للعمل
                      </label>
                      <input
                        type="email"
                        value={formData.businessEmail}
                        onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden"
                        placeholder="executive@company.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                {auditStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setAuditStep(auditStep - 1)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold transition-all cursor-pointer"
                  >
                    السابق
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#075D91] hover:bg-[#063B5C] text-white font-bold rounded-lg transition-all shadow-2xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>
                    {isSubmitting
                      ? 'جاري الإرسال...'
                      : auditStep < 3
                        ? 'التالي'
                        : 'اعتماد وإرسال طلب الدراسة'}
                  </span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#00ACD4]" />
                </button>
              </div>
            </form>
          ) : (
            /* FAST DIRECT MODE FLOW */
            <form onSubmit={handleSubmitFast} className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  التواصل المباشر السريع مع مهندسي موهبة
                </h4>
                <p className="text-[11px] text-slate-500">
                  اترك بياناتك وسيتواصل معك مهندس متخصص لمناقشة نظامك:
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    الاسم الكريم *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden"
                    placeholder="الاسم بالكامل"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    رقم الهاتف أو الواتساب *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneWhatsapp}
                    onChange={(e) => handleInputChange('phoneWhatsapp', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden font-mono"
                    placeholder="012XXXXXXXX أو 010XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    النشاط / النظام المطلوب
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-[#075D91] focus:border-[#075D91] outline-hidden"
                    placeholder="مثال: شركة استيراد وتجارة"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#075D91] hover:bg-[#063B5C] text-white font-bold rounded-lg transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-[#00ACD4]" />
                  <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال واستقبال اتصال فوري'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer Trust Bar */}
        <div className="bg-[#F8FAFC] px-6 py-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>بياناتك مشفرة ومحمية باتفاقية عدم إفصاح (NDA)</span>
          </div>

          <span className="font-mono text-[10px] text-slate-400">
            MWHEBA · B2B Custom Engineering
          </span>
        </div>

      </div>
    </div>
  );
};
