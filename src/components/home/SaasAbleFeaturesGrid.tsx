import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Database,
  Store,
  Warehouse,
  Calculator,
  Cpu,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Layers,
  CreditCard,
  GraduationCap,
  Target,
  Printer
} from 'lucide-react';
import { SolutionId } from '../../types';

interface SaasAbleFeaturesGridProps {
  onSelectSolution: (id: SolutionId) => void;
  onStartProject: () => void;
  onExploreSolutions?: () => void;
}

// SaasAble Star intersection cross graphic
const StarGraphic: React.FC = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.5 0C9.95718 3.93797 13.062 7.04282 17 8.5C13.062 9.95718 9.95718 13.062 8.5 17C7.04282 13.062 3.93797 9.95718 0 8.5C3.93797 7.04282 7.04282 3.93797 8.5 0Z"
      fill="#CBD5E1"
    />
  </svg>
);

export const SaasAbleFeaturesGrid: React.FC<SaasAbleFeaturesGridProps> = ({
  onSelectSolution,
  onStartProject,
  onExploreSolutions
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const parallaxGridY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const features = [
    {
      id: 'sales-pos' as SolutionId,
      number: '01',
      title: 'المبيعات ونقاط البيع (POS)',
      content: 'كاشير فائق السرعة، فواتير إلكترونية معتمدة، حماية الأسعار، وإدارة بيانات وسجلات العملاء وعروض الأسعار.',
      tags: ['سرعة < 80ms', 'جاهزية أوفلاين Offline'],
      icon: <Store className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'inventory-supply' as SolutionId,
      number: '02',
      title: 'المستودعات وسلاسل الإمداد',
      content: 'تتبع دقيق للأرصدة، أذون الصرف والإضافة بالباركود، إدارة الموردين وأوامر الشراء، وفصل إذن الاستلام الفعلي.',
      tags: ['باركود 100%', 'تقييم FIFO والمتوسط'],
      icon: <Warehouse className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'finance-accounting' as SolutionId,
      number: '03',
      title: 'المحاسبة العامة والرقابة المالية',
      content: 'شجرة حسابات 5 مستويات، قيود يومية تلقائية، كشوف حسابات العملاء والموردين، وتقارير أرباح وتدفقات نقدية لحظية.',
      tags: ['قيود آلية فورية', 'تعدد العملات FX'],
      icon: <Calculator className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'hr-payroll' as SolutionId,
      number: '04',
      title: 'الموارد البشرية والرواتب (HR)',
      content: 'ربط أجهزة البصمة الشبكية (ZKTeco)، مسير رواتب آلي بالبدلات والاستقطاعات، وأرصدة الإجازات والعهد.',
      tags: ['بصمة ZKTeco', 'مسير رواتب آلي'],
      icon: <Users className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'crm-pipeline' as SolutionId,
      number: '05',
      title: 'إدارة علاقات العملاء (CRM)',
      content: 'تتبع العملاء المحتملين (Leads)، لوحة كانبان لمراحل الصفقات، سجل المكالمات والمتابعات، وتذاكر الدعم والشكاوى.',
      tags: ['لوحة صفقات كانبان', 'تذاكر دعم SLA'],
      icon: <Target className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'printing-production' as SolutionId,
      number: '06',
      title: 'المطابع والتصنيع وحسابات التشغيل',
      content: 'حاسبة تقطيع أفرخ الورق والهدر، تذاكر تشغيل الصالة المعزولة لحجب الأسعار، وتكلفة ساعات الماكينات والتشطيب.',
      tags: ['حاسبة مقاسات وهدر', 'تذاكر صالة معزولة'],
      icon: <Printer className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'education-academy' as SolutionId,
      number: '07',
      title: 'المؤسسات التعليمية والأكاديميات',
      content: 'شؤون الطلاب، جدولة الأقساط المدرسية، تسوية نسب المحاضرين، وإصدار شهادات رقمية برمز QR وبوابات مخصصة.',
      tags: ['إدارة الأقساط والطلاب', 'شهادات ذكية برمز QR'],
      icon: <GraduationCap className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'automation-integrations' as SolutionId,
      number: '08',
      title: 'الربط البرمجي وأتمتة الـ APIs',
      content: 'ربط مباشر مع Paymob وفوري، شركات الشحن (Bosta/Aramex)، إشعارات واتساب، وحوكمة منع تكرار العمليات.',
      tags: ['بوابات الدفع والشحن', 'إشعارات واتساب آلية'],
      icon: <Cpu className="w-6 h-6 text-[#075D91]" />
    },
    {
      id: 'bespoke-portals' as SolutionId,
      number: '09',
      title: 'الأنظمة المخصصة والبوابات الرقمية',
      content: 'منظومات تُبنى على مقاس دورتك الخاصة (مقاولات، لوجستيات) وبوابات B2B للشركاء برخصة تشغيل دائمة.',
      tags: ['مصمم على مقاسك', 'بوابات B2B تفاعلية'],
      icon: <Layers className="w-6 h-6 text-[#075D91]" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white border-b border-slate-200/80 text-start relative overflow-hidden">

      {/* Background Subtle Dot Accent with Scroll Drift */}
      <motion.div
        style={{ y: parallaxGridY }}
        className="absolute inset-0 saasable-dots-bg-dense opacity-25 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. PROGRESSIVE HEADER ASSEMBLY (Scroll Entrance) */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-slate-200 mb-3.5 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ACD4] animate-pulse" />
              <span>قدرات وإمكانيات المنظومة الأساسية</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug"
            >
              بنية برمجية شاملة تمنحك السيطرة الكاملة على أعمالك
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl"
            >
              كل ميزة تم تصميمها وهندستها لتلبي الاحتياج الفعلي للشركات، لتعمل كافة الأقسام معاً بسلاسة وتناغم تام.
            </motion.p>
          </motion.div>
        </div>

        {/* 2. 6-GRID CONTAINER CONSTRUCTING WITH SCROLL */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-[#F8FAFC]/60 rounded-2xl md:rounded-3xl border border-slate-200 p-4 sm:p-6 md:p-8 shadow-sm overflow-visible"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => {
              const isLastRow = idx >= 3;
              const isLastInRow = (idx + 1) % 3 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + idx * 0.07,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                  onClick={() => onSelectSolution(item.id)}
                  className={`relative p-6 sm:p-7 md:p-8 flex flex-col justify-between group hover:bg-white transition-all duration-200 cursor-pointer ${!isLastRow ? 'lg:border-b border-slate-200' : ''
                    } ${!isLastInRow ? 'lg:border-e border-slate-200' : ''
                    } border-b sm:border-b-0 border-slate-200`}
                >
                  <div className="space-y-4">
                    {/* 56px Round Icon Avatar with Micro-Scale Entrance */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:border-[#075D91]/40 group-hover:bg-[#F5F9FB] transition-all"
                    >
                      {item.icon}
                    </motion.div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-[#00ACD4]">
                          {item.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#075D91] transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {item.content}
                      </p>

                      {/* Micro Spec Badges with Staggered Fade */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center text-[10px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 flex items-center gap-1.5 text-xs font-bold text-[#075D91] opacity-0 group-hover:opacity-100 group-hover:translate-x-[-4px] transition-all">
                    <span>استعراض مواصفات المنظومة</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </div>

                  {/* SaasAble Cross Star graphic at grid intersection points */}
                  {!isLastRow && !isLastInRow && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                      className="hidden lg:block absolute -bottom-[9px] -left-[9px] z-10 pointer-events-none"
                    >
                      <StarGraphic />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 3. BOTTOM ACTION BUTTONS (Scroll Entrance) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center"
        >
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#075D91] hover:bg-[#063B5C] active:bg-[#041D2E] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>طلب تحليل النظام مجاناً</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              if (onExploreSolutions) {
                onExploreSolutions();
              } else {
                onSelectSolution('sales-pos');
              }
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#075D91] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
          >
            <span>استكشاف تفاصيل الأنظمة الـ 9</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
