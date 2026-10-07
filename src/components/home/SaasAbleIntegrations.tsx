import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Cpu,
  CreditCard,
  MessageSquare,
  Building2,
  Database,
  Server,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SaasAbleIntegrationsProps {
  onStartProject: (service?: string) => void;
}

export const SaasAbleIntegrations: React.FC<SaasAbleIntegrationsProps> = ({ onStartProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const cardRiseY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const floatingPillLeftY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const floatingPillRightY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const integrations = [
    { label: 'Paymob Gateway', icon: <CreditCard className="w-5 h-5 text-[#075D91]" />, tag: 'بوابات دفع' },
    { label: 'فوري Fawry Pay', icon: <CreditCard className="w-5 h-5 text-[#075D91]" />, tag: 'مدفوعات فورية' },
    { label: 'WhatsApp Cloud API', icon: <MessageSquare className="w-5 h-5 text-emerald-600" />, tag: 'أتمتة وإشعارات' },
    { label: 'Aramex & Bosta', icon: <Building2 className="w-5 h-5 text-[#00ACD4]" />, tag: 'بوالص شحن وتتبع' },
    { label: 'PostgreSQL ACID', icon: <Database className="w-5 h-5 text-[#075D91]" />, tag: 'قواعد بيانات مركزية' },
    { label: 'قارئات الباركود وطابعات POS', icon: <Server className="w-5 h-5 text-[#075D91]" />, tag: 'هاردوير الفروع' },
    { label: 'مزامنة ماكينات البصمة ZKTeco', icon: <Cpu className="w-5 h-5 text-[#075D91]" />, tag: 'حضور وانصراف' },
    { label: 'سحابة النسخ الاحتياطي Storage', icon: <ShieldCheck className="w-5 h-5 text-[#075D91]" />, tag: 'حماية وتخزين سحابي' }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white border-b border-slate-200 text-start relative overflow-hidden">

      {/* Subtle Dot Matrix Background */}
      <div className="absolute inset-0 saasable-dots-bg-dense opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SAASABLE INTEGRATION2 CARD CONTAINER WITH PARALLAX LIFT */}
        <motion.div
          style={{ y: cardRiseY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '120px' }}
          transition={{ duration: 0.55 }}
          className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 text-center shadow-xs relative"
        >
          {/* Header */}
          <div className="mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>منظومة متصلة ومترابطة</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
              ربط مباشر وتكامل فوري مع كافة الخدمات التي تحتاجها
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mx-auto max-w-2xl">
              نظامك لن يكون جزيرة منعزلة، بل مربوطاً لحظياً بالبنوك، شركات الشحن، قنوات الواتساب، وأجهزة الفروع.
            </p>
          </div>

          {/* INTEGRATION TAGS CHIP CLOUD WITH STAGGERED MOTION */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mx-auto mb-10">
            {integrations.map((item, index) => {
              const isEven = index % 2 === 0;
              const floatingMotion = isEven ? floatingPillLeftY : floatingPillRightY;

              return (
                <motion.div
                  key={index}
                  style={{ y: floatingMotion }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#075D91]/50 hover:shadow-sm hover:scale-105 transition-all cursor-pointer"
                  onClick={() => onStartProject(`طلب ربط تكامل: ${item.label}`)}
                >
                  <div className="p-1.5 rounded-lg bg-[#F5F9FB] border border-slate-100">
                    {item.icon}
                  </div>
                  <div className="text-start">
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      {item.label}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400">
                      {item.tag}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => onStartProject('طلب ربط وتكامل برمجيات مخصص')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#075D91] hover:bg-[#063B5C] rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>طلب ربط مخصص لنظام شركتك</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
