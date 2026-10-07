export interface TechItem {
  id: string;
  name: string;
  category: 'core' | 'frontend' | 'database' | 'styling' | 'integrations' | 'infrastructure';
  role: string;
  role_ar: string;
  rationale: string;
  rationale_ar: string;
}

export const techStackData: TechItem[] = [
  // Backend & Core Logic
  {
    id: 'python-django-fastapi',
    name: 'Python (Django & FastAPI)',
    category: 'core',
    role: 'Enterprise Core Logic & REST APIs',
    role_ar: 'النواة البرمجية وبناء الـ APIs السريعة',
    rationale: 'Battle-tested enterprise framework offering unmatched data security, ORM stability, and rapid API execution.',
    rationale_ar: 'إطار عمل مؤسسي صلب يضمن أمان المعاملات المالية، واستقرار قواعد البيانات وسرعة معالجة الـ APIs.'
  },
  // Frontend
  {
    id: 'react-typescript',
    name: 'React.js & TypeScript',
    category: 'frontend',
    role: 'Dynamic Dashboards & Client Portals',
    role_ar: 'لوحات التحكم التفاعلية وبوابات الخدمة',
    rationale: 'Component-driven frontend architecture delivering sub-second interactive user experiences for staff and clients.',
    rationale_ar: 'معمارية موديولر سريعة ومكتوبة بـ TypeScript لضمان أمان الأنواع واستجابة فورية دون أي أخطاء وقت التشغيل.'
  },
  {
    id: 'lightweight-pos-engine',
    name: 'Offline-First Web POS & Thermal SDKs',
    category: 'frontend',
    role: 'Sub-second Counter POS Engine',
    role_ar: 'محرك نقاط البيع والكاشير فائق السرعة',
    rationale: 'High-speed, zero-bloat reactive UI layer ideal for counter POS, receipt printing, and fast form workflows.',
    rationale_ar: 'طبقة واجهات خفيفة جداً تضمن سرعة استجابة الكاشير وطباعة الفواتير الحرارية مع دعم استمرار العمل بدون إنترنت.'
  },
  // Databases
  {
    id: 'postgresql-enterprise',
    name: 'PostgreSQL Enterprise ACID & Redis',
    category: 'database',
    role: 'ACID-Compliant Relational Data Engines',
    role_ar: 'قواعد بيانات علائقية متوافقة مع معايير ACID',
    rationale: 'Strict relational data integrity, double-entry audit logging, and zero data loss for enterprise records.',
    rationale_ar: 'حفظ دقيق للمعاملات المالية وحركة المخزون مع ضمان عدم فقدان أي حركة وسجلات تدقيق كاملة وكاشينج فائق عبر Redis.'
  },
  // Styling
  {
    id: 'tailwind-bootstrap',
    name: 'Tailwind CSS & Bootstrap',
    category: 'styling',
    role: 'Responsive Corporate Design System',
    role_ar: 'نظام تصميم مؤسسي متجاوب ومرن',
    rationale: 'Semantic CSS variables, flat corporate color palettes, and responsive multi-device accessibility.',
    rationale_ar: 'تنسيقات دقيقة ومتجاوبة مع شاشات الكمبيوتر والتابلت ونقاط البيع المحمولة بألوان مسطحة وأنيقة.'
  },
  // Integrations & Hardware
  {
    id: 'integrations-hardware',
    name: 'REST APIs, WhatsApp & Barcode SDKs',
    category: 'integrations',
    role: 'Hardware & Multi-Channel Bridges',
    role_ar: 'الربط مع أجهزة الباركود والواتساب والبنوك',
    rationale: 'Direct integration with barcode scanners, receipt printers, biometric gates, and WhatsApp notification bots.',
    rationale_ar: 'ربط مباشر وسلس مع قارئات الباركود، طابعات الفواتير الحرارية، أجهزة البصمة، وبوابات الدفع الإلكتروني.'
  },
  // Infrastructure
  {
    id: 'infrastructure-hosting',
    name: 'Managed Cloud & On-Premise Servers',
    category: 'infrastructure',
    role: '100% Flexible Deployment Sovereignty',
    role_ar: 'مرونة كاملة في خيارات الاستضافة والسيادة',
    rationale: 'Deploy on MWHEBA Hosting Services or any private cloud/on-premise server with complete data sovereignty.',
    rationale_ar: 'إمكانية النشر على استضافة موهبة السحابية أو خوادم شركتكم الخاصة مع السيادة الكاملة على بياناتكم.'
  }
];
