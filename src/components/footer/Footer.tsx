import React from 'react';
import { Logo } from '../common/Logo';
import { SolutionId } from '../../types';
import { MapPin, Mail, Phone, MessageSquare, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectSolution: (id: SolutionId) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectSolution,
  onOpenLegal,
  onStartProject
}) => {
  const handlePageClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* COLUMN 1: COMPANY IDENTITY & HQ */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => handlePageClick('home')}
              className="text-start focus:outline-none cursor-pointer"
            >
              <Logo variant="wide" size="md" />
            </button>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              الذراع التقني المتخصص في هندسة البرمجيات المخصصة ومنظومات ERP لإدارة المؤسسات — إحدى شركات منظومة MWHEBA.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#075D91] shrink-0" />
                <span>الإسكندرية، جمهورية مصر العربية</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#075D91] shrink-0" />
                <a href="tel:+201229609292" className="hover:text-[#075D91] transition-colors font-medium">
                  +20 122 960 9292 (01229609292)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a
                  href="https://wa.me/201229609292?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AD%D9%84%D9%88%D9%84%20%D9%85%D9%88%D9%87%D8%A8%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 text-emerald-600 transition-colors font-semibold"
                >
                  محادثة واتساب مباشرة (24/7)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#075D91] shrink-0" />
                <a href="mailto:solutions@mwheba.com" className="hover:text-[#075D91] transition-colors">
                  solutions@mwheba.com
                </a>
              </div>
            </div>

            {/* LIVE SYSTEM HEALTH BADGE */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F9FB] border border-slate-200 text-xs text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800">حالة السيرفرات والـ APIs: تعمل بكفاءة 100%</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: SOLUTIONS & SYSTEMS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              الأنظمة والحلول
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onSelectSolution('sales-pos')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer text-start"
                >
                  منظومة الـ ERP وإدارة العمليات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('bespoke-portals')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer text-start"
                >
                  البرمجيات المخصصة للشركات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('automation-integrations')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer text-start"
                >
                  الربط البرمجي والأتمتة والـ APIs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('bespoke-portals')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer text-start"
                >
                  بوابات العملاء ومنصات B2B
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: NAVIGATION PAGES */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              الصفحات
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handlePageClick('home')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('solutions')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer"
                >
                  الحلول والأنظمة
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('cases')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer"
                >
                  سابقة الأعمال
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('about')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer"
                >
                  عن موهبة ومنهجيتنا
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-[#075D91] transition-colors cursor-pointer"
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONSULTATION REQUEST */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              طلب دراسة النظام
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              فريق الاستشارات البرمجية متاح لفحص دورتكم التشغيلية وتقديم مقترح نظام متكامل مجاناً.
            </p>
            <button
              onClick={onStartProject}
              className="w-full py-3 px-4 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] rounded-lg transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>طلب دراسة النظام</span>
              <ArrowUpRight className="w-3.5 h-3.5 -scale-x-100" />
            </button>
          </div>

        </div>

        {/* BOTTOM POLICIES STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            جميع الحقوق محفوظة لشركة موهبة للحلول البرمجية (MWHEBA) © 2026
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              سياسة الخصوصية وأمن البيانات
            </button>
            <button 
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              شروط التراخيص والخدمة
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
