import React from 'react';
import { Hero } from '../components/home/Hero';
import { SaasAbleFeaturesGrid } from '../components/home/SaasAbleFeaturesGrid';
import { SaasAbleMetrics } from '../components/home/SaasAbleMetrics';
import { PerspectiveProductShowcase } from '../components/home/PerspectiveProductShowcase';
import { SaasAbleIntegrations } from '../components/home/SaasAbleIntegrations';
import { StrategicProof } from '../components/home/StrategicProof';
import { SaasAbleFaq } from '../components/home/SaasAbleFaq';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudy, SolutionId } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenProjectModal: (service?: string) => void;
  onSelectSolution: (id: SolutionId) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProjectModal,
  onSelectSolution,
  onSelectCaseStudy
}) => {
  const featuredStudy = caseStudiesData[0];

  return (
    <div className="space-y-0">
      {/* 1. HERO (Light Section) */}
      <Hero
        onStartProject={() => onOpenProjectModal()}
        onExploreSolutions={() => onNavigate('solutions')}
        onSelectErp={() => {
          const el = document.getElementById('erp');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('solutions');
        }}
      />

      {/* 2. CORE FEATURES 6-GRID (Light Section) */}
      <SaasAbleFeaturesGrid
        onSelectSolution={(id) => onSelectSolution(id)}
        onStartProject={() => onOpenProjectModal()}
        onExploreSolutions={() => onNavigate('solutions')}
      />

      {/* 🌑 DARK BREAK 1: INTERACTIVE ERP COMMAND CENTER */}
      <SaasAbleMetrics 
        onDiscussErp={() => onOpenProjectModal('منظومة ERP المركزية وإدارة العمليات')}
      />

      {/* 🔮 3D ISOMETRIC LAYERED SHOWCASE (Desktop + POS Tablet + Mobile) */}
      <PerspectiveProductShowcase
        onStartProject={() => onOpenProjectModal()}
        onExploreModules={() => {
          const el = document.getElementById('erp');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 4. INTEGRATIONS & APIS HUB (Light Section) */}
      <SaasAbleIntegrations
        onStartProject={(service) => onOpenProjectModal(service)}
      />

      {/* 5. STRATEGIC PROOF & REAL-WORLD RESULTS (Light Section) */}
      <StrategicProof
        featuredStudy={featuredStudy}
        onStartProject={() => onOpenProjectModal('دراسة الجدوى وتملك النظام')}
        onViewAllCases={() => onNavigate('cases')}
        onOpenCaseModal={(study) => onSelectCaseStudy(study)}
      />

      {/* 7. FAQS & UNIFIED FINAL CONVERSION CTA */}
      <SaasAbleFaq
        onStartProject={() => onOpenProjectModal()}
        onTalkToTeam={() => {
          const msg = encodeURIComponent(
            'مرحباً شركة موهبة، أود الاستفسار عن الأنظمة البرمجية ومنظومة الـ ERP وتحديد موعد جلسة استكشافية.'
          );
          window.open(`https://wa.me/201229609292?text=${msg}`, '_blank');
        }}
      />
    </div>
  );
};
