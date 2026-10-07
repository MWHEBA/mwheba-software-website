import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'commercial-supplies-pos-erp',
    title: 'Multi-Branch Commercial Trading & Warehouse Operations System',
    title_ar: 'منظومة تجارية وتوريدات متعددة الفروع ونقاط البيع',
    clientCategory: 'Commercial Wholesale & Multi-Branch Retail Enterprise',
    clientCategory_ar: 'شركة تجارية وتوريدات وسلسلة معارض',
    industry: 'Commercial Trading & Wholesale POS',
    industry_ar: 'الشركات التجارية ونقاط البيع',
    timeline: '3.5-Month Implementation',
    timeline_ar: 'تشغيل تدريجي خلال 3.5 أشهر',
    challenge: 'Branch managers operated isolated cashier tools, reporting daily sales through messaging apps and weekend paper reconciliations. Stock levels diverged between showrooms and central logistics hubs, causing frequent stockouts, untracked transfer discrepancies, and delayed profit visibility.',
    challenge_ar: 'تضارب في أرصدة البضاعة بين المعارض والمخزن، واعتماد على برامج كاشير منفصلة وتقفيل يدوي يستهلك ساعات.',
    approach: 'MWHEBA conducted on-site workflow audits across branches and warehouses, mapping counter POS operations, inter-branch transfer slips, and supplier billings. We engineered a centralized business platform connecting all points of sale in real time.',
    approach_ar: 'ربط مركزي لكافة نقاط البيع والمخازن مع قيود محاسبية وترحيل فوري للأرباح.',
    solution: 'Engineered a centralized commercial ERP featuring real-time multi-branch inventory tracking, barcode-assisted POS billing, sales invoice printing, and automated daily cashier closing reports.',
    solution_ar: 'منصة مركزية لمتابعة المخزون لحظياً، كاشير سريع بالباركود، وتقفيل آلي للخزائن وحسابات الأرباح.',
    technology: ['Python (Django / FastAPI)', 'React', 'TypeScript', 'PostgreSQL Enterprise ACID', 'Tailwind CSS', 'Thermal Receipt & Barcode APIs'],
    results: [
      {
        label: 'Stock Discrepancy Control',
        label_ar: 'الرقابة على المخزون',
        metric: '100% تطابق',
        detail: 'Real-time stock reservation and transfer logs significantly improved inventory control.',
        detail_ar: 'إنهاء عجز البضاعة وضبط التحويلات بين الفروع.'
      },
      {
        label: 'Daily Cashier Closing Time',
        label_ar: 'زمن تقفيل الخزائن',
        metric: '45 دقيقة ← 5 دقائق',
        detail: 'Automated shift closures and instant bank deposit reconciliations.',
        detail_ar: 'مطابقة فورية للنقدية والمدفوعات الإلكترونية.'
      },
      {
        label: 'Executive Margin Visibility',
        label_ar: 'رؤية أرباح الإدارة',
        metric: 'لحظية',
        detail: 'Leadership monitors net profit per branch and top-selling SKUs instantly.',
        detail_ar: 'معرفة أرباح كل فرع والأصناف الأكثر مبيعاً فورياً.'
      }
    ],
    architectureSummary: 'Centralized PostgreSQL ACID database with real-time transactional sync, sub-second POS barcode response, role-based cashier boundaries, and automated audit logging.',
    architectureSummary_ar: 'قواعد بيانات PostgreSQL موحدة وسريعة مع صلاحيات دقيقة للكاشير وتوثيق كامل لحركات الخزينة.'
  },
  {
    id: 'services-contracts-sla',
    title: 'Service Contracts, Field Technicians & SLA Operations System',
    title_ar: 'منظومة إدارة العقود الخدمية وزيارات الصيانة ومتابعة الـ SLAs',
    clientCategory: 'Corporate Commercial Services & Maintenance Retainers',
    clientCategory_ar: 'شركة خدمات وصيانة وتشغيل تعاقدات سنوية',
    industry: 'Commercial Services & Professional Firms',
    industry_ar: 'الشركات الخدمية والمهنية',
    timeline: '3-Month Deployment',
    timeline_ar: 'تشغيل متكامل خلال 3 أشهر',
    challenge: 'Managing hundreds of annual maintenance contracts and on-demand client tickets using spreadsheets led to missed preventive visits, SLA breach penalties, delayed renewal invoicing, and unrecorded technician field costs.',
    challenge_ar: 'إدارة مئات عقود الصيانة عبر جداول إكسيل، مما تسبب في نسيان الزيارات وتأخر تجديد العقود وصعوبة حصر التكاليف.',
    approach: 'MWHEBA mapped the entire service delivery lifecycle: contract parameters, preventive maintenance calendars, technician dispatch queues, milestone sign-offs, and automated recurring billing schedules.',
    approach_ar: 'أتمتة كاملة لدورة الصيانة: جدولة الزيارات الوقائية، توجيه الفنيين، وتوليد فواتير العقود آلياً.',
    solution: 'Built a specialized service management platform integrating client contract archives, automated technician visit dispatching, digital proof of service, and recurring retainer invoicing.',
    solution_ar: 'نظام متخصص لإدارة العقود السنوية، جدولة الزيارات، إثبات إتمام الخدمة رقمياً، ومتابعة التحصيلات.',
    technology: ['Python (Django / FastAPI)', 'React', 'TypeScript', 'PostgreSQL Enterprise ACID', 'Tailwind CSS', 'WhatsApp Business API'],
    results: [
      {
        label: 'Contract Renewal Velocity',
        label_ar: 'سرعة تجديد العقود',
        metric: '+40%',
        detail: 'Automated 30-day alerts ensured zero unbilled expired contracts.',
        detail_ar: 'تنبيهات استباقية منعت تسرب الإيرادات.'
      },
      {
        label: 'SLA Compliance Rate',
        label_ar: 'الالتزام بمواعيد الخدمة',
        metric: '98.5%',
        detail: 'Instant technician dispatch alerts reduced response latency.',
        detail_ar: 'سرعة استجابة وتوزيع فوري لطلبات الصيانة.'
      },
      {
        label: 'Field Cost Accounting',
        label_ar: 'دقة تكلفة الزيارات',
        metric: '100% دقيقة',
        detail: 'Direct linkage between spare parts custody and service job orders.',
        detail_ar: 'ربط مباشر لقطع الغيار والمصروفات بكل زيارة.'
      }
    ],
    architectureSummary: 'Modular PostgreSQL service architecture with real-time technician status tracking, automated recurring invoice engines, and encrypted client service history logs.',
    architectureSummary_ar: 'ربط آلي بين عقود الصيانة، الفوترة الدورية، وسجلات التدقيق الميدانية مع PostgreSQL.'
  },
  {
    id: 'printing-packaging-job-orders',
    title: 'Printing Press & Advertising Production Job Order System',
    title_ar: 'منظومة مطابع ووكالات الدعاية وتكلفة أوامر الشغل',
    clientCategory: 'Commercial Printing Press, Packaging & Media Production Agency',
    clientCategory_ar: 'مطبعة تجارية ومصنع تغليف ووكالة دعاية وإعلان',
    industry: 'Printing Presses & Advertising Agencies',
    industry_ar: 'شركات ومطابع الدعاية والإعلان',
    timeline: '3-Month Implementation',
    timeline_ar: 'تنفيذ مخصص خلال 3 أشهر',
    challenge: 'Estimating custom print jobs (paper sheet yields, grammages, lamination, die-cutting, ink ratios) manually caused pricing errors and hidden operational losses. Job orders were tracked on paper slips, leading to production bottlenecks and delayed delivery schedules.',
    challenge_ar: 'حساب تكلفة الورق والطباعة يدوياً سبب أخطاء تسعيرية وهدراً في الخامات، مع صعوبة تتبع مراحل الإنتاج.',
    approach: 'MWHEBA engineered a specialized print estimation algorithm calculating optimal sheet yields, raw material BOMs, machine run-times, and finishing costs instantly upon quotation input, converting approved quotes directly into production job orders.',
    approach_ar: 'برمجة حاسبة تفصيل الورق والتشغيل آلياً وربط عرض السعر بأمر الشغل في صالة الإنتاج مباشرة.',
    solution: 'Engineered a dedicated print and advertising ERP featuring dynamic paper yield calculation, production floor stage tracking, raw material stock allocation, and customer proof sign-offs.',
    solution_ar: 'نظام للمطابع والدعاية يدمج تسعير الورق والتشغيل، متابعة مراحل الإنتاج، وحجز الخامات من المستودع.',
    technology: ['Python (Django)', 'React', 'TypeScript', 'PostgreSQL Enterprise ACID', 'Tailwind CSS', 'PDF Generation & Job Order Engines'],
    results: [
      {
        label: 'Quote Generation Time',
        label_ar: 'إعداد عرض السعر',
        metric: '30 دقيقة ← دقيقة',
        detail: 'Instant mathematical paper yield and finishing cost calculation.',
        detail_ar: 'حساب فوري لتفصيل الورق وتكاليف الماكينات.'
      },
      {
        label: 'Raw Material Scrap Loss',
        label_ar: 'تقليل هدر الورق',
        metric: '-22%',
        detail: 'Optimal layout algorithms reduced unutilized offcuts significantly.',
        detail_ar: 'استغلال مثالي لمقاسات الورق وتقليل التوالف.'
      },
      {
        label: 'Job Order Floor Bottlenecks',
        label_ar: 'تتبع أوامر التشغيل',
        metric: '100% متابعة',
        detail: 'Real-time production floor status from prepress to packaging.',
        detail_ar: 'رؤية واضحة لكل مرحلة من التصميم للتسليم.'
      }
    ],
    architectureSummary: 'High-speed PostgreSQL relational data models engineered for complex BOM yield calculations, barcode-assisted production stage sign-offs, and automated raw material ledger deductions.',
    architectureSummary_ar: 'محرك حسابات PostgreSQL لتفصيل الخامات وتتبع الإنتاج بالباركود مع الخصم الآلي للمخزن.'
  },
  {
    id: 'school-academy-lifecycle-system',
    title: 'Integrated Educational Institution & Training Academy Platform',
    title_ar: 'منظومة إدارة المؤسسات التعليمية والشهادات الرقمية',
    clientCategory: 'Educational Institution, K-12 School & Hybrid Training Academy',
    clientCategory_ar: 'مؤسسة تعليمية ومجمع مدارس وأكاديمية تدريب',
    industry: 'Educational Institutions',
    industry_ar: 'المؤسسات التعليمية',
    timeline: '4-Month Staged Implementation',
    timeline_ar: 'تشغيل تدريجي خلال 4 أشهر',
    challenge: 'Managing student enrollment, tuition installment tracking, classroom vs online batches, trainer revenue commissions, and issuing accredited certificates manually caused severe administrative bottlenecks and payment disputes.',
    challenge_ar: 'صعوبة متابعة أقساط الطلاب يدوياً، وحساب نسب المدربين، واستغراق إصدار الشهادات الورقية وقتاً طويلاً.',
    approach: 'MWHEBA conducted an extensive workflow audit covering tuition installment schedules, grade books, instructor commission models, and instant QR certificate validation endpoints.',
    approach_ar: 'تصميم منظومة متكاملة لجدولة الأقساط، تذكيرات واتساب، حساب نسب المدربين، وإصدار شهادات QR مؤمنة.',
    solution: 'Engineered a centralized educational platform featuring automated tuition installment plans, WhatsApp notifications, trainer commission settlements, student report cards, and QR-verified certificate generation.',
    solution_ar: 'منصة شاملة: متابعة الأقساط، إشعارات واتساب، تسوية أرباح المدربين، وإصدار فوري للشهادات المعتمدة.',
    technology: ['Python (Django / FastAPI)', 'React', 'TypeScript', 'PostgreSQL Enterprise ACID', 'Tailwind CSS', 'WhatsApp Business API', 'PDF Engine'],
    results: [
      {
        label: 'Tuition & Fee Collection Speed',
        label_ar: 'سرعة تحصيل الأقساط',
        metric: 'مطابقة فورية',
        detail: 'Automated installment reminders and instant payment reconciliations.',
        detail_ar: 'تذكيرات آلية بالأقساط وإنهاء التأخيرات.'
      },
      {
        label: 'Trainer Settlement Speed',
        label_ar: 'تسوية نسب المدربين',
        metric: '7 أيام ← ضغطة زر',
        detail: 'Automated attendance and profit-share commission computation.',
        detail_ar: 'احتساب فوري للأرباح وساعات التدريب.'
      },
      {
        label: 'Tamper-Proof Certificates',
        label_ar: 'إصدار الشهادات المعتمدة',
        metric: 'رمز QR فوري',
        detail: 'Students verify and download authenticated certificates immediately.',
        detail_ar: 'شهادات رقمية موثقة تمنع التزوير تماماً.'
      }
    ],
    architectureSummary: 'Robust relational PostgreSQL database architecture with strict Role-Based Access Control (RBAC) separating administrative, financial, and instructor permissions, paired with daily encrypted backups.',
    architectureSummary_ar: 'صلاحيات مستقلة للإدارة والمالية والمعلمين على PostgreSQL مع نسخ احتياطي يومي مشفر.'
  }
];
