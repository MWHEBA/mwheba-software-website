import { Solution } from '../types';

export const solutionsData: Solution[] = [
  {
    id: 'sales-pos',
    number: '01',
    name: 'Sales, POS & Commercial Pipeline',
    name_ar: 'المبيعات ونقاط البيع والفواتير (POS & Sales)',
    tagline: 'High-speed POS, electronic invoicing, customer profiles, price lists, and instant quotation cycles.',
    tagline_ar: 'كاشير فائق السرعة، فواتير إلكترونية معتمدة، إدارة بيانات العملاء، وحماية الأسعار.',
    description: 'Fast-paced sales and cashier engine connecting retail branches and sales reps directly with treasury and central ledgers.',
    description_ar: 'منظومة مبيعات سريعة تربط الفروع والمعارض بالخزينة الرئيسية وتمنع تأخير العملاء في أوقات الذروة.',
    extendedDescription: 'Engineered for high transaction velocity and flawless cash reconciliation. Supports barcode scanning, compliant e-invoicing, smart price protection, customer credit control, offline-ready branch resilience, and one-click end-of-day register closing without discrepancies.',
    extendedDescription_ar: 'صُممت منظومة المبيعات ونقاط البيع لتلبي سرعة معاملات البيع بالباركود، وإصدار الفواتير المعتمدة، وإدارة بيانات وسجلات العملاء وقوائم الأسعار، مع محرك حماية الأسعار ومنع التلاعب وتقفيل آلي للخزائن وتسوية العهد اليومية فورياً.',
    keyCapabilities: [
      'High-speed offline-ready barcode POS cashier for peak trading periods',
      'Compliant electronic invoicing, receipt printing, and barcode processing',
      'Smart price protection engine resolving customer price lists in O(1) time',
      'Real-time inventory reservation (ATP) preventing overselling across branches',
      'Customer directory management, client profiles, and quotation cycles',
      'Automated daily shift closing, cash drawer audit, and treasury sync'
    ],
    keyCapabilities_ar: [
      'كاشير سريع بالباركود يدعم العمل بدون إنترنت (Offline-Ready) دون توقف',
      'إصدار الفواتير الإلكترونية المعتمدة وطباعة الإيصالات والباركود فورياً',
      'محرك حماية الأسعار ومنع التلاعب مع مطابقة قوائم أسعار العميل المعتمدة آلياً',
      'حجز المخزون اللحظي (ATP Reservation) لمنع تكرار بيع الصنف في فروع أخرى',
      'إدارة بيانات وسجلات العملاء وفئات التسعير وإصدار عروض الأسعار',
      'تقفيل الخزائن والشفتات اليومية وجرد الدرج ومطابقة النقدية والفيزا'
    ],
    optionalCapabilities: [
      'Sales return workflows with automated credit note generation and inventory return',
      'Customer loyalty points, promotional discounts, and gift vouchers',
      'Credit limit checks and customer purchase history tracking at checkout',
      'Direct integration with ETA Egyptian Tax Authority e-invoicing portal',
      'Direct bank POS payment machine integration (Card terminal sync)',
      'Mobile POS & field sales rep application with portable Bluetooth printing'
    ],
    optionalCapabilities_ar: [
      'إشعارات الخصم الدائنة (Credit Notes) وإدارة مرتجعات البيع واسترجاع المخزون',
      'برامج الولاء والنقاط والكوبونات والخصومات الترويجية للعملاء',
      'فحص سقف الائتمان والمديونية وسجل مشتريات العميل لحظة إصدار الفاتورة',
      'السداد بخصم مسحوبات وأرصدة الشركاء والمديرين (PartnerAdvance)',
      'الربط المباشر مع منظومة الفاتورة والإيصال الإلكتروني لمصلحة الضرائب (ETA)',
      'تطبيق مبيعات ونقاط بيع محمولة للمناديب (Mobile POS) مع طباعة بلوتوث'
    ],
    businessOutcomes: [
      'Eliminate checkout queues and customer waiting time during peak seasons',
      '100% accurate daily cash-to-ledger reconciliation with zero leakage',
      'Real-time branch sales telemetry accessible directly from executive dashboards'
    ],
    businessOutcomes_ar: [
      'القضاء التام على طوابير الانتظار في المعارض ومنافذ البيع في أوقات الذروة',
      'منع التسريب المالي ومطابقة دقيقة 100% بين المبيعات ورصيد الخزينة',
      'متابعة لحظية لحجم مبيعات كل فرع وكاشير مباشرة من شاشة الإدارة'
    ],
    techFocus: ['React', 'TypeScript', 'Python (Django/FastAPI)', 'PostgreSQL', 'Thermal Printers', 'Barcode Hardware'],
    idealFor: 'Retail chains, wholesale merchants, showrooms, restaurants, and direct sales outlets.',
    idealFor_ar: 'سلاسل المتاجر، محلات التجزئة والجملة، المعارض التجارية، والمطاعم ومنافذ البيع المباشر.',
    contextualCta_ar: 'طلب فحص نقاط البيع والربط الضريبي ETA'
  },
  {
    id: 'inventory-supply',
    number: '02',
    name: 'Warehousing, Inventory & Supply Chain',
    name_ar: 'المستودعات والمخازن وسلاسل الإمداد (Warehousing & Supply)',
    tagline: 'Precision inventory tracking, digitized dispatch vouchers, supplier POs, and perpetual cycle counts.',
    tagline_ar: 'تتبع دقيق للأرصدة، أذون الصرف والإضافة، إدارة الموردين وأوامر الشراء، والجرد الدوري.',
    description: 'Total multi-location warehouse governance preventing stockouts, shrinkage, and inter-branch balance discrepancies.',
    description_ar: 'إحكام السيطرة على حركة البضائع المتعددة ومنع العجز والتسريب وتضارب الكميات بين الفروع.',
    extendedDescription: 'Gain complete visibility over every SKU and movement. Digitize goods receipt notes, transfer orders, and stock issues with barcode validation, automated reorder thresholds, and vendor purchase tracking to keep supply lines uninterrupted.',
    extendedDescription_ar: 'منظومة إدارة المخازن وسلاسل الإمداد تمنحك رقابة صارمة على كل صنف وحركة دخول وخروج، مع إدارة الموردين وأوامر الشراء، وفصل إذن الاستلام الفعلي بالمخزن عن الفاتورة المالية، وتوثيق إلكتروني لأذون الصرف والإضافة بالباركود.',
    keyCapabilities: [
      'Supplier records management and procurement price comparisons',
      'Purchase Orders (POs) tracking with inspection and digitized Goods Receipt Notes (GRN)',
      'Decoupled warehouse physical receiving from vendor financial invoicing',
      'Multi-warehouse real-time stock ledger across central hubs and branch storerooms',
      'Digitized barcode-driven dispatch, receipt, and inter-branch transfer notes',
      'Intelligent reorder point alerts and perpetual cycle count workflows'
    ],
    keyCapabilities_ar: [
      'إدارة بيانات وسجلات الموردين ومقارنة عروض أسعار التوريد',
      'إصدار ومتابعة أوامر الشراء (Purchase Orders) وأذون الاستلام والفحص بالمخزن',
      'فصل استلام المخزن الفعلي عن الفاتورة المالية (Decoupled GRN) لتسهيل التوريدات الجزئية',
      'تتبع لحظي لأرصدة الأصناف عبر المخازن الرئيسية والمستودعات الفرعية',
      'أذون صرف وتحويل وإضافة رقمية بالكامل بالباركود لمنع التلاعب والتضارب',
      'تنبيهات ذكية لنواقص الأصناف وجرد دوري مستمر دون إيقاف العمل'
    ],
    optionalCapabilities: [
      'FIFO (First-In, First-Out) and Moving Average inventory valuation methods',
      'Bundled & composite products with auto-computed kit availability',
      'Landed cost allocation distributing customs and freight across received SKUs',
      'Batch number and expiry date tracking with FIFO/FEFO enforcement',
      'Unique serialized item tracking (Serial Numbers for equipment & electronics)',
      'Wireless Handheld PDA barcode scanners with live stock syncing'
    ],
    optionalCapabilities_ar: [
      'طرق تقييم المخزون المتقدمة (FIFO الوارد أولاً يصرف أولاً / المتوسط المرجح المتحرك)',
      'إدارة الأصناف المركبة والمجمعة (Bundled Kits) مع حساب الرصيد المتاح آلياً',
      'توزيع مصاريف الشحن والجمارك على تكلفة الأصناف الواردة (Landed Cost Allocation)',
      'تتبع أرقام التشغيلات وتواريخ الصلاحية (Batch & Expiry) وسياسات FIFO',
      'تتبع السيريال نمبر الفريد لكل قطعة (للأجهزة والإلكترونيات والقطع)',
      'ربط أجهزة الجرد اللاسلكية المحمولة (Handheld PDA Terminals)'
    ],
    businessOutcomes: [
      'Zero unexplained inventory shrinkage and complete stock asset protection',
      'Prevent stockouts and eliminate capital locked in stagnant deadstock',
      'Accelerate purchasing cycles with automated supplier price comparisons'
    ],
    businessOutcomes_ar: [
      'صفر عجز مخزني وحماية أصول وبضائع المؤسسة من الهدر والتسريب',
      'منع بيع أصناف غير متوفرة وتجنب تجميد رأس المال في رواكد وبضائع راكدة',
      'تسريع دورة الشراء ومقارنة عروض أسعار الموردين تلقائياً'
    ],
    techFocus: ['PostgreSQL', 'Python (Django)', 'React', 'TypeScript', 'Barcode Scanners', 'Handheld PDA Terminals'],
    idealFor: 'Wholesalers, distribution enterprises, manufacturers, and multi-branch central warehouses.',
    idealFor_ar: 'الشركات التجارية، شركات التوزيع والشحن، المصانع، والمستودعات المركزية متعددة الفروع.',
    contextualCta_ar: 'طلب فحص دورة المخازن والباركود متعدد الفروع'
  },
  {
    id: 'finance-accounting',
    number: '03',
    name: 'General Accounting & Financial Control',
    name_ar: 'المحاسبة العامة والرقابة المالية (General Accounting)',
    tagline: 'Automated double-entry ledgers, dynamic 5-level chart of accounts, and real-time P&L reporting.',
    tagline_ar: 'شجرة حسابات 5 مستويات، قيود يومية آلية، كشوف حسابات العملاء والموردين، وتقارير أرباح فورية.',
    description: 'Centralized financial engine automatically generating journal entries from commercial transactions without manual data entry.',
    description_ar: 'محرك مالي متكامل يولد القيود تلقائياً مع كل حركة بيع أو شراء دون تدخل يدوي مكرر.',
    extendedDescription: 'Eliminate spreadsheet marathons and accounting errors. Every sales invoice, procurement bill, payment receipt, and expense voucher routes directly into your dynamic chart of accounts, giving executive management real-time trial balances, balance sheets, and cash flow forecasts.',
    extendedDescription_ar: 'تخلص من شيتات الإكسيل والأخطاء الحسابية. يقوم المحرك المحاسبي المزدوج بترحيل كل فاتورة وسند قبض وصرف إلى شجرة الحسابات فورياً، مما يوفر للإدارة العليا كشوفات حسابات مفصلة للعملاء والموردين وموازين مراجعة وقوائم دخل دقيقة.',
    keyCapabilities: [
      '5-level hierarchical chart of accounts supporting cost centers and branch ledgers',
      'Automated double-entry journal creation triggered by commercial transactions',
      'Customer financial ledgers, accounts receivable (AR), and aging debt reports',
      'Supplier financial ledgers, accounts payable (AP), and 3-way matching settlement',
      'Inventory valuation linkage, cost of goods sold (COGS), and real-time P&L reporting'
    ],
    keyCapabilities_ar: [
      'شجرة حسابات هرمية 5 مستويات تدعم مراكز التكلفة للفروع والمشاريع والخزائن',
      'توليد تلقائي للقيود المحاسبية المزدوجة مع كل حركة بيع، شراء، أو سداد',
      'كشوف حسابات العملاء ومتابعة مديونياتهم وأعمار الديون (30/60/90/120 يوم)',
      'كشوف حسابات الموردين ومتابعة المستحقات والمطابقة الثلاثية (3-Way Matching)',
      'ربط تقييم المخزون وحساب تكلفة البضاعة المباعة (COGS) وقوائم الأرباح والخسائر'
    ],
    optionalCapabilities: [
      'Multi-currency accounting with periodic foreign exchange revaluation (FXRevaluationService)',
      'Penny difference rounding engine routing fractional discrepancies (<=0.05)',
      'Employee petty cash and custody management with automated reconciliation',
      'Bank reconciliation engine and period-end closing with opening balance rolls',
      'Operational budget management and financial approval workflow thresholds'
    ],
    optionalCapabilities_ar: [
      'دعم تعدد العملات وإعادة التقييم الدوري لفروق أسعار الصرف (FX Revaluation)',
      'معالجة الفروق الكسرية والتقريب (Penny Difference Account <= 0.05)',
      'إدارة وتسوية العهد النقدية للموظفين (Custody Management) وربطها بالقيود',
      'محرك التسويات البنكية ومطابقة كشوف البنوك والإقفال السنوي والشهري',
      'إدارة الموازنات التقديرية ومسارات الاعتماد والموافقات المالية الإلكترونية'
    ],
    businessOutcomes: [
      'Instant financial visibility into true net profit margins and liquidity',
      'Save hundreds of manual audit hours spent consolidating spreadsheets',
      'Execute strategic investments backed by rock-solid, verified financial figures'
    ],
    businessOutcomes_ar: [
      'وضوح مالي تام لصافي الأرباح والسيولة الحقيقية في كل دقيقة',
      'توفير مئات الساعات المهدرة في مراجعة وتدقيق الحسابات يدوياً',
      'قرارات استثمارية وتشغيلية مبنية على بيانات مالية واقعية وموثوقة'
    ],
    idealFor: 'Enterprises and growing businesses seeking strict document workflow and financial integrity.',
    idealFor_ar: 'المؤسسات والشركات بكافة أحجامها الباحثة عن ضبط الدورة المستندية والرقابة المالية الصارمة.',
    techFocus: ['Python (Django)', 'PostgreSQL ACID', 'React', 'TypeScript', 'Financial Analytics', 'Export PDF/Excel'],
    contextualCta_ar: 'طلب فحص شجرة الحسابات والدورة المحاسبية'
  },
  {
    id: 'hr-payroll',
    number: '04',
    name: 'Human Resources, Biometric Attendance & Payroll',
    name_ar: 'الموارد البشرية وشؤون الموظفين والرواتب (HR & Payroll)',
    tagline: 'Biometric punch sync, automated multi-component payroll, leave accruals, and employee asset custody.',
    tagline_ar: 'ربط أجهزة البصمة، مسير رواتب آلي، أرصدة الإجازات، والعهد الشخصية ومستحقات نهاية الخدمة.',
    description: 'Comprehensive human capital engine managing employee lifecycles from onboarding contracts to automated monthly payroll generation.',
    description_ar: 'منظومة موارد بشرية متكاملة تدير دورة الموظف بالكامل من التعاقد والبصمة وحتى احتساب الرواتب والبدلات.',
    extendedDescription: 'Automate human resource administration with enterprise precision. Connects with network biometric punch clocks (ZKTeco), automatically computes overtime, tardiness penalties, loan deductions, and generates compliant monthly payroll ledgers posted straight into financial cost centers.',
    extendedDescription_ar: 'أتمتة كاملة لإدارة الموارد البشرية مع ربط مباشر بأجهزة البصمة الشبكية، واحتساب آلي لساعات العمل والإضافي والجزاءات وسلف الموظفين، مع توليد مسير الرواتب وترحيله تلقائياً للقيود المالية ومراكز التكلفة.',
    keyCapabilities: [
      'Comprehensive employee profiles, contract management, and organizational hierarchy',
      'Network biometric punch clock synchronization (ZKTeco) detecting tardiness and overtime',
      'Automated payroll engine processing base pay, allowances, bonuses, and loan deductions',
      'Leave and permission quota management with multi-tier approval workflows',
      'Automated payroll journal entry posting linked to departmental cost centers'
    ],
    keyCapabilities_ar: [
      'سجلات وملفات الموظفين، إدارة عقود العمل، والهيكل الإداري والوظيفي',
      'الربط المباشر مع أجهزة البصمة الشبكية (ZKTeco) واحتساب التأخير والإضافي',
      'مسير رواتب آلي يحسب الراتب الأساسي، البدلات، المكافآت، وخصم أقساط السلف',
      'إدارة رصيد الإجازات السنوية والمرضية وطلبات الاستئذان ومسار الاعتماد الإداري',
      'توليد وترحيل قيود الرواتب تلقائياً لشجرة الحسابات ومراكز تكلفة الأقسام'
    ],
    optionalCapabilities: [
      'Geofenced mobile GPS punch attendance for field sales and external technicians',
      'Employee tangible asset custody tracking (laptops, vehicles, tools) with handover logs',
      'Statutory social insurance calculations and labor law end-of-service indemnity',
      'Leave balance encashment engine computing remaining annual leave payouts'
    ],
    optionalCapabilities_ar: [
      'إثبات الحضور بالبصمة الجغرافية عبر الموبايل (Geofencing GPS) للمناديب والفنيين',
      'إدارة العهد العينية والأجهزة (لابتوبات، سيارات، عهد) وتوثيق استلامها وتسليمها',
      'احتساب التأمينات الاجتماعية ومستحقات مكافأة نهاية الخدمة وفق قانون العمل',
      'صرف البدل النقدي لرصيد الإجازات السنوية المتبقية (Leave Encashment)'
    ],
    businessOutcomes: [
      'Eliminate 90% of HR administrative time spent preparing manual monthly payroll',
      'Zero payroll calculation disputes backed by immutable biometric attendance records',
      'Strict asset tracking preventing loss or unaccounted employee equipment'
    ],
    businessOutcomes_ar: [
      'توفير 90% من الوقت الإداري المستغرق في إعداد وتدقيق مسير الرواتب شهرياً',
      'إنهاء الخلافات والأخطاء الحسابية في الرواتب بفضل سجلات البصمة الدقيقة',
      'حماية عهد وأجهزة الشركة وضمان تتبعها بدقة عند استلامها وتسليمها'
    ],
    techFocus: ['Python (Django)', 'PostgreSQL', 'React', 'TypeScript', 'ZKTeco Protocol', 'Geofencing GPS'],
    idealFor: 'Companies with 20 to 1,000+ employees seeking automated payroll, strict attendance, and contract governance.',
    idealFor_ar: 'الشركات والمؤسسات والمصانع التي تمتلك فرق عمل مكتبية وميدانية وتبحث عن أتمتة الرواتب والبصمة.',
    contextualCta_ar: 'طلب فحص منظومة الموارد البشرية ومسير الرواتب'
  },
  {
    id: 'crm-pipeline',
    number: '05',
    name: 'Enterprise CRM, Lead Pipeline & Helpdesk',
    name_ar: 'إدارة علاقات العملاء وخدمة العملاء (Enterprise CRM)',
    tagline: 'Lead capture, sales deal pipeline tracking, call logs, ticket helpdesk, and sales rep performance KPIs.',
    tagline_ar: 'تتبع العملاء المحتملين، إدارة مراحل الصفقات، سجل المكالمات والمتابعات، وتذاكر الدعم والشكاوى.',
    description: 'Structured customer acquisition and support pipeline turning marketing inquiries into closed deals and lifelong accounts.',
    description_ar: 'منظومة متطورة لإدارة وتتبع العملاء المحتملين وفرص البيع وخدمة ما بعد البيع لزيادة الإيرادات.',
    extendedDescription: 'Empower your sales and customer success teams with full transparency. Track inbound leads from marketing channels, manage deal stages through visual Kanban pipelines, record call history, assign leads dynamically, and resolve post-sale support tickets with strict SLA tracking.',
    extendedDescription_ar: 'زوّد فريق المبيعات وخدمة العملاء برؤية شاملة؛ من لحظة وصول العميل المحتمل من الحملات الإعلانية، إلى متابعة مراحل التفاوض عبر لوحات كانبان التفاعلية، وتوثيق سجل المكالمات، وإدارة تذاكر الدعم الفني والشكاوى.',
    keyCapabilities: [
      'Omnichannel lead capture and centralized prospect directory',
      'Visual sales deal pipeline with customizable stages (Contacted, Quotation, Negotiation, Won/Lost)',
      'Sales activity log capturing calls, meetings, follow-ups, and email logs',
      'Smart lead assignment rules distributing prospects among sales representatives'
    ],
    keyCapabilities_ar: [
      'استقبال وتجميع العملاء المحتملين (Leads) من كافة المصادر وقنوات الإعلانات',
      'لوحة متابعة تفاعلية لمراحل الصفقات (تواصل أولي، تقديم عرض، تفاوض، إغلاق الصفقة)',
      'سجل شامل لكافة الأنشطة والمكالمات والمتابعات ومواعيد الزيارات القادمة',
      'توزيع ذكي للعملاء على مسؤولي المبيعات والتيلسيلز ومتابعة تفاعلهم'
    ],
    optionalCapabilities: [
      'Customer support ticketing & helpdesk with SLA response tracking',
      'Direct integration with Facebook, Instagram, and TikTok Lead Gen forms',
      'Automated WhatsApp follow-up templates triggered by deal stage changes',
      'Sales rep performance metrics, conversion ratios, and pipeline velocity reports'
    ],
    optionalCapabilities_ar: [
      'منظومة تذاكر الدعم الفني والشكاوى (Helpdesk) مع متابعة زمن الاستجابة والـ SLA',
      'الربط المباشر مع حملات إعلانات فيسبوك، إنستجرام، ونماذج التيك توك',
      'رسائل واتساب تلقائية موجهة للعميل مع كل تغيير في مرحلة الصفقة',
      'تقارير أداء متقدمة ومعدلات تحويل الصفقات لكل مندوب مبيعات'
    ],
    businessOutcomes: [
      'Increase lead-to-deal conversion rates by over 35% through structured follow-ups',
      'Prevent any prospective client from slipping through the cracks without follow-up',
      'Deliver exceptional post-sale support with transparent ticketing and resolution speeds'
    ],
    businessOutcomes_ar: [
      'زيادة معدل تحويل العملاء المحتملين لصفقات بنسبة تتجاوز 35% بفضل المتابعة المنظمة',
      'منع ضياع أو نسيان أي عميل محتمل دون متابعة من فريق المبيعات',
      'تقديم خدمة عملاء استثنائية وسرعة استجابة عالية للشكاوى والدعم الفني'
    ],
    techFocus: ['React', 'TypeScript', 'Python (Django/FastAPI)', 'PostgreSQL', 'Kanban UI', 'WhatsApp Business API'],
    idealFor: 'B2B service providers, real estate firms, commercial agencies, trading enterprises, and customer support centers.',
    idealFor_ar: 'الشركات التجارية، الشركات الخدمية، التطوير العقاري، وكالات الدعاية، ومراكز خدمة العملاء.',
    contextualCta_ar: 'طلب فحص مسار الصفقات وإدارة علاقات العملاء'
  },
  {
    id: 'printing-production',
    number: '06',
    name: 'Print House & Manufacturing ERP',
    name_ar: 'منظومة المطابع والتصنيع وحسابات التشغيل (Print & Production ERP)',
    tagline: 'Sheet imposition calculator, waste formulas, segregated machine floor tickets, and finishing stage routing.',
    tagline_ar: 'حاسبة مقاسات وتقطيع الورق، معادلات الهدر، تذاكر تشغيل الصالة المعزولة، وتكلفة ساعات الماكينات.',
    description: 'Purpose-engineered manufacturing and printing ERP translating complex technical job orders into precise pricing and floor execution.',
    description_ar: 'منظومة تخصصية للمطابع ومصانع التعبئة والتغليف وخطوط الإنتاج لحساب التكاليف وإدارة صالة التشغيل بدقة.',
    extendedDescription: 'Engineered specifically for offset, digital, packaging, and manufacturing enterprises. Features an algorithmic sheet imposition calculator, paper weight & raw material estimation, multi-step finishing cost breakdown (lamination, spot UV, hot foil, die-cutting), segregated shop-floor tickets hiding margins, and automated invoice locking upon floor execution.',
    extendedDescription_ar: 'صُممت خصيصاً للمطابع، مصانع الكرتون والتغليف، وورش الإنتاج؛ حيث تحتوي على حاسبة هندسية للمقاسات وتقطيع أفرخ الورق القياسية، ومعادلات دقيقة لحساب هدر التجهيز والسحب، وتكلفة مراحل التشطيب، مع طباعة تذاكر تشغيل فنية للمشغلين تحجب الأسعار وهوامش الربح تماماً.',
    keyCapabilities: [
      'Sheet imposition and layout calculator optimizing standard paper sizes (70x100, 66x96, 68x100)',
      'Algorithmic paper setup waste and running waste formulas based on run length',
      'Multi-operation finishing cost breakdown (thermal lamination, spot UV, hot foil stamping, die-cutting, gluing)',
      'Segregated shop-floor job tickets presenting technical specs while hiding commercial prices and margins',
      'Automatic invoice locking preventing modifications once work orders enter physical production'
    ],
    keyCapabilities_ar: [
      'حاسبة هندسية للمقاسات والتكسير والتقطيع الأمثل من أفرخ الورق القياسية (70x100، 66x96، 68x100)',
      'معادلات دقيقة لحساب هدر التجهيز وهدر السحب بناءً على كميات التشغيل وألوان الطباعة',
      'احتساب تكلفة مراحل التشطيب (سلوفان حراري، يو في موضعي، بصمة، تكسير وريجة، ولصق علب)',
      'تذاكر تشغيل معزولة لصالة الإنتاج بالمواصفات الفنية ومقاسات السحب مع حجب الأسعار وهوامش الربح',
      'قفل وتجميد تعديل الفواتير تلقائياً فور بدء تنفيذ أمر الشغل في صالة الإنتاج'
    ],
    optionalCapabilities: [
      'Machine hourly depreciation rates and operator labor cost allocation',
      'Self-service client portal for artwork file uploads, proof approval, and job status tracking',
      'Production machine telemetry counters and IoT pulse sensor integration',
      'Raw material inventory reservation (paper reams, plates, inks) upon job order confirmation'
    ],
    optionalCapabilities_ar: [
      'احتساب تكلفة الساعات التشغيلية للماكينات وإهلاكها ومعدل دوران العمالة',
      'بوابة عملاء تفاعلية لرفع ملفات التصميم واعتماد البروفات ومتابعة حالة أمر الشغل',
      'ربط حساسات وعدادات سحب الماكينات (IoT Pulse Counters) لقراءة الإنتاج لحظياً',
      'حجز الخامات من المستودع (أفرخ الورق، الزنكات، الأحبار) فور اعتماد أمر الشغل'
    ],
    businessOutcomes: [
      'Eliminate pricing errors and raw material calculation waste in complex quotations',
      'Protect commercial profit margins from being exposed to machine floor operators',
      'Accelerate quotation turnaround time from hours to under 60 seconds'
    ],
    businessOutcomes_ar: [
      'القضاء على أخطاء التسعير وهدر الخامات في عروض أسعار أوامر الشغل المعقدة',
      'حماية أسرار وهوامش ربح الشركة من الظهور لعمال ومشغلي صالة الإنتاج',
      'تسريع إصدار عروض الأسعار المفصلة من ساعات إلى أقل من 60 ثانية'
    ],
    techFocus: ['Python (Django/FastAPI)', 'React', 'TypeScript', 'PostgreSQL', 'Imposition Math Engine', 'Thermal Print'],
    idealFor: 'Offset & digital print houses, packaging & carton factories, advertising production houses, and manufacturing workshops.',
    idealFor_ar: 'المطابع الأوفست والديجيتال، مصانع الكرتون والتعبئة، وكالات الدعاية والإنتاج، وورش التصنيع.',
    contextualCta_ar: 'طلب فحص دورة المطبعة وحسابات الهدر والتكلفة'
  },
  {
    id: 'education-academy',
    number: '07',
    name: 'Education, Academies & Student Systems',
    name_ar: 'منظومة المؤسسات التعليمية والمدارس والأكاديميات (Education & School ERP)',
    tagline: 'Student affairs, unified family ledgers, course sales CRM, tuition installments, bus fleet, and QR certificates.',
    tagline_ar: 'شؤون الطلاب والمدارس، الحساب العائلي الموحد، مبيعات الكورسات، جدولة الأقساط، النقل المدرسي، والشهادات بـ QR.',
    description: 'Complete academic, school, and academy management engine handling admissions, course sales, tuition schedules, bus fleet, and QR verification.',
    description_ar: 'منظومة تعليمية ومدرسية متكاملة تدير دورة الطالب والمدرسة والأكاديمية من مبيعات الاستقطاب والأقساط وحتى النقل والشهادات.',
    extendedDescription: 'Purpose-engineered for private schools, higher institutes, training academies, and course centers. Combines student lifecycle management with unified family accounts for siblings, education sales lead distribution with scoring (1-5), batch scheduling with deferred student tracking, automated tuition installments with WhatsApp alerts, bus fleet logistics, school store POS, and encrypted QR certificates with public online authentication.',
    extendedDescription_ar: 'منظومة شاملة تجمع بين إدارة المدارس الخاصة والأكاديميات ومراكز التدريب؛ تشمل إدارة ملفات الطلاب وربط الإخوة بملف مالي موحد لولي الأمر، ومتابعة مبيعات الكورسات والتيلسيلز، وإدارة الدفعات والطلاب المؤجلين، مع جدولة الأقساط وإشعارات الواتساب، وإدارة أسطول النقل المدرسي والكانتين والزي المدرسي، وإصدار شهادات التخرج الرقمية المؤمنة برمز QR قابل للتحقق الفوري.',
    keyCapabilities: [
      'Student admissions, academic profiles, and unified family/guardian multi-student financial ledgers',
      'Flexible tuition installment scheduling, electronic payment receipts, and overdue balance tracking',
      'Course batch scheduling, classroom allocation, and deferred/postponed student re-enrollment management',
      'Education sales CRM with lead distribution, prospect scoring (1-5), and discount policy caps',
      'Automated instructor revenue share & teaching compensation engine (hourly, percentage, course-based)',
      'Tamper-proof digital certificates with encrypted QR verification codes and public authentication portal'
    ],
    keyCapabilities_ar: [
      'إدارة ملفات وشؤون الطلاب والتسجيل والحساب العائلي الموحد لولي الأمر لربط مصروفات الإخوة',
      'جدولة الأقساط المدرسية والمصروفات وسندات القبض وحصر المتأخرات وربط قيود اليومية آلياً',
      'إدارة الكورسات والدفعات والراوندات وحجز المقاعد وإعادة تسكين الطلاب المؤجلين (Postponed)',
      'منظومة مبيعات واستقطاب الطلاب (Leads) وتقييم الجدية وسقف خصومات مسؤولي المبيعات',
      'احتساب نسب ومستحقات المحاضرين والمعلمين آلياً (بالساعة أو بالنسبة من الاشتراكات)',
      'إصدار الشهادات الرقمية المعتمدة فورياً برمز QR مشفر مع صفحة فحص وتحقق رسمية'
    ],
    optionalCapabilities: [
      'School bus fleet management, driver/chaperone assignment, and one-way/two-way route subscriptions',
      'School canteen and student uniform store POS with prepaid balance card management',
      'Integrated Learning Management System (LMS) with video lectures, assignments, and online quizzes',
      'Automated WhatsApp Cloud API notifications for tuition reminders, absence alerts, and grade reports',
      'Instant online payment checkout (Fawry, digital wallets, bank cards) with custom student payment codes',
      'Extracurricular school activities, summer camps, and field trip registration with event cost accounting'
    ],
    optionalCapabilities_ar: [
      'منظومة النقل المدرسي والأتوبيسات وتعيين السائقين والمشرفات واشتراكات خطوط السير (One-Way / Two-Way)',
      'منافذ بيع الزي والكتب المدرسية وكانتين المقصف المدرسي مع كروت شحن ومحافظ الطلاب',
      'منصة التعليم الإلكتروني (LMS) لرفع المحاضرات المسجلة والواجبات وبنك الاختبارات التفاعلية',
      'إشعارات واتساب تلقائية لتذكير الأهالي بالأقساط وتنبيهات الغياب وروابط الشهادات وسندات السداد',
      'السداد الإلكتروني الفوري بأكواد دفع مخصصة لكل طالب عبر فوري والمحافظ الذكية والفيزا',
      'إدارة الأنشطة والرحلات المدرسية والبرامج الصيفية وتتبع تكاليف وأرباح الفعاليات'
    ],
    businessOutcomes: [
      '100% on-time tuition installment collection through automated WhatsApp alerts',
      'Eliminate instructor payout calculation disputes and streamline postponed student tracking',
      'Total fleet, canteen, and uniform governance with verified tamper-proof QR certificates'
    ],
    businessOutcomes_ar: [
      'تحصيل الأقساط والمصروفات المدرسية بنسبة 100% بفضل المتابعة الرقمية وإشعارات الواتساب',
      'إنهاء النزاعات الإدارية والأخطاء الحسابية في مستحقات المدربين وتأجيلات الطلاب',
      'حوكمة تامة لأسطول النقل والكانتين والمبيعات المدرسية مع توثيق الشهادات بـ QR'
    ],
    techFocus: ['Python (Django)', 'React', 'TypeScript', 'PostgreSQL', 'QR Engine', 'WhatsApp Business API', 'Fleet Routing'],
    idealFor: 'Private & international schools, higher institutes, training academies, and language & course networks.',
    idealFor_ar: 'المدارس الخاصة والدولية، معاهد وجامعات التدريب، الأكاديميات ومراكز الكورسات، ومراكز التعليم الهجين واللغات.',
    contextualCta_ar: 'طلب فحص منظومة المدارس والأكاديميات وإدارة الأقساط'
  },
  {
    id: 'automation-integrations',
    number: '08',
    name: 'Workflow Automation, Governance & API Integrations',
    name_ar: 'الربط البرمجي وأتمتة الـ APIs والحوكمة (Automation & APIs)',
    tagline: 'Instant integration with payment switches (Paymob/Fawry), couriers (Bosta/Aramex), WhatsApp API, and idempotency governance.',
    tagline_ar: 'تكامل فوري مع بوابات الدفع (Paymob/فوري)، شركات الشحن، رسائل واتساب، وحوكمة منع التكرار.',
    description: 'Hardened integration bridges connecting your internal database with external services to end manual double entry.',
    description_ar: 'جسور برمجية تربط نظامك الداخلي بكافة المنصات الخارجية لمنع النقل اليدوي وتأخير العمليات.',
    extendedDescription: 'Keep your organization synchronously connected with the modern ecosystem. We build live API bridges with online payment gateways, automated courier dispatching, and automated WhatsApp billing messages sent immediately upon transaction execution with enterprise idempotency protection.',
    extendedDescription_ar: 'اجعل نظامك متصلاً لحظياً بالعالم الخارجي مع حماية مطلقة؛ حيث نبني تكاملات APIs مباشرة مع منصات الدفع الإلكتروني، وتوليد بوالص شركات الشحن وتتبعها، وإرسال فواتير وإشعارات واتساب تلقائية، مع مفاتيح منع تكرار العمليات ومحركات المطابقة الآلية.',
    keyCapabilities: [
      'Direct payment gateway switches (Paymob, Fawry, Vodafone Cash & digital wallets)',
      'Automated logistics courier connectors (Bosta, Aramex) for live airway bill creation',
      'Automated WhatsApp Business Cloud API alerts for invoices and order updates',
      'Hardware connectivity with POS printers, barcode scanners, and scales'
    ],
    keyCapabilities_ar: [
      'ربط مباشر مع بوابات الدفع الإلكتروني (Paymob، فوري، المحافظ الذكية كاش)',
      'تكامل آلي مع شركات الشحن واللوجستيات (Bosta، Aramex) لإصدار البوالص آلياً',
      'أتمتة إرسال إشعارات الفواتير وتحديثات الطلبات عبر WhatsApp Business API',
      'ربط وتكامل مع هاردوير الفروع (طابعات الباركود، الكاشير، والموازين الإلكترونية)'
    ],
    optionalCapabilities: [
      'Idempotency key gateway preventing duplicate financial transactions during retries',
      'Immutable audit trail recording model mutations with IP and before/after snapshots',
      'Nightly automated data reconciliation service validating subledgers against GL',
      'Bi-directional e-commerce connectors (Shopify, WooCommerce, Salla, Zid)',
      'Direct integration with ETA Egyptian Tax Authority e-invoicing gateway',
      'Custom Webhooks & RESTful API endpoints for proprietary third-party app connections'
    ],
    optionalCapabilities_ar: [
      'مفاتيح منع تكرار العمليات المالية (Idempotency Key) لمنع ازدواجية القيود والدفعات',
      'سجل التدقيق الشامل غير القابل للتعديل (Immutable Audit Trail) لتوثيق كل حركة',
      'محرك المطابقة الليلي الآلي (DataReconciliationService) للتحقق من مطابقة الحسابات',
      'الربط المزدوج مع المتاجر الإلكترونية (Shopify، WooCommerce، سلة، زد)',
      'الربط المباشر مع منظومة الفاتورة والإيصال الإلكتروني لمصلحة الضرائب (ETA)',
      'بناء Webhooks وواجهات API مخصصة للربط مع أي تطبيقات أو أنظمة مستقبلية'
    ],
    businessOutcomes: [
      'Accelerate cash collection and live shipment tracking without human latency',
      'Deliver a premium customer experience with instant WhatsApp invoice delivery',
      'Eliminate manual data transcription errors between fragmented platforms'
    ],
    businessOutcomes_ar: [
      'تحصيل أسرع للمدفوعات ومتابعة فورية لحالات الشحن والتسليم بدون تأخير',
      'تجربة عملاء فائقة السلاسة عبر رسائل واتساب لحظية بالفواتير والتحديثات',
      'إنهاء أخطاء النسخ اليدوي بين المنصات المختلفة وتوفير وقت فريق العمل'
    ],
    techFocus: ['FastAPI / Django', 'PostgreSQL', 'React', 'TypeScript', 'Webhooks', 'WhatsApp Cloud API', 'Paymob / Fawry SDKs'],
    idealFor: 'Businesses relying on online sales, rapid courier delivery, digital payments, or automated messaging.',
    idealFor_ar: 'الشركات التي تعتمد على البيع أونلاين، الشحن السريع، التحصيل الإلكتروني، أو قنوات التواصل الآلية.',
    contextualCta_ar: 'طلب فحص الربط البرمجي وتكاملات الـ APIs'
  },
  {
    id: 'bespoke-portals',
    number: '09',
    name: 'Bespoke Business Engines & Digital Portals',
    name_ar: 'الأنظمة التشغيلية المخصصة والبوابات الرقمية (Bespoke Engines & Portals)',
    tagline: 'Custom software modeling specialized workflows, self-service B2B portals, and perpetual ownership.',
    tagline_ar: 'هندسة برمجية تحاكي دورتك الخاصة، بوابات خدمة ذاتية، ورخصة ملكية دائمة.',
    description: 'Custom platforms and portals built entirely around your competitive business logic that canned software cannot accommodate.',
    description_ar: 'أنظمة وبوابات تفاعلية مصممة حول منطق عملك الاستثنائي الذي تعجز البرامج المعلبة عن استيعابه.',
    extendedDescription: 'Every industry possesses unique processes that define its competitive edge. MWHEBA builds purpose-engineered ERP engines—such as contractor project costing, logistics dispatching, customized B2B vendor portals, or field technician coordination—with perpetual licensing and complete data sovereignty.',
    extendedDescription_ar: 'لكل بيزنس خصوصيته التي تصنع تميزه في السوق. تقوم موهبة ببناء برمجيات وموديولات مفصلة بالكامل (مثل إدارة مشاريع المقاولات وتكلفة العمليات، أو منصات الخدمات اللوجستية، أو بوابات B2B للشركاء والموزعين) برخصة تشغيل دائمة وملكية كاملة دون أي اشتراكات متصاعدة.',
    keyCapabilities: [
      'Precise digital modeling of unique business rules and specialized operational cycles',
      'Self-service web portals for clients, partners, subcontractors, or distributors',
      'NIST Level 2 Role-Based Access Control (RBAC) with granular data scoping',
      'Perpetual software license with full source code deployment and data sovereignty'
    ],
    keyCapabilities_ar: [
      'نمذجة رقمية دقيقة لدورة العمل والعمليات التشغيلية التخصصية في نشاطك',
      'بوابات خدمة ذاتية تفاعلية للعملاء، الشركاء، مقاولي الباطن، أو الموزعين (B2B Portals)',
      'حوكمة وصلاحيات دقيقة (NIST Level 2 RBAC) وتخصيص نطاق البيانات لكل مستخدم',
      'رخصة تشغيل دائمة للمنظومة مع ملكية كاملة لقواعد البيانات والكود'
    ],
    optionalCapabilities: [
      'Dedicated native mobile applications for clients or field technicians',
      'Automated recurring SLA and contract milestone billing engines',
      'Custom offline-capable synchronization engines for remote sites and branches',
      'Custom hardware and industrial sensor integrations'
    ],
    optionalCapabilities_ar: [
      'تطبيقات موبايل مخصصة للعملاء أو للفرق الفنية والزيارات الميدانية',
      'محرك عقود سنوية وفوترة دورية تلقائية لخدمات الصيانة والـ SLA',
      'محركات مزامنة للعمل في المواقع الخارجية بدون اتصال مستمر بالإنترنت',
      'ربط أجهزة وهاردوير مخصص وحساسات صناعية تلائم طبيعة نشاطك'
    ],
    businessOutcomes: [
      '100% alignment between software behavior and real-world team workflow',
      'Save thousands of dollars annually in recurring cloud SaaS seat subscriptions',
      'Preserve proprietary operational secrets in a system owned entirely by your firm'
    ],
    businessOutcomes_ar: [
      'تطابق تام بين البرنامج وطريقة عملك الفعلية دون أي تنازلات أو قيود',
      'توفير آلاف الدولارات سنوياً من اشتراكات البرامج السحابية الجاهزة',
      'حماية أسرار وآليات عملك التنافسية في نظام ملك شركتك بالكامل'
    ],
    techFocus: ['Python (Django/FastAPI)', 'React', 'TypeScript', 'PostgreSQL Enterprise ACID'],
    idealFor: 'Contractors, logistics providers, engineering firms, and specialized businesses with non-standard operations.',
    idealFor_ar: 'شركات المقاولات، الخدمات اللوجستية، المكاتب الهندسية، والشركات ذات طبيعة العمل الخاصة.',
    contextualCta_ar: 'طلب دراسة معمارية النظام المخصص'
  }
];
