import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Sparkles, Clock, Zap } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface SaasAbleFaqProps {
  onStartProject: () => void;
  onTalkToTeam: () => void;
}

export const SaasAbleFaq: React.FC<SaasAbleFaqProps> = ({ onStartProject, onTalkToTeam }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const faqs: FaqItem[] = [
    {
      question: 'كيف يختلف نظام موهبة عن البرمجيات الجاهزة؟',
      answer: 'البرامج الجاهزة تفرض عليك قوالب جامدة واشتراكات شهرية متصاعدة دون امتلاك النظام. في موهبة، نصمم نظامك بالكامل على مقاس دورتك، وتملك كود المصدر والبيانات 100% كأصل دائم لشركتك دون أي رسوم على المستخدمين.'
    },
    {
      question: 'هل يمكن نقل بياناتنا السابقة من الإكسيل والأنظمة القديمة؟',
      answer: 'نعم. نقوم بنقل وتنقية بياناتك السابقة (الأصناف، العملاء، الموردين، وأرصدة أول المدة) بدقة تامة وبدون أي توقف لعملك اليومي مع مطابقة محاسبية شاملة.'
    },
    {
      question: 'كيف تضمنون سرعة واستقرار النظام في أوقات الذروة؟',
      answer: 'نعتمد قواعد بيانات معزولة وخوادم سحابية مخصصة تضمن سرعة استجابة فائقة للكاشير والعمليات (< 150ms) حتى مع آلاف المعاملات المتزامنة ودعم كامل للعمل دون اتصال (Offline-First).'
    },
    {
      question: 'ما هي ضمانات الصيانة والدعم الفني (SLA)؟',
      answer: 'نلتزم بعقود صيانة وتشغيل رسمية تشمل مراقبة الخوادم 24/7، نسخ احتياطي يومي تلقائي، وتدخل هندسي فوري عند أي طارئ مع التزام بنسبة استقرار 99.9%.'
    },
    {
      question: 'كم تستغرق مرحلة التحليل والتنفيذ حتى الإطلاق الفعلي؟ (نموذج السرعتين)',
      answer: (
        <div className="space-y-3">
          <p>
            نعتمد في موهبة <strong>نموذج نشر ثنائي السرعة (Dual-Speed Deployment Model)</strong> لضمان أسرع عائد استثماري دون التضحية بالعمق الهندسي:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-[#075D91] text-xs mb-1">
                <Zap className="w-3.5 h-3.5 text-[#00ACD4]" />
                <span>المسار السريع (Fast-Track Sprint):</span>
              </div>
              <p className="text-[11px] text-slate-600">
                من <strong>3 إلى 6 أسابيع</strong> لتشغيل الأنظمة الأساسية ونقاط البيع والفواتير والمخازن فورياً.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-[#075D91] text-xs mb-1">
                <Clock className="w-3.5 h-3.5 text-[#00ACD4]" />
                <span>المسار المؤسسي الشامل (Enterprise Staging):</span>
              </div>
              <p className="text-[11px] text-slate-600">
                من <strong>12 إلى 14 أسبوعاً</strong> للتحولات الكبرى متعددة الفروع والمصانع والتهجير التاريخي والتدريب المعمق.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="faq-cta" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 text-start relative overflow-hidden">
      
      {/* Background Subtle Dots */}
      <div className="absolute inset-0 saasable-dots-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* INTELLIGENT SPLIT 2-COLUMN GRID (Right: FAQs / Left: Sticky CTA Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* RIGHT SIDE: FAQS HEADER & ACCORDION (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-slate-200 mb-3.5 shadow-2xs">
                <HelpCircle className="w-3.5 h-3.5 text-[#00ACD4]" />
                <span>الأسئلة الشائعة والاستفسارات التقنية</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
                كل ما تحتاج معرفته عن هندسة وتشغيل منظومتك
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                إجابات هندسية واضحة على أبرز الأسئلة حول الملكية، ترحيل البيانات، الأمان، وضمانات التشغيل المستمر.
              </p>
            </div>

            {/* Accordion Cards */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all hover:border-slate-300"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-start flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className={`p-1.5 rounded-full bg-[#F5F9FB] border border-slate-200 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#075D91] text-white' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

          {/* LEFT SIDE: HIGH-CONVERSION CTA CARD (5 Cols - Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              style={{ y: cardParallaxY }}
              className="bg-[#063B5C] rounded-3xl p-7 sm:p-8 md:p-9 overflow-hidden shadow-2xl border border-[#075D91]/60 text-white relative flex flex-col justify-between"
            >
              <div className="relative z-10 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-200 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[#00ACD4]" />
                  <span>جاهز لتطوير دورتك التشغيلية؟</span>
                </div>

                {/* Headline & Pitch */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                    هل أنت مستعد لنقل إدارة شركتك إلى المستوى الاحترافي؟
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    احجز جلسة تحليل مجانية مع خبرائنا لتحديد النظام الأنسب لنشاطك وبدء التنفيذ فوراً.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3 pt-1">
                  <button
                    onClick={onStartProject}
                    className="w-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#063B5C] bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>طلب دراسة النظام مجاناً</span>
                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onTalkToTeam}
                    className="w-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>محادثة واتساب مباشرة</span>
                  </button>
                </div>

                {/* Guarantees Checklist */}
                <div className="pt-5 border-t border-white/15 space-y-2.5 text-xs text-slate-200 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>جلسة تحليل مجانية للدورة التشغيلية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>عقود تشغيل وصيانة رسمية وضمان استقرار (SLA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span>ملكية تامة 100% لكود المصدر وقواعد البيانات</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
