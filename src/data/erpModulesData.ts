export interface PipelineStep {
  stepNumber: number;
  label: string;
  label_ar: string;
  node: string;
  node_ar: string;
  protocol: string;
  detail: string;
  detail_ar: string;
}

export interface ErpModuleData {
  id: string;
  name: string;
  name_ar: string;
  kpiLabel: string;
  kpiLabel_ar: string;
  kpiValue: string;
  kpiValue_ar: string;
  kpiTrend: string;
  kpiTrend_ar: string;
  summary: string;
  summary_ar: string;
  features: string[];
  features_ar: string[];
  pipelineSteps: PipelineStep[];
  sampleData: {
    col1: string;
    col2: string;
    col3: string;
    status: string;
    col2_ar?: string;
    col3_ar?: string;
    status_ar?: string;
  }[];
}

export const erpModulesData: ErpModuleData[] = [
  {
    id: 'commercial',
    name: 'Commercial Trading & POS',
    name_ar: 'الشركات التجارية ونقاط البيع',
    kpiLabel: 'Daily Booked Sales & Orders',
    kpiLabel_ar: 'إجمالي المبيعات والفواتير',
    kpiValue: '$184,200',
    kpiValue_ar: '184,200 $',
    kpiTrend: 'Instant branch sync & POS ledger',
    kpiTrend_ar: 'مزامنة فورية لكافة الفروع',
    summary: 'Manage multi-branch sales, convert quotations into verified orders, run fast barcode counter POS, and automate daily financial reconciliations.',
    summary_ar: 'إدارة مبيعات الفروع، كاشير سريع بالباركود، إصدار فواتير المبيعات، ومزامنة الأرصدة والحسابات لحظياً.',
    features: [
      'Fast barcode-assisted counter POS with multi-payment support',
      'Tiered wholesale & retail price lists with contract terms',
      'Official sales invoice generation with automated ledger posting'
    ],
    features_ar: [
      'كاشير سريع بالباركود يدعم الدفع النقدي والفيزا وتقفيل الخزائن',
      'قوائم أسعار متدرجة للجملة والتجزئة والتوريدات',
      'إصدار فواتير رسمية مع ترحيل محاسبي فوري'
    ],
    pipelineSteps: [
      {
        stepNumber: 1,
        label: 'POS Counter Checkout',
        label_ar: 'مسح الباركود بالكاشير',
        node: 'Branch Client POS',
        node_ar: 'نقطة بيع الفرع',
        protocol: 'ربط أجهزة الكاشير',
        detail: 'Item scanned, multi-tier pricing applied, cash/card split initiated.',
        detail_ar: 'قراءة الصنف وتطبيق سعر العميل وحساب الإجمالي فوراً.'
      },
      {
        stepNumber: 2,
        label: 'Real-time Stock Reserve',
        label_ar: 'حجز المخزون الفوري',
        node: 'Central Inventory Engine',
        node_ar: 'محرك المخازن المركزي',
        protocol: 'مزامنة سحابية لحظية',
        detail: 'Instant atomic decrement from branch bin, zero double-selling.',
        detail_ar: 'خصم الكمية وتحديث المخزن الرئيسي لمنع تكرار البيع.'
      },
      {
        stepNumber: 3,
        label: 'Payment & Receipt Settlement',
        label_ar: 'السداد وطباعة الإيصال',
        node: 'POS Hardware & Printer Driver',
        node_ar: 'طابعة الإيصالات والدرج',
        protocol: 'طباعة فورية في 120ms',
        detail: 'Receipt generated, cash drawer triggered, customer balance updated in under 120ms.',
        detail_ar: 'طباعة الإيصال وفتح درج النقدية وتحديث الحساب فورياً.'
      },
      {
        stepNumber: 4,
        label: 'Double-Entry Ledger Post',
        label_ar: 'الترحيل المحاسبي الآلي',
        node: 'General Ledger Vault',
        node_ar: 'دفتر الأستاذ والخزينة',
        protocol: 'قيد محاسبي معتمد',
        detail: 'Debit Cash/Bank, Credit Sales Revenue auto-posted to chart of accounts.',
        detail_ar: 'تسجيل قيد اليومية تلقائياً في شجرة الحسابات دون تدخل يدوي.'
      }
    ],
    sampleData: [
      { col1: 'INV-2026-901', col2: 'Commercial Supplies Order — Alex Hub', col2_ar: 'فاتورة توريدات — فرع الإسكندرية', col3: 'Value: $16,500 · Cash & Wire Split', col3_ar: 'القيمة: 16,500 $ · مسدد بالكامل', status: 'Optimal', status_ar: 'معتمد ومرحل' },
      { col1: 'INV-2026-902', col2: 'Wholesale Food Distribution Package', col2_ar: 'طلبية جملة كبرى — توريد بضائع', col3: 'Value: $42,200 · Invoice Verified & Posted', col3_ar: 'القيمة: 42,200 $ · فاتورة رسمية', status: 'Optimal', status_ar: 'مسدد بالكامل' },
      { col1: 'INV-2026-903', col2: 'Retail Counter POS Batch #18', col2_ar: 'مبيعات الكاشير المباشرة — فرع القاهرة', col3: 'Daily Shift Total: $12,400 · POS Closed', col3_ar: 'إجمالي الشفت: 12,400 $', status: 'Synchronized', status_ar: 'شفت مغلق' },
      { col1: 'INV-2026-904', col2: 'Commercial Supply Contract Order', col2_ar: 'أمر توريد تعاقدي — شركة مقاولات', col3: 'Value: $28,100 · Credit Net 30', col3_ar: 'القيمة: 28,100 $ · آجل 30 يوماً', status: 'Pending', status_ar: 'بانتظار الاستحقاق' }
    ]
  },
  {
    id: 'services',
    name: 'Commercial & Professional Services',
    name_ar: 'الشركات الخدمية والمهنية',
    kpiLabel: 'Active Service Contracts',
    kpiLabel_ar: 'عقود الصيانة السارية',
    kpiValue: '124 Retainers',
    kpiValue_ar: '124 عقد سارٍ',
    kpiTrend: 'Automated recurring billing & dispatch',
    kpiTrend_ar: 'جدولة الزيارات والفوترة الدورية',
    summary: 'Manage corporate service contracts, preventive maintenance schedules, field technician dispatches, and recurring retainer invoicing.',
    summary_ar: 'متابعة عقود الصيانة الدورية، توجيه الفنيين الميدانيين، وإصدار الفواتير المتكررة تلقائياً.',
    features: [
      'Automated preventive maintenance visit scheduling',
      'Field technician dispatch with mobile digital proof of service',
      'Contract renewal alerts and automated retainer invoicing'
    ],
    features_ar: [
      'جدولة مواعيد الصيانة الدورية وإشعار العملاء آلياً',
      'توجيه الفنيين وتوثيق إتمام الخدمة بتوقيع العميل',
      'تنبيهات استباقية لتجديد العقود والفوترة السنوية'
    ],
    pipelineSteps: [
      {
        stepNumber: 1,
        label: 'SLA Schedule & Dispatch',
        label_ar: 'جدولة زيارة الصيانة',
        node: 'SLA Contract Engine',
        node_ar: 'محرك العقود والصيانة',
        protocol: 'جدولة آلية وإشعار العميل',
        detail: 'Auto-generation of preventive maintenance tickets and field engineer assignment.',
        detail_ar: 'تحديد موعد الزيارة وتعيين الفني وإرسال إشعار للعميل.'
      },
      {
        stepNumber: 2,
        label: 'Field Execution & Spare Parts',
        label_ar: 'التنفيذ وخصم قطع الغيار',
        node: 'Technician Mobile App',
        node_ar: 'تطبيق الفني الميداني',
        protocol: 'مزامنة مباشرة مع المخزن',
        detail: 'Spare parts consumption logged, technical report filed on mobile terminal.',
        detail_ar: 'تسجيل قطع الغيار المستهلكة وكتابة تقرير الزيارة.'
      },
      {
        stepNumber: 3,
        label: 'Digital Client Sign-Off',
        label_ar: 'اعتماد وتوقيع العميل',
        node: 'Client Verification Node',
        node_ar: 'إثبات إتمام الخدمة',
        protocol: 'توقيع رقمي موثق',
        detail: 'Customer signs electronically, generating immutable proof-of-work certificate.',
        detail_ar: 'توقيع العميل على شاشة الهاتف لتوثيق جودة التنفيذ.'
      },
      {
        stepNumber: 4,
        label: 'Automated Retainer Invoice',
        label_ar: 'إصدار الفاتورة الدورية',
        node: 'Billing & AR Engine',
        node_ar: 'الفوترة والتحصيل',
        protocol: 'إرسال فوري عبر واتساب',
        detail: 'Retainer invoice issued, PDF sent via WhatsApp Cloud, ledger updated.',
        detail_ar: 'إصدار الفاتورة وإرسالها للعميل مع ترحيل الحسابات.'
      }
    ],
    sampleData: [
      { col1: 'SLA-2026-101', col2: 'Corporate HVAC Annual Preventive Retainer', col2_ar: 'عقد صيانة سنوي — تكييف مركزي', col3: 'Visit Scheduled: 10 Oct · Eng. Tamer', col3_ar: 'الزيارة: 10 أكتوبر · م. تامر', status: 'Optimal', status_ar: 'مجدول بنجاح' },
      { col1: 'SLA-2026-144', col2: 'Elevator Safety & Maintenance Contract', col2_ar: 'عقد فحص وصيانة مصاعد دوري', col3: 'Digital Service Sign-off: Verified', col3_ar: 'إثبات الخدمة: موقع إلكترونياً', status: 'Synchronized', status_ar: 'تمت الزيارة' },
      { col1: 'SLA-2026-189', col2: 'IT Infrastructure Managed Services SLA', col2_ar: 'عقد دعم فني وإدارة شبكات', col3: 'Q4 Retainer Invoice: $8,500 Generated', col3_ar: 'فاتورة الربع الرابع: 8,500 $', status: 'Optimal', status_ar: 'فاتورة مرحلة' },
      { col1: 'SLA-2026-210', col2: 'Fire Protection Systems Retainer', col2_ar: 'عقد صيانة شبكات إنذار حريق', col3: 'Contract Renewal: Due in 25 Days', col3_ar: 'التجديد: مستحق خلال 25 يوماً', status: 'Pending', status_ar: 'تذكير بالتجديد' }
    ]
  },
  {
    id: 'printing',
    name: 'Printing & Job Orders (BOM)',
    name_ar: 'المطابع والدعاية وتكلفة أوامر الشغل',
    kpiLabel: 'Active Production Job Orders',
    kpiLabel_ar: 'أوامر الشغل في صالة الإنتاج',
    kpiValue: '42 Orders',
    kpiValue_ar: '42 أمر شغل نشط',
    kpiTrend: 'Instant paper yield calculation',
    kpiTrend_ar: 'حساب دقيق لتفصيل الورق والهدر',
    summary: 'Print and packaging job order management with dynamic paper yield calculation, machine run-time allocation, and prepress-to-dispatch tracking.',
    summary_ar: 'حساب مقاسات الورق وخفض الهدر، تتبع مراحل أمر الشغل بصالة الإنتاج، وخصم الخامات آلياً.',
    features: [
      'Mathematical paper sheet yield and offcut loss calculator',
      'Job order production floor routing with barcode tracking',
      'Automated raw material stock reservation (paper, plates, inks)'
    ],
    features_ar: [
      'حاسبة تفصيل مقاسات الورق وخفض نسب الهدر والتوالف',
      'تتبع مراحل أمر الشغل بصالة الطباعة والتشطيب بالباركود',
      'حجز خامات الورق والأحبار تلقائياً فور اعتماد السعر'
    ],
    pipelineSteps: [
      {
        stepNumber: 1,
        label: 'Mathematical Paper Yield',
        label_ar: 'حساب تفصيل الورق والهدر',
        node: 'Pre-Press Calculation Core',
        node_ar: 'حاسبة مقاسات الورق',
        protocol: 'حساب الهدر والمقاسات',
        detail: 'Calculates optimum sheet layout, offcut waste percentage, and plate requirements.',
        detail_ar: 'تحديد أفضل تفصيل لفرخ الورق وخفض الهدر إلى أدنى حد.'
      },
      {
        stepNumber: 2,
        label: 'Raw Material Auto-Hold',
        label_ar: 'حجز الخامات من المستودع',
        node: 'Raw Material Depot',
        node_ar: 'مستودع الخامات والأحبار',
        protocol: 'خصم فوري للمخزون',
        detail: 'Reams of paper, printing plates, and inks locked exclusively for this job order.',
        detail_ar: 'حجز الورق والزنكات والأحبار فورياً لأمر التشغيل.'
      },
      {
        stepNumber: 3,
        label: 'Floor Stage Barcode Scan',
        label_ar: 'تتبع مراحل الإنتاج بالباركود',
        node: 'Production Floor Terminals',
        node_ar: 'ماكينات الطباعة والتكسير',
        protocol: 'تتبع لحظي بالباركود',
        detail: 'Tracks progress: Offset Press -> Lamination -> Die-Cutting -> Final Packing.',
        detail_ar: 'متابعة المراحل: طباعة $\\to$ سلوفان $\\to$ تكسير $\\to$ تعبئة.'
      },
      {
        stepNumber: 4,
        label: 'Actual Cost & Delivery',
        label_ar: 'حساب التكلفة الفعلية والتسليم',
        node: 'Job Costing & Shipping',
        node_ar: 'التكاليف وإذن التسليم',
        protocol: 'إشعار فوري للعميل',
        detail: 'Actual vs Estimated cost analyzed, delivery note printed, client alerted on WhatsApp.',
        detail_ar: 'مطابقة التكلفة الفعلية وطباعة إذن التسليم وإشعار العميل.'
      }
    ],
    sampleData: [
      { col1: 'JOB-2026-301', col2: 'Luxury Packaging Boxes (10,000 Pcs)', col2_ar: 'علب تغليف فاخرة (10,000 علبة)', col3: 'Offset Press Hall · Stage: Die-Cutting', col3_ar: 'صالة الأوفست · مرحلة: التكسير', status: 'Synchronized', status_ar: 'جاري التشغيل' },
      { col1: 'JOB-2026-308', col2: 'Annual Corporate Catalogues (5,000 Copies)', col2_ar: 'كتالوجات سنوية (5,000 نسخة)', col3: 'Binding Line · Raw Materials Deducted', col3_ar: 'خط التجليد · تم خصم الخامات', status: 'Optimal', status_ar: 'مرحلة التجميع' },
      { col1: 'JOB-2026-315', col2: 'Outdoor Vinyl & Flex Banners Batch', col2_ar: 'بنرات وفليكس خارجي للمعارض', col3: 'Large Format Plotter · Ready for Dispatch', col3_ar: 'ماكينات الآوت دور · جاهز للتسليم', status: 'Optimal', status_ar: 'جاهز للشحن' },
      { col1: 'JOB-2026-322', col2: 'Custom Medicine Boxes Batch #4', col2_ar: 'عبوات دوائية مخصصة برقم تشغيلة', col3: 'Quality Control Check: In Progress', col3_ar: 'فحص الجودة والمطابقة: جاري الفحص', status: 'Pending', status_ar: 'مراجعة الجودة' }
    ]
  },
  {
    id: 'inventory',
    name: 'Warehouses & Stock Parity',
    name_ar: 'المخازن وإدارة الأرصدة والتحويلات',
    kpiLabel: 'Live Stock Valuation',
    kpiLabel_ar: 'تقييم المخزون المالي',
    kpiValue: '$1,480,000',
    kpiValue_ar: '1,480,000 $',
    kpiTrend: 'Strict stock reservation & zero lost transfers',
    kpiTrend_ar: 'حجز فوري للبضاعة وضبط التحويلات',
    summary: 'Multi-location warehouse visibility with bin-level tracking, stock reservation, inter-branch transfer validation, and automated reorder alerts.',
    summary_ar: 'متابعة الأرصدة عبر كافة المخازن والمعارض، حجز البضاعة تلقائياً، وتوثيق أذون الصرف بالباركود.',
    features: [
      'Real-time stock reservation preventing double-selling of items',
      'Multi-warehouse transfer orders verified by barcode scanning',
      'FIFO valuation and automated low-stock reorder thresholds'
    ],
    features_ar: [
      'حجز مخزني فوري للمبيعات لمنع بيع الصنف مرتين',
      'أذون تحويل بين المخازن مؤكدة بالباركود لمنع العجز',
      'تقييم حركة البضاعة وتنبيهات عند اقتراب نفاد الأصناف'
    ],
    pipelineSteps: [
      {
        stepNumber: 1,
        label: 'Inbound PO Barcode Scan',
        label_ar: 'استلام وفحص البضاعة الواردة',
        node: 'Receiving Dock Terminal',
        node_ar: 'رصيف استلام المستودع',
        protocol: 'مطابقة بالباركود',
        detail: 'Supplier consignment scanned against Purchase Order; discrepancies flagged instantly.',
        detail_ar: 'مطابقة الوارد مع أمر الشراء بالباركود ورصد أي فروقات فوراً.'
      },
      {
        stepNumber: 2,
        label: 'FIFO Weighted Cost Calculation',
        label_ar: 'حساب متوسط تكلفة الصنف',
        node: 'Inventory Valuation Core',
        node_ar: 'محرك تقييم المخزون',
        protocol: 'حساب دقيق للتكلفة',
        detail: 'Unit cost updated with landed shipping/customs expenses; ledger entry generated.',
        detail_ar: 'تحديث سعر التكلفة شاملاً مصاريف الشحن والجمارك.'
      },
      {
        stepNumber: 3,
        label: 'Inter-Warehouse Transfer Validation',
        label_ar: 'تأكيد التحويل بين المخازن',
        node: 'Branch Transfer Bridge',
        node_ar: 'أذون التحويل الداخلي',
        protocol: 'توثيق مزدوج للصرف والاستلام',
        detail: 'Transfer order requires two-step dispatch and receipt scan to eliminate lost stock.',
        detail_ar: 'مسح الباركود عند الصرف ومسحه عند الاستلام لمنع أي عجز.'
      },
      {
        stepNumber: 4,
        label: 'Buffer Threshold & Reorder Alert',
        label_ar: 'تنبيه حد الأمان وإعادة الطلب',
        node: 'Automated Procurement Bot',
        node_ar: 'نظام تنبيهات المشتريات',
        protocol: 'إشعار واتساب للمشتريات',
        detail: 'Low stock trigger creates draft purchase requisition and alerts procurement manager.',
        detail_ar: 'اقتراح طلب شراء وتنبيه مسؤول المشتريات قبل نفاد الصنف.'
      }
    ],
    sampleData: [
      { col1: 'WH-801', col2: 'Main Central Logistics Hub — Alexandria', col2_ar: 'المستودع الرئيسي — الإسكندرية', col3: 'Capacity: 86% · 24,000 Items Logged', col3_ar: 'الإشغال: 86% · 24,000 صنف', status: 'Optimal', status_ar: 'رصيد آمن' },
      { col1: 'WH-802', col2: 'Cairo Greater Branch Inventory Hub', col2_ar: 'مخزن فرع القاهرة الكبرى', col3: 'Transfer Inbound: 1,200 Units Verified', col3_ar: 'تحويل وارد: 1,200 قطعة مفحوصة', status: 'Synchronized', status_ar: 'متزامن لحظياً' },
      { col1: 'WH-803', col2: 'Printing Raw Materials Warehouse', col2_ar: 'مستودع خامات الورق والأحبار', col3: 'Paper Stock: 480 Reams Logged', col3_ar: 'رصيد الورق: 480 باقة', status: 'Optimal', status_ar: 'جرد مطابق' },
      { col1: 'WH-804', col2: 'Service Spare Parts Central Depot', col2_ar: 'مستودع قطع غيار الصيانة', col3: 'Safety Threshold Alert: 15 Units Left', col3_ar: 'تنبيه حد الأمان: متبقي 15 قطعة', status: 'Pending', status_ar: 'اقترب من الحد الأدنى' }
    ]
  },
  {
    id: 'accounting',
    name: 'General Ledger & Audit Logs',
    name_ar: 'الحسابات العامة وسجل التدقيق',
    kpiLabel: 'Operating Cash & Ledger Parity',
    kpiLabel_ar: 'صافي السيولة النقدية',
    kpiValue: '$720,400',
    kpiValue_ar: '720,400 $',
    kpiTrend: 'Automated double-entry & full audit trail',
    kpiTrend_ar: 'قيود آلية مع توثيق شامل للحركات',
    summary: 'Automated double-entry accounting with automatic general ledger posting, accounts payable/receivable, real-time audit logs, and live cash flow.',
    summary_ar: 'قيد محاسبي مزدوج يتولد تلقائياً مع كل حركة بيع أو صرف، مع سجل رقابي يوثق المستخدم والوقت والقيمة.',
    features: [
      'Automated journal voucher posting triggered by sales & payments',
      'Real-time accounts receivable / payable with aging analysis',
      'Comprehensive audit trail logging all adjustments and user records'
    ],
    features_ar: [
      'توليد قيود اليومية آلياً فور إصدار الفواتير وسندات الصرف والقبض',
      'متابعة حسابات العملاء والموردين ومواعيد التحصيل بدقة',
      'سجل رقابي مشفر يوثق كافة التعديلات والحركات لمنع التلاعب'
    ],
    pipelineSteps: [
      {
        stepNumber: 1,
        label: 'Operational Event Capture',
        label_ar: 'تسجيل الحركة المالية فوراً',
        node: 'Event Bus Listener',
        node_ar: 'مستقبل الحركات المالية',
        protocol: 'التقاط فوري من الفروع',
        detail: 'Sales invoice, payment voucher, or supplier bill captured in real time.',
        detail_ar: 'استقبال حركة الفاتورة أو السند لحظياً من الفرع.'
      },
      {
        stepNumber: 2,
        label: 'Double-Entry Matrix Synthesis',
        label_ar: 'توليد القيد المحاسبي الآلي',
        node: 'Journal Generation Engine',
        node_ar: 'محرك قيود اليومية',
        protocol: 'قيد مزدوج متوازن',
        detail: 'Balanced Debit & Credit legs calculated according to financial chart of accounts.',
        detail_ar: 'توزيع أطراف القيد (مدين ودائن) وفق شجرة الحسابات.'
      },
      {
        stepNumber: 3,
        label: 'Immutable Audit Log Hash',
        label_ar: 'توثيق السجل الرقابي المشفر',
        node: 'Compliance Audit Vault',
        node_ar: 'سجل التدقيق والرقابة',
        protocol: 'توثيق غير قابل للتعديل',
        detail: 'Captures user ID, timestamp, original values, and IP address into immutable log.',
        detail_ar: 'تسجيل اسم المستخدم والوقت والقيم الأصلية بسجل آمن.'
      },
      {
        stepNumber: 4,
        label: 'Real-Time Financial Dashboard',
        label_ar: 'تحديث شاشة الأرباح والسيولة',
        node: 'Executive Analytics Hub',
        node_ar: 'لوحة القيادة المالية',
        protocol: 'تحديث لحظي للتقارير',
        detail: 'Live cash flow, accounts aging, and profit/loss statements updated in sub-second.',
        detail_ar: 'تحديث فوري لميزان المراجعة، الأرباح، وأعمار الديون.'
      }
    ],
    sampleData: [
      { col1: 'JE-2026-701', col2: 'Commercial Bank Automated Reconciliation', col2_ar: 'تسوية حساب البنك التجاري', col3: 'Credit: $94,200 | Verified Deposits', col3_ar: 'إيداع: 94,200 $ | مطابق للتحصيلات', status: 'Optimal', status_ar: 'مطابق دفترياً' },
      { col1: 'JE-2026-702', col2: 'Branch Daily Cashier Shift Transfer', col2_ar: 'إيراد خزينة الكاشير اليومية — الفروع', col3: 'Debit: $24,400 | Shift Signed Off', col3_ar: 'إيراد: 24,400 $ | تقفيل معتمد', status: 'Synchronized', status_ar: 'مرحل للحسابات' },
      { col1: 'JE-2026-703', col2: 'Print Job Order Raw Material Recognition', col2_ar: 'تكلفة خامات أمر الشغل #JOB-301', col3: 'Cost: $6,800 | Auto-posted to Ledger', col3_ar: 'تكلفة: 6,800 $ | قيد تكلفة الإنتاج', status: 'Optimal', status_ar: 'قيد آلي معتمد' },
      { col1: 'JE-2026-704', col2: 'Audit Log Check: Admin Ledger Adjustment', col2_ar: 'سجل الرقابة: تعديل قيد بمعرفة المدير المالي', col3: 'User: CFO Refaat · Timestamp: 14:22:04', col3_ar: 'المستخدم: المدير المالي · توثيق كامل', status: 'Optimal', status_ar: 'موثق بالسجل' }
    ]
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    name_ar: 'المؤسسات التعليمية',
    kpiLabel: 'Enrolled Students & Trainees',
    kpiLabel_ar: 'الطلاب والمتدربون المقيدون',
    kpiValue: '2,150 Enrolled',
    kpiValue_ar: '2,150 طالب ومتدرب',
    kpiTrend: 'Automated installment tracking & QR certs',
    kpiTrend_ar: 'متابعة آلية للأقساط وشهادات QR',
    summary: 'Manage student enrollment, tuition installment plans, teacher/instructor commissions, attendance tracking, and QR-verified certificate issuance.',
    summary_ar: 'جدولة المصروفات والأقساط، احتساب نسب المحاضرين، وإصدار الشهادات الرقمية المعتمدة فوراً.',
    features: [
      'Automated tuition installment scheduling with WhatsApp alerts',
      'Instructor revenue shares and profit commission calculations',
      'Instant tamper-proof digital certificates with QR validation'
    ],
    features_ar: [
      'جدولة الأقساط آلياً وإرسال تنبيهات السداد عبر واتساب',
      'احتساب نسب وأرباح المحاضرين والمدربين بضغطة زر',
      'إصدار فوري للشهادات الرقمية المعتمدة برمز QR سريع التحقق'
    ],
    pipelineSteps: [
      {
        stepNumber: 1,
        label: 'Student Enrollment & Fee Matrix',
        label_ar: 'تسجيل الطالب وجدولة المصروفات',
        node: 'Student Affairs Registry',
        node_ar: 'شؤون الطلاب والدارسين',
        protocol: 'إنشاء الملف المالي والأكاديمي',
        detail: 'Academic record opened, installment payment schedule structured.',
        detail_ar: 'إنشاء الملف وجدولة مواعيد استحقاق الأقساط.'
      },
      {
        stepNumber: 2,
        label: 'Automated Due-Date Alerts',
        label_ar: 'تنبيهات استحقاق الأقساط',
        node: 'WhatsApp Automation Gateway',
        node_ar: 'بوابة إشعارات أولياء الأمور',
        protocol: 'إرسال مباشر عبر واتساب',
        detail: 'Tuition reminder with direct payment link sent to parent/student.',
        detail_ar: 'إرسال تذكير بموعد القسط ورابط السداد لولي الأمر.'
      },
      {
        stepNumber: 3,
        label: 'Instructor Commission Split',
        label_ar: 'احتساب مستحقات المحاضرين',
        node: 'Payroll & Commission Core',
        node_ar: 'محرك النسب والرواتب',
        protocol: 'احتساب آلي للأرباح والنسب',
        detail: 'Course revenue share calculated automatically upon batch completion.',
        detail_ar: 'احتساب نسبة المدرب من تحصيلات المجموعة آلياً.'
      },
      {
        stepNumber: 4,
        label: 'QR-Verified Digital Certificate',
        label_ar: 'إصدار الشهادة الرقمية المعتمدة',
        node: 'Tamper-Proof Cert Vault',
        node_ar: 'منظومة إصدار الشهادات',
        protocol: 'شهادة رقمية موثقة برمز QR',
        detail: 'Digital certificate issued with public verification URL for employers.',
        detail_ar: 'توليد شهادة معتمدة برمز QR للتحقق السريع عالمياً.'
      }
    ],
    sampleData: [
      { col1: 'EDU-2026-104', col2: 'Tuition Installment Recognition (Term 2)', col2_ar: 'تحصيل قسط دراسي — الصف الأول الثانوي', col3: 'Value: $850 · WhatsApp Receipt Sent', col3_ar: 'القيمة: 850 $ · إشعار واتساب لولي الأمر', status: 'Optimal', status_ar: 'مسدد بالكامل' },
      { col1: 'EDU-2026-189', col2: 'Professional Software Diploma (Batch 14)', col2_ar: 'دبلومة هندسة البرمجيات (المجموعة 14)', col3: 'Hall A (24/25 Seats) · Eng. Ahmed', col3_ar: 'قاعة أ (24/25 مقعد) · م. أحمد', status: 'Synchronized', status_ar: 'مكتملة العدد' },
      { col1: 'EDU-2026-215', col2: 'Trainer Revenue Commission Settlement', col2_ar: 'تسوية مستحقات مدرب التسويق', col3: 'Share: $1,650 Auto-calculated', col3_ar: 'النسبة: 1,650 $ معتمدة آلياً', status: 'Optimal', status_ar: 'تمت التسوية' },
      { col1: 'EDU-2026-302', col2: 'Digital Certificates Dispatch Batch', col2_ar: 'دفعة شهادات معتمدة برمز QR', col3: 'Dispatched: 32 Verified Certificates', col3_ar: 'تم الإصدار: 32 شهادة رقمية', status: 'Synchronized', status_ar: 'شهادات مسلمة' }
    ]
  }
];
