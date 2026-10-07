import React from 'react';
import { Solution } from '../../types';
import { X, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
  onStartProject: (serviceName?: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onStartProject
}) => {
  if (!solution) return null;

  const title = solution.name_ar || solution.name;
  const tagline = solution.tagline_ar || solution.tagline;
  const extendedDesc = solution.extendedDescription_ar || solution.extendedDescription;
  const capabilities = solution.keyCapabilities_ar || solution.keyCapabilities;
  const outcomes = solution.businessOutcomes_ar || solution.businessOutcomes;
  const idealFor = solution.idealFor_ar || solution.idealFor;

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
              {`المواصفات الفنية للمنظومة · ${solution.number}`}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close solution details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">

          <div className="bg-[#F5F9FB] rounded-xl border border-slate-200 p-4">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              {tagline}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {extendedDesc}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              المزايا والقدرات التشغيلية للمنظومة
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-xs">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Outcomes */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              العوائد الاقتصادية الملموسة لشركتكم
            </h4>
            <div className="space-y-2">
              {outcomes.map((out, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#075D91] shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium text-xs leading-relaxed">
                    {out}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For Target Profile */}
          <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200 text-xs">
            <span className="font-bold text-slate-800 block mb-1">
              القطاعات والأنشطة الأنسب لهذه المنظومة:
            </span>
            <p className="text-slate-600 leading-relaxed">
              {idealFor}
            </p>
          </div>

        </div>

        {/* Footer Action Bar */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            شروط واضحة ومحددة لملكية الكود المصدري وحقوق الملكية الفكرية
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
              <span>طلب استشارة لهذا النظام</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
