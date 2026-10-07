import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { SolutionId, CaseStudy } from '../../types';
import { ArrowLeft, Code2, Users, Globe2, ShoppingBag, GitMerge, CheckCircle2, Printer, Briefcase } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudiesData';

interface WhatWeBuildProps {
  onSelectSolution: (id: SolutionId) => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
  onStartProject: (serviceName?: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({
  onSelectSolution,
  onSelectCaseStudy,
  onStartProject
}) => {
  const [activeTab, setActiveTab] = useState<'proven' | 'expansion'>('proven');

  const provenSectors = [
    {
      id: 'commercial',
      caseStudyId: 'commercial-supplies-pos-erp',
      title: 'الشركات التجارية ونقاط البيع',
      subtitle: 'كاشير سريع، مزامنة الفروع والمخازن، فواتير المبيعات، والربط المحاسبي',
      tag: 'قطاع منجز بنجاح',
      icon: <ShoppingBag className="w-5 h-5 text-[#075D91]" />,
      features: [
        'كاشير سريع بالباركود مع تقفيل الخزائن ومطابقتها لحظياً',
        'إصدار فواتير المبيعات الرسمية والترحيل التلقائي للقيود',
        'متابعة حية لحركة المخازن والمناديب وتنبيهات نواقص الأصناف'
      ],
      targetService: 'sales-pos' as SolutionId
    },
    {
      id: 'services',
      caseStudyId: 'services-contracts-sla',
      title: 'الشركات الخدمية والمهنية',
      subtitle: 'عقود الصيانة الدورية، اتفاقيات الـ SLAs، زيارات الفنيين، والفوترة المتكررة',
      tag: 'قطاع منجز بنجاح',
      icon: <Briefcase className="w-5 h-5 text-[#075D91]" />,
      features: [
        'جدولة مواعيد زيارات الصيانة الدورية وتنبيهات التجديد التعاقدي',
        'توجيه الفنيين الميدانيين وإثبات إتمام الخدمة رقمياً بالتوقيع',
        'توليد الفواتير الدورية (Retainers) ومتابعة التحصيل آلياً'
      ],
      targetService: 'bespoke-portals' as SolutionId
    },
    {
      id: 'printing',
      caseStudyId: 'printing-agency-production-erp',
      title: 'شركات ومطابع الدعاية والإعلان',
      subtitle: 'حاسبة تفصيل وتكاليف الورق، أوامر الشغل (Job Orders)، وتتبع خطوط الإنتاج',
      tag: 'قطاع منجز بنجاح',
      icon: <Printer className="w-5 h-5 text-[#075D91]" />,
      features: [
        'حاسبة رياضية دقيقة لتفصيل مقاسات أفرخ الورق وخفض الهدر',
        'تحويل عرض السعر المعتمد فوراً لأمر تشغيل بصالة الطباعة',
        'تتبع مراحل أمر الشغل (طباعة، سلوفان، تكسير، تسليم) بالباركود'
      ],
      targetService: 'printing-production' as SolutionId
    },
    {
      id: 'education',
      caseStudyId: 'educational-academy-erp',
      title: 'المؤسسات التعليمية',
      subtitle: 'شؤون الطلاب، الأقساط، الأكاديميات الهجينة، نسب المدربين، والشهادات بـ QR',
      tag: 'قطاع منجز بنجاح',
      icon: <Users className="w-5 h-5 text-[#075D91]" />,
      features: [
        'جدولة ومتابعة الأقساط المدرسية مع إرسال تنبيهات واتساب للأهالي',
        'إدارة سعة القاعات وحساب نسب ومستحقات المحاضرين آلياً',
        'إصدار الشهادات الرقمية المؤمنة فورياً برمز QR المعتمد'
      ],
      targetService: 'education-academy' as SolutionId
    }
  ];

  const expansionSectors = [
    {
      id: 'import-export',
      caseStudyId: null,
      title: 'شركات الاستيراد والتصدير واللوجستيات',
      subtitle: 'دورات التخليص الجمركي، تتبع الشحنات، والحسابات متعددة العملات',
      tag: 'قطاع توسعي مستهدف',
      icon: <Globe2 className="w-5 h-5 text-[#075D91]" />,
      features: [
        'تتبع تكاليف الشحنات ومصاريف التخليص الجمركي للحاوية',
        'شجرة حسابات موحدة تدعم العملات الأجنبية وفروق الصرف',
        'إدارة دورة الاعتمادات المستندية والموردين وسندات الشحن'
      ],
      targetService: 'inventory-supply' as SolutionId
    },
    {
      id: 'manufacturing',
      caseStudyId: null,
      title: 'المصانع وخطوط الإنتاج والتصنيع (BOM)',
      subtitle: 'مراقبة المواد الخام (BOM)، مراحل التشغيل، وحساب الهدر والتوالف',
      tag: 'قطاع توسعي مستهدف',
      icon: <GitMerge className="w-5 h-5 text-[#075D91]" />,
      features: [
        'هندسة شجرة المكونات والمواد الخام (Multi-Level BOM)',
        'متابعة أوامر التشغيل وتكلفة المراحل والعمالة المباشرة',
        'مراقبة الهدر وحساب تكلفة الصنف التام بدقة محاسبية'
      ],
      targetService: 'printing-production' as SolutionId
    },
    {
      id: 'medical',
      caseStudyId: null,
      title: 'المراكز الطبية والعيادات المتخصصة',
      subtitle: 'السجلات الطبية (EHR)، حجز المواعيد، والفواتير العلاجية والتأمين',
      tag: 'قطاع توسعي مستهدف',
      icon: <Code2 className="w-5 h-5 text-[#075D91]" />,
      features: [
        'الملف الطبي الموحد للمريض والتاريخ العلاجي والروشتات',
        'جدولة العيادات وحجز المواعيد وإشعارات واتساب التذكيرية',
        'إدارة كشوف الأطباء ومستحقات الكشف والعمليات الجراحية'
      ],
      targetService: 'bespoke-portals' as SolutionId
    },
    {
      id: 'digital-commerce',
      caseStudyId: null,
      title: 'منصات التجارة الرقمية',
      subtitle: 'بوابات طلب مركزية للتجار والموزعين، فحص فوري للمخزون، وربط بوابات الدفع والشحن',
      tag: 'قطاع توسعي مستهدف',
      icon: <ShoppingBag className="w-5 h-5 text-[#075D91]" />,
      features: [
        'قوائم أسعار مخصصة لعملاء الجملة والتوريدات والحدود الائتمانية',
        'ربط آلي مع بوابات الدفع الإلكتروني وشركات الشحن والتتبع',
        'تكامل لحظي مع المخازن لمنع بيع أصناف غير متوفرة'
      ],
      targetService: 'automation-integrations' as SolutionId
    }
  ];

  const handleSectorAction = (sec: typeof provenSectors[0] | typeof expansionSectors[0]) => {
    if (sec.caseStudyId && onSelectCaseStudy) {
      const foundStudy = caseStudiesData.find(cs => cs.id === sec.caseStudyId);
      if (foundStudy) {
        onSelectCaseStudy(foundStudy);
        return;
      }
    }
    if (onSelectSolution) {
      onSelectSolution(sec.targetService);
    } else {
      onStartProject(sec.title);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const activeSectors = activeTab === 'proven' ? provenSectors : expansionSectors;

  return (
    <section id="solutions" className="py-20 md:py-24 bg-[#F8FAFC] text-start border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="text-xs font-semibold text-[#075D91] uppercase tracking-widest mb-2.5">
              مصفوفة القطاعات والحلول المتخصصة
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
              أنظمة متخصصة مصممة لطبيعة أعمالك
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-600 max-w-lg leading-relaxed">
            لا نبيع قوالب عامة مكررة؛ بل نبني محركات مخصصة تحاكي الدورة المستندية الحقيقية لقطاع عملك.
          </p>
        </div>

        {/* 2 Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          <button
            onClick={() => setActiveTab('proven')}
            className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-colors duration-200 cursor-pointer ${
              activeTab === 'proven'
                ? 'bg-[#075D91] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            قطاعات تم تسليمها وتعمل بنجاح
          </button>

          <button
            onClick={() => setActiveTab('expansion')}
            className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-colors duration-200 cursor-pointer ${
              activeTab === 'expansion'
                ? 'bg-[#075D91] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            حلول هندسية جاهزة للتنفيذ الفوري
          </button>
        </div>

        {/* Sector Cards Matrix */}
        <motion.div 
          key={activeTab}
          className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 snap-x snap-mandatory scrollbar-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeSectors.map((sec) => (
            <motion.div
              key={sec.id}
              variants={cardVariants}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs hover:border-[#075D91]/40 hover:shadow-md transition-all duration-200 w-[84vw] sm:w-[320px] md:w-auto shrink-0 snap-start"
            >
              <div>
                {/* 1. Header Tier */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
                    {sec.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    activeTab === 'proven'
                      ? 'text-emerald-800 bg-emerald-50 border-emerald-200/80'
                      : 'text-[#075D91] bg-blue-50 border-blue-200/80'
                  }`}>
                    {sec.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug">
                  {sec.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {sec.subtitle}
                </p>

                {/* 2. Body Tier */}
                <div className="space-y-2.5 mb-6">
                  {sec.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Footer Tier */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => handleSectorAction(sec)}
                  className="w-full py-2 px-3 rounded-lg bg-[#F8FAFC] hover:bg-[#075D91] text-[#075D91] hover:text-white border border-slate-200 hover:border-[#075D91] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>استعراض السيناريو والحل</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="md:hidden flex items-center justify-center gap-1.5 mt-2">
          {activeSectors.map((_, idx) => (
            <div 
              key={idx} 
              className="w-1.5 h-1.5 rounded-full bg-slate-300"
              aria-hidden="true"
            />
          ))}
        </div>

      </div>
    </section>
  );
};
