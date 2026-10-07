import React from 'react';
import { MessageSquare } from 'lucide-react';

interface TechnicalHudProps {
  onOpenConsultation?: () => void;
}

export const TechnicalHud: React.FC<TechnicalHudProps> = ({ onOpenConsultation }) => {
  return (
    <div className="hidden sm:flex fixed bottom-5 end-5 z-40 items-center gap-2.5 px-4 py-2 bg-[#063B5C] text-white rounded-full border border-slate-700 shadow-md text-xs select-none">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-slate-200 font-semibold">
          الاستشارات الهندسية:
        </span>
        <span className="text-emerald-400 font-bold">
          متاح
        </span>
      </div>
      
      {onOpenConsultation && (
        <>
          <span className="text-slate-500">|</span>
          <button
            onClick={onOpenConsultation}
            className="text-[#00ACD4] hover:text-white font-bold transition-colors cursor-pointer flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>طلب دراسة</span>
          </button>
        </>
      )}
    </div>
  );
};
