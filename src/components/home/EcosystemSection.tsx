import React from 'react';
import { Palette, Code2, Server, ShieldCheck } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const arms = [
    {
      id: 'agency',
      name: 'موهبة للحلول الإبداعية',
      nameEn: 'MWHEBA Creative Agency',
      taglineAr: 'الهوية والعلامة التجارية',
      desc: 'استراتيجيات العلامة التجارية، تصميم الهويات البصرية المتميزة، وتجربة المستخدم (UI/UX) للشركات والمؤسسات.',
      icon: <Palette className="w-5 h-5 text-[#075D91]" />,
      pill: 'الهوية والتصميم',
      highlighted: false
    },
    {
      id: 'software',
      name: 'موهبة للحلول البرمجية',
      nameEn: 'MWHEBA Software Solutions',
      taglineAr: 'هندسة البرمجيات والـ ERP',
      desc: 'الذراع التقني المتخصص في هندسة البرمجيات المخصصة، منظومات ERP لإدارة المؤسسات، وبوابات الخدمة الذاتية.',
      icon: <Code2 className="w-5 h-5 text-white" />,
      pill: 'الذراع التقني المخصص',
      highlighted: true
    },
    {
      id: 'hosting',
      name: 'موهبة لخدمات الاستضافة',
      nameEn: 'MWHEBA Hosting Services',
      taglineAr: 'إدارة البنية السحابية والاستضافة',
      desc: 'خوادم سحابية مؤمّنة واستضافة مدارة بنسبة جاهزية عالية ونسخ احتياطي دوري (خدمة اختيارية بالكامل).',
      icon: <Server className="w-5 h-5 text-[#075D91]" />,
      pill: 'السحاب والبنية التحتية',
      highlighted: false
    }
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-24 bg-[#F8FAFC] text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#075D91] uppercase tracking-widest mb-2.5">
            <span className="w-1.5 h-1.5 bg-[#075D91] rounded-full" />
            <span>منظومة موهبة الشاملة</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
            ثلاثة أذرع متخصصة تحت مظلة واحدة
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            ثلاثة أذرع متخصصة تعمل بشكل مستقل ومتكامل لتلبية متطلبات التحول الرقمي الكامل لمؤسستك.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {arms.map((arm) => (
            <div
              key={arm.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-2xs ${arm.highlighted
                ? 'bg-white border-2 border-[#075D91] shadow-xs relative'
                : 'bg-white border border-slate-200/90 hover:border-slate-300'
                }`}
            >
              {/* Highlight Badge for Current Arm */}
              {arm.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#075D91] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                  {arm.pill}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl border ${arm.highlighted
                    ? 'bg-[#075D91] border-[#075D91]'
                    : 'bg-slate-50 border-slate-200'
                    }`}>
                    {arm.icon}
                  </div>
                  {!arm.highlighted && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80">
                      {arm.pill}
                    </span>
                  )}
                </div>

                <div className="mb-1 text-xs font-bold text-[#075D91] uppercase tracking-wide">
                  {arm.taglineAr}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {arm.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {arm.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-semibold">
                  {arm.nameEn}
                </span>
                <span className="text-[#075D91] font-bold text-[11px]">
                  MWHEBA
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hosting Independence Guarantee Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[#075D91] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900">
                ضمان الاستقلالية التامة:{' '}
              </span>
              <span className="text-slate-600">
                خدمات الاستضافة السحابية من موهبة اختيارية تماماً، ويمكنك دائماً استضافة نظامك وبياناتك على أي خادم أو مزود تختاره.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
