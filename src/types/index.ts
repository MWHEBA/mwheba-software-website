export type PageView = 
  | 'home'
  | 'solutions'
  | 'solution-detail'
  | 'erp'
  | 'case-studies'
  | 'case-study-detail'
  | 'process'
  | 'about'
  | 'contact';

export type SolutionId = 
  | 'sales-pos'
  | 'inventory-supply'
  | 'finance-accounting'
  | 'hr-payroll'
  | 'crm-pipeline'
  | 'printing-production'
  | 'education-academy'
  | 'automation-integrations'
  | 'bespoke-portals';

export interface Solution {
  id: SolutionId;
  number: string;
  name: string;
  name_ar?: string;
  tagline: string;
  tagline_ar?: string;
  description: string;
  description_ar?: string;
  extendedDescription: string;
  extendedDescription_ar?: string;
  keyCapabilities: string[];
  keyCapabilities_ar?: string[];
  optionalCapabilities?: string[];
  optionalCapabilities_ar?: string[];
  businessOutcomes: string[];
  businessOutcomes_ar?: string[];
  techFocus: string[];
  idealFor: string;
  idealFor_ar?: string;
  contextualCta_ar?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  title_ar?: string;
  clientCategory: string;
  clientCategory_ar?: string;
  industry: string;
  industry_ar?: string;
  timeline: string;
  timeline_ar?: string;
  challenge: string;
  challenge_ar?: string;
  approach: string;
  approach_ar?: string;
  solution: string;
  solution_ar?: string;
  technology: string[];
  results: {
    label: string;
    label_ar?: string;
    metric: string;
    detail: string;
    detail_ar?: string;
  }[];
  architectureSummary: string;
  architectureSummary_ar?: string;
}

export type ErpModuleId = 
  | 'operations'
  | 'inventory'
  | 'sales'
  | 'accounting'
  | 'procurement'
  | 'crm'
  | 'hr'
  | 'analytics';

export interface ErpModule {
  id: ErpModuleId;
  name: string;
  name_ar?: string;
  summary: string;
  summary_ar?: string;
  kpiLabel: string;
  kpiLabel_ar?: string;
  kpiValue: string;
  kpiTrend: string;
  kpiTrend_ar?: string;
  tableColumns: string[];
  tableColumns_ar?: string[];
  sampleData: Record<string, string>[];
  sampleData_ar?: Record<string, string>[];
}

export interface LeadFormData {
  projectType: string;
  scopeSize: string;
  timeline: string;
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneWhatsapp: string;
  companyWebsite: string;
  projectDescription: string;
  currentFriction: string;
}

