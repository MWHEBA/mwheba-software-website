import React from 'react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../../data/caseStudiesData';
import { CaseStudy } from '../../types';
import { ArrowLeft, TrendingUp } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onStartProject: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
  onStartProject
}) => {
  return (
    <section id="work" className="py-20 md:py-24 bg-white text-start border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pure Whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <div className="text-xs font-semibold text-[#075D91] uppercase tracking-widest mb-2.5">
              سابقة الأعمال والتطبيقات الحية
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
              أنظمة تعمل على أرض الواقع وتدر أرباحاً
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-600 max-w-lg leading-relaxed">
            نماذج حقيقية لمنظومات قمنا بهندستها ونشرها لدى عملائنا في قطاعات التجارة، الخدمات، الدعاية، والتعليم.
          </p>
        </div>

        {/* Case Studies Cards with High-Impact Floating ROI Metrics */}
        <div className="space-y-10 sm:space-y-12">
          {caseStudiesData.map((study, idx) => {
            const title = study.title_ar || study.title;
            const client = study.clientCategory_ar || study.clientCategory;
            const industry = study.industry_ar || study.industry;
            const timeline = study.timeline_ar || study.timeline;
            const challenge = study.challenge_ar || study.challenge;
            const solution = study.solution_ar || study.solution;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:border-[#075D91]/40 hover:shadow-md transition-all duration-200"
              >
                {/* Top Meta Bar */}
                <div className="bg-white px-6 py-3.5 border-b border-slate-200/70 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#075D91] bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      {`دراسة حالة 0${idx + 1}`}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="font-semibold text-slate-800">{industry}</span>
                  </div>
                  <div className="text-slate-500 font-medium text-xs">
                    {`المدة التشغيلية: ${timeline}`}
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Overview & Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 font-medium">
                        {`طبيعة النشاط: ${client}`}
                      </p>
                    </div>

                    {/* Challenge & Solution snippets */}
                    <div className="space-y-4 text-xs sm:text-sm">
                      <div className="p-4 rounded-xl bg-white border border-rose-100 shadow-2xs">
                        <span className="font-bold text-rose-800 block mb-1">
                          التحدي التشغيلي السابق:
                        </span>
                        <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                          {challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-2xs">
                        <span className="font-bold text-emerald-800 block mb-1">
                          الحل المخصص من موهبة:
                        </span>
                        <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                          {solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right High-Impact Floating Metrics */}
                  <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between space-y-6 shadow-2xs">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-[#075D91]" />
                        <span className="text-xs font-bold text-[#075D91] uppercase tracking-wider">
                          النتائج والعائد المحقق بالأرقام:
                        </span>
                      </div>

                      <div className="space-y-3.5">
                        {study.results.map((res, rIdx) => {
                          const label = res.label_ar || res.label;
                          const detail = res.detail_ar || res.detail;

                          return (
                            <div key={rIdx} className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200/80">
                              <div className="flex items-baseline justify-between mb-1">
                                <span className="text-xs font-medium text-slate-700">
                                  {label}
                                </span>
                                <span className="text-xl sm:text-2xl font-extrabold text-[#075D91] tabular-nums">
                                  {res.metric}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onSelectCaseStudy(study)}
                        className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] rounded-lg transition-colors duration-150 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                      >
                        <span>استعراض دراسة الحالة بالكامل</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Discovery CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              هل يواجه نشاطك تحديات تشغيلية مشابهة وترغب في هندسة نظامك؟
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              فريقنا الهندسي جاهز لتحليل دورتكم المستندية وبناء منظومة متخصصة بالكامل.
            </p>
          </div>
          <button
            onClick={onStartProject}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#075D91] hover:bg-[#063B5C] rounded-lg transition-colors duration-150 shrink-0 cursor-pointer shadow-xs inline-flex items-center gap-2"
          >
            <span>طلب دراسة وتحليل النظام</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
