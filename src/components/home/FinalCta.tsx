import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

interface FinalCtaProps {
  onStartProject: () => void;
  onTalkToTeam: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartProject, onTalkToTeam }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const floatPillY = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section ref={sectionRef} id="contact-cta" className="py-20 md:py-28 bg-white relative text-start overflow-hidden">

      {/* Background Dots Accent */}
      <div className="absolute inset-0 saasable-dots-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SAASABLE CALL TO ACTION CARD WITH PARALLAX LIFT */}
        <motion.div
          style={{ y: bannerY }}
          className="relative bg-[#063B5C] rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl border border-[#075D91]/50 text-white"
        >
          {/* FLYING CODE CHIP */}
          <motion.div
            style={{ y: floatPillY }}
            className="hidden lg:flex absolute top-8 right-8 z-10 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#041D2E]/90 border border-[#00ACD4]/30 text-[10px] font-mono text-cyan-300 shadow-md pointer-events-none backdrop-blur-xs"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00ACD4]" />
            <span>CONNECT /ws/telemetry?tenant=mwheba_prod 101 Switching Protocols</span>
          </motion.div>

          <div className="relative z-10 mx-auto text-center space-y-6">

            {/* Top Pill Chip */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-200 uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>جاهز لتطوير دورتك التشغيلية؟</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white leading-snug tracking-tight">
              هل أنت مستعد لنقل إدارة شركتك إلى المستوى الاحترافي؟
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mx-auto max-w-2xl">
              تواصل مع مهندسينا اليوم لحجز جلسة فحص وتشخيص مجانية لدورتك المستندية، ولنبدأ في بناء نظامك المخصص على مقاس أعمالك.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#063B5C] bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>طلب دراسة النظام مجاناً</span>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onTalkToTeam}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب مباشرة</span>
              </button>
            </div>

            {/* Guarantees Strip */}
            <div className="pt-8 mt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>جلسة فحص وتحليل مجانية للدورة التشغيلية</span>
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>دعم فني وضمان استقرار مستمر بعقود SLA</span>
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>ملكية تامة للكود والبيانات 100%</span>
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
