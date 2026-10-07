import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../common/Logo';
import { solutionsData } from '../../data/solutionsData';
import { SolutionId } from '../../types';
import { ChevronDown, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenProjectModal: (initialService?: string) => void;
  onSelectSolution: (id: SolutionId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenProjectModal,
  onSelectSolution
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: string) => {
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSolutionClick = (solutionId: SolutionId) => {
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
    onSelectSolution(solutionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      <motion.div 
        animate={{
          width: isScrolled ? '100%' : 'min(1280px, calc(100% - 2rem))',
          borderRadius: isScrolled ? 0 : 9999,
          marginTop: isScrolled ? 0 : 14,
          paddingTop: isScrolled ? 8 : 10,
          paddingBottom: isScrolled ? 8 : 10,
          borderBottomWidth: 1,
          borderTopWidth: isScrolled ? 0 : 1,
          borderLeftWidth: isScrolled ? 0 : 1,
          borderRightWidth: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="pointer-events-auto bg-white/95 backdrop-blur-md border-solid border-slate-200/90 shadow-xs px-4 sm:px-6 lg:px-8 w-full overflow-visible"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-10">
          
          {/* ZONE 1: BRAND LOGO */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075D91] rounded-full group cursor-pointer"
            aria-label="موهبة للحلول البرمجية - العودة للرئيسية"
          >
            <Logo variant="wide" size="md" />
          </button>

          {/* ZONE 2: CLEAN NAVIGATION LINKS (NO NESTED BORDERS) */}
          <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold">
            
            {/* 1. الرئيسية */}
            <button 
              onClick={() => handleLinkClick('home')} 
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                currentPage === 'home' 
                  ? 'bg-[#F0F7FB] text-[#075D91] font-bold' 
                  : 'text-slate-700 hover:text-[#075D91] hover:bg-slate-50'
              }`}
            >
              الرئيسية
            </button>

            {/* 2. قائمة الحلول والأنظمة */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('solutions')}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  currentPage === 'solutions' 
                    ? 'bg-[#F0F7FB] text-[#075D91] font-bold' 
                    : 'text-slate-700 hover:text-[#075D91] hover:bg-slate-50'
                }`}
                aria-expanded={isSolutionsOpen}
              >
                <span>الحلول والأنظمة</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${isSolutionsOpen ? 'rotate-180 text-[#075D91]' : ''}`} />
              </button>

              {/* MEGA MENU DROPDOWN */}
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] max-w-[90vw] pt-3 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-2 text-start max-h-[480px] overflow-y-auto">
                      {solutionsData.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSolutionClick(item.id)}
                          className="flex flex-col p-2.5 rounded-xl hover:bg-[#F5F9FB] border border-transparent hover:border-slate-200 transition-all group cursor-pointer text-start"
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[10px] font-bold text-[#075D91] font-mono bg-[#F5F9FB] px-1.5 py-0.5 rounded">
                              {item.number}
                            </span>
                            <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#075D91] transition-all rotate-180" />
                          </div>
                          <span className="text-xs font-bold text-slate-900 group-hover:text-[#075D91] transition-colors truncate">
                            {item.name_ar || item.name}
                          </span>
                          <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 leading-relaxed">
                            {item.tagline_ar || item.tagline}
                          </span>
                        </button>
                      ))}
                      
                      <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between px-1">
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>أنظمة مخصصة وقواعد بيانات معزولة بالكامل</span>
                        </div>
                        <button 
                          onClick={() => handleLinkClick('solutions')}
                          className="text-xs font-bold text-[#075D91] hover:text-[#063B5C] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>استعراض كافة الأنظمة</span>
                          <ArrowRight className="w-3 h-3 rotate-180" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. سابقة الأعمال */}
            <button 
              onClick={() => handleLinkClick('cases')} 
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                currentPage === 'cases' 
                  ? 'bg-[#F0F7FB] text-[#075D91] font-bold' 
                  : 'text-slate-700 hover:text-[#075D91] hover:bg-slate-50'
              }`}
            >
              سابقة الأعمال
            </button>

            {/* 4. عن موهبة ومنهجيتنا */}
            <button 
              onClick={() => handleLinkClick('about')} 
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                currentPage === 'about' 
                  ? 'bg-[#F0F7FB] text-[#075D91] font-bold' 
                  : 'text-slate-700 hover:text-[#075D91] hover:bg-slate-50'
              }`}
            >
              عن موهبة ومنهجيتنا
            </button>

            {/* 5. تواصل معنا */}
            <button 
              onClick={() => handleLinkClick('contact')} 
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                currentPage === 'contact' 
                  ? 'bg-[#F0F7FB] text-[#075D91] font-bold' 
                  : 'text-slate-700 hover:text-[#075D91] hover:bg-slate-50'
              }`}
            >
              تواصل معنا
            </button>
          </nav>

          {/* ZONE 3: PRIMARY ACTION BUTTON */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onOpenProjectModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] active:bg-[#041D2E] rounded-full transition-all shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <span>طلب دراسة النظام</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#075D91] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-auto md:hidden mt-2 bg-white rounded-3xl border border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-xl overflow-hidden text-start w-[calc(100%-2rem)] max-w-lg mx-auto"
          >
            <div className="space-y-1">
              <button
                onClick={() => handleLinkClick('home')}
                className={`w-full text-start px-3.5 py-2 text-xs font-bold rounded-xl ${
                  currentPage === 'home' ? 'bg-[#F5F9FB] text-[#075D91]' : 'text-slate-900 hover:bg-slate-50'
                }`}
              >
                الرئيسية
              </button>

              <button
                onClick={() => handleLinkClick('solutions')}
                className={`w-full text-start px-3.5 py-2 text-xs font-bold rounded-lg ${
                  currentPage === 'solutions' ? 'bg-[#F5F9FB] text-[#075D91]' : 'text-slate-900 hover:bg-slate-50'
                }`}
              >
                الحلول والأنظمة
              </button>
              
              <div className="ps-4 space-y-1 border-s-2 border-slate-100 ms-3">
                {solutionsData.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSolutionClick(s.id)}
                    className="w-full text-start py-1.5 text-xs text-slate-600 hover:text-[#075D91]"
                  >
                    {s.name_ar || s.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleLinkClick('cases')}
                className={`w-full text-start px-3.5 py-2 text-xs font-bold rounded-xl ${
                  currentPage === 'cases' ? 'bg-[#F5F9FB] text-[#075D91]' : 'text-slate-900 hover:bg-slate-50'
                }`}
              >
                سابقة الأعمال
              </button>

              <button
                onClick={() => handleLinkClick('about')}
                className={`w-full text-start px-3.5 py-2 text-xs font-bold rounded-xl ${
                  currentPage === 'about' ? 'bg-[#F5F9FB] text-[#075D91]' : 'text-slate-900 hover:bg-slate-50'
                }`}
              >
                عن موهبة ومنهجيتنا
              </button>

              <button
                onClick={() => handleLinkClick('contact')}
                className={`w-full text-start px-3.5 py-2 text-xs font-bold rounded-xl ${
                  currentPage === 'contact' ? 'bg-[#F5F9FB] text-[#075D91]' : 'text-slate-900 hover:bg-slate-50'
                }`}
              >
                تواصل معنا
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] rounded-full transition-colors"
              >
                طلب دراسة النظام
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
