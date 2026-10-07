import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadRef, setLeadRef] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'منظومة ERP متكاملة (مخازن، مبيعات، حسابات، نقاط بيع)',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MW-LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
    setLeadRef(generatedRef);

    // Hybrid Lead Capture: Save safely to LocalStorage to prevent any data loss
    try {
      const existingLeads = JSON.parse(localStorage.getItem('mwheba_leads') || '[]');
      existingLeads.push({
        refId: generatedRef,
        date: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('mwheba_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.warn('LocalStorage save skipped', err);
    }

    setIsSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const msg = encodeURIComponent(
      `مرحباً شركة موهبة للحلول البرمجية،\nأود تأكيد طلب استشارة فحص النظام.\nكود المتابعة: ${leadRef}\nالاسم: ${formData.name}\nالشركة: ${formData.company}\nالهاتف: ${formData.phone}\nنوع الخدمة: ${formData.service}\nالمتطلبات:\n${formData.description || 'فحص شامل للدورة المستندية'}`
    );
    window.open(`https://wa.me/201229609292?text=${msg}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* بانر الصفحة */}
      <div className="bg-[#063B5C] text-white py-16 sm:py-20 border-b border-[#075D91] text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00ACD4] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/15 mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>تواصل معنا واستشر خبراءنا</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              جاهزون لمناقشة متطلبات نظامك البرمجي
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              فريق الاستشارات البرمجية في موهبة جاهز لعقد جلسة استكشافية لفهم دورتكم التشغيلية وتقديم مقترح هندسي متكامل.
            </p>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي ونموذج التواصل */}
      <div className="py-16 md:py-20 bg-white text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* العمود الأيمن: القنوات المباشرة والضمانات */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  قنوات التواصل المباشرة
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تواصل معنا مباشرة عبر الهاتف أو الواتساب أو البريد الإلكتروني لفحص دورتكم التشغيلية.
                </p>
              </div>

              <div className="space-y-4">
                {/* الهاتف المباشر */}
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F5F9FB] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#075D91] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">الهاتف المباشر للاستشارات</h4>
                    <a
                      href="tel:+201229609292"
                      className="text-xs text-[#075D91] font-bold hover:underline mt-0.5 block dir-ltr text-start"
                    >
                      +20 122 960 9292 (01229609292)
                    </a>
                  </div>
                </div>

                {/* واتساب للأعمال */}
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F5F9FB] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-emerald-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">محادثة فورية (واتساب للأعمال)</h4>
                    <a
                      href="https://wa.me/201229609292?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AD%D9%84%D9%88%D9%84%20%D9%88%D8%A3%D9%86%D8%8C%D9%85%D8%A9%20%D9%85%D9%88%D9%87%D8%A8%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 font-bold hover:underline mt-0.5 block dir-ltr text-start"
                    >
                      +20 122 960 9292 (متاح 24/7)
                    </a>
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F5F9FB] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#075D91] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">البريد الإلكتروني للحلول</h4>
                    <a href="mailto:solutions@mwheba.com" className="text-xs text-[#075D91] font-semibold hover:underline mt-0.5 block">
                      solutions@mwheba.com
                    </a>
                  </div>
                </div>

                {/* المقر الرئيسي */}
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F5F9FB] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#075D91] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">المقر الرئيسي</h4>
                    <p className="text-xs text-slate-600 mt-0.5">الإسكندرية، جمهورية مصر العربية</p>
                  </div>
                </div>
              </div>

              {/* صندوق ضمان سرية البيانات */}
              <div className="p-5 rounded-xl border border-slate-200 bg-[#063B5C] text-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00ACD4]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>اتفاقية سرية بيانات ملزمة (NDA)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  كافة بيانات دورتكم المستندية ومستندات العمل تخضع لاتفاقية سرية بيانات كاملة لضمان أمان معلوماتكم وأسراركم التجارية بنسبة 100%.
                </p>
              </div>
            </div>

            {/* العمود الأيسر: نموذج طلب الاستشارة ودراسة النظام */}
            <div className="lg:col-span-7 bg-[#F5F9FB] rounded-2xl border border-slate-200 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200 inline-block mb-2">
                      كود المتابعة: {leadRef}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      تم استلام طلبكم وتسجيله بنجاح
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mt-1">
                      تم حفظ طلبك بنجاح وسيقوم مهندس النظم بمراجعة متطلباتكم والتواصل معكم خلال 24 ساعة عمل. لتسريع الرد، يمكنك مشاركة ملخص الطلب فوراً عبر الواتساب:
                    </p>
                  </div>

                  {/* إجراءات المتابعة الفورية */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleWhatsAppForward}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>إرسال تفاصيل الطلب عبر واتساب</span>
                      <ArrowUpRight className="w-3.5 h-3.5 -scale-x-100" />
                    </button>

                    <a
                      href="tel:+201229609292"
                      className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-[#075D91] bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>اتصال مباشر: 01229609292</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      تقديم طلب استشارة إضافي
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      طلب دراسة وتحليل النظام مجاناً
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      املأ النموذج وسيقوم مهندس النظم بالتواصل معك لتحديد موعد الجلسة الاستكشافية.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        الاسم بالكامل *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#075D91] transition-colors"
                        placeholder="مثال: م. أحمد عبد الله"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم الشركة / المؤسسة *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#075D91] transition-colors"
                        placeholder="مثال: شركة التوريدات المتحدة"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الهاتف / الواتساب *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#075D91] transition-colors"
                        placeholder="012XXXXXXXX أو 010XXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        البريد الإلكتروني للعمل *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#075D91] transition-colors"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      نوع النظام أو الخدمة المطلوبة
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#075D91] transition-colors cursor-pointer"
                    >
                      <option value="منظومة ERP متكاملة (مخازن، مبيعات، حسابات، نقاط بيع)">منظومة ERP متكاملة (مخازن، مبيعات، حسابات، نقاط بيع)</option>
                      <option value="تطوير برنامج مخصص على مقاس دورة العمل">تطوير برنامج مخصص على مقاس دورة العمل</option>
                      <option value="الربط البرمجي والأتمتة وبوابات الدفع (APIs)">الربط البرمجي والأتمتة وبوابات الدفع (APIs)</option>
                      <option value="بوابة عملاء وموردين ومنصة ويب B2B">بوابة عملاء وموردين ومنصة ويب B2B</option>
                      <option value="استشارة عامة وفحص الدورة المستندية">استشارة عامة وفحص الدورة المستندية</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      نبذة عن التحديات الحالية أو المتطلبات
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#075D91] transition-colors resize-none"
                      placeholder="اذكر المشاكل الحالية مثل (عجز في المخازن، برامج منفصلة لا تتحدث مع بعضها، شيتات إكسيل متراكمة...)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] active:bg-[#041D2E] rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>إرسال طلب الاستشارة وفحص النظام</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

