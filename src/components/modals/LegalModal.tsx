import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 text-start">
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#063B5C] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00ACD4]" />
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-100">
              {type === 'privacy'
                ? 'سياسة الخصوصية وحوكمة البيانات'
                : 'شروط وضوابط التعاقد الهندسي'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-bold text-slate-900 text-sm">
                موهبة للحلول البرمجية — ميثاق حوكمة وسرية بيانات العملاء
              </p>
              <p>
                نلتزم في شركة موهبة للحلول البرمجية بأعلى معايير الحماية والأمان المؤسسي فيما يتعلق بالدورة المستندية، وقواعد البيانات، والأسرار التجارية الخاصة بعملائنا وشركائنا.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 text-xs uppercase tracking-wider">
                1. سرية بيانات المشروعات والدراسات
              </h4>
              <p>
                كافة المعطيات والتفاصيل التشغيلية التي يتم تقديمها عبر طلبات الاستشارة مخصصة حصراً لتقييم الاحتياجات الفنية وإعداد عروض الأسعار والمخططات الهندسية. نتعهد بعدم مشاركة أو بيع أي بيانات لأي طرف ثالث.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 text-xs uppercase tracking-wider">
                2. ملكية الكود المصدري والأصول البرمجية
              </h4>
              <p>
                على عكس المنصات السحابية الجاهزة (SaaS) التي تحتكر بياناتك، تضمن شركة موهبة تنازلاً كاملاً عن الملكية الفكرية للكود المصدري وقواعد البيانات المصممة خصيصاً لشركتكم فور تسوية المراحل التعاقدية.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 text-xs uppercase tracking-wider">
                3. عزل البنية التحتية والنسخ الاحتياطي
              </h4>
              <p>
                يتم استضافة أنظمة العملاء في بيئات سحابية معزولة تماماً مع جدران حماية مشددة، وقواعد بيانات مستقلة غير مشتركة، ونسخ احتياطي يومي مشفر لضمان استمرارية الأعمال دون أي مخاطر.
              </p>
            </>
          ) : (
            <>
              <p className="font-bold text-slate-900 text-sm">
                موهبة للحلول البرمجية — ضوابط وأطر التعاقد والتطوير البرمجي
              </p>
              <p>
                تحكم هذه الضوابط كافة الاتفاقيات وعقود تطوير الأنظمة البرمجية وتنفيذ أنظمة ERP المبرمة بين شركة موهبة وعملائها.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 text-xs uppercase tracking-wider">
                1. وثيقة المواصفات المعتمدة (FRS)
              </h4>
              <p>
                يبدأ كل مشروع بإعداد واعتماد وثيقة المتطلبات الفنية والتشغيلية المعتمدة التي تحدد بدقة نطاق العمل، شاشات النظام، وقواعد البيانات، ومراحل التسليم المحددة.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 text-xs uppercase tracking-wider">
                2. التسليم المرحلي والاعتماد
              </h4>
              <p>
                تخضع المشاريع لمراحل تسليم مجدولة تمكّن العميل من تجربة النظام وإبداء الملاحظات والتعديلات قبل الانتقال للمرحلة التالية.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 text-xs uppercase tracking-wider">
                3. الضمان والدعم الفني
              </h4>
              <p>
                تلتزم موهبة بضمان شامل ضد أي أخطاء برمجية لمدة محددة بعد الإطلاق، مع توفير عقود صيانة ودعم سنوية تضمن استقرار المنظومة على مدار الساعة.
              </p>
            </>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#075D91] hover:bg-[#063B5C] rounded-md transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
