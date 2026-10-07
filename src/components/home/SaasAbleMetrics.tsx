import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { erpModulesData } from '../../data/erpModulesData';
import {
  ArrowRight,
  Database,
  CheckCircle2,
  Activity,
  Play,
  Check,
  TrendingUp,
  Warehouse,
  CreditCard,
  Briefcase,
  GraduationCap,
  BookOpen,
  Cpu,
  Clock,
  Radio,
  ShieldCheck
} from 'lucide-react';

interface SaasAbleMetricsProps {
  onDiscussErp?: () => void;
}

export const SaasAbleMetrics: React.FC<SaasAbleMetricsProps> = ({ onDiscussErp }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const floatingFlyLeft = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const floatingFlyRight = useTransform(scrollYProgress, [0, 1], [30, -50]);

  const [selectedModuleId, setSelectedModuleId] = useState<string>('commercial');
  const [isSimulatingEvent, setIsSimulatingEvent] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [eventSuccessMsg, setEventSuccessMsg] = useState<string | null>(null);
  const [simulatedLatency, setSimulatedLatency] = useState<number>(14);

  const currentModule = erpModulesData.find(m => m.id === selectedModuleId) || erpModulesData[0];

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'commercial': return <TrendingUp className="w-4 h-4" />;
      case 'services': return <Briefcase className="w-4 h-4" />;
      case 'printing': return <BookOpen className="w-4 h-4" />;
      case 'inventory': return <Warehouse className="w-4 h-4" />;
      case 'accounting': return <CreditCard className="w-4 h-4" />;
      case 'education': return <GraduationCap className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  const allModulesList = erpModulesData.map(m => ({
    id: m.id,
    label: m.name_ar || m.name
  }));

  const handleSimulateEvent = () => {
    if (isSimulatingEvent) return;
    setIsSimulatingEvent(true);
    setEventSuccessMsg(null);
    setActiveStepIndex(0);

    const stepInterval = 280;

    setTimeout(() => setActiveStepIndex(1), stepInterval * 1);
    setTimeout(() => setActiveStepIndex(2), stepInterval * 2);
    setTimeout(() => setActiveStepIndex(3), stepInterval * 3);

    setTimeout(() => {
      setIsSimulatingEvent(false);
      setActiveStepIndex(null);
      setSimulatedLatency(Math.floor(Math.random() * 8) + 11);

      const successMessages: Record<string, string> = {
        commercial: 'تم حجز المخزون وإصدار إيصال المبيعات وترحيل القيد المحاسبي للخزينة بنجاح',
        services: 'تم فتح أمر الزيارة وجدولة المهندس واعتماد التوقيع الرقمي وإصدار الفاتورة الدورية',
        printing: 'تم احتساب تفصيل الورق والهدر وحجز خامات الطباعة وتحديث تكلفة أمر الشغل لحظياً',
        inventory: 'تم فحص استلام الشحنة وتحديث متوسط التكلفة FIFO ومزامنة الأرصدة عبر كافة الفروع',
        accounting: 'تم توليد القيد المحاسبي المزدوج وتوثيق المعاملة بسجل التدقيق الرقابي المشفر',
        education: 'تم تسجيل تحصيل القسط وإرسال إشعار الواتساب الفوري واحتساب نسبة المحاضر آلياً'
      };

      const msg = successMessages[selectedModuleId] || successMessages['commercial'];
      setEventSuccessMsg(msg);
      setTimeout(() => setEventSuccessMsg(null), 6000);
    }, stepInterval * 4 + 100);
  };

  return (
    <section
      ref={sectionRef}
      id="erp"
      className="py-20 md:py-28 bg-[#061A28] border-y border-[#075D91]/30 text-start relative overflow-hidden text-white"
    >

      {/* 2. FLYING BUSINESS TRUST CHIPS (Parallax Floating) */}
      <motion.div
        style={{ y: floatingFlyLeft, x: 10 }}
        className="hidden xl:flex absolute top-16 right-8 z-10 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#042438]/90 border border-[#00ACD4]/30 text-xs text-cyan-200 shadow-lg pointer-events-none backdrop-blur-xs"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-[#00ACD4]" />
        <span>مزامنة قيود اليومية: متوازنة ومطابقة 100%</span>
      </motion.div>

      <motion.div
        style={{ y: floatingFlyRight, x: -10 }}
        className="hidden xl:flex absolute bottom-16 left-8 z-10 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#042438]/90 border border-emerald-500/30 text-xs text-emerald-200 shadow-lg pointer-events-none backdrop-blur-xs"
      >
        <Activity className="w-3.5 h-3.5 text-emerald-400" />
        <span>حالة الفروع والأنظمة: تشغيل مستقر 99.9%</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00ACD4] uppercase tracking-wider bg-[#0B2538] px-3.5 py-1.5 rounded-full border border-[#00ACD4]/30 mb-3.5 shadow-2xs">
              <Database className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>منظومة إدارة الأعمال المركزية (ERP)</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white leading-snug tracking-tight">
              لوحة تحكم تفاعلية تربط المبيعات والمخازن والقيود المحاسبية
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              كل حركة بيع أو استلام بضاعة تنعكس فوراً في شجرة الحسابات وتقارير الأرباح دون أي تدخل يدوي.
            </p>
          </motion.div>
        </div>

        {/* ENTERPRISE ERP COMMAND CENTER INTERFACE (Dark High-Tech Design) */}
        <motion.div
          style={{ y: cardParallaxY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#082030]/90 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Top Window Title Bar */}
          <div className="bg-[#041D2E] px-4 sm:px-6 py-3.5 flex items-center justify-between text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="h-4 w-px bg-white/20 mx-1" />
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#00ACD4]" />
                <span className="text-xs tracking-tight font-medium text-slate-200">
                  منظومة موهبة المركزية لإدارة الأعمال — Central Business System
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-300">
                <Cpu className="w-3 h-3 text-[#00ACD4]" />
                <span>استقرار كامل · عزل تام للبيانات</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-500/30 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>متزامن ومستقر</span>
              </div>
            </div>
          </div>

          {/* Subsystem Tabs Bar & Live Simulation Trigger */}
          <div className="bg-[#061A28] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
              <span className="text-xs font-bold text-slate-400 uppercase shrink-0 mr-1">
                أقسام المنظومة:
              </span>
              {allModulesList.map((mod) => {
                const isSelected = selectedModuleId === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => {
                      setSelectedModuleId(mod.id);
                      setEventSuccessMsg(null);
                      setActiveStepIndex(null);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${isSelected
                      ? 'bg-[#00ACD4] text-slate-950 shadow-sm font-bold border border-[#00ACD4]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                  >
                    <span className={isSelected ? 'text-slate-950' : 'text-slate-400'}>
                      {getModuleIcon(mod.id)}
                    </span>
                    <span>{mod.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Action Simulation Button */}
            <button
              onClick={handleSimulateEvent}
              disabled={isSimulatingEvent}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-[#00ACD4] hover:bg-[#00C2F0] rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <Play className={`w-3 h-3 fill-current text-slate-950 ${isSimulatingEvent ? 'animate-pulse' : ''}`} />
              <span>
                {isSimulatingEvent
                  ? 'جاري تنفيذ العملية...'
                  : 'محاكاة دورة حركة تجارية حية'}
              </span>
            </button>
          </div>

          {/* Event Success Banner */}
          {eventSuccessMsg && (
            <div className="bg-emerald-950/60 border-b border-emerald-500/30 px-6 py-2.5 flex items-center justify-between text-xs font-medium text-emerald-200">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{eventSuccessMsg}</span>
              </span>
              <span className="text-[11px] text-emerald-300 font-bold shrink-0 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>زمن التنفيذ: {simulatedLatency}ms</span>
              </span>
            </div>
          )}

          {/* Dashboard Workspace */}
          <div className="p-5 sm:p-7 space-y-6">

            {/* KPI Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0B2538]/90 rounded-xl p-4 border border-white/10">
                <span className="text-xs font-semibold text-slate-400">
                  {currentModule.kpiLabel_ar || currentModule.kpiLabel}
                </span>
                <div className="text-2xl font-bold text-[#00ACD4] mt-1 tabular-nums">
                  {currentModule.kpiValue_ar || currentModule.kpiValue}
                </div>
                <div className="text-xs text-emerald-400 font-bold mt-1 flex items-center gap-1">
                  <span>{currentModule.kpiTrend_ar || currentModule.kpiTrend}</span>
                </div>
              </div>

              <div className="bg-[#0B2538]/90 rounded-xl p-4 border border-white/10">
                <span className="text-xs font-semibold text-slate-400">
                  شجرة الحسابات وسجل التدقيق
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                  قيود آلية موحدة
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  ربط آلي مع المخازن والحسابات
                </div>
              </div>

              <div className="bg-[#0B2538]/90 rounded-xl p-4 border border-white/10">
                <span className="text-xs font-semibold text-slate-400">
                  القسم التشغيلي النشط
                </span>
                <div className="text-sm font-bold text-white mt-1">
                  {currentModule.name_ar || currentModule.name}
                </div>
                <div className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {currentModule.summary_ar || currentModule.summary}
                </div>
              </div>
            </div>

            {/* Visual Dynamic Architecture & Data Flow Sequence */}
            <div className="border border-white/10 rounded-xl p-4 bg-[#0B2538]/70">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00ACD4]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    مسار تدفق المعاملة — {currentModule.name_ar}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300/80">
                  معالجة فورية بدون تأخير
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {currentModule.pipelineSteps.map((step, idx) => {
                  const isActive = activeStepIndex === idx;
                  const isPast = activeStepIndex !== null && activeStepIndex > idx;
                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-3.5 rounded-lg border transition-all duration-200 flex flex-col justify-between ${isActive
                        ? 'bg-[#0A2D44] border-[#00ACD4] shadow-md ring-1 ring-[#00ACD4]'
                        : isPast
                          ? 'bg-[#082030] border-emerald-500/50'
                          : 'bg-[#082030] border-white/10'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isActive
                            ? 'bg-[#00ACD4] text-slate-950'
                            : isPast
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-white/10 text-slate-300'
                            }`}>
                            المرحلة {step.stepNumber}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {step.protocol}
                          </span>
                        </div>

                        <div className="text-xs font-bold text-cyan-200 mb-1">
                          {step.label_ar || step.label}
                        </div>
                        <div className="text-[11px] font-medium text-slate-300 mb-1">
                          {step.node_ar || step.node}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {step.detail_ar || step.detail}
                        </p>
                      </div>

                      {isActive && (
                        <div className="mt-2 text-[10px] text-cyan-300 font-bold flex items-center gap-1 border-t border-white/10 pt-1.5">
                          <Radio className="w-2.5 h-2.5 text-[#00ACD4] animate-ping" />
                          <span>جاري التنفيذ والتحقق...</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Transactional Table */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-[#0B2538] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white">
                  سجل العمليات الحية — {currentModule.name_ar}
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline font-medium">
                  تحديث لحظي لكافة الحركات مع سجل تدقيق مشفر
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#082030] text-[11px] font-semibold text-slate-400 uppercase">
                      <th className="py-2.5 px-4">كود المعاملة</th>
                      <th className="py-2.5 px-4">البيان والجهة المستفيدة</th>
                      <th className="py-2.5 px-4">التخصيص والمركز المالي</th>
                      <th className="py-2.5 px-4 text-end">حالة القيد</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs text-slate-200">
                    {currentModule.sampleData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="py-2.5 px-4 font-mono font-bold text-[#00ACD4]">
                          {row.col1}
                        </td>
                        <td className="py-2.5 px-4 text-slate-200">
                          {row.col2_ar || row.col2}
                        </td>
                        <td className="py-2.5 px-4 text-slate-300">
                          {row.col3_ar || row.col3}
                        </td>
                        <td className="py-2.5 px-4 text-end">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${row.status === 'Optimal'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : row.status === 'Synchronized'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Optimal' ? 'bg-emerald-400' : row.status === 'Synchronized' ? 'bg-cyan-400' : 'bg-amber-400'
                              }`} />
                            {row.status_ar || row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Bar: Key Capabilities Checklist & CTA */}
            <div className="bg-[#0B2538]/90 rounded-xl p-4 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
                {(currentModule.features_ar || currentModule.features).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onDiscussErp}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ACD4] hover:bg-[#00C2F0] text-slate-950 text-xs font-bold rounded-lg transition-all shadow-sm shrink-0 cursor-pointer"
              >
                <span>طلب استشارة لنظام منشأتك</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
