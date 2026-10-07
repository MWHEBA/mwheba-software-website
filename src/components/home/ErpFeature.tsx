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
  Server,
  Sparkles
} from 'lucide-react';

interface ErpFeatureProps {
  onDiscussErp: () => void;
}

export const ErpFeature: React.FC<ErpFeatureProps> = ({ onDiscussErp }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 115%', 'end -15%']
  });

  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

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
    <section ref={sectionRef} id="erp" className="py-20 md:py-28 bg-white border-b border-slate-200/80 text-start relative overflow-hidden">

      {/* Background Dots Accent */}
      <div className="absolute inset-0 saasable-dots-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-slate-200 mb-3.5 shadow-2xs">
            <Database className="w-3.5 h-3.5 text-[#00ACD4]" />
            <span>البنية البرمجية لمنظومة تخطيط الموارد (ERP)</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#075D91] leading-snug tracking-tight">
            لوحة تحكم تفاعلية تربط المبيعات والمخازن والقيود المحاسبية
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            كل حركة بيع، شراء، أو استلام بضاعة تنعكس تلقائياً في شجرة الحسابات وتقارير الأرباح بدون أي تدخل بشري مكرر.
          </p>
        </div>

        {/* Enterprise ERP Command Center Interface Mockup WITH PARALLAX */}
        <motion.div
          style={{ y: cardParallaxY }}
          className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-lg overflow-hidden"
        >
          {/* Top Window Bar */}
          <div className="bg-[#063B5C] px-4 sm:px-6 py-3.5 flex items-center justify-between text-white border-b border-[#041D2E]">
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
                <span>ACID Engine · Multi-Tenant</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-500/30 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>متزامن ومستقر</span>
              </div>
            </div>
          </div>

          {/* Subsystem Tabs Bar & Live Simulation Trigger */}
          <div className="bg-[#F8FAFC] px-4 sm:px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="text-xs font-bold text-slate-500 uppercase shrink-0 mr-1">
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
                      ? 'bg-white text-[#075D91] shadow-2xs font-bold border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                  >
                    <span className={isSelected ? 'text-[#075D91]' : 'text-slate-400'}>
                      {getModuleIcon(mod.id)}
                    </span>
                    <span>{mod.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Action Simulation */}
            <button
              onClick={handleSimulateEvent}
              disabled={isSimulatingEvent}
              className="px-4 py-2 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-2xs disabled:opacity-50"
            >
              <Play className={`w-3 h-3 fill-current text-[#00ACD4] ${isSimulatingEvent ? 'animate-pulse' : ''}`} />
              <span>
                {isSimulatingEvent
                  ? 'جاري تنفيذ المسار الهندسي...'
                  : 'محاكاة دورة المعاملة الحية'}
              </span>
            </button>
          </div>

          {/* Event Success Banner */}
          {eventSuccessMsg && (
            <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 flex items-center justify-between text-xs font-medium text-emerald-800">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{eventSuccessMsg}</span>
              </span>
              <span className="text-[11px] text-emerald-700 font-bold shrink-0 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>زمن التنفيذ: {simulatedLatency}ms</span>
              </span>
            </div>
          )}

          {/* Dashboard Workspace */}
          <div className="p-5 sm:p-7 space-y-6">

            {/* KPI Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500">
                  {currentModule.kpiLabel_ar || currentModule.kpiLabel}
                </span>
                <div className="text-2xl font-bold text-[#075D91] mt-1 tabular-nums">
                  {currentModule.kpiValue_ar || currentModule.kpiValue}
                </div>
                <div className="text-xs text-emerald-700 font-bold mt-1 flex items-center gap-1">
                  <span>{currentModule.kpiTrend_ar || currentModule.kpiTrend}</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500">
                  شجرة الحسابات وسجل التدقيق
                </span>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  قيود آلية موحدة
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  ربط آلي مع المخازن والحسابات
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500">
                  القسم التشغيلي النشط
                </span>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {currentModule.name_ar || currentModule.name}
                </div>
                <div className="text-xs text-slate-600 mt-1 line-clamp-1">
                  {currentModule.summary_ar || currentModule.summary}
                </div>
              </div>
            </div>

            {/* Visual Dynamic Architecture & Data Flow Sequence */}
            <div className="border border-slate-200 rounded-xl p-4 bg-[#F8FAFC]">
              <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2.5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#075D91]" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    المسار الهندسي وتدفق البيانات — {currentModule.name_ar}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  معالجة متسلسلة لحظية بدون تأخير
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {currentModule.pipelineSteps.map((step, idx) => {
                  const isActive = activeStepIndex === idx;
                  const isPast = activeStepIndex !== null && activeStepIndex > idx;
                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-3 rounded-lg border transition-all duration-200 flex flex-col justify-between ${isActive
                        ? 'bg-white border-[#00ACD4] shadow-sm ring-1 ring-[#00ACD4]'
                        : isPast
                          ? 'bg-white border-emerald-300'
                          : 'bg-white border-slate-200/90'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isActive
                            ? 'bg-[#00ACD4] text-white'
                            : isPast
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                            }`}>
                            المرحلة {step.stepNumber}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {step.protocol}
                          </span>
                        </div>

                        <div className="text-xs font-bold text-[#075D91] mb-1">
                          {step.label_ar || step.label}
                        </div>
                        <div className="text-[11px] font-medium text-slate-700 mb-1">
                          {step.node_ar || step.node}
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {step.detail_ar || step.detail}
                        </p>
                      </div>

                      {isActive && (
                        <div className="mt-2 text-[10px] text-[#075D91] font-bold flex items-center gap-1 border-t border-slate-100 pt-1.5">
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
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  سجل العمليات الحية — {currentModule.name_ar}
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline font-medium">
                  تحديث لحظي لكافة الحركات مع سجل تدقيق مشفر
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-white text-[11px] font-semibold text-slate-500 uppercase">
                      <th className="py-2.5 px-4">كود المعاملة</th>
                      <th className="py-2.5 px-4">البيان والجهة المستفيدة</th>
                      <th className="py-2.5 px-4">التخصيص والمركز المالي</th>
                      <th className="py-2.5 px-4 text-end">حالة القيد</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {currentModule.sampleData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-2.5 px-4 font-mono font-bold text-[#075D91]">
                          {row.col1}
                        </td>
                        <td className="py-2.5 px-4 text-slate-800">
                          {row.col2_ar || row.col2}
                        </td>
                        <td className="py-2.5 px-4 text-slate-600">
                          {row.col3_ar || row.col3}
                        </td>
                        <td className="py-2.5 px-4 text-end">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${row.status === 'Optimal'
                            ? 'bg-emerald-100 text-emerald-800'
                            : row.status === 'Synchronized'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Optimal' ? 'bg-emerald-600' : row.status === 'Synchronized' ? 'bg-blue-600' : 'bg-amber-600'
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
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-700">
                {(currentModule.features_ar || currentModule.features).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onDiscussErp}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#075D91] hover:bg-[#063B5C] text-white text-xs font-bold rounded-lg transition-all shadow-2xs shrink-0 cursor-pointer"
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
