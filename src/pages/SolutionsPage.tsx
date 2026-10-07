import React from 'react';
import { ErpFeature } from '../components/home/ErpFeature';
import { WhatWeBuild } from '../components/home/WhatWeBuild';
import { IntegrationsHub } from '../components/home/IntegrationsHub';
import { StrategicProof } from '../components/home/StrategicProof';
import { FinalCta } from '../components/home/FinalCta';
import { caseStudiesData } from '../data/caseStudiesData';
import { SolutionId, CaseStudy } from '../types';
import { Layers, ShieldCheck, Database, Cpu } from 'lucide-react';

interface SolutionsPageProps {
  onSelectSolution: (id: SolutionId) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onStartProject: (service?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onSelectSolution,
  onSelectCaseStudy,
  onStartProject
}) => {
  return (
    <div className="pt-20">
      {/* رأس صفحة الحلول والأنظمة */}
      <div className="bg-[#063B5C] text-white py-16 sm:py-20 border-b border-[#075D91] text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00ACD4] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/15 mb-4">
              <Layers className="w-4 h-4" />
              <span>الحلول والمنظومات البرمجية المؤسسية</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              منظومة متكاملة تدير أعمالك بدقة وأمان
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              من منظومة الـ ERP المتطورة إلى البرمجيات المخصصة والربط مع بوابات الدفع وشبكات الفروع — نضع كل عملياتك في مكان واحد.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Database className="w-4 h-4 text-[#00ACD4]" />
                <span>قاعدة بيانات علائقية موحدة</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Cpu className="w-4 h-4 text-[#00ACD4]" />
                <span>ربط بنكي ولوجستي معتمد</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>صلاحيات وسجلات تدقيق RBAC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. منظومة الـ ERP وشاشة التحكم التفاعلية */}
      <ErpFeature
        onDiscussErp={() => onStartProject('ERP / Business System')}
      />

      {/* 2. مصفوفة القطاعات والحلول البرمجية */}
      <WhatWeBuild
        onSelectSolution={onSelectSolution}
        onSelectCaseStudy={onSelectCaseStudy}
        onStartProject={onStartProject}
      />

      {/* 3. شبكة التكامل والربط المعتمد */}
      <IntegrationsHub
        onStartProject={onStartProject}
      />

      {/* 4. المقارنة الاستراتيجية وسابقة الأعمال */}
      <StrategicProof
        featuredStudy={caseStudiesData[0]}
        onStartProject={() => onStartProject('System Discovery')}
        onViewAllCases={() => onSelectCaseStudy(caseStudiesData[0])}
        onOpenCaseModal={(study) => onSelectCaseStudy(study)}
      />

      {/* 5. الدعوة لاتخاذ إجراء */}
      <FinalCta
        onStartProject={() => onStartProject()}
        onTalkToTeam={() => {
          const msg = encodeURIComponent('مرحباً شركة موهبة، أود استشارة فريق موهبة الهندسي بخصوص الحلول والأنظمة البرمجية المخصصة.');
          window.open(`https://wa.me/201229609292?text=${msg}`, '_blank');
        }}
      />
    </div>
  );
};
