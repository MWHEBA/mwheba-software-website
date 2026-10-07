import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Store,
  Warehouse,
  Calculator,
  GraduationCap,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Database,
  Sparkles,
  Activity,
  FileText,
  Lock,
  BarChart3,
  Building2,
  HelpCircle,
  ChevronDown,
  Printer,
  QrCode,
  Truck,
  CreditCard,
  MessageSquare,
  Zap,
  Server,
  Code2,
  Users,
  PhoneCall,
  UserCheck,
  Target,
  FileCheck2,
  Clock,
  Briefcase
} from 'lucide-react';
import { SolutionId, CaseStudy } from '../types';
import { solutionsData } from '../data/solutionsData';
import { caseStudiesData } from '../data/caseStudiesData';
import { SolutionSimulator } from '../components/solutions/SolutionSimulators';

interface SolutionDetailPageProps {
  solutionId: SolutionId;
  onSelectSolution: (id: SolutionId) => void;
  onStartProject: (serviceName?: string) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onNavigateHome: () => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  solutionId,
  onSelectSolution,
  onStartProject,
  onSelectCaseStudy,
  onNavigateHome
}) => {
  const currentSolution = solutionsData.find(s => s.id === solutionId) || solutionsData[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Helper icons per solution
  const getSolutionIcon = (id: SolutionId) => {
    switch (id) {
      case 'sales-pos':
        return <Store className="w-6 h-6 text-[#075D91]" />;
      case 'inventory-supply':
        return <Warehouse className="w-6 h-6 text-[#075D91]" />;
      case 'finance-accounting':
        return <Calculator className="w-6 h-6 text-[#075D91]" />;
      case 'hr-payroll':
        return <Users className="w-6 h-6 text-[#075D91]" />;
      case 'crm-pipeline':
        return <Target className="w-6 h-6 text-[#075D91]" />;
      case 'printing-production':
        return <Printer className="w-6 h-6 text-[#075D91]" />;
      case 'education-academy':
        return <GraduationCap className="w-6 h-6 text-[#075D91]" />;
      case 'automation-integrations':
        return <Cpu className="w-6 h-6 text-[#075D91]" />;
      case 'bespoke-portals':
        return <Layers className="w-6 h-6 text-[#075D91]" />;
      default:
        return <Database className="w-6 h-6 text-[#075D91]" />;
    }
  };

  // Associated case study mapper
  const getRelatedCaseStudy = (id: SolutionId) => {
    switch (id) {
      case 'sales-pos':
        return caseStudiesData[0]; // Commercial Wholesale & POS
      case 'inventory-supply':
        return caseStudiesData[0]; // Multi-Branch Warehouse Operations
      case 'finance-accounting':
        return caseStudiesData[1]; // Corporate Services & Ledger
      case 'hr-payroll':
        return caseStudiesData[1]; // Corporate Operations & HR
      case 'crm-pipeline':
        return caseStudiesData[1]; // Corporate Clients
      case 'printing-production':
        return caseStudiesData[2]; // Printing Press & Job Orders
      case 'education-academy':
        return caseStudiesData[3]; // Educational Institution & Academy
      case 'automation-integrations':
        return caseStudiesData[1]; // WhatsApp & SLA Services
      case 'bespoke-portals':
        return caseStudiesData[2]; // Custom Operations
      default:
        return caseStudiesData[0];
    }
  };

  // Domain-specific problem friction points
  const getFrictionPoints = (id: SolutionId) => {
    switch (id) {
      case 'sales-pos':
        return [
          { problem: 'طوابير انتظار طويلة وتأخر إصدار الفواتير في ساعات الذروة', solution: 'كاشير فائق السرعة بزمن استجابة < 80ms مع دعم كامل للعمل أوفلاين دون انقطاع.' },
          { problem: 'تسريب مالي وعجز في النقدية عند تقفيل الوردية اليومية', solution: 'تقفيل آلي ومطابقة فورية بين فواتير النظام، الخزينة النقدية، ومدفوعات الفيزا.' },
          { problem: 'تلاعب الكاشير بأسعار البيع أو تقديم خصومات عشوائية', solution: 'محرك حماية الأسعار يمنع التعديل ويتحقق لحظياً مع قائمة أسعار العميل المعتمدة.' }
        ];
      case 'inventory-supply':
        return [
          { problem: 'عجز غير مبرر في البضاعة وتضارب أرصدة المستودعات والفروع', solution: 'تتبع صارم لحركة كل صنف بأذون صرف وإضافة رقمية مشفرة بالباركود.' },
          { problem: 'توقف المبيعات فجأة بسبب نفاد أصناف أساسية غير مرصودة', solution: 'تنبيهات استباقية عند الوصول لحد إعادة الطلب مع توليد أوامر الشراء آلياً.' },
          { problem: 'تعطيل العمل وإغلاق المستودعات لعدة أيام لإجراء الجرد السنوي', solution: 'جرد دوري مستمر بالباركود أثناء ساعات العمل اليومية دون أي إيقاف للمبيعات.' }
        ];
      case 'finance-accounting':
        return [
          { problem: 'تشتت البيانات في شيتات إكسيل منفصلة وأخطاء حسابية مكررة', solution: 'ترحيل آلي فوري للقيود المحاسبية المزدوجة مع كل حركة بيع، شراء، أو سداد.' },
          { problem: 'تأخر معرفة أرباح الشركة الحقيقية والسيولة لأسابيع', solution: 'قوائم دخل، موازين مراجعة، وتقارير أرباح وخسائر لحظية بضغطة زر.' },
          { problem: 'صعوبة الرقابة على عهد الموظفين ومصروفات الفروع المتعددة', solution: 'شجرة حسابات ديناميكية 5 مستويات ومراكز تكلفة مفصلة ترصد كل مليم.' }
        ];
      case 'hr-payroll':
        return [
          { problem: 'استغراق أيام طويلة لحساب مسير الرواتب والخصومات والبدلات يدوياً', solution: 'محرك رواتب آلي يحتسب الراتب والبدلات وأقساط السلف والجزاءات في ثوانٍ.' },
          { problem: 'تضارب سجلات الحضور وتلاعب الموظفين في مواعيد الحضور والانصراف', solution: 'مزامنة مباشرة مع أجهزة البصمة الشبكية (ZKTeco) تمنع التعديل اليدوي تماماً.' },
          { problem: 'ضياع عهد الشركة (لابتوبات، سيارات، أجهزة) عند استقالة الموظف', solution: 'سجل عهد عينية رقمي يوثق تاريخ الاستلام والتسليم وحالة كل عهدة بدقة.' }
        ];
      case 'crm-pipeline':
        return [
          { problem: 'ضياع العملاء المحتملين القادمين من الإعلانات دون متابعة سريعة', solution: 'استقبال فوري للـ Leads وتوزيع ذكي على التيلسيلز مع إشعارات تنبيه فورية.' },
          { problem: 'عدم وضوح مراحل الصفقات ونسب إغلاق البيع لكل موظف مبيعات', solution: 'لوحة كانبان تفاعلية توضح كل فرصة بيع في أي مرحلة وموعد المتابعة القادم.' },
          { problem: 'تأخر الرد على شكاوى العملاء واستياء العميل من خدمة ما بعد البيع', solution: 'منظومة تذاكر دعم فني (Helpdesk) تحسب زمن الاستجابة وفق اتفاقيات الـ SLA.' }
        ];
      case 'printing-production':
        return [
          { problem: 'أخطاء حسابية في مقاسات الورق تؤدي لهدر كبير وخسائر بالآلاف', solution: 'حاسبة هندسية للمقاسات تحدد التقطيع الأمثل وحساب الهدر المعياري بدقة.' },
          { problem: 'اطلاع عمال صالة التشغيل على أسعار وهوامش ربح الشركة مع العميل', solution: 'طباعة تذاكر تشغيل معزولة للمشغل بالمواصفات الفنية فقط وحجب الأسعار تماماً.' },
          { problem: 'تعديل أسعار أو مواصفات أمر الشغل أثناء دوران الماكينات في الصالة', solution: 'قفل وتجميد الفاتورة آلياً بمجرد بدء أمر الشغل على خط الإنتاج.' }
        ];
      case 'education-academy':
        return [
          { problem: 'تشتت حسابات مصروفات الإخوة ومتابعة أقساط كل طالب في كشف منفصل', solution: 'حساب عائلي موحد لولي الأمر يجمع كافة الأبناء مع احتساب خصومات الإخوة آلياً في قيد واحد.' },
          { problem: 'تأجيل حضور الطلاب وإلغاء حجز الدفعات وتضارب حساب عمولات المحاضرين', solution: 'إعادة تسكين آلي للطلاب المؤجلين في الدفعات التالية مع حوكمة سقف الخصومات ونسب المدربين.' },
          { problem: 'صعوبة تتبع أسطول باصات المدرسة ومشرفي الخطوط ومخاطر تزوير الشهادات الأكاديمية', solution: 'إدارة شاملة لخطوط الباصات والمشرفين مع إصدار شهادات رقمية بـ QR مشفر وبوابة تحقق عامة.' }
        ];
      case 'automation-integrations':
        return [
          { problem: 'إدخال يدوي مكرر للبيانات بين بوابات الدفع وبرامج الشحن', solution: 'تكامل مباشر مع Paymob، فوري، Bosta، وAramex لتوليد البوالص والتحصيل آلياً.' },
          { problem: 'تكرار قيد المعاملات المالية أو الدفعات عند انقطاع الاتصال', solution: 'بوابة حوكمة مشفرة (Idempotency Key) تمنع تكرار أي معاملة نهائياً.' },
          { problem: 'تأخر إبلاغ العملاء بتحديثات الطلبات وفواتير الشراء', solution: 'إرسال آلي لفواتير ورسائل تتبع الشحنات عبر WhatsApp Business Cloud API.' }
        ];
      case 'bespoke-portals':
        return [
          { problem: 'البرامج الجاهزة تفرض قوالب جامدة لا تناسب دورة عملك الخاصة', solution: 'هندسة معمارية تُبنى بالكامل حول دورتك التشغيلية وأوامر شغلك الفعلية.' },
          { problem: 'اشتراكات شهرية متصاعدة للأبد تدفعها عن كل مستخدم وفرع', solution: 'استثمار أصولي برخصة تشغيل دائمة وملكية تامة 100% لكود المصدر وقواعد البيانات.' },
          { problem: 'صعوبة تواصل مقاولي الباطن والموزعين مع الإدارة المركزية', solution: 'بوابات خدمة ذاتية تفاعلية للشركاء تتيح متابعة الطلبات والاعتمادات لحظياً.' }
        ];
      default:
        return [];
    }
  };

  // Domain FAQs
  const getDomainFaqs = (id: SolutionId) => {
    switch (id) {
      case 'sales-pos':
        return [
          { q: 'ماذا يحدث إذا انقطع الاتصال بالإنترنت أثناء عمل الكاشير؟', a: 'المنظومة مزودة بخاصية العمل بدون إنترنت (Offline-Ready)؛ يستمر الكاشير في إصدار الفواتير والطباعة بالباركود بشكل طبيعي، وبمجرد عودة الاتصال تتم المزامنة تلقائياً مع الخزينة المركزية دون أي تدخل.' },
          { q: 'هل يدعم النظام طابعات الإيصالات والباركود وأدراج النقدية المتاحة لدينا؟', a: 'نعم، يدعم النظام كافة أنواع طابعات الفواتير الحرارية (Thermal POS Printers)، وقارئات الباركود اللاسلكية والسلكية، وأدراج النقدية الإلكترونية.' },
          { q: 'كيف يتم التحكم في صلاحيات الكاشير ومنع التلاعب بالأسعار أو الخصومات؟', a: 'يحدد النظام صلاحيات دقيقة (RBAC)؛ حيث لا يمكن للكاشير تطبيق خصم أو إلغاء فاتورة إلا بموافقة المشرف أو عبر كلمة سر إدارية مسجلة في سجل الرقابة.' }
        ];
      case 'inventory-supply':
        return [
          { q: 'هل يمكن إدارة أكثر من مستودع مركزي وفروع متعددة في نفس الوقت؟', a: 'نعم، المنظومة مصممة لإدارة شبكة مخازن لا نهائية، مع إمكانية التحويل بين المستودعات وتتبع الشحنات بين الفروع بدقة تامة.' },
          { q: 'كيف يمنع النظام حدوث عجز أو بيع أصناف نفدت بالفعل؟', a: 'يقوم النظام بحجز الكميات المباعة فورياً (ATP Reservation)، ويمنع إصدار أي فاتورة بيع لصنف غير متوفر، مع إطلاق تنبيهات ذكية عند الوصول لحد الأمان المخزني.' },
          { q: 'هل يدعم النظام طريقتي التقييم FIFO والمتوسط المرجح؟', a: 'نعم، يمكنك اختيار سياسة تقييم المخزون المناسبة لكل صنف أو فئة، ويقوم محرك التقييم باحتساب تكلفة البضاعة بدقة متناهية.' }
        ];
      case 'finance-accounting':
        return [
          { q: 'هل يحتاج المحاسب لإدخال قيود اليومية يدوياً بعد كل عملية بيع أو شراء؟', a: 'لا، يقوم المحرك المحاسبي بتوليد وترحيل القيود المزدوجة آلياً لحظة حفظ أي فاتورة، إذن صرف، أو سند قبض، مع بقاء إمكانية إضافة قيود يدوية وتعديلها للمحاسبين المصرح لهم.' },
          { q: 'هل يدعم النظام مراكز التكلفة للفروع والمشاريع المستقلة؟', a: 'نعم، تدعم شجرة الحسابات مراكز تكلفة متعددة المستويات لتحديد أرباح ومصروفات كل فرع، مشروع، أو خط إنتاج بشكل منفصل.' },
          { q: 'كيف يتعامل النظام مع تعدد العملات وفروق أسعار الصرف؟', a: 'يتضمن النظام خدمة FXRevaluationService لإعادة تقييم الحسابات الأجنبية في نهاية كل فترة وترحيل أرباح وخسائر الصرف غير المحققة آلياً.' }
        ];
      case 'hr-payroll':
        return [
          { q: 'كيف يتم ربط النظام بأجهزة البصمة الموجودة في الشركة؟', a: 'يتم الربط الشبكي المباشر عبر بروتوكولات ZKTeco القياسية، ويقوم النظام بسحب سجلات البصمة لحظة بلحظة ومطابقتها مع شفتات العمل.' },
          { q: 'هل يمكن احتساب الجزاءات والبدلات والسلف آلياً في مسير الرواتب؟', a: 'نعم، يقوم محرك الرواتب بجمع كافة عناصر الأجر (الأساسي، البدلات، المكافآت، خصم أقساط السلف، والجزاءات) وتوليد صافي المرتب وترحيل القيد المحاسبي تلقائياً.' },
          { q: 'هل يدعم النظام تسجيل الحضور للمناديب الميدانيين عبر GPS؟', a: 'نعم، يتوفر نظام Geofencing GPS اختياري يسمح للموظفين الميدانيين بإثبات الحضور من مواقع العمل المعتمدة عبر تطبيق الموبايل.' }
        ];
      case 'crm-pipeline':
        return [
          { q: 'هل يمكن استيراد العملاء المحتملين من إعلانات فيسبوك وإنستجرام تلقائياً؟', a: 'نعم، نوفر ربطاً مباشراً مع Lead Ads لاستقبال العملاء المحتملين في نفس لحظة تسجيلهم على الإعلان وتعيينهم لمسؤول المبيعات فوراً.' },
          { q: 'هل يمكن تخصيص مراحل خط الصفقات (Deals Pipeline) لتناسب طبيعة مبيعاتنا؟', a: 'نعم، يمكنك إضافة وتعديل أي مرحلة في لوحة الكانبان لتطابق دورة مبيعات شركتك وتحديد شروط الانتقال بين المراحل.' },
          { q: 'كيف يساعد النظام في متابعة أداء مسؤولي المبيعات؟', a: 'يقدم النظام تقارير مفصلة عن عدد المكالمات، الزيارات، العروض المقدمة، ونسبة تحويل الصفقات لكل موظف مبيعات.' }
        ];
      case 'printing-production':
        return [
          { q: 'كيف تحسب المنظومة عدد أفرخ الورق والهدر في أمر الشغل؟', a: 'تحتوي المنظومة على حاسبة مقاسات هندسية تختار التقطيع الأمثل من أفرخ الورق القياسية وتحسب هدر التجهيز وهدر السحب حسب عدد الألوان وكمية الطباعة.' },
          { q: 'هل يتم إخفاء أسعار البيع وهوامش الربح عن عمال صالة الماكينات؟', a: 'نعم، تطبع المنظومة تذكرة تشغيل فنية معزولة (Segregated Floor Ticket) تحتوي على المواصفات الفنية فقط وتخفي أي أرقام مالية تماماً.' },
          { q: 'هل تحسب المنظومة تكلفة مراحل التشطيب مثل السلوفان والبصمة والتكسير؟', a: 'نعم، تحسب المنظومة تكلفة كافة مراحل التشطيب الخارجي والداخلي بدقة متناهية وتدمجها في التكلفة الإجمالية لأمر الشغل.' }
        ];
      case 'education-academy':
        return [
          { q: 'كيف يدعم النظام الحساب العائلي الموحد لولي الأمر ومصروفات الإخوة؟', a: 'يسمح النظام بربط جميع الأبناء بملف ولي أمر واحد بحساب أستاذ موحد، مع تطبيق نسب الخصم المعتمدة للأخ الثاني والثالث آلياً وإصدار إيصال تحصيل شامل لكل العائلة.' },
          { q: 'كيف يتعامل النظام مع الطلاب المؤجلين (Postponed/Deferred) وإعادة تسكينهم في دفعات تالية؟', a: 'يحفظ النظام رصيد الدفعات والرسوم المسددة في محفظة الطالب، وعند فتح دفعة (Batch) جديدة يُعاد تسكينه بضغطة زر مع ضبط جدول الحضور واحتساب عمولة المحاضر تلقائياً.' },
          { q: 'هل تشمل المنظومة إدارة باصات المدرسة، الزي المدرسي، ونقاط بيع الكانتين؟', a: 'نعم، تتضمن المنظومة موديول كامل لأسطول الباصات وتوزيع الطلاب والسائقين والمشرفين، بالإضافة لنقاط بيع (POS) للكانتين المدرسي ومتجر الزي الموحد.' },
          { q: 'كيف يتم التحقق من صحة الشهادات الصادرة عبر رمز الـ QR المشفر؟', a: 'كل شهادة تصدر بصفحة تحقق رسمية مشفرة على دومين مؤسستك، يتيح مسح الـ QR عرض اسم الطالب، التقدير، وتاريخ الاعتماد لمنع التزوير تماماً.' }
        ];
      case 'automation-integrations':
        return [
          { q: 'ما هي بوابات الدفع الإلكتروني التي يمكن ربطها بالنظام؟', a: 'ندعم الربط المباشر مع Paymob، فوري (Fawry)، المحافظ الإلكترونية، وبطاقات الائتمان، مع مطابقة آلية للمدفوعات في الحسابات فور السداد.' },
          { q: 'كيف يتم ربط شركات الشحن مثل Bosta أو Aramex؟', a: 'بمجرد تأكيد الطلب، يقوم النظام بإنشاء البوليصة على حسابك في شركة الشحن وطباعتها وتحديث حالة الشحنة لحظياً عبر الـ Webhooks.' },
          { q: 'كيف تضمن المنظومة عدم تكرار القيود أو الدفعات المالية عند بطء النت؟', a: 'تستخدم المنظومة معيار Idempotency Key Gateway، حيث يُمنح كل طلب مالي توكن فريد يمنع تكرار تنفيذه مهما تكررت المحاولات.' }
        ];
      case 'bespoke-portals':
        return [
          { q: 'لماذا أختار نظاماً مخصصاً بدلاً من شراء برنامج جاهز مشهور؟', a: 'البرامج الجاهزة تجبرك على تغيير دورتك لتناسب قالبها وتلزمك باشتراكات شهرية متصاعدة. النظام المخصص يُبنى حول ميزتك التنافسية وطريقة عملك وتملكه للأبد كأصل دائم لشركتك.' },
          { q: 'من يملك كود المصدر وقواعد البيانات بعد تسليم المشروع؟', a: 'تملك شركتك كود المصدر وقواعد البيانات بنسبة 100%، مع رخصة تشغيل دائمة وغير مقيدة بعدد المستخدمين أو الفروع.' },
          { q: 'هل يمكن بناء بوابات ويب تفاعلية لعملائنا أو لمقاولي الباطن؟', a: 'نعم، نصمم بوابات خدمة ذاتية متصلة بقاعدة بياناتك المركزية بصلاحيات مشفرة تتيح لشركائك متابعة العمليات والاعتمادات دون الدخول للنظام الداخلي.' }
        ];
      default:
        return [];
    }
  };

  const relatedCase = getRelatedCaseStudy(solutionId);
  const frictionList = getFrictionPoints(solutionId);
  const faqList = getDomainFaqs(solutionId);

  return (
    <div className="pt-20 bg-white text-[#0F1E29] text-start">

      {/* 1. HERO SECTION FOR THIS SOLUTION */}
      <section className="bg-[#063B5C] text-white pt-12 pb-16 sm:pb-20 border-b border-[#075D91] relative overflow-hidden">
        
        {/* Subtle decorative background grid */}
        <div className="absolute inset-0 saasable-dots-bg opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              الرئيسية
            </button>
            <span className="text-slate-500">/</span>
            <button onClick={() => onSelectSolution(solutionId)} className="hover:text-white transition-colors cursor-pointer text-[#00ACD4]">
              الحلول والأنظمة
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200 truncate max-w-[200px] sm:max-w-none">
              {currentSolution.name_ar || currentSolution.name}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="text-[#00ACD4] font-mono font-extrabold">// المنظومة رقم {currentSolution.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ACD4] animate-pulse" />
                <span>رخصة تشغيل دائمة وملكية كاملة</span>
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                {currentSolution.name_ar || currentSolution.name}
              </h1>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed">
                {currentSolution.tagline_ar || currentSolution.tagline}
              </p>

              {/* Extended Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {currentSolution.extendedDescription_ar || currentSolution.extendedDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onStartProject(currentSolution.name_ar || currentSolution.name)}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#063B5C] bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-[#075D91]" />
                  <span>طلب دراسة وتحليل هذا النظام</span>
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectCaseStudy(relatedCase)}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>استعراض قصة النجاح المرتبطة</span>
                </button>
              </div>

            </div>

            {/* Right Quick Summary Card (4 Cols) */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 p-6 space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-white font-bold text-sm">
                {getSolutionIcon(solutionId)}
                <span>مواصفات المعمارية والتشغيل</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">نوع الترخيص:</span>
                  <span className="font-bold text-emerald-400">رخصة تشغيل دائمة (Perpetual)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">ملكية البيانات والكود:</span>
                  <span className="font-bold text-white">100% ملك العميل</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">قواعد البيانات:</span>
                  <span className="font-bold text-cyan-300">PostgreSQL / MySQL معزولة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">زمن الاستجابة:</span>
                  <span className="font-bold text-emerald-400 font-mono">&lt; 100ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">ضمان الاستقرار:</span>
                  <span className="font-bold text-white">اتفاقية SLA معتمدة</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>نسخ احتياطي يومي مشفر وتدخل هندسي 24/7</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 2. THE OPERATIONAL PROBLEM (التحديات التشغيلية التي يقضي عليها النظام) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-slate-200 mb-3 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>معالجة المشاكل الجذرية</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
              التحديات التشغيلية التي تقضي عليها هذه المنظومة
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              مقارنة مباشرة بين المعاناة اليومية قبل تطبيق النظام، والحل الهندسي الفوري بعد تشغيله.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {frictionList.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 text-slate-700 space-y-1.5">
                    <span className="text-[11px] font-bold text-rose-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                      <span>المشكلة قبل التطبيق:</span>
                    </span>
                    <p className="text-xs leading-relaxed">{item.problem}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-800 space-y-1.5">
                    <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>الحل الهندسي من موهبة:</span>
                    </span>
                    <p className="text-xs leading-relaxed font-medium">{item.solution}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#075D91]" />
                  <span>تطبيق مؤتمت 100% بدون أخطاء بشرية</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 3. CORE ARCHITECTURAL MODULES & CAPABILITIES (Core vs Optional Breakdown) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 3.1 CORE BUILT-IN CAPABILITIES */}
          <div>
            <div className="mb-8 text-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-slate-200 mb-3 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>المميزات والخصائص الأساسية (المدمجة في المنظومة)</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
                المكونات التشغيلية التي تستلمها جاهزة للعمل فوراً
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                الوحدات الأساسية المصممة لإدارة الدورة اليومية بأعلى كفاءة وسرعة استجابة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(currentSolution.keyCapabilities_ar || currentSolution.keyCapabilities).map((cap, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#075D91]/40 transition-all flex flex-col justify-between space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs text-[#075D91] font-mono font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      أساسي مدمج
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {cap}
                  </h3>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>تشغيل فوري مع إعدادات المنظومة</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3.2 OPTIONAL ADVANCED ADD-ONS */}
          {currentSolution.optionalCapabilities_ar && currentSolution.optionalCapabilities_ar.length > 0 && (
            <div className="pt-8 border-t border-slate-100">
              <div className="mb-8 text-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-slate-200 mb-3 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00ACD4]" />
                  <span>الإمكانيات والخيارات المتقدمة (إضافات اختيارية حسب نشاطك)</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#075D91] tracking-tight leading-tight">
                  ترقيات ووحدات إضافية يمكنك تفعيلها مع نمو أعمالك
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  حلول متقدمة للشركات متعددة الفروع أو التي تحتاج لتكاملات معقدة.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentSolution.optionalCapabilities_ar.map((opt, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#00ACD4] transition-all flex flex-col justify-between space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-[#F5F9FB] border border-slate-200 flex items-center justify-center shrink-0 text-[#075D91]">
                        <Zap className="w-4 h-4 text-[#00ACD4]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#075D91] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                        ترقية اختيارية
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {opt}
                    </h3>

                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <Lock className="w-3.5 h-3.5 text-[#00ACD4] shrink-0" />
                      <span>تفعيل مخصص حسب متطلبات المشروع</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>


      {/* 4. INTERACTIVE LIVE SIMULATOR FOR THIS DOMAIN */}
      <section className="py-16 sm:py-20 bg-[#063B5C] text-white border-b border-[#041D2E] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-10 text-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-200 uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 mb-3">
              <Activity className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>محاكي تشغيلي تفاعلي</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white tracking-tight leading-snug">
              تجربة حية لآلية عمل المنظومة وسرعة استجابتها
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              شاهد كيف تُنفذ العمليات اليومية مع الخصم اللحظي للمخزون والترحيل التلقائي.
            </p>
          </div>

          {/* MODULAR INTERACTIVE SIMULATOR COMPONENT */}
          <SolutionSimulator solutionId={solutionId} />

        </div>
      </section>


      {/* 5. VERIFIED BUSINESS OUTCOMES & ROI */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-slate-200 mb-3 shadow-2xs">
              <BarChart3 className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>الأثر التشغيلي والمالي</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
              العائد الحقيقي على الاستثمار (ROI) بالأرقام
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              نتائج واقعية تحققها المؤسسات فور تشغيل هذه المنظومة في بيئة العمل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(currentSolution.businessOutcomes_ar || currentSolution.businessOutcomes).map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {outcome}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 font-medium">
                  موثق ومقاس في سابقة الأعمال الفعلية
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. TARGET SECTORS & FIT */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#00ACD4]" />
                <span>الأنشطة والقطاعات المستهدفة</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
                لمن صُممت هذه المنظومة البرمجية؟
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentSolution.idealFor_ar || currentSolution.idealFor}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                {currentSolution.techFocus.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-[#075D91] shadow-2xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Real-World Case Study Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 text-start">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-[#075D91] bg-[#F5F9FB] px-3 py-1 rounded-full border border-slate-200">
                  قصة نجاح مرتبطة بالمنظومة
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {relatedCase.timeline_ar || relatedCase.timeline}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {relatedCase.title_ar || relatedCase.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {relatedCase.industry_ar || relatedCase.industry} · {relatedCase.clientCategory_ar || relatedCase.clientCategory}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {relatedCase.solution_ar || relatedCase.solution}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs font-bold text-emerald-700">
                  {relatedCase.results[0]?.metric} {relatedCase.results[0]?.label_ar || relatedCase.results[0]?.label}
                </div>
                <button
                  onClick={() => onSelectCaseStudy(relatedCase)}
                  className="text-xs font-bold text-[#075D91] hover:text-[#063B5C] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>قراءة دراسة الحالة كاملة</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#075D91] uppercase tracking-wider bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-slate-200 mb-3 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#00ACD4]" />
              <span>الأسئلة الشائعة حول المنظومة</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#075D91] tracking-tight leading-snug">
              إجابات مباشرة على استفساراتكم التقنية والتشغيلية
            </h2>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] overflow-hidden transition-all text-start"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-start font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#075D91] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 8. QUICK SOLUTION SWITCHER (Explore Other Solutions) */}
      <section className="py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#075D91] uppercase tracking-wider block font-mono">// منظومة متكاملة</span>
              <h3 className="text-lg font-bold text-slate-900">استكشف باقي أنظمة شركة موهبة (الأنظمة الـ 9)</h3>
            </div>
            <button
              onClick={() => onSelectSolution('sales-pos')}
              className="text-xs font-bold text-[#075D91] hover:text-[#063B5C] flex items-center gap-1 cursor-pointer"
            >
              <span>العودة للمنظومة الأولى</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {solutionsData
              .filter(s => s.id !== solutionId)
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSelectSolution(s.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#075D91] hover:bg-[#F5F9FB] transition-all text-start group cursor-pointer shadow-2xs flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#075D91] font-mono">// {s.number}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#075D91] rotate-180 transition-transform group-hover:-translate-x-1" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#075D91] line-clamp-1">
                    {s.name_ar || s.name}
                  </span>
                </button>
              ))}
          </div>

        </div>
      </section>


      {/* 9. BOTTOM CTA STRIP */}
      <section className="py-16 sm:py-20 bg-[#063B5C] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-cyan-300">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
            جاهز لتشغيل {currentSolution.name_ar || currentSolution.name} في شركتك؟
          </h2>

          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            استلم منظومة مستقرة، سريعة، ومحمية برخصة تشغيل دائمة وملكية تامة لكود المصدر وقواعد البيانات.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onStartProject(currentSolution.name_ar || currentSolution.name)}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#063B5C] bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#075D91]" />
              <span>{currentSolution.contextualCta_ar || 'بدء دراسة المشروع الفنية والمالية'}</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all cursor-pointer"
            >
              <span>العودة للرئيسية</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
