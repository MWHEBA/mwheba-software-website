import React from 'react';
import { MapPin, Globe, ArrowLeft } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onStartProject }) => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/60 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-semibold text-[#075D91] uppercase tracking-widest">
              عن شركة موهبة
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#075D91] leading-snug tracking-tight">
              هندسة برمجية متقدمة تنطلق من الفهم العميق لواقع إدارة الأعمال.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              شركة موهبة للحلول البرمجية (MWHEBA Software Solutions) هي الذراع الهندسي المتخصص التابع لمنظومة موهبة، متخصصة في هندسة البرمجيات المخصصة، وتطوير أنظمة إدارة المؤسسات (ERP)، وبناء المنصات الرقمية المستدامة لقطاعات التجارة، والخدمات، والدعاية والإعلان، والتعليم.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              انطلاقاً من قناعتنا بأن التكنولوجيا يجب أن تُهندس لخدمة دورتكم التشغيلية بدلاً من فرض قيود إدارية مصطنعة، نتشارك مع الشركات النامية والمؤسسات متعددة الفروع لبناء بنية رقمية متينة تمنح الإدارة وضوحاً كاملاً وتنهي الاعتماد على البرمجيات الجامدة.
            </p>

            {/* Regional HQ & Footprint */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#075D91]" />
                <span className="font-bold text-slate-900">
                  المقر الرئيسي:
                </span>
                <span>الإسكندرية، جمهورية مصر العربية</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#075D91]" />
                <span className="font-bold text-slate-900">
                  نطاق المشروعات:
                </span>
                <span>مصر ومنطقة الخليج والشرق الأوسط</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onStartProject}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#075D91] hover:bg-[#063B5C] rounded-lg transition-colors duration-150 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>طلب دراسة وتحليل النظام</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onLearnMore}
                className="text-xs font-bold text-[#075D91] hover:text-[#063B5C] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>استعراض مراحل التنفيذ</span>
                <span>←</span>
              </button>
            </div>
          </div>

          {/* Right Pillar Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-2xs">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-200">
              ركائز ومعايير العمل في موهبة
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200/80">
                <span className="font-bold text-[#075D91] block mb-1">
                  1. هندسة موجهة لخدمة أهدافك الميدانية
                </span>
                <p className="text-slate-600 leading-relaxed">
                  كل سطر كود وكل قرار تقني يُتخذ لحل اختناق تشغيلي فعلي وزيادة كفاءة وهوامش ربح مؤسستكم.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200/80">
                <span className="font-bold text-[#075D91] block mb-1">
                  2. تواصل هندسي مباشر دون وسطاء
                </span>
                <p className="text-slate-600 leading-relaxed">
                  تتعامل مؤسستكم مباشرة مع مهندسي ومصممي النظام لضمان فهم الدورة المستندية بدقة متناهية.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200/80">
                <span className="font-bold text-[#075D91] block mb-1">
                  3. حوكمة والتزام مؤسسي مستمر
                </span>
                <p className="text-slate-600 leading-relaxed">
                  شروط واضحة لملكية البيانات وتراخيص التشغيل، مع دعم فني مستمر وعقود SLA موثقة.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
