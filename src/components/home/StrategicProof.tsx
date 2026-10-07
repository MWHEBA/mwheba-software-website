import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Building2,
  Layers,
  ShieldCheck,
  Zap,
  Lock,
  XCircle,
  Cpu,
  BarChart3,
  ShieldAlert
} from 'lucide-react';
import { CaseStudy } from '../../types';
import { caseStudiesData } from '../../data/caseStudiesData';

interface StrategicProofProps {
  onStartProject: () => void;
  onViewAllCases: () => void;
  onOpenCaseModal: (study: CaseStudy) => void;
  featuredStudy?: CaseStudy;
}

export const StrategicProof: React.FC<StrategicProofProps> = ({
  onStartProject,
  onViewAllCases,
  onOpenCaseModal
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const cardY1 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const case1 = caseStudiesData[0];
  const case2 = caseStudiesData[1];

  const comparisonPoints = [
    {
      title: 'ملكية النظام والبيانات',
      saas: 'اشتراك شهري متصاعد على خوادم مشتركة دون امتلاك الكود أو قواعد البيانات.',
      mwheba: 'ملكية تامة 100% لكود المصدر والبيانات كأصل دائم لشركتك.',
      icon: <Lock className="w-4 h-4 text-[#075D91]" />
    },
    {
      title: 'هيكل التكلفة والمستخدمين',
      saas: 'رسوم شهرية تتضاعف مع كل مستخدم إضافي أو فرع جديد.',
      mwheba: 'استثمار لمرة واحدة بدون رسوم على عدد الموظفين أو الفروع.',
      icon: <BarChart3 className="w-4 h-4 text-[#075D91]" />
    },
    {
      title: 'مرونة الدورة والربط',
      saas: 'قوالب جامدة تفرض عليك تغيير طريقة عملك ولا تدعم كافة أجهزتك.',
      mwheba: 'نظام يُبنى على مقاس دورتك، مع ربط فوري للباركود، الطابعات، والواتساب.',
      icon: <Zap className="w-4 h-4 text-[#075D91]" />
    }
  ];

  return (
    <section ref={sectionRef} id="strategic-proof" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 text-start relative overflow-hidden">

      {/* Background Subtle Dots */}
      <div className="absolute inset-0 saasable-dots-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. UNIFIED HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-5">
          <div className="">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-slate-200 mb-3.5 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>الجدوى الاقتصادية وسابقة الأعمال</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
              المقارنة الاقتصادية والنتائج على أرض الواقع
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              مقارنة استراتيجية حاسمة بين امتلاك نظامك والاشتراكات المتصاعدة، مدعومة بتحول تشغيلي موثق بالأرقام.
            </p>
          </div>

          <button
            onClick={onViewAllCases}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#075D91] bg-white hover:bg-[#075D91] hover:text-white border border-slate-200 hover:border-[#075D91] rounded-lg transition-all cursor-pointer self-start md:self-end shadow-2xs group shrink-0"
          >
            <span>استعراض كافة دراسات الحالة</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform rotate-180" />
          </button>
        </div>

        {/* 2. RESTRUCTURED 2-COLUMN SYNTHESIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">

          {/* COLUMN 1: STRATEGIC OWNERSHIP COMPARISON (6 Cols) */}
          <motion.div
            style={{ y: cardY1 }}
            className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F5F9FB] border border-slate-200 flex items-center justify-center text-[#075D91]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    مصفوفة التملك الاستراتيجي (موهبة vs البرمجيات الجاهزة)
                  </h3>
                </div>
              </div>

              {/* 3 Comparison Pillars */}
              <div className="space-y-3.5">
                {comparisonPoints.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-rose-50/60 p-2.5 rounded-xl border border-rose-100/80 text-slate-700">
                        <span className="font-bold text-rose-800 flex items-center gap-1 mb-1 text-[11px]">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>البرمجيات الجاهزة (SaaS):</span>
                        </span>
                        <p className="text-[11px] leading-relaxed">{item.saas}</p>
                      </div>

                      <div className="bg-[#F5F9FB] p-2.5 rounded-xl border border-[#075D91]/20 text-slate-800">
                        <span className="font-bold text-[#075D91] flex items-center gap-1 mb-1 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>أنظمة موهبة المخصصة:</span>
                        </span>
                        <p className="text-[11px] font-medium leading-relaxed">{item.mwheba}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ROI Strategic Formula Callout Box */}
              <div className="p-4 rounded-2xl bg-[#F5F9FB] border border-[#075D91]/25 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#075D91] flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#00ACD4]" />
                    <span>معادلة العائد على الاستثمار (ROI Formula)</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                    تعافي كامل خلال 14-18 شهراً
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  ما تستثمره لمرة واحدة في بناء نظامك المخصص يعادل تماماً ما تدفعه في اشتراكات <strong>14 إلى 18 شهراً</strong> في البرمجيات الجاهزة؛ وبعدها يصبح النظام <strong>أصلاً تشغيلياً مجانياً ومملوكاً بالكامل</strong> لشركتك مدى الحياة.
                </p>
              </div>
            </div>

            {/* Bottom ROI Note & Consultation CTA */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>وقف تام للهدر مع دقة جرد ومطابقة محاسبية 100%.</span>
              </span>

              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-[#075D91] hover:bg-[#064e7a] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs shrink-0"
              >
                <span>طلب دراسة الجدوى التشغيلية</span>
                <ArrowLeft className="w-3.5 h-3.5 text-cyan-200" />
              </button>
            </div>
          </motion.div>

          {/* COLUMN 2: TWO DETAILED SUCCESS STORIES (6 Cols) */}
          <motion.div
            style={{ y: cardY2 }}
            className="lg:col-span-6 space-y-4 flex flex-col justify-between"
          >
            {/* CASE STUDY 1: Commercial Trading & POS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#075D91] bg-[#F5F9FB] px-3 py-1 rounded-full border border-slate-200">
                  <Building2 className="w-3.5 h-3.5 text-[#075D91]" />
                  <span>{case1.clientCategory_ar || case1.clientCategory}</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  قصة نجاح 1
                </span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {case1.title_ar || case1.title}
                </h3>
              </div>

              {/* Challenge vs Solution Detailed Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-slate-700">
                  <span className="font-bold text-rose-800 flex items-center gap-1 mb-1 text-[11px]">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                    <span>التحدي قبل التطبيق:</span>
                  </span>
                  <p className="text-[11px] leading-relaxed line-clamp-2">
                    {case1.challenge_ar || case1.challenge}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-700">
                  <span className="font-bold text-emerald-800 flex items-center gap-1 mb-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>الحل المنفذ من موهبة:</span>
                  </span>
                  <p className="text-[11px] leading-relaxed line-clamp-2">
                    {case1.solution_ar || case1.solution}
                  </p>
                </div>
              </div>

              {/* 3 Real Result Metrics with Details */}
              <div className="grid grid-cols-3 gap-2">
                {case1.results.map((res, i) => (
                  <div key={i} className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200 text-center flex flex-col justify-between">
                    <span className="text-xs sm:text-sm font-extrabold text-[#075D91] font-mono block">
                      {res.metric}
                    </span>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight block mt-0.5">
                      {res.label_ar || res.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">
                  {case1.timeline_ar || case1.timeline}
                </span>
                <button
                  onClick={() => onOpenCaseModal(case1)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F9FB] text-xs font-bold text-[#075D91] hover:bg-[#075D91] hover:text-white transition-all cursor-pointer border border-slate-200"
                >
                  <span>تفاصيل دراسة الحالة كاملة</span>
                  <ArrowRight className="w-3 h-3 rotate-180" />
                </button>
              </div>
            </div>

            {/* CASE STUDY 2: Services & SLA Retainers */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#075D91] bg-[#F5F9FB] px-3 py-1 rounded-full border border-slate-200">
                  <Building2 className="w-3.5 h-3.5 text-[#075D91]" />
                  <span>{case2.clientCategory_ar || case2.clientCategory}</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  قصة نجاح 2
                </span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {case2.title_ar || case2.title}
                </h3>
              </div>

              {/* Challenge vs Solution Detailed Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-slate-700">
                  <span className="font-bold text-rose-800 flex items-center gap-1 mb-1 text-[11px]">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                    <span>التحدي قبل التطبيق:</span>
                  </span>
                  <p className="text-[11px] leading-relaxed line-clamp-2">
                    {case2.challenge_ar || case2.challenge}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-700">
                  <span className="font-bold text-emerald-800 flex items-center gap-1 mb-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>الحل المنفذ من موهبة:</span>
                  </span>
                  <p className="text-[11px] leading-relaxed line-clamp-2">
                    {case2.solution_ar || case2.solution}
                  </p>
                </div>
              </div>

              {/* 3 Real Result Metrics with Details */}
              <div className="grid grid-cols-3 gap-2">
                {case2.results.map((res, i) => (
                  <div key={i} className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200 text-center flex flex-col justify-between">
                    <span className="text-xs sm:text-sm font-extrabold text-[#075D91] font-mono block">
                      {res.metric}
                    </span>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight block mt-0.5">
                      {res.label_ar || res.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">
                  {case2.timeline_ar || case2.timeline}
                </span>
                <button
                  onClick={() => onOpenCaseModal(case2)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F9FB] text-xs font-bold text-[#075D91] hover:bg-[#075D91] hover:text-white transition-all cursor-pointer border border-slate-200"
                >
                  <span>تفاصيل دراسة الحالة كاملة</span>
                  <ArrowRight className="w-3 h-3 rotate-180" />
                </button>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
