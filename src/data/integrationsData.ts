export interface IntegrationItem {
  id: string;
  category: 'branches' | 'messaging' | 'payments' | 'migration';
  name: string;
  name_ar: string;
  protocol: string;
  protocol_ar: string;
  badge: string;
  badge_ar: string;
  description: string;
  description_ar: string;
  capabilities: string[];
  capabilities_ar: string[];
  uptime: string;
  syncType: 'Real-time Webhook' | 'Sub-second API' | 'Batch ETL' | 'Cryptographic RPC';
  syncType_ar: string;
}

export const integrationsData: IntegrationItem[] = [
  // 1. Multi-Branch & Central Warehouse Sync
  {
    id: 'multi-branch-sync',
    category: 'branches',
    name: 'Real-Time Multi-Branch & Central Warehouse Sync Engine',
    name_ar: 'محرك الربط والمزامنة اللحظية بين الفروع والمستودعات',
    protocol: 'Encrypted REST API & WebSocket Sync',
    protocol_ar: 'قنوات مشفرة REST API ومزامنة عبر WebSockets',
    badge: 'Real-Time Sync',
    badge_ar: 'مزامنة لحظية فائقة السرعة',
    description: 'Instant atomic synchronization of stock inventory, price updates, inter-branch transfer orders, and cash register shifts across multiple geographical locations.',
    description_ar: 'مزامنة ذرية فورية لأرصدة المخازن، تحديثات الأسعار، أذون التحويل بين الفروع، وتقفيل الخزائن اليومية بين كافة المعارض ونقاط البيع المركزية.',
    capabilities: [
      'Real-time multi-branch stock availability and reservation',
      'Automated inter-branch transfer approvals and transit logs',
      'Sub-second cashier price-list sync across all sales points'
    ],
    capabilities_ar: [
      'تحديث لحظي لأرصدة المنتجات وإمكانية حجز البضاعة من أي فرع',
      'إدارة أذون التحويلات البينية ومتابعة البضاعة أثناء النقل بدقة',
      'تحديث قوائم الأسعار والخصومات فورياً في كافة نقاط البيع'
    ],
    uptime: '99.99%',
    syncType: 'Sub-second API',
    syncType_ar: 'ربط لحظي فائق السرعة'
  },
  {
    id: 'customs-cargo-api',
    category: 'branches',
    name: 'Shipping Logistics & Courier Gateway APIs (Aramex, Bosta, Mylerz)',
    name_ar: 'ربط شركات الشحن والتوصيل السريع (بوسطة، أرامكس، مايلرز)',
    protocol: 'REST API & Webhook Dispatch',
    protocol_ar: 'بوابة الشحن المباشر والـ Webhooks',
    badge: 'Logistics Ready',
    badge_ar: 'جاهز للشحن والتوزيع',
    description: 'Automated airway bill (AWB) generation, courier dispatch triggers, and live package delivery tracking directly linked to sales orders.',
    description_ar: 'إصدار بوليصات الشحن (AWB) آلياً، طلب مندوب شركة الشحن بضغطة زر، وتتبع خط سير الشحنات وربط حالة التسليم بحساب العميل والخزينة.',
    capabilities: [
      'Instant shipping label and barcode generation',
      'Automated COD (Cash on Delivery) reconciliation',
      'Real-time tracking webhooks pushed directly into client accounts'
    ],
    capabilities_ar: [
      'طباعة بوليصات الشحن والباركود فور تأكيد طلب العميل',
      'تسوية مبالغ التحصيل عند الاستلام (COD) مع الخزينة آلياً',
      'تحديث حالة الشحنة لحظياً وإشعار العميل بمراحل التوصيل'
    ],
    uptime: '99.95%',
    syncType: 'Sub-second API',
    syncType_ar: 'ربط لحظي مباشر'
  },

  // 2. Official Messaging & Automation
  {
    id: 'meta-whatsapp-cloud',
    category: 'messaging',
    name: 'Meta WhatsApp Official Cloud API',
    name_ar: 'واتساب للأعمال السحابي الرسمي (Meta Cloud API)',
    protocol: 'Meta Graph API & Verified Webhooks',
    protocol_ar: 'واجهة Meta Graph الرسمية والـ Webhooks المعتمدة',
    badge: 'Official Meta Tier',
    badge_ar: 'ربط رسمي موثق',
    description: 'Instant transactional triggers for invoice dispatch, maintenance visit alerts, order status updates, and digital payment links.',
    description_ar: 'إرسال الفواتير والإيصالات، تأكيدات الشحن، وروابط الدفع وتذكيرات مواعيد الصيانة للعملاء آلياً عبر حساب الشركة الرسمي الموثق بالعلامة الخضراء.',
    capabilities: [
      'Instant PDF invoice and receipt delivery via WhatsApp',
      'Automated debt and payment due-date reminders',
      'Interactive quick-action buttons for approval and customer sign-off'
    ],
    capabilities_ar: [
      'إرسال الفواتير والإيصالات بصيغة PDF فورياً عبر الواتساب',
      'تذكير تلقائي بمدفوعات الآجل وتجديدات العقود السنوية',
      'أزرار تفاعلية تتيح للعميل تأكيد الاستلام أو طلب الدعم بنقرة واحدة'
    ],
    uptime: '99.98%',
    syncType: 'Real-time Webhook',
    syncType_ar: 'أتمتة ويب هوك لحظية'
  },
  {
    id: 'sms-voice-otp',
    category: 'messaging',
    name: 'SMS Gateways & Two-Factor OTP',
    name_ar: 'بوابات الرسائل النصية القصيرة (SMS) والتحقق الأمني',
    protocol: 'SMPP v3.4 & High-Throughput REST',
    protocol_ar: 'بروتوكول SMPP المباشر وواجهات الإرسال الفوري',
    badge: 'Carrier Direct',
    badge_ar: 'ربط مباشر مع شبكات الاتصالات',
    description: 'High-speed critical security notifications, warehouse release verification codes, and client portal multi-factor login (2FA).',
    description_ar: 'إرسال رموز التحقق السرية (OTP) لأذون صرف المخازن الكبرى، التحقق من تسجيل دخول الموظفين، وإشعارات تسليم البضائع.',
    capabilities: [
      'Sub-3-second OTP delivery for secure stock dispatch',
      'Role-based approval tokens for financial transactions',
      'Branded sender ID across local mobile carriers'
    ],
    capabilities_ar: [
      'وصول رموز التحقق في أقل من 3 ثوانٍ لصرف العهد والبضائع الحساسة',
      'اعتماد الحركات المالية والتحويلات عبر رموز تأكيد رقمية',
      'اسم مرسل معتمد وموثق باسم شركتك لدى كافة شبكات المحمول'
    ],
    uptime: '99.95%',
    syncType: 'Sub-second API',
    syncType_ar: 'ربط لحظي فائق السرعة'
  },

  // 3. Payment Terminals & Gateways
  {
    id: 'payment-gateways',
    category: 'payments',
    name: 'Multi-Gateway Payment Switch (Paymob, Stripe, Fawry)',
    name_ar: 'بوابات الدفع الإلكتروني والمحافظ (Paymob, Stripe, Fawry)',
    protocol: 'Secure Tokenization & Instant Webhooks',
    protocol_ar: 'التشفير الآمن والـ Webhooks اللحظية مع البنوك',
    badge: 'PCI-DSS Compliant',
    badge_ar: 'متوافق مع معايير الأمان البنكي',
    description: 'Unified payment orchestration handling credit cards, mobile wallets, Meeza, and installment partners with instant bank reconciliation.',
    description_ar: 'معالجة موحدة لكافة وسائل الدفع (فيزا، ماستركارد، ميزة، المحافظ الإلكترونية، وشركات التقسيط) مع تسوية القيود المحاسبية بالخزينة تلقائياً.',
    capabilities: [
      'Zero-delay payment link generation in invoices',
      'Automated double-entry bank deposit matching',
      'Installment provider integration (ValU, Souhoola, Aman)'
    ],
    capabilities_ar: [
      'توليد روابط الدفع المباشرة داخل الفاتورة وإرسالها للعميل',
      'مطابقة الإيداعات البنكية وترحيل القيود المحاسبية للخزينة آلياً',
      'الربط مع برامج التقسيط المباشر (فاليو، سهولة، أمان، تابي)'
    ],
    uptime: '99.99%',
    syncType: 'Real-time Webhook',
    syncType_ar: 'مطابقة بنكية لحظية'
  },
  {
    id: 'pos-hardware-terminals',
    category: 'payments',
    name: 'Smart POS Hardware & Barcode Engines',
    name_ar: 'ماكينات نقاط البيع (POS) وطابعات الباركود الحرارية',
    protocol: 'TCP/IP & Serial Hardware Drivers',
    protocol_ar: 'بروتوكول TCP/IP ومشغلات المنافذ التسلسلية',
    badge: 'Hardware Ready',
    badge_ar: 'جاهز لأجهزة الكاشير والمخازن',
    description: 'Native drivers connecting industrial receipt printers, electronic weight scales, cash drawers, and rugged warehouse barcode scanners.',
    description_ar: 'تعريفات مباشرة وسريعة لربط طابعات الفواتير الحرارية، الموازين الإلكترونية لمنافذ البيع، درج النقدية التلقائي، وماسحات الباركود الصناعية.',
    capabilities: [
      'Instant thermal receipt printing under 400ms',
      'Electronic scale weight auto-read on checkout',
      'Cash drawer kick-out triggered on invoice confirmation'
    ],
    capabilities_ar: [
      'طباعة الفواتير الحرارية وإيصالات الاستلام في أقل من 400 مللي ثانية',
      'قراءة الوزن تلقائياً من الميزان الإلكتروني عند حساب الصنف بالكاشير',
      'فتح درج النقدية آلياً عند اعتماد المعاملة وتسجيل حركة الخزينة'
    ],
    uptime: '99.99%',
    syncType: 'Sub-second API',
    syncType_ar: 'تواصل عتادي مباشر'
  },

  // 4. Legacy Data Migration & ETL
  {
    id: 'legacy-etl-migration',
    category: 'migration',
    name: 'Legacy Data Ingestion Engine (Excel, Odoo, SAP, SQL)',
    name_ar: 'محرك ترحيل البيانات القديمة (Excel, Odoo, SAP, SQL Server)',
    protocol: 'Automated Schema Mapping & Sanitization ETL',
    protocol_ar: 'محرك مطابقة وتنظيف الجداول وقواعد البيانات ETL',
    badge: 'Zero Operational Downtime',
    badge_ar: 'بدون توقف للعمليات التشغيلية',
    description: 'Advanced data migration pipeline that imports, deduplicates, and cleanses historical customer records, ledger balances, and warehouse SKU batches.',
    description_ar: 'أدوات هندسية متطورة لسحب وفلترة بياناتك القديمة (أرصدة العملاء، سجلات الحسابات، وقوائم الأصناف والباركود) ونقلها للنظام الجديد بسلاسة تامة.',
    capabilities: [
      'Automated SKU and barcode deduplication from dirty Excel sheets',
      'Opening balance verification and trial balance reconciliation',
      'Zero-loss historical transaction preservation'
    ],
    capabilities_ar: [
      'تنظيف وتوحيد أكواد الأصناف والباركود ومنع التكرار من ملفات الإكسل القديمة',
      'مطابقة ميزان المراجعة وتدقيق الأرصدة الافتتاحية بدقة 100%',
      'ترحيل السجلات التاريخية للعملاء والموردين بدون فقدان أي بيانات سابقة'
    ],
    uptime: '100%',
    syncType: 'Batch ETL',
    syncType_ar: 'ترحيل ومعالجة مجمعة'
  }
];
