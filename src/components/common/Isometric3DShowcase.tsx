import React from 'react';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Store, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  Database,
  Cpu
} from 'lucide-react';

export interface Isometric3DShowcaseProps {
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;
  className?: string;
  sector?: 'retail' | 'printing' | 'education' | 'contracting';
}

export const Isometric3DShowcase: React.FC<Isometric3DShowcaseProps> = ({
  desktopImage,
  tabletImage,
  mobileImage,
  className = '',
  sector = 'retail'
}) => {
  const getSectorDesktopData = () => {
    switch (sector) {
      case 'printing':
        return {
          title: 'منظومة المطابع وحساب الهدر — Central Printing & Offset ERP',
          kpi1Label: 'أوامر الطباعة الجارية',
          kpi1Val: '34 أمر تشغيل',
          kpi2Label: 'دقة تفصيل الورق',
          kpi2Val: '99.4% كفاءة',
          kpi3Label: 'نسبة الهدر المحسوب',
          kpi3Val: '0.6% فقط',
          row1Title: 'أمر تشغيل مطبوعات تجارية - وزن 300 جم',
          row1Cost: '18,400 ج.م',
          row1Badge: 'تسليم مرحلة السلوفان',
          row2Title: 'حجز خامات زنكات وأحبار ياباني',
          row2Cost: '6,200 ج.م',
          row2Badge: 'خصم آلي من الخامات'
        };
      case 'education':
        return {
          title: 'منظومة المراكز التعليمية والأكاديميات — Education & LMS ERP',
          kpi1Label: 'تحصيلات الاشتراكات اليوم',
          kpi1Val: '68,400 ج.م',
          kpi2Label: 'حضور الطلاب بالباركود',
          kpi2Val: '1,240 طالب',
          kpi3Label: 'إشعارات أولياء الأمور',
          kpi3Val: '100% فورية واتساب',
          row1Title: 'سداد قسط دبلومة هندسة البرمجيات - طالب #481',
          row1Cost: '3,200 ج.م',
          row1Badge: 'إيصال إلكتروني مشفر',
          row2Title: 'احتساب نسبة محاضر كورس الذكاء الاصطناعي',
          row2Cost: '4,500 ج.م',
          row2Badge: 'قيد استحقاق تلقائي'
        };
      case 'contracting':
        return {
          title: 'منظومة المقاولات ومستخلصات المشروعات — Contracting ERP',
          kpi1Label: 'مستخلصات معتمدة هذا الشهر',
          kpi1Val: '840,000 ج.م',
          kpi2Label: 'موازنة مراكز التكلفة',
          kpi2Val: '100% منضبطة',
          kpi3Label: 'نسبة إنجاز المواقع',
          kpi3Val: '94.2%',
          row1Title: 'مستخلص توريد وتركيب شبكات - مشروع النرجس',
          row1Cost: '142,000 ج.م',
          row1Badge: 'اعتماد الاستشاري',
          row2Title: 'صرف عهدة مهندس الموقع وشراء مواد خام',
          row2Cost: '28,500 ج.م',
          row2Badge: 'ترحيل مركز تكلفة الموقع'
        };
      case 'retail':
      default:
        return {
          title: 'المنظومة المركزية لإدارة الفروع ونقاط البيع — Retail & POS ERP',
          kpi1Label: 'مبيعات الفروع اليوم',
          kpi1Val: '148,920 ج.م',
          kpi2Label: 'مطابقة القيود المحاسبية',
          kpi2Val: '100% متزنة',
          kpi3Label: 'عجز الجرد والتسريب',
          kpi3Val: '0.00%',
          row1Title: 'فاتورة كاشير فرع سموحة',
          row1Cost: '4,320 ج.م',
          row1Badge: 'قيد مزدوج آلي',
          row2Title: 'إذن تحويل مخزن القاهرة المركزي',
          row2Cost: '850 قطعة',
          row2Badge: 'تم الخصم فوراً'
        };
    }
  };

  const getSectorTabletData = () => {
    switch (sector) {
      case 'printing':
        return {
          barTitle: 'شاشة فني الطباعة والمقص POS — معمل الدعاية',
          itemCode: 'كود أمر الشغل: #PR-942',
          itemDesc: 'تفصيل فرخ 70×100 (متاح 120 باكو)',
          price: '4,200 ج.م',
          badge1Title: 'حساب الهدر',
          badge1Desc: 'محسوب ومخصوم',
          badge2Title: 'التسليم',
          badge2Desc: 'مرحلة التجليد',
          totalLabel: 'إجمالي الأمر:',
          totalVal: '4,200 ج.م',
          btnText: 'اعتماد المرحلة وتسليم التشغيل'
        };
      case 'education':
        return {
          barTitle: 'شاشة الاستقبال وشؤون الطلاب POS — الفرع الرئيسي',
          itemCode: 'كود الطالب: #ST-8840',
          itemDesc: 'المجموعة A2 - كورس البرمجة المتقدمة',
          price: '1,500 ج.م',
          badge1Title: 'الواتساب',
          badge1Desc: 'إشعار فوري لولي الأمر',
          badge2Title: 'الخزينة',
          badge2Desc: 'سند قبض معتمد',
          totalLabel: 'المسدد الآن:',
          totalVal: '1,500 ج.م',
          btnText: 'تسجيل الحضور وطباعة الكارنيه'
        };
      case 'contracting':
        return {
          barTitle: 'نقطة تسجيل التوريدات وأوامر الصرف — موقع العمل',
          itemCode: 'بند المقايسة: #CN-309',
          itemDesc: 'حديد تسليح 12 مم (الموقع رقم 4)',
          price: '85,000 ج.م',
          badge1Title: 'المستخلص',
          badge1Desc: 'مطابق للمواصفات',
          badge2Title: 'العهدة',
          badge2Desc: 'خصم من ميزانية الموقع',
          totalLabel: 'قيمة الإذن:',
          totalVal: '85,000 ج.م',
          btnText: 'اعتماد استلام التوريدة'
        };
      case 'retail':
      default:
        return {
          barTitle: 'نقطة بيع وكاشير POS — فرع الإسكندرية',
          itemCode: 'باركود الصنف: #849201',
          itemDesc: 'المخزن: متاح (48 قطعة)',
          price: '850 ج.م',
          badge1Title: 'الترحيل اللحظي',
          badge1Desc: 'قيد مزدوج تلقائي',
          badge2Title: 'الربط البنكي',
          badge2Desc: 'Paymob معتمد',
          totalLabel: 'الإجمالي:',
          totalVal: '3,450 ج.م',
          btnText: 'إتمام وطباعة الفاتورة'
        };
    }
  };

  const getSectorMobileData = () => {
    switch (sector) {
      case 'printing':
        return {
          profit: '+48,200 ج.م',
          profitLabel: 'مبيعات المطبعة اليوم',
          kpi1: 'الورق المحجوز:',
          kpi1Val: '85 باكو',
          kpi2: 'أوامر جاهزة للتسليم:',
          kpi2Val: '12 أمر',
          actionText: 'اعتماد تشغيل المطبعة'
        };
      case 'education':
        return {
          profit: '+24,800 ج.م',
          profitLabel: 'تحصيلات السناتر اليوم',
          kpi1: 'نسبة الحضور:',
          kpi1Val: '96.8%',
          kpi2: 'مجموعات نشطة:',
          kpi2Val: '18 قاعة',
          actionText: 'إرسال تقرير الإدارة'
        };
      case 'contracting':
        return {
          profit: '+320,000 ج.م',
          profitLabel: 'سيولة المشاريع الحالية',
          kpi1: 'أوامر التوريد:',
          kpi1Val: '7 مواقع',
          kpi2: 'اعتمادات الاستشاري:',
          kpi2Val: '3 معتمدة',
          actionText: 'اعتماد صرف المستخلص'
        };
      case 'retail':
      default:
        return {
          profit: '+32,450 ج.م',
          profitLabel: 'أرباح اليوم',
          kpi1: 'الخزينة:',
          kpi1Val: 'متطابقة',
          kpi2: 'طلبات الفروع:',
          kpi2Val: '14 معتمد',
          actionText: 'اعتماد أذون الصرف'
        };
    }
  };

  const desktopData = getSectorDesktopData();
  const tabletData = getSectorTabletData();
  const mobileData = getSectorMobileData();

  return (
    <div className={`relative w-full pt-1 sm:pt-2 pb-6 sm:pb-8 flex items-center justify-center select-none overflow-visible [perspective:1400px] ${className}`}>
      
      {/* 3D MULTI-DEVICE COMPOSITION (Apple Studio Display + iPad Pro Landscape + iPhone 16 Pro) */}
      <div className="relative w-full max-w-5xl mx-auto flex items-end justify-center min-h-[460px] sm:min-h-[510px] md:min-h-[560px] px-2 sm:px-4 [transform-style:preserve-3d]">
        
        {/* ========================================================================= */}
        {/* 1. STUDIO DISPLAY 27" 5K MONITOR (Center-Back Elevated Master Screen)      */}
        {/* ========================================================================= */}
        <div className="relative z-10 w-[92%] sm:w-[84%] md:w-[78%] flex flex-col items-center transform -translate-y-6 sm:-translate-y-10 [transform:rotateX(1.5deg)] transition-transform duration-500">
          
          {/* Main Chassis: Precision Anodized Aluminum with Specular Edge Highlights */}
          <div className="w-full relative rounded-sm sm:rounded-md p-1.5 sm:p-2 bg-[#0f172a] border-[3px] sm:border-[4px] border-[#334155] shadow-[0_20px_50px_-10px_rgba(15,23,42,0.22)] ring-1 ring-white/25">

            {/* Top FaceTime HD / TrueDepth Camera Lens Array */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 pointer-events-none">
              <span className="w-1 h-1 rounded-full bg-[#05080e] border border-slate-700/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#020408] border border-slate-600 flex items-center justify-center shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-[#061524] flex items-center justify-center">
                  <span className="w-0.5 h-0.5 rounded-full bg-[#00e5ff] shadow-[0_0_3px_#00e5ff]" />
                </div>
              </div>
              <span className="w-1 h-1 rounded-full bg-emerald-400/90 shadow-[0_0_3px_#10b981]" />
            </div>

            {/* SCREEN VIEWPORT: Active 5K Display (Swappable or High-Fidelity ERP) */}
            <div className="w-full h-[275px] sm:h-[350px] md:h-[410px] rounded-xs bg-[#061A28] overflow-hidden flex flex-col text-start relative border border-slate-900 shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)]">
              {desktopImage ? (
                <img 
                  src={desktopImage} 
                  alt="Desktop ERP Screen" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                /* Fallback High-Fidelity Enterprise ERP Screen */
                <div className="w-full h-full flex flex-col bg-white select-none">
                  {/* macOS / Enterprise Window Header */}
                  <div className="bg-[#063B5C] px-3 sm:px-4 py-2 flex items-center justify-between text-white border-b border-[#041D2E] shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-2xs" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-2xs" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-2xs" />
                      </div>
                      <div className="h-3 w-px bg-white/20 mx-1 hidden sm:block" />
                      <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-cyan-200">
                        <Laptop className="w-3 h-3 text-[#00ACD4]" />
                        <span>mwheba://cloud.enterprise.core/live-nodes</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] bg-[#075D91] px-2.5 py-0.5 rounded-xs text-white font-bold border border-white/15 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_4px_#34d399]" />
                      <span>قاعدة بيانات مركزية موحدة</span>
                    </div>
                  </div>

                  {/* Sub Nav & Live Sync Status */}
                  <div className="bg-[#F8FAFC] px-3 sm:px-4 py-1.5 border-b border-slate-200 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-600">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="text-[#075D91] bg-white px-2 py-0.5 rounded-xs border border-slate-200 shadow-2xs">المنظومة المركزية</span>
                      <span>سجل الفواتير</span>
                      <span>الفروع والمخازن</span>
                      <span className="hidden sm:inline">القيود المزدوجة</span>
                    </div>
                    <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200 font-bold">100% متزامن في التو</span>
                  </div>

                  {/* High-Fidelity ERP Dashboard Body */}
                  <div className="p-3 sm:p-4 space-y-2.5 flex-1 overflow-hidden bg-white">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 sm:p-2.5 rounded-xs bg-[#F8FAFC] border border-slate-200 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold block">{desktopData.kpi1Label}</span>
                          <TrendingUp className="w-3 h-3 text-[#075D91]" />
                        </div>
                        <span className="text-xs sm:text-base font-extrabold text-[#075D91] font-mono block mt-0.5">{desktopData.kpi1Val}</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xs bg-[#F8FAFC] border border-slate-200 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold block">{desktopData.kpi2Label}</span>
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-xs sm:text-base font-extrabold text-emerald-700 font-mono block mt-0.5">{desktopData.kpi2Val}</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xs bg-[#F8FAFC] border border-slate-200 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold block">{desktopData.kpi3Label}</span>
                          <Database className="w-3 h-3 text-[#063B5C]" />
                        </div>
                        <span className="text-xs sm:text-base font-extrabold text-[#063B5C] font-mono block mt-0.5">{desktopData.kpi3Val}</span>
                      </div>
                    </div>

                    {/* Table Preview */}
                    <div className="border border-slate-200 rounded-xs overflow-hidden text-[9px] sm:text-[10px] shadow-2xs">
                      <div className="bg-[#F8FAFC] px-3 py-1 font-bold text-slate-600 border-b border-slate-200 flex justify-between">
                        <span>البيان والمركز التشغيلي</span>
                        <span>القيمة / الكمية</span>
                        <span>حالة المعاملة</span>
                      </div>
                      <div className="divide-y divide-slate-100 bg-white">
                        <div className="px-3 py-1.5 flex justify-between text-slate-700">
                          <span className="font-semibold">{desktopData.row1Title}</span>
                          <span className="font-mono text-[#075D91] font-bold">{desktopData.row1Cost}</span>
                          <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-xs border border-emerald-100">{desktopData.row1Badge}</span>
                        </div>
                        <div className="px-3 py-1.5 flex justify-between text-slate-700">
                          <span className="font-semibold">{desktopData.row2Title}</span>
                          <span className="font-mono text-[#075D91] font-bold">{desktopData.row2Cost}</span>
                          <span className="text-blue-700 font-bold bg-blue-50 px-1.5 py-0.5 rounded-xs border border-blue-100">{desktopData.row2Badge}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Precision CNC Aluminum Tilt Stand */}
          <div className="w-22 sm:w-28 h-5 sm:h-6 bg-slate-300 border-x border-slate-400 shadow-inner flex items-center justify-center relative">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#1e293b] border border-slate-400" />
          </div>

          {/* Aluminum Stand Base Plate */}
          <div className="w-40 sm:w-52 h-2 sm:h-2.5 bg-slate-200 rounded-xs shadow-[0_2px_6px_rgba(15,23,42,0.1)] border-t border-slate-300 relative" />

          {/* Simple Realistic Monitor Desk Shadow */}
          <div className="w-44 sm:w-60 h-1 bg-slate-900/15 rounded-full blur-[1px] mt-0.5" />
          <div className="w-60 sm:w-80 h-2.5 bg-slate-900/[0.04] rounded-full blur-sm -mt-0.5" />
        </div>

        {/* ========================================================================= */}
        {/* 2. IPAD PRO / TABLET (Right Flank - Wide Landscape Cashier Terminal)       */}
        {/* ========================================================================= */}
        <div className="absolute -bottom-2 right-0 sm:right-2 md:right-4 z-20 w-[52%] sm:w-[45%] md:w-[39%] transform translate-y-2 sm:translate-y-4 [transform:rotateY(-5deg)_rotateX(2deg)] transition-transform duration-500 flex flex-col items-center">
          
          {/* Outer Tablet Frame with Flat Corporate Frame */}
          <div className="w-full relative bg-[#0f172a] rounded-xs sm:rounded-sm p-1.5 sm:p-2 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.18)] border-2 sm:border-[3px] border-[#334155] ring-1 ring-white/25">
            
            {/* Top Power Button Accent */}
            <div className="absolute -top-1 right-8 w-6 h-1 bg-slate-600 rounded-t-xs border-t border-slate-400/80" />

            {/* Right Volume Rocker Accent */}
            <div className="absolute top-6 -right-1 w-1 h-8 bg-slate-600 rounded-r-xs border-r border-slate-400/80" />

            {/* Tablet Front Camera */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#05080e] border border-slate-700 z-30 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-cyan-400" />
            </div>

            {/* SCREEN VIEWPORT: Swappable Tablet Image */}
            <div className="w-full h-[185px] sm:h-[220px] md:h-[255px] rounded-xs bg-white overflow-hidden flex flex-col text-start relative border border-slate-200 shadow-inner">
              {tabletImage ? (
                <img 
                  src={tabletImage} 
                  alt="Tablet POS Screen" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                /* Fallback Wide POS Tablet Screen */
                <div className="w-full h-full flex flex-col bg-white select-none">
                  {/* Top Bar */}
                  <div className="bg-[#075D91] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#064e7a]">
                    <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold">
                      <Tablet className="w-3 h-3 text-cyan-300" />
                      <span>{tabletData.barTitle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] sm:text-[9px] font-mono bg-white/20 px-1.5 py-0.5 rounded-xs text-cyan-100 border border-white/10 font-bold">
                        &lt; 120ms
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_3px_#34d399]" />
                    </div>
                  </div>

                  {/* Wide 2-Column POS Body */}
                  <div className="p-2 sm:p-2.5 flex-1 bg-slate-50/70 grid grid-cols-12 gap-2">
                    {/* Left: Product & Barcode Grid (7 Cols) */}
                    <div className="col-span-7 space-y-1.5 flex flex-col justify-between">
                      <div className="flex items-center justify-between bg-white p-1.5 rounded-xs border border-slate-200 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-xs bg-[#00ACD4]/10 flex items-center justify-center text-[#075D91] border border-[#00ACD4]/20">
                            <Store className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-[9px] sm:text-[10px] font-bold text-slate-900">{tabletData.itemCode}</div>
                            <div className="text-[7px] sm:text-[8px] text-slate-500">{tabletData.itemDesc}</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-mono font-extrabold text-[#075D91]">{tabletData.price}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1 text-[8px]">
                        <div className="bg-emerald-50 border border-emerald-200 p-1 rounded-xs">
                          <span className="text-emerald-700 font-bold block">{tabletData.badge1Title}</span>
                          <span className="text-slate-600">{tabletData.badge1Desc}</span>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 p-1 rounded-xs">
                          <span className="text-blue-700 font-bold block">{tabletData.badge2Title}</span>
                          <span className="text-slate-600">{tabletData.badge2Desc}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Bill & Checkout Box (5 Cols) */}
                    <div className="col-span-5 bg-white p-2 rounded-xs border border-slate-200 flex flex-col justify-between shadow-2xs">
                      <div className="space-y-1 text-[8px]">
                        <div className="flex justify-between text-slate-500">
                          <span>المركز:</span>
                          <span className="font-bold text-slate-800 font-mono">متزامن</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                          <span>الخصم المعتمد:</span>
                          <span className="font-bold text-emerald-600 font-mono">0.00 ج.م</span>
                        </div>
                        <div className="pt-1 border-t border-slate-100 flex justify-between items-center text-[9px] font-extrabold text-slate-900">
                          <span>{tabletData.totalLabel}</span>
                          <span className="text-[#075D91] font-mono">{tabletData.totalVal}</span>
                        </div>
                      </div>

                      <div className="bg-[#075D91] text-white text-[8px] font-bold py-1 rounded-xs text-center shadow-xs">
                        {tabletData.btnText}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Home Indicator */}
                  <div className="py-0.5 flex justify-center bg-white border-t border-slate-100">
                    <div className="w-16 h-0.5 rounded-full bg-slate-300" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Simple Realistic Tablet Contact Shadow */}
          <div className="w-[88%] h-1 bg-slate-900/15 rounded-full blur-[1px] mt-0.5" />
          <div className="w-[95%] h-2 bg-slate-900/[0.04] rounded-full blur-sm -mt-0.5" />
        </div>

        {/* ========================================================================= */}
        {/* 3. IPHONE 16 PRO (Left Flank - Flat Frame & Dynamic Island)                 */}
        {/* ========================================================================= */}
        <div className="absolute -bottom-2 left-0 sm:left-3 md:left-6 z-30 w-[24%] sm:w-[20%] md:w-[17%] transform translate-y-3 sm:translate-y-6 [transform:rotateY(6deg)_rotateX(2deg)] transition-transform duration-500 flex flex-col items-center">
          
          {/* Flat Titanium Frame Chassis */}
          <div className="w-full relative bg-[#0f172a] rounded-xs sm:rounded-sm p-1.5 sm:p-2 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.2)] border-2 sm:border-[3px] border-[#384252] ring-1 ring-white/25">
            
            {/* Left Action Button & Volume Buttons */}
            <div className="absolute top-5 -left-1 w-1 h-3.5 bg-slate-500 rounded-l-xs border-l border-slate-300/80" />
            <div className="absolute top-10 -left-1 w-1 h-5 bg-slate-500 rounded-l-xs border-l border-slate-300/80" />
            <div className="absolute top-16 -left-1 w-1 h-5 bg-slate-500 rounded-l-xs border-l border-slate-300/80" />

            {/* Right Power/Siri Button */}
            <div className="absolute top-8 -right-1 w-1 h-7 bg-slate-500 rounded-r-xs border-r border-slate-300/80" />

            {/* Dynamic Island Pill with Camera & Sensor Elements */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-2 sm:h-2.5 rounded-xs bg-[#030712] z-30 flex items-center justify-between px-1.5 border border-slate-800 shadow-inner">
              <span className="w-1 h-1 rounded-full bg-[#00ACD4]/90 shadow-[0_0_2px_#00acd4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#050811] border border-slate-700/80 flex items-center justify-center">
                <span className="w-0.5 h-0.5 rounded-full bg-[#1e293b]" />
              </span>
            </div>

            {/* Top Speaker Ear Slit */}
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-slate-800 rounded-full" />

            {/* SCREEN VIEWPORT: Swappable Mobile Image */}
            <div className="w-full h-[200px] sm:h-[240px] md:h-[270px] rounded-xs bg-[#061A28] overflow-hidden flex flex-col text-start relative border border-white/10 text-white shadow-inner">
              {mobileImage ? (
                <img 
                  src={mobileImage} 
                  alt="Mobile Manager App" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                /* Fallback High-Fidelity Mobile App */
                <div className="w-full h-full flex flex-col p-2 pt-5 sm:pt-6 justify-between bg-[#061A28] select-none">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[8px] font-mono text-slate-300 pb-1 border-b border-white/10">
                      <div className="flex items-center gap-1">
                        <Smartphone className="w-2.5 h-2.5 text-[#00ACD4]" />
                        <span>MWHEBA GO</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_3px_#34d399]" />
                    </div>

                    <div className="bg-[#0B2538] p-1.5 rounded-xs border border-[#00ACD4]/30 shadow-2xs">
                      <span className="text-[7px] sm:text-[8px] text-slate-400 block font-semibold">{mobileData.profitLabel}</span>
                      <span className="text-[10px] sm:text-xs font-extrabold text-cyan-300 font-mono block">
                        {mobileData.profit}
                      </span>
                    </div>

                    <div className="bg-[#0B2538] p-1.5 rounded-xs border border-white/10 space-y-0.5 text-[7px] sm:text-[8px]">
                      <div className="flex justify-between">
                        <span className="text-slate-300">{mobileData.kpi1}</span>
                        <span className="font-mono text-emerald-300 font-bold">{mobileData.kpi1Val}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">{mobileData.kpi2}</span>
                        <span className="font-mono text-cyan-300 font-bold">{mobileData.kpi2Val}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Button */}
                  <div className="space-y-1.5">
                    <div className="bg-[#075D91] text-white text-[7px] sm:text-[8px] font-bold py-1 px-1.5 rounded-xs text-center shadow-xs border border-white/15">
                      {mobileData.actionText}
                    </div>

                    {/* Bottom Home Swipe Bar */}
                    <div className="flex justify-center pt-0.5">
                      <div className="w-8 h-0.5 rounded-full bg-white/40" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Simple Realistic Mobile Contact Shadow */}
          <div className="w-[82%] h-1 bg-slate-900/15 rounded-full blur-[1px] mt-0.5" />
          <div className="w-[90%] h-2 bg-slate-900/[0.04] rounded-full blur-sm -mt-0.5" />
        </div>

      </div>
    </div>
  );
};

