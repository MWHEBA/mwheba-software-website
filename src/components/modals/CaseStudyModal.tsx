import React from 'react';
import { CaseStudy } from '../../types';
import { X, ArrowLeft } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onStartProject: (title?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onStartProject
}) => {
  if (!study) return null;

  const title = study.title_ar || study.title;
  const client = study.clientCategory_ar || study.clientCategory;
  const industry = study.industry_ar || study.industry;
  const timeline = study.timeline_ar || study.timeline;
  const challenge = study.challenge_ar || study.challenge;
  const approach = study.approach_ar || study.approach;
  const solution = study.solution_ar || study.solution;
  const archSummary = study.architectureSummary_ar || study.architectureSummary;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 text-start">
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="bg-[#063B5C] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[11px] text-[#00ACD4] uppercase tracking-wider font-semibold">
              {`توثيق دراسة الحالة والنتائج · ${industry}`}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">

          {/* Client Profile */}
          <div className="bg-[#F5F9FB] rounded-xl border border-slate-200 p-4">
            <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
              طبيعة النشاط والبيئة التشغيلية:
            </span>
            <p className="font-bold text-slate-900 text-sm">
              {client}
            </p>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              المدى الزمني للتنفيذ والتسليم:{' '}
              <strong className="text-slate-800">{timeline}</strong>
            </p>
          </div>

          {/* Section 1: The Challenge */}
          <div>
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-2">
              1. التحديات التشغيلية والهدر المالي السابق:
            </span>
            <div className="bg-rose-50/40 border border-rose-100 p-4 rounded-xl text-slate-700 leading-relaxed text-xs sm:text-sm">
              {challenge}
            </div>
          </div>

          {/* Section 2: The Approach */}
          <div>
            <span className="text-xs font-bold text-[#075D91] uppercase tracking-wider block mb-2">
              2. منهجية موهبة في المعايشة والتحليل:
            </span>
            <div className="bg-[#F5F9FB] border border-slate-200 p-4 rounded-xl text-slate-700 leading-relaxed text-xs sm:text-sm">
              {approach}
            </div>
          </div>

          {/* Section 3: The Solution */}
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
              3. المنظومة المنفذة على أرض الواقع:
            </span>
            <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-xl text-slate-700 leading-relaxed text-xs sm:text-sm">
              {solution}
            </div>
          </div>

          {/* Documented Results Matrix */}
          <div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
              النتائج المحققة بالأرقام والنسب المئوية:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {study.results.map((res, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {res.label_ar || res.label}
                  </span>
                  <div className="text-xl font-bold text-[#075D91] mb-1">
                    {res.metric}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {res.detail_ar || res.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Guarantee Note */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <span className="font-bold text-slate-800 block mb-1">
              مواصفات الأمان والبنية السحابية:
            </span>
            <p className="text-slate-600 leading-relaxed">
              {archSummary}
            </p>
          </div>

        </div>

        {/* Footer Action Bar */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            دراسة حالة موثقة ذات عائد استثماري مثبت
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            >
              إغلاق
            </button>
            <button
              onClick={() => {
                onClose();
                onStartProject(title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>تنفيذ نظام مماثل لنشاطك</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
