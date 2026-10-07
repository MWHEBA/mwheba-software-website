import React, { useState } from 'react';
import { ChevronLeft, FileSearch, LineChart, Layout, Terminal, ShieldAlert, Rocket, LifeBuoy, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'دراسة وفحص الدورة التشغيلية',
      short: 'معايشة ميدانية لفحص الشيتات الورقية، الدورة المستندية، وهيكل الصلاحيات الفعلي.',
      icon: <FileSearch className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'معايشة تفصيلية لمسار الفواتير وحركة المخازن والطلبيات',
        'حوارات معمقة مع مسؤولي الحسابات، المبيعات، وأمناء المستودعات',
        'حصر البرامج الحالية وتحديد جوانب القصور وأسباب التضارب',
        'تحديد الأهداف الاستراتيجية والمؤشرات الاقتصادية المطلوب تحقيقها'
      ],
      duration: 'الأسبوع 1–2',
      outcome: 'وثيقة الاكتشاف والتشخيص التشغيلي المعتمدة'
    },
    {
      number: '02',
      title: 'هندسة المعمارية وقواعد البيانات',
      short: 'تصميم جداول البيانات والعلاقات المنطقية وضمان اتساق القيود المحاسبية.',
      icon: <LineChart className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'مواصفات المتطلبات الوظيفية المفصلة للنظام (FRS)',
        'مخطط هيكل الجداول والعلاقات المحاسبية والمخزنية',
        'تحديد بوابات الربط مع البنوك، الشحن، والمراسلات',
        'جدول زمني دقيق للمراحل ومواعيد التسليم المحددة'
      ],
      duration: 'الأسبوع 2–3',
      outcome: 'المخطط الهندسي الشامل للنظام'
    },
    {
      number: '03',
      title: 'تصميم الشاشات وتجربة الاستخدام',
      short: 'رسم شاشات الكاشير، لوحات التحكم، وبوابات الخدمة لتكون سريعة وبديهية للموظف.',
      icon: <Layout className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'شاشات تفاعلية كاملة تحاكي الفواتير وأوامر الصرف والتقارير',
        'واجهات عربية مريحة تراعي سهولة الاستخدام لكافة مستويات الموظفين',
        'تحديد حقول البيانات الإلزامية ومنع الأخطاء البشرية أثناء الإدخال',
        'مصفوفة الصلاحيات المقيدة لكل إدارة وموظف'
      ],
      duration: 'الأسبوع 3–5',
      outcome: 'نموذج محاكاة تفاعلي معتمد للنظام'
    },
    {
      number: '04',
      title: 'التطوير البرمجي وبناء النواة',
      short: 'برمجة موديولات النظام بلغة Python وتقنيات React مع ربط الـ APIs وقواعد البيانات.',
      icon: <Terminal className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'واجهات برمجية سريعة وخفيفة تعمل بكفاءة على كافة الأجهزة',
        'قواعد بيانات مؤمنة تضمن سلامة القيود المحاسبية وعدم فقدان أي حركة',
        'ربط محرك الإشعارات الآلية وطباعة الباركود والفواتير',
        'تسليمات تجريبية دورية كل أسبوعين لاطلاع الإدارة على سير العمل'
      ],
      duration: 'الأسبوع 5–10',
      outcome: 'نسخة تشغيلية متكاملة على خوادم الاختبار'
    },
    {
      number: '05',
      title: 'اختبارات الضغط والتدقيق المالي',
      short: 'فحص دقة المعادلات المالية، اختبار سرعة معالجة الفواتير، ومحاكاة الضغط العالي.',
      icon: <ShieldAlert className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'محاكاة دورات بيع وشراء ومخازن كاملة للتأكد من دقة القيود',
        'اختبار الأداء تحت ضغط آلاف المعاملات المتزامنة لمنع التهنيج',
        'فحص تشفير وحماية البيانات ونسخ الاحتياط التلقائي',
        'مطابقة مخرجات النظام مع المعايير المحاسبية المعتمدة'
      ],
      duration: 'الأسبوع 10–12',
      outcome: 'تقرير الجاهزية والاعتماد للتشغيل المباشر'
    },
    {
      number: '06',
      title: 'الإطلاق الميداني وتدريب الكوادر',
      short: 'ترحيل البيانات القديمة بأمان، نشر النظام على الخوادم، وتدريب فريق العمل عملياً.',
      icon: <Rocket className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'ترحيل آمن لأرصدة المخزون والحسابات السابقة بدون انقطاع في العمل',
        'ورش تدريبية تفاعلية لكل فريق عمل حتى يتقن استخدام شاشته',
        'أدلة استخدام مصورة ومرئية باللغة العربية لسهولة الرجوع إليها',
        'حضور هندسي مباشر لتذليل أي عقبة خلال الأيام الأولى للإطلاق'
      ],
      duration: 'الأسبوع 12–14',
      outcome: 'إطلاق ميداني ناجح وكوادر مدربة بالكامل'
    },
    {
      number: '07',
      title: 'الدعم الفني وضمان الاستقرار (SLA)',
      short: 'تغطية الدعم، فترة الضمان، وشروط الـ SLA محددة حسب اتفاقية المشروع لضمان استقرار العمليات.',
      icon: <LifeBuoy className="w-5 h-5 text-[#075D91]" />,
      deliverables: [
        'استجابة سريعة لأي استفسار عبر قنوات الدعم المحددة تعاقدياً',
        'نسخ احتياطي دوري مشفر يضمن سلامة واستعادة البيانات',
        'تحديثات دورية لمواكبة التغيرات والتطورات التشغيلية',
        'جلسات مراجعة دورية لتقييم كفاءة التشغيل وإضافة متطلبات جديدة'
      ],
      duration: 'حسب شروط التعاقد والـ SLA',
      outcome: 'استقرار تشغيلي مستدام وشراكة تقنية موثقة'
    }
  ];

  const current = steps[activeStep];

  return (
    <section id="process" className="py-20 md:py-24 bg-white border-b border-slate-200/60 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-semibold text-[#075D91] uppercase tracking-widest mb-2.5">
            منهجية العمل والتحول الرقمي
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
            مراحل تسليم النظام من الفحص وحتى التشغيل الميداني
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            نتبع مساراً هندسياً منضبطاً من 7 مراحل يضمن الانتقال السلس بدون تعطيل أعمالك أو فقدان أي بيانات تاريخية.
          </p>
        </div>

        {/* 7-Stage Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Step Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-start p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${isActive
                    ? 'bg-[#F8FAFC] border-[#075D91] shadow-xs ring-1 ring-[#075D91]/30'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-[#F8FAFC]/60'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${isActive ? 'bg-[#075D91] text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                      {step.number}
                    </span>
                    <div>
                      <div className={`text-xs sm:text-sm font-bold ${isActive ? 'text-[#075D91]' : 'text-slate-900'}`}>
                        {step.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {step.short}
                      </div>
                    </div>
                  </div>

                  <ChevronLeft className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#075D91]' : 'text-slate-300'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Stage Deliverable Deep Dive */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-200/70 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#075D91]">
                  {current.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#075D91]">
                    {`المرحلة ${current.number}`}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {current.title}
                  </h3>
                </div>
              </div>

              <div className="text-end">
                <span className="text-[11px] text-slate-500 font-medium block">
                  المدى الزمني:
                </span>
                <span className="text-xs font-bold text-[#075D91] bg-white px-2.5 py-1 rounded-lg border border-slate-200 mt-0.5 inline-block">
                  {current.duration}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              {current.short}
            </p>

            {/* Deliverables List */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                المخرجات والالتزامات المحددة لهذه المرحلة:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Milestone Output */}
            <div className="bg-white p-4 rounded-xl border border-[#075D91]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  المخرج النهائي المعتمد:
                </span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 block">
                  {current.outcome}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[#075D91] font-bold self-end sm:self-auto bg-[#F8FAFC] px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="text-xs">معتمد وموثق</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
