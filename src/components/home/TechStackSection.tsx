import React, { useState } from 'react';
import { techStackData } from '../../data/techStackData';
import { Cpu, ShieldCheck, Database, Layout, Code2, Server } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة التقنيات' },
    { id: 'core', label: 'النواة البرمجية' },
    { id: 'frontend', label: 'الواجهات واللوحات' },
    { id: 'database', label: 'قواعد البيانات' },
    { id: 'styling', label: 'التصميم والتجاوب' },
    { id: 'integrations', label: 'الربط والأجهزة' },
    { id: 'infrastructure', label: 'الاستضافة والخوادم' }
  ];

  const filteredTech = selectedCategory === 'all'
    ? techStackData
    : techStackData.filter(t => t.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'core': return <Code2 className="w-4 h-4 text-[#075D91]" />;
      case 'frontend': return <Layout className="w-4 h-4 text-[#075D91]" />;
      case 'database': return <Database className="w-4 h-4 text-[#075D91]" />;
      case 'styling': return <Layout className="w-4 h-4 text-[#075D91]" />;
      case 'integrations': return <Cpu className="w-4 h-4 text-[#075D91]" />;
      case 'infrastructure': return <Server className="w-4 h-4 text-[#075D91]" />;
      default: return <Code2 className="w-4 h-4 text-[#075D91]" />;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/60 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-semibold text-[#075D91] uppercase tracking-widest mb-2.5">
            الحزمة التقنية والأدوات
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
            أحدث التقنيات البرمجية ذات الاستقرار العالي
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            نعتمد لغات وأطر عمل عالمية ومجربة تضمن الأداء الفائق والسرعة والأمان وسهولة التوسع المستقبلي.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-colors duration-150 cursor-pointer ${selectedCategory === cat.id
                ? 'bg-[#075D91] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((item) => {
            const role = item.role_ar || item.role;
            const rationale = item.rationale_ar || item.rationale;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200/90 p-6 hover:border-[#075D91]/40 hover:shadow-md transition-all duration-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#F8FAFC] border border-slate-200">
                        {getCategoryIcon(item.category)}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#075D91] mb-2">
                    {role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rationale}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise IP & Data Sovereignty Note */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm mb-0.5">
                ميثاق الاستقلال وسيادة البيانات (Data Sovereignty)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                يمتلك العميل 100% من بياناته وسجلاته التشغيلية ومحتواه، مع استقلال كامل في الاستضافة دون أي احتكار أو اشتراكات متصاعدة.
              </p>
            </div>
          </div>
          <span className="text-emerald-800 shrink-0 text-xs font-bold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 text-center">
            ملكية تامة للبيانات 100%
          </span>
        </div>

      </div>
    </section>
  );
};
