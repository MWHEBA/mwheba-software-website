import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Database,
  Store,
  Warehouse,
  Cpu,
  ShieldCheck,
  Activity,
  Play,
  CheckCircle2,
  Terminal,
  Layers,
  Printer,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreSolutions: () => void;
  onSelectErp: () => void;
}

type IndustryType = 'retail' | 'printing' | 'education' | 'contracting';

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreSolutions,
  onSelectErp
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('retail');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Smooth Interactive Mouse Spotlight Tracker
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const normX = useMotionValue(0); // -1 to +1 relative to center
  const normY = useMotionValue(0); // -1 to +1 relative to center

  const springX = useSpring(mouseX, { damping: 28, stiffness: 220 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 220 });
  const springNormX = useSpring(normX, { damping: 30, stiffness: 180 });
  const springNormY = useSpring(normY, { damping: 30, stiffness: 180 });

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Parallax Transforms
  const bgGridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scaleWindow = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.92, 1, 1.02]);
  const windowY = useTransform(scrollYProgress, [0.1, 0.6], [50, -15]);

  // Subtle Mouse Parallax / Tilt (0deg when idle or at center)
  const windowTiltX = useTransform(springNormX, [-1, 1], [-2.5, 2.5]);
  const windowTiltY = useTransform(springNormY, [-1, 1], [2, -2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    mouseX.set(relX);
    mouseY.set(relY);
    normX.set(((relX / rect.width) - 0.5) * 2);
    normY.set(((relY / rect.height) - 0.5) * 2);
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    normX.set(0);
    normY.set(0);
  };

  const industryPresets: Record<IndustryType, {
    label: string;
    icon: React.ReactNode;
    headline: string;
    subline: string;
    kpis: Array<{ label: string; value: string; note: string }>;
    operations: Array<{ id: string; branch: string; action: string; status: string }>;
  }> = {
    retail: {
      label: 'التجارة والتجزئة وسلاسل التوريد',
      icon: <Store className="w-4 h-4" />,
      headline: 'أنظمة كاشير ومستودعات متعددة الفروع',
      subline: 'تزامن لحظي بين الفروع والمستودعات مع تقفيل آلي للخزائن وتكامل مباشر مع منظومة الفاتورة والإيصال الإلكتروني (ETA).',
      kpis: [
        { label: 'مطابقة الخزائن والعهد', value: '100%', note: 'تقفيل آلي فوري' },
        { label: 'سرعة استجابة الكاشير', value: '< 120ms', note: 'استجابة فائقة بالذروة' },
        { label: 'الرقابة على المخزون', value: '0% عجز', note: 'تتبع باركود الشحنات' },
        { label: 'الامتثال الضريبي', value: 'ETA معتمد', note: 'إيصال وفاتورة إلكترونية' }
      ],
      operations: [
        { id: '#POS-9812', branch: 'فاتورة مبيعات — فرع الإسكندرية', action: 'قيد خزينة فوري + خصم المخزون', status: 'مكتمل وموثق ETA' },
        { id: '#TRF-4011', branch: 'إذن تحويل — المخزن الرئيسي إلى سموحة', action: 'مطابقة باركود الشحنة والكميات', status: 'تم الاستلام' },
        { id: '#PAY-8820', branch: 'سداد Paymob + إشعار واتساب', action: 'تسوية بنكية وتحديث الحساب', status: 'متزامن 100%' }
      ]
    },
    printing: {
      label: 'المطابع ومصانع التغليف',
      icon: <Printer className="w-4 h-4" />,
      headline: 'حسابات المقايسات وهالك الورق وأوامر الشغل',
      subline: 'خوارزمية تفصيل مقاسات الورق وحساب الهالك بدقة، مع ربط عروض الأسعار بصالة الإنتاج والماكينات مباشرة.',
      kpis: [
        { label: 'توفير هدر الورق', value: '-22%', note: 'خوارزمية المقاس الأمثل' },
        { label: 'زمن إعداد المقايسة', value: 'دقيقة واحدة', note: 'حساب آلي للبينجات والخامات' },
        { label: 'تتبع صالة الإنتاج', value: '100% شفافية', note: 'تذاكر مراحل التشغيل' },
        { label: 'تسعير المطبوعات', value: 'دقيق 100%', note: 'حساب أوتوماتيكي للـ BOM' }
      ],
      operations: [
        { id: '#JOB-7104', branch: 'أمر شغل — طباعة وتكسير علب كرتون', action: 'حجز 40 باكو كوشيه 300جم', status: 'في مرحلة السلوفان' },
        { id: '#QTE-3209', branch: 'مقايسة فورية — بروشور 150جم أوفست', action: 'حساب البينجات والزنكات آلياً', status: 'تم إرسال العرض' },
        { id: '#STK-5541', branch: 'صرف خامات — أحبار ومواد تشطيب', action: 'خصم أوتوماتيكي من المستودع', status: 'منصرف للماكينة' }
      ]
    },
    education: {
      label: 'المدارس والأكاديميات والمراكز',
      icon: <GraduationCap className="w-4 h-4" />,
      headline: 'إدارة أقساط الطلاب والشهادات الرقمية',
      subline: 'متابعة دقيقة للأقساط المدرسية، أتمتة إشعارات أولياء الأمور عبر الواتساب، وتوليد الشهادات الرقمية بـ QR Code.',
      kpis: [
        { label: 'انتظام تحصيل الأقساط', value: '+45%', note: 'تذكيرات واتساب مجدولة' },
        { label: 'تسوية نسب المحاضرين', value: 'ضغطة زر', note: 'حساب أوتوماتيكي للحصص' },
        { label: 'توثيق الشهادات', value: 'رمز QR', note: 'حماية كاملة من التزوير' },
        { label: 'بوابة أولياء الأمور', value: '24/7 متاحة', note: 'متابعة الدرجات والغياب' }
      ],
      operations: [
        { id: '#EDU-4102', branch: 'سداد قسط دراسي — الدفعة الثانية', action: 'إصدار إيصال + إشعار ولي الأمر', status: 'مسدد ومطابق' },
        { id: '#CERT-891', branch: 'إصدار شهادة تدريبية معتمدة', action: 'توليد باركود التوثيق والـ QR', status: 'موثق وجاهز' },
        { id: '#ATT-1205', branch: 'تسجيل حضور وغياب الفصول', action: 'تحديث سجل الطالب الأكاديمي', status: 'متزامن' }
      ]
    },
    contracting: {
      label: 'المقاولات والخدمات الميدانية',
      icon: <Briefcase className="w-4 h-4" />,
      headline: 'المستخلصات وعقود الصيانة وتذاكر الـ SLA',
      subline: 'إدارة جداول الكميات وبنود المستخلصات وفق معايير المحاسبة المصرية، مع تتبع الفنيين الميدانيين وعقود الصيانة.',
      kpis: [
        { label: 'الالتزام باتفاقيات الـ SLA', value: '98.5%', note: 'توجيه فوري للفنيين' },
        { label: 'دقة حسابات المستخلصات', value: '100%', note: 'مطابقة معايير EAS' },
        { label: 'تجديد العقود السنوية', value: '+40% سرعة', note: 'تنبيهات استباقية قبل الانتهاء' },
        { label: 'تكلفة قطع الغيار الميدانية', value: 'محسوبة بدقة', note: 'ربط العهدة برقم التذكرة' }
      ],
      operations: [
        { id: '#SLA-3301', branch: 'تذكرة صيانة وقائية — برج السلام', action: 'توجيه الفني + توقيع العميل رقمياً', status: 'تمت الزيارة بنجاح' },
        { id: '#MCT-7019', branch: 'مستخلص مرحلي — مشروع التوريدات', action: 'اعتماد نسب الإنجاز وجدول الكميات', status: 'معتمد للمالية' },
        { id: '#INV-9902', branch: 'فاتورة عقد صيانة سنوي دوري', action: 'ترحيل قيد الإيراد المؤجل', status: 'مرحل ومطابق' }
      ]
    }
  };

  const activePreset = industryPresets[selectedIndustry];

  const bespokeCapabilities = [
    {
      title: 'أنظمة ERP وإدارة عمليات',
      subtitle: 'مبنية بالكامل حول دورة عملك',
      icon: <Database className="w-4 h-4 text-[#075D91]" />,
      badgeBg: 'bg-[#F0F7FB] border-slate-200 text-[#075D91]',
      dotColor: 'bg-[#00ACD4]'
    },
    {
      title: 'بوابات ومنصات تفاعلية',
      subtitle: 'إدارة الفروع، العملاء، والموظفين',
      icon: <Layers className="w-4 h-4 text-emerald-700" />,
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      dotColor: 'bg-emerald-500'
    },
    {
      title: 'أتمتة العمليات والربط',
      subtitle: 'تكامل فوري مع أجهزتك والأنظمة الخارجية',
      icon: <Cpu className="w-4 h-4 text-[#075D91]" />,
      badgeBg: 'bg-[#F5F9FB] border-slate-200 text-[#075D91]',
      dotColor: 'bg-[#075D91]'
    },
    {
      title: 'ملكية تامة واستقرار دائم',
      subtitle: 'استثمار أصولي بدون رسوم مستخدمين',
      icon: <ShieldCheck className="w-4 h-4 text-[#075D91]" />,
      badgeBg: 'bg-[#F0F7FB] border-slate-200 text-[#075D91]',
      dotColor: 'bg-[#00ACD4]'
    }
  ];

  const handleSimulateAction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#F8FAFC] border-b border-slate-200 text-start"
    >

      {/* 1. CLEAN FLAT ENGINEERING BLUEPRINT BACKGROUND */}
      <motion.div
        style={{ y: bgGridY }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <svg
          className="w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-tech-blueprint" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <circle cx="0" cy="0" r="1.5" fill="#075D91" opacity="0.3" />
              <circle cx="48" cy="0" r="1.5" fill="#075D91" opacity="0.3" />
              <circle cx="0" cy="48" r="1.5" fill="#075D91" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-tech-blueprint)" />
        </svg>

        {/* INTERACTIVE MOUSE SPOTLIGHT GLOW */}
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="absolute pointer-events-none z-0 w-[550px] h-[550px] rounded-full bg-[#00ACD4]/10 blur-3xl"
        />

        {/* INTERACTIVE TECHNICAL CROSSHAIR TARGET */}
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="hidden md:flex absolute pointer-events-none z-0 w-28 h-28 rounded-full border border-[#075D91]/20 items-center justify-center"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ACD4]/50 animate-ping" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#075D91] absolute" />
          <div className="absolute w-full h-px bg-[#075D91]/15" />
          <div className="absolute h-full w-px bg-[#075D91]/15" />
        </motion.div>

        {/* SIDE SIGNAL NODES */}
        <div className="hidden lg:flex absolute top-[24%] left-[7%] items-center justify-center">
          <span className="w-3.5 h-3.5 rounded-full bg-[#00ACD4]/20 border border-[#00ACD4]/50 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ACD4]" />
          </span>
        </div>

        <div className="hidden lg:flex absolute top-[22%] right-[7%] items-center justify-center">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>
        </div>
      </motion.div>

      {/* 2. MAIN VIEWPORT CONTENT */}
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <div className="hidden lg:block h-2" />

        {/* MAIN VALUE BLOCK */}
        <div className="space-y-6 sm:space-y-8 my-auto max-w-4xl mx-auto">

          {/* TOP CHIP BADGE */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-2xs hover:border-[#075D91]/40 transition-all cursor-pointer"
              onClick={() => onExploreSolutions()}
            >
              <span className="w-2 h-2 rounded-full bg-[#00ACD4] animate-pulse" />
              <span className="text-xs font-bold text-[#075D91] tracking-wide">
                شريكك التقني للأنظمة البرمجية ومنظومات الـ ERP المخصصة
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#075D91] rotate-180" />
            </motion.div>
          </div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#075D91] leading-snug tracking-tight"
          >
            أنظمة برمجية تُهندس خصيصاً <br className="hidden md:inline" />
            <span className="text-[#063B5C]">على مقاس دورتك التشغيلية الحقيقية</span>
          </motion.h1>

          {/* SUB-HEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed mx-auto max-w-3xl"
          >
            تخلص من قيود البرمجيات الجاهزة وتشتت الشيتات. نبني لك منظومة برمجية متكاملة مصممة خصيصاً لشركتك — بملكية تامة لكود المصدر والبيانات، وبدون اشتراكات شهرية متصاعدة.
          </motion.p>

          {/* SECTOR SWITCHER BUTTONS (Interactive Industry Selector) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.20 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="text-xs font-bold text-slate-500 ml-1">اختر نوع نشاطك:</span>
            {(Object.keys(industryPresets) as IndustryType[]).map((key) => {
              const item = industryPresets[key];
              const isSelected = selectedIndustry === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedIndustry(key)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#075D91] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-9 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#075D91] hover:bg-[#063B5C] active:bg-[#041D2E] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>طلب تحليل الدورة التشغيلية مجاناً</span>
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onSelectErp}
              className="w-full sm:w-auto px-9 py-4 text-xs font-bold uppercase tracking-wider text-[#075D91] hover:text-[#063B5C] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs"
            >
              <Play className="w-3.5 h-3.5 fill-[#075D91] text-[#075D91]" />
              <span>معاينة بنية النظام ومحاكياته</span>
            </button>
          </motion.div>

        </div>

        {/* 4 BESPOKE CAPABILITY CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto w-full pt-6 text-start"
        >
          {bespokeCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#075D91]/40 hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl border ${item.badgeBg}`}>
                  {item.icon}
                </div>
                <span className={`w-2 h-2 rounded-full ${item.dotColor} animate-pulse`} />
              </div>

              <div>
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* 3. PARALLAX SCROLL-SCALED APPLICATION WINDOW (Dynamic for the Selected Industry) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-16 md:pb-32 relative z-10">
        <motion.div
          style={{
            scale: scaleWindow,
            y: windowY,
            rotateX: windowTiltY,
            rotateY: windowTiltX,
            transformPerspective: 1200
          }}
          className="relative max-w-5xl mx-auto rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-start"
        >
          {/* WINDOW TOP BAR */}
          <div className="bg-[#063B5C] px-4 sm:px-6 py-3.5 border-b border-[#041D2E] flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 bg-[#042438] px-3 py-1 rounded-md text-[11px] font-mono text-cyan-200 border border-white/10">
                <Terminal className="w-3 h-3 text-[#00ACD4]" />
                <span>mwheba://core.architecture/{selectedIndustry}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-[#075D91] px-3 py-1 rounded-md text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-[#00ACD4] animate-pulse" />
                <span>نظام نشط · {activePreset.label}</span>
              </div>
              <button
                onClick={handleSimulateAction}
                className="hidden sm:flex items-center gap-1.5 bg-white text-[#063B5C] hover:bg-slate-100 px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer"
              >
                <Activity className={`w-3 h-3 ${isProcessing ? 'animate-spin' : ''}`} />
                <span>{isProcessing ? 'جاري التحليل...' : 'فحص ترابط البيانات'}</span>
              </button>
            </div>
          </div>

          {/* APPLICATION SUB-NAV */}
          <div className="bg-[#F8FAFC] px-4 sm:px-6 py-2.5 border-b border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span className="text-[#075D91]">{activePreset.headline}</span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] text-slate-500 font-normal hidden md:inline">{activePreset.subline}</span>
            </div>

            <span className="hidden md:flex items-center gap-1 text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>PostgreSQL Enterprise · معزول ومشفر</span>
            </span>
          </div>

          {/* LIVE WORKSPACE CONTENT */}
          <div className="p-5 sm:p-7 bg-white space-y-5">

            {/* KPI STATS ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activePreset.kpis.map((kpi, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-xs font-semibold text-slate-500">{kpi.label}</span>
                  <div className="text-2xl font-extrabold text-[#075D91] mt-1 font-mono">
                    {kpi.value}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium mt-1">
                    {kpi.note}
                  </div>
                </div>
              ))}
            </div>

            {/* LIVE OPERATIONS STREAM TABLE */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-[#F8FAFC] px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#075D91]" />
                  <span className="text-xs font-bold text-slate-900">
                    سجل العمليات والترحيل المحاسبي اللحظي — قطاع {activePreset.label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                  محدث لحظة بلحظة مع خادم PostgreSQL
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-white text-[11px] font-bold text-slate-500 uppercase">
                      <th className="py-2.5 px-4">رقم المعاملة</th>
                      <th className="py-2.5 px-4">البيان والفرع / المركز</th>
                      <th className="py-2.5 px-4">الإجراء والترحيل المحاسبي</th>
                      <th className="py-2.5 px-4 text-end">حالة المزامنة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {activePreset.operations.map((op, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-bold text-[#075D91]">{op.id}</td>
                        <td className="py-2.5 px-4 text-slate-900 font-semibold">{op.branch}</td>
                        <td className="py-2.5 px-4 text-slate-600">{op.action}</td>
                        <td className="py-2.5 px-4 text-end">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <span>{op.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* BOTTOM COMMAND STRIP */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">نظام موحد يُهندس خصيصاً لواقع شركتك بعقود استقرار وتشغيل رسمية (SLA)</span>
              </div>
              <button
                onClick={onSelectErp}
                className="px-4 py-2 bg-[#075D91] hover:bg-[#063B5C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5 shrink-0"
              >
                <span>استكشاف المعمارية بالكامل</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};
