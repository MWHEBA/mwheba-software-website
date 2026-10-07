import React from 'react';
import { AboutSection } from '../components/home/AboutSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { EcosystemSection } from '../components/home/EcosystemSection';
import { FinalCta } from '../components/home/FinalCta';
import { 
  Compass, 
  ShieldCheck, 
  Building, 
  Database, 
  HardDrive, 
  Cloud, 
  Clock, 
  Lock, 
  Users, 
  Video, 
  Award, 
  WifiOff, 
  RefreshCw, 
  CheckCircle2 
} from 'lucide-react';

interface AboutPageProps {
  onStartProject: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onStartProject,
  onNavigate
}) => {
  return (
    <div className="pt-20">
      {/* رأس صفحة عن موهبة */}
      <div className="bg-[#063B5C] text-white py-16 sm:py-20 border-b border-[#075D91] text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00ACD4] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/15 mb-4">
              <Compass className="w-4 h-4" />
              <span>عن موهبة ومنهجية العمل الهندسية</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              هندسة برمجيات تفهم طبيعة وبيئة الأعمال
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              لسنا مجرد مطورين لكتابة الكود؛ نحن شركاء استراتيجيون نفحص دورة عملك المستندية ونبني البنية التحتية البرمجية التي تضمن استقرار وتوسع شركتك.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                <Building className="w-4 h-4 text-[#00ACD4]" />
                <span>إحدى شركات منظومة موهبة (MWHEBA Ecosystem)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>عقود صيانة وتشغيل SLA واضحة وموثقة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. قصة موهبة ومبادئنا */}
      <AboutSection
        onLearnMore={() => {
          const el = document.getElementById('process-details');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onStartProject={() => onStartProject('General Inquiry')}
      />

      {/* 2. مراحل العمل السبعة */}
      <div id="process-details">
        <ProcessSection />
      </div>

      {/* 3. بروتوكول النسخ الاحتياطي واستمرارية الأعمال 3-2-1 */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-3 py-1 rounded-md border border-slate-200 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#075D91]" />
              <span>حماية البيانات واستمرارية التشغيل</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] leading-snug">
              بروتوكول النسخ الاحتياطي المعياري 3-2-1
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              لا مجال للمخاطرة ببيانات العملاء أو السجلات المالية. نطبق البروتوكول العالمي الصارم لضمان عدم فقدان أي فاتورة أو حركة مخزنية مهما كانت الظروف الطارئة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#075D91] mb-4">
                <Database className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#075D91] uppercase">الركيزة الأولى</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">3 نسخ كاملة</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">3 نسخ متزامنة من قاعدة البيانات</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                نسخة الإنتاج الحية، نسخة النسخ الاحتياطي التلقائي الفوري، ونسخة التدقيق التاريخي المعزولة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#075D91] mb-4">
                <HardDrive className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#075D91] uppercase">الركيزة الثانية</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">وسيطان تخزين</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">توزيع على وسائط تخزين منفصلة</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                تخزين على وحدات NVMe سريعة في الخادم الرئيسي مع مزامنة لحظية إلى وحدة تخزين شبكية معزولة محلياً.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#075D91] mb-4">
                <Cloud className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#075D91] uppercase">الركيزة الثالثة</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">خارج الموقع</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">نسخة سحابية مشفرة Offsite</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                تشفير كامل AES-256 وترحيل النسخ لخوادم سحابية منفصلة جغرافياً للتعافي في حالات الكوارث.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-900">مؤشرات التعافي القياسية (Disaster Recovery SLA):</span>
                <span className="text-xs text-slate-600 block sm:inline sm:mr-2">RPO &lt; 15 دقيقة (أقصى فقد زمني) و RTO &lt; ساعتين (زمن الاستعادة الشاملة).</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#075D91] bg-[#F8FAFC] px-3 py-1.5 rounded-lg border border-slate-200">
              <Lock className="w-4 h-4 text-[#075D91]" />
              <span>تشفير كامل ومصادقة ثنائية</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ميثاق الاستقرار الميداني والتدريب لمدة 90 يوماً */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                <Award className="w-4 h-4 text-[#075D91]" />
                <span>ضمان التشغيل والتمكين البشري</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] leading-snug">
                ميثاق ما بعد الإطلاق: 90 يوماً من الاستقرار والتدريب الميداني
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                نجاح النظام البرمجي لا يُقاس باكتمال كتابة الكود، بل بتمكن موظفيك من استخدامه بكل سهولة وثقة في مهامهم اليومية دون أي تعثر أو هدر زمني.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">تدريب ميداني وتطبيقي في مقر العمل</h4>
                    <p className="text-xs text-slate-600 mt-0.5">جلسات تدريب عملية مع كل قسم (كاشير، مستودعات، محاسبة، إدارة عليا) على بياناتهم الحقيقية.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 shrink-0 mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">مكتبة فيديو رقمية مخصصة لشركتك</h4>
                    <p className="text-xs text-slate-600 mt-0.5">فيديوهات قصيرة مسجلة ومفهرسة تشرح كل خطوة وسيناريو تشغيلي لتدريب أي موظف جديد بسهولة.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">90 يوماً فترة استقرار ومراقبة لصيقة (Warranty)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">مهندس مخصص يراقب أداء النظام ويستجيب لأي استفسار فوري لضمان ثبات العمليات 100%.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                <WifiOff className="w-6 h-6 text-[#075D91]" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">معمارية العمل دون إنترنت (Offline-First)</h3>
                  <span className="text-xs text-slate-500">استمرارية البيع وإصدار الفواتير بدون توقف</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                تعتمد حلولنا الميدانية (نقاط البيع والمستودعات) على معمارية Offline-First المتقدمة، بحيث تستمر شاشات البيع في طباعة الفواتير وحفظ القيود حتى لو انقطع الإنترنت لساعات، مع مزامنة خلفية تلقائية فور عودة الاتصال دون أي تضارب في أرقام الفواتير.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>منع تصادم الترقيم</span>
                  </div>
                  <p className="text-[11px] text-slate-500">ترقيم الفواتير ببادئات مخصصة لكل فرع وكاشير لمنع تكرار السجلات.</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                    <RefreshCw className="w-4 h-4 text-[#075D91] shrink-0" />
                    <span>مزامنة خلفية ذكية</span>
                  </div>
                  <p className="text-[11px] text-slate-500">طابور مزامنة آمن يرحل البيانات المحدثة تلقائياً للخادم المركزي فور الاتصال.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800">ضمان صفر تعطل في صالات البيع والمستودعات</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">100% Offline-Ready</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. فلسفة التكنولوجيا والـ Tech Stack */}
      <TechStackSection />

      {/* 6. منظومة موهبة الشاملة */}
      <EcosystemSection />

      {/* 7. الدعوة لاتخاذ إجراء */}
      <FinalCta
        onStartProject={() => onStartProject()}
        onTalkToTeam={() => {
          const msg = encodeURIComponent('مرحباً شركة موهبة، أود معرفة المزيد عن منهجية موهبة في تطوير وهندسة الأنظمة البرمجية.');
          window.open(`https://wa.me/201229609292?text=${msg}`, '_blank');
        }}
      />
    </div>
  );
};
