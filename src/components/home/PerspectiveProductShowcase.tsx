import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Isometric3DShowcase } from '../common/Isometric3DShowcase';
import {
  Layers,
  Store,
  Smartphone,
  Laptop,
  BookOpen,
  GraduationCap,
  Building2
} from 'lucide-react';

interface PerspectiveProductShowcaseProps {
  onStartProject: () => void;
  onExploreModules: () => void;
}

type SectorType = 'retail' | 'printing' | 'education' | 'contracting';

export const PerspectiveProductShowcase: React.FC<PerspectiveProductShowcaseProps> = () => {
  const [activeSector, setActiveSector] = useState<SectorType>('retail');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const sectors = [
    { id: 'retail', label: 'التجارة والتوزيع (POS & ERP)', icon: <Store className="w-3.5 h-3.5" /> },
    { id: 'printing', label: 'المطابع وتفصيل الورق', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'education', label: 'المراكز والأكاديميات', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { id: 'contracting', label: 'المقاولات والتوريدات', icon: <Building2 className="w-3.5 h-3.5" /> }
  ];

  const deviceFeatures = [
    {
      icon: <Laptop className="w-4 h-4 text-[#075D91]" />,
      title: 'نسخة الويب والكمبيوتر للشركات',
      desc: 'إدارة مركزية كاملة للفروع، المستودعات، القيود المحاسبية المزدوجة، وصلاحيات الإدارة.'
    },
    {
      icon: <Store className="w-4 h-4 text-[#075D91]" />,
      title: 'واجهة الكاشير ونقاط البيع السريعة',
      desc: 'استجابة فائقة في أجزاء من الثانية بالباركود مع تقفيل الخزائن ومطابقة العهد فورياً.'
    },
    {
      icon: <Smartphone className="w-4 h-4 text-[#075D91]" />,
      title: 'تطبيق الإدارة والمتابعة الحية',
      desc: 'لوحة أرباح لحظية على موبايل المدير التنفيذي مع اعتماد أذون التحويل والتنبيهات الحية.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 text-start relative overflow-hidden"
    >
      {/* Background Dots Accent */}
      <div className="absolute inset-0 saasable-dots-bg-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="mx-auto text-center mb-6 sm:mb-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '120px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-slate-200 mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#075D91]" />
              <span>منظومة موحدة متكاملة الأبعاد</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              تجربة تشغيل ثلاثية الأبعاد تربط كافة أجهزة شركتك
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed mx-auto max-w-2xl">
              من شاشات الخوادم المركزية إلى نقاط البيع في المعارض وحتى موبايل الإدارة، بنية بيانات واحدة لا تنفصل.
            </p>
          </motion.div>

          {/* Interactive Sector Switcher Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {sectors.map((s) => {
              const isActive = activeSector === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSector(s.id as SectorType)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#075D91] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-300' : 'text-slate-400'}>{s.icon}</span>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D ISOMETRIC LAYERED PERSPECTIVE SHOWCASE */}
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '120px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Isometric3DShowcase sector={activeSector} />
        </motion.div>

        {/* 3-GRID UNDER-SHOWCASE FEATURE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {deviceFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '120px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#075D91]/40 transition-colors flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#075D91] shrink-0">
                {feat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
