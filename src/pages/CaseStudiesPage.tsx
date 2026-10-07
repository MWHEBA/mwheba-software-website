import React from 'react';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { FinalCta } from '../components/home/FinalCta';
import { CaseStudy } from '../types';
import { Award } from 'lucide-react';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onStartProject: (service?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onSelectCaseStudy,
  onStartProject
}) => {
  return (
    <div className="pt-20">
      {/* رأس صفحة سابقة الأعمال */}
      <div className="bg-[#063B5C] text-white py-16 sm:py-20 border-b border-[#075D91] text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00ACD4] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/15 mb-4">
              <Award className="w-4 h-4" />
              <span>دراسات الحالة وسابقة الأعمال</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              قصص نجاح حقيقية ونتائج موثقة بالأرقام
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              استعرض كيف ساعدت منظومات موهبة البرمجية المؤسسات والشركات التجارية على ضبط دوراتها المستندية، إنهاء عجز المخازن، ومضاعفة كفاءة التشغيل.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xl font-bold text-[#00ACD4] mb-1">100%</div>
                <span className="text-slate-300">مطابقة للمخازن والحسابات</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xl font-bold text-emerald-400 mb-1">98.5%</div>
                <span className="text-slate-300">التزام بشروط الـ SLA</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xl font-bold text-cyan-300 mb-1">صفر</div>
                <span className="text-slate-300">انقطاع في المعاملات اليومية</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم دراسات الحالة */}
      <CaseStudiesSection
        onSelectCaseStudy={onSelectCaseStudy}
        onStartProject={() => onStartProject('Case Study Inquiry')}
      />

      {/* الدعوة لاتخاذ إجراء */}
      <FinalCta
        onStartProject={() => onStartProject()}
        onTalkToTeam={() => {
          const msg = encodeURIComponent('مرحباً شركة موهبة، أود استعراض سابقة أعمال موهبة وحلولها المشابهة لنشاط شركتنا.');
          window.open(`https://wa.me/201229609292?text=${msg}`, '_blank');
        }}
      />
    </div>
  );
};
