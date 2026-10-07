import React, { useState } from 'react';
import { integrationsData } from '../../data/integrationsData';
import {
  Building2,
  MessageSquare,
  CreditCard,
  Database,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Server
} from 'lucide-react';

interface IntegrationsHubProps {
  onStartProject: (serviceName?: string) => void;
}

export const IntegrationsHub: React.FC<IntegrationsHubProps> = ({ onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة التكاملات والربط البرمجي' },
    { id: 'branches', label: 'مزامنة الفروع وشركات الشحن' },
    { id: 'messaging', label: 'واتساب والأتمتة الرسمية' },
    { id: 'payments', label: 'بوابات الدفع وماكينات POS' },
    { id: 'migration', label: 'ترحيل البيانات القديمة (ETL)' }
  ];

  const filteredIntegrations = selectedCategory === 'all'
    ? integrationsData
    : integrationsData.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'branches': return <Building2 className="w-4 h-4 text-[#075D91]" />;
      case 'messaging': return <MessageSquare className="w-4 h-4 text-[#075D91]" />;
      case 'payments': return <CreditCard className="w-4 h-4 text-[#075D91]" />;
      case 'migration': return <Database className="w-4 h-4 text-[#075D91]" />;
      default: return <Layers className="w-4 h-4 text-[#075D91]" />;
    }
  };

  return (
    <section id="integrations" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/60 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-semibold text-[#075D91] uppercase tracking-widest mb-2.5">
            شبكة الربط والتكامل المعتمد
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
            تكامل مباشر مع الفروع، البنوك، شركات الشحن، وقنوات المراسلة
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            نبني نظامك ليكون متصلاً لحظياً بكافة أطراف عملك: مزامنة المخازن والفروع، واتساب للأعمال، بوابات الدفع، وترحيل بياناتك القديمة بدون توقف العمليات.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${isSelected
                  ? 'bg-[#075D91] text-white border-[#075D91] shadow-2xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
              >
                <span className={isSelected ? 'text-[#00ACD4]' : 'text-slate-500'}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIntegrations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                {/* Card Top: Category Icon + Badges */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F9FB] border border-slate-200 flex items-center justify-center shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#075D91]/10 text-[#075D91] border border-[#075D91]/20">
                      {item.badge_ar || item.badge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                      {item.syncType_ar || item.syncType} · {item.uptime}
                    </span>
                  </div>
                </div>

                {/* Title & Protocol */}
                <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                  {item.name_ar || item.name}
                </h3>

                <div className="mb-3 px-2 py-1 rounded bg-[#F8FAFC] border border-slate-200/80 inline-block">
                  <span className="text-[11px] font-mono font-semibold text-[#075D91]">
                    {item.protocol_ar || item.protocol}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description_ar || item.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2 border-t border-slate-100 pt-3 mb-4">
                  {(item.capabilities_ar || item.capabilities).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => onStartProject(`ربط وتكامل: ${item.name_ar || item.name}`)}
                  className="w-full py-2 px-3 bg-[#F5F9FB] hover:bg-[#075D91] text-slate-700 hover:text-white border border-slate-200 hover:border-[#075D91] rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>طلب ربط هذا التكامل بنظامك</span>
                  <ArrowLeft className="w-3 h-3 text-[#00ACD4] group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Bottom Banner */}
        <div className="bg-[#063B5C] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-start">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00ACD4] uppercase tracking-wider mb-2">
              <Server className="w-4 h-4" />
              <span>معايير الأمان وعزل قواعد البيانات</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold leading-snug text-white">
              هل تحتاج إلى ربط مخصص مع منظومة داخلية أو أجهزة صناعية خاصة؟
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              فريق موهبة الهندسي يمتلك خبرة واسعة في بناء بروتوكولات الربط المخصصة (Custom Webhooks, TCP Sockets, ETL Pipelines) بدون أي وسيط طرف ثالث.
            </p>
          </div>

          <button
            onClick={() => onStartProject('تكامل مخصص / Custom Integration Protocol')}
            className="px-5 py-3 bg-[#075D91] hover:bg-white text-white hover:text-[#075D91] text-xs sm:text-sm font-bold rounded-lg transition-all shadow-md shrink-0 cursor-pointer border border-white/20"
          >
            طلب استشارة الربط المعماري
          </button>
        </div>

      </div>
    </section>
  );
};
