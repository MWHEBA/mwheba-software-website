import React, { useState, useEffect } from 'react';
import { Header } from './components/navigation/Header';
import { Footer } from './components/footer/Footer';
import { TechnicalHud } from './components/common/TechnicalHud';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';

// Modals
import { ProjectModal } from './components/modals/ProjectModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { SolutionModal } from './components/modals/SolutionModal';
import { LegalModal } from './components/modals/LegalModal';

import { solutionsData } from './data/solutionsData';
import { caseStudiesData } from './data/caseStudiesData';
import { Solution, SolutionId, CaseStudy } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentSolutionId, setCurrentSolutionId] = useState<SolutionId>('sales-pos');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [initialProjectService, setInitialProjectService] = useState<string | undefined>();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync state from URL Hash on mount and on hashchange/popstate
  const applyHashRoute = () => {
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
    if (!rawHash || rawHash === 'home' || rawHash === 'hero') {
      setCurrentPage('home');
    } else if (rawHash.startsWith('solutions/')) {
      const solId = rawHash.replace('solutions/', '') as SolutionId;
      if (solutionsData.some(s => s.id === solId)) {
        setCurrentSolutionId(solId);
        setCurrentPage('solution-detail');
      } else {
        setCurrentPage('solutions');
      }
    } else if (rawHash === 'solutions' || rawHash === 'erp' || rawHash === 'integrations') {
      setCurrentPage('solutions');
    } else if (rawHash.startsWith('cases/')) {
      const caseId = rawHash.replace('cases/', '');
      const found = caseStudiesData.find(c => c.id === caseId);
      if (found) {
        setSelectedCaseStudy(found);
      }
      setCurrentPage('cases');
    } else if (rawHash === 'cases' || rawHash === 'work') {
      setCurrentPage('cases');
    } else if (rawHash === 'about' || rawHash === 'process') {
      setCurrentPage('about');
    } else if (rawHash === 'contact') {
      setCurrentPage('contact');
    }
  };

  useEffect(() => {
    applyHashRoute();
    window.addEventListener('hashchange', applyHashRoute);
    window.addEventListener('popstate', applyHashRoute);
    return () => {
      window.removeEventListener('hashchange', applyHashRoute);
      window.removeEventListener('popstate', applyHashRoute);
    };
  }, []);

  const handleNavigate = (page: string) => {
    let targetHash = page;
    if (page === 'hero') targetHash = 'home';
    else if (page === 'erp' || page === 'integrations') targetHash = 'solutions';
    else if (page === 'work') targetHash = 'cases';
    else if (page === 'process') targetHash = 'about';

    window.location.hash = targetHash;
    setCurrentPage(targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectModal = (serviceName?: string) => {
    setInitialProjectService(serviceName);
    setIsProjectModalOpen(true);
  };

  const handleSelectSolution = (id: SolutionId) => {
    window.location.hash = `solutions/${id}`;
    setCurrentSolutionId(id);
    setCurrentPage('solution-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCaseStudy = (study: CaseStudy) => {
    window.location.hash = `cases/${study.id}`;
    setSelectedCaseStudy(study);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1E29] flex flex-col font-sans selection:bg-[#00ACD4]/20 selection:text-[#075D91]">
      {/* مؤشر شريط التمرير العلوي */}
      <ScrollProgressBar />

      {/* الهيدر وشريط التنقل */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenProjectModal={() => handleOpenProjectModal()}
        onSelectSolution={handleSelectSolution}
      />

      {/* عرض الصفحة الحالية */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProjectModal={handleOpenProjectModal}
            onSelectSolution={handleSelectSolution}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onSelectSolution={handleSelectSolution}
            onSelectCaseStudy={handleSelectCaseStudy}
            onStartProject={(service) => handleOpenProjectModal(service)}
          />
        )}

        {currentPage === 'solution-detail' && (
          <SolutionDetailPage
            solutionId={currentSolutionId}
            onSelectSolution={(id) => {
              setCurrentSolutionId(id);
              window.location.hash = `solutions/${id}`;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartProject={(service) => handleOpenProjectModal(service)}
            onSelectCaseStudy={handleSelectCaseStudy}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'cases' && (
          <CaseStudiesPage
            onSelectCaseStudy={handleSelectCaseStudy}
            onStartProject={(service) => handleOpenProjectModal(service)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onStartProject={(service) => handleOpenProjectModal(service)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* الفوتر */}
      <Footer
        onNavigate={handleNavigate}
        onSelectSolution={handleSelectSolution}
        onOpenLegal={(type) => setLegalType(type)}
        onStartProject={() => handleOpenProjectModal()}
      />

      {/* النوافذ المنبثقة */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        initialService={initialProjectService}
      />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={(title) => handleOpenProjectModal(title)}
      />

      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onStartProject={(name) => handleOpenProjectModal(name)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      {/* زر الاستشارة المباشرة */}
      <TechnicalHud onOpenConsultation={() => handleOpenProjectModal()} />
    </div>
  );
}
