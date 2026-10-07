import React, { useState } from 'react';
import {
  Store,
  Warehouse,
  Calculator,
  GraduationCap,
  Layers,
  Cpu,
  CheckCircle2,
  Printer,
  QrCode,
  Truck,
  CreditCard,
  Users,
  Target
} from 'lucide-react';
import { SolutionId } from '../../types';

interface SimulatorProps {
  solutionId: SolutionId;
}

export const SolutionSimulator: React.FC<SimulatorProps> = ({ solutionId }) => {
  // 1. POS Simulator State
  const [posCashPaid, setPosCashPaid] = useState<boolean>(false);
  const [posPrinted, setPosPrinted] = useState<boolean>(false);

  // 2. Warehouse Simulator State
  const [whSource, setWhSource] = useState<'المستودع الرئيسي' | 'مخزن فرع المعادي'>('المستودع الرئيسي');
  const [whTarget, setWhTarget] = useState<'معرض مدينة نصر' | 'معرض التجمع'>('معرض مدينة نصر');
  const [whQty, setWhQty] = useState<number>(25);
  const [whTransferred, setWhTransferred] = useState<boolean>(false);

  // 3. Finance Simulator State
  const [selectedTxType, setSelectedTxType] = useState<'sale' | 'expense' | 'supplier' | 'multicurrency'>('sale');

  // 4. HR Simulator State
  const [hrPunchStatus, setHrPunchStatus] = useState<boolean>(false);
  const [hrShiftOvertime] = useState<number>(2);

  // 5. CRM Simulator State
  const [crmStage, setCrmStage] = useState<'lead' | 'offer' | 'negotiation' | 'won'>('offer');
  const [crmNoteAdded, setCrmNoteAdded] = useState<boolean>(false);

  // 6. Print House Simulator State
  const [printSheets, setPrintSheets] = useState<number>(1000);
  const [printUps, setPrintUps] = useState<number>(8);

  // 7. Academy Simulator State
  const [eduMode, setEduMode] = useState<'school' | 'academy'>('school');
  const [acadQrVerified, setAcadQrVerified] = useState<boolean>(false);
  const [acadPostponedTransferred, setAcadPostponedTransferred] = useState<boolean>(false);

  // 8. API Integration Simulator State
  const [apiEvent, setApiEvent] = useState<'payment' | 'shipping' | 'whatsapp'>('payment');

  // 9. Bespoke Portal Simulator State
  const [portalRole, setPortalRole] = useState<'client' | 'subcontractor' | 'admin'>('client');
  const [portalMilestoneApproved, setPortalMilestoneApproved] = useState<boolean>(false);

  return (
    <div className="bg-[#0B2538] rounded-3xl border border-[#075D91]/80 p-6 sm:p-8 shadow-2xl space-y-6">
      
      {/* 1. POS SIMULATOR */}
      {solutionId === 'sales-pos' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Store className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">شاشة الكاشير السريع (POS Terminal)</h4>
                <p className="text-[11px] text-slate-400">فرع: المعادي الرئيسي · الكاشير: أحمد محمود · وردية #412</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-bold">جاهزية أوفلاين نشطة (Offline-Ready)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white/5 rounded-2xl border border-white/10 p-4 space-y-3">
              <div className="text-xs font-bold text-cyan-300 pb-2 border-b border-white/10 flex justify-between">
                <span>الصنف والباركود ورصيد مخزن الفرع</span>
                <span>الكمية × السعر</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs py-2 px-2.5 rounded-lg bg-white/5">
                  <div>
                    <span className="text-white font-medium block">صنف تجاري A (باركود 6221001)</span>
                    <span className="text-[10px] text-emerald-400">المتبقي في مخزن الفرع: {posPrinted ? '46 قطعة (تم الخصم)' : '48 قطعة'}</span>
                  </div>
                  <span className="font-mono text-cyan-200 font-bold">2 × 150 ج.م = 300 ج.م</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 px-2.5 rounded-lg bg-white/5">
                  <div>
                    <span className="text-white font-medium block">خدمة صيانة وشحن سريع</span>
                    <span className="text-[10px] text-slate-400">بند خدمي / غير مخزني</span>
                  </div>
                  <span className="font-mono text-cyan-200 font-bold">1 × 50 ج.م = 50 ج.م</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-sm font-extrabold text-white">
                <span>الإجمالي النهائي:</span>
                <span className="text-emerald-400 font-mono text-base">350 ج.م</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 rounded-2xl border border-white/10 p-5 space-y-4">
              <span className="text-xs font-bold text-slate-300 block">إجراءات الدفع والطباعة:</span>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => { setPosCashPaid(true); setPosPrinted(false); }}
                  className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${posCashPaid ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-white/10 border-white/15 text-white hover:bg-white/15'}`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>{posCashPaid ? '✓ تم تحصيل المبلغ' : 'تسجيل دفع نقدي/فيزا'}</span>
                </button>

                <button
                  onClick={() => setPosPrinted(true)}
                  className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${posPrinted ? 'bg-cyan-600 border-cyan-500 text-white' : 'bg-white/10 border-white/15 text-white hover:bg-white/15'}`}
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{posPrinted ? '✓ جاري الطباعة...' : 'طباعة الفاتورة والخصم'}</span>
                </button>
              </div>

              {posPrinted && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-xs text-emerald-200 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>تم إصدار الفاتورة، خصم 2 قطعة من مخزن الفرع، وترحيل القيد!</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-mono">Tx Ref: POS-2026-8942 · Stock Sync: 22ms · ETA Status: Valid</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. WAREHOUSE SIMULATOR */}
      {solutionId === 'inventory-supply' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Warehouse className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">إذن صرف وتحويل مخزني بالباركود</h4>
                <p className="text-[11px] text-slate-400">مراقبة المخزون متعدد الفروع والمستودعات المركزية</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              100% تطابق الأرصدة
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="text-slate-400 block">المستودع المصدر:</span>
              <select
                value={whSource}
                onChange={(e) => setWhSource(e.target.value as any)}
                className="w-full bg-[#063B5C] border border-white/20 rounded-lg p-2 text-white font-bold cursor-pointer"
              >
                <option value="المستودع الرئيسي">المستودع الرئيسي (العبور)</option>
                <option value="مخزن فرع المعادي">مخزن فرع المعادي</option>
              </select>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="text-slate-400 block">الوجهة (الفرع المستلم):</span>
              <select
                value={whTarget}
                onChange={(e) => setWhTarget(e.target.value as any)}
                className="w-full bg-[#063B5C] border border-white/20 rounded-lg p-2 text-white font-bold cursor-pointer"
              >
                <option value="معرض مدينة نصر">معرض مدينة نصر</option>
                <option value="معرض التجمع">معرض التجمع</option>
              </select>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="text-slate-400 block">الكمية المحولة:</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={whQty}
                  onChange={(e) => setWhQty(Number(e.target.value))}
                  className="w-full bg-[#063B5C] border border-white/20 rounded-lg p-2 text-white font-bold font-mono"
                />
                <button
                  onClick={() => setWhTransferred(true)}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-bold whitespace-nowrap cursor-pointer"
                >
                  تنفيذ التحويل
                </button>
              </div>
            </div>
          </div>

          {whTransferred && (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-xs text-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تم خصم {whQty} قطعة من ({whSource}) وإضافتها لأمانات ({whTarget}) برمز باركود مؤمن.</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-300">Voucher: TRF-88219</span>
            </div>
          )}
        </div>
      )}

      {/* 3. FINANCE SIMULATOR */}
      {solutionId === 'finance-accounting' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">مولد القيود المحاسبية التلقائي (Double-Entry Engine)</h4>
                <p className="text-[11px] text-slate-400">توليد آلي للقيود المتوازنة فور حدوث أي معاملة تجارية مع الالتزام بـ EAS</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              ميزان مراجعة متوازن 100%
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setSelectedTxType('sale')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${selectedTxType === 'sale' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                معاملة: فاتورة مبيعات نقدية (10,000 ج.م)
              </button>
              <button
                onClick={() => setSelectedTxType('expense')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${selectedTxType === 'expense' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                معاملة: سداد إيجار فرع (15,000 ج.م)
              </button>
              <button
                onClick={() => setSelectedTxType('supplier')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${selectedTxType === 'supplier' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                معاملة: شراء خامات من مورد آجل (25,000 ج.م)
              </button>
              <button
                onClick={() => setSelectedTxType('multicurrency')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${selectedTxType === 'multicurrency' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                معاملة: استيراد خامات بالدولار ($1,000 = 49,000 ج.م)
              </button>
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 p-4 font-mono text-xs space-y-2">
              <div className="text-slate-400 text-[11px] pb-2 border-b border-white/10 flex justify-between">
                <span>الحساب (شجرة الحسابات)</span>
                <span>مدين (Debit) / دائن (Credit)</span>
              </div>

              {selectedTxType === 'sale' && (
                <>
                  <div className="flex justify-between text-emerald-400">
                    <span>من حـ/ الخزينة الرئيسية (1101)</span>
                    <span>10,000.00 ج.م [مدين]</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span>إلى حـ/ إيرادات المبيعات (4101)</span>
                    <span>10,000.00 ج.م [دائن]</span>
                  </div>
                </>
              )}

              {selectedTxType === 'expense' && (
                <>
                  <div className="flex justify-between text-emerald-400">
                    <span>من حـ/ إيجار الفروع والمباني (5201)</span>
                    <span>15,000.00 ج.م [مدين]</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span>إلى حـ/ حساب البنك التجاري (1102)</span>
                    <span>15,000.00 ج.م [دائن]</span>
                  </div>
                </>
              )}

              {selectedTxType === 'supplier' && (
                <>
                  <div className="flex justify-between text-emerald-400">
                    <span>من حـ/ مخزن الخامات الرئيسية (1201)</span>
                    <span>25,000.00 ج.م [مدين]</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span>إلى حـ/ الموردين والشركات (2101)</span>
                    <span>25,000.00 ج.م [دائن]</span>
                  </div>
                </>
              )}

              {selectedTxType === 'multicurrency' && (
                <>
                  <div className="flex justify-between text-emerald-400">
                    <span>من حـ/ بضاعة بالطريق واعتمادات مستندية (1205)</span>
                    <span>49,000.00 ج.م ($1,000.00 @ 49.00) [مدين]</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span>إلى حـ/ الموردين الأجانب - بالعملة الأجنبية (2102)</span>
                    <span>49,000.00 ج.م ($1,000.00) [دائن]</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. HR SIMULATOR */}
      {solutionId === 'hr-payroll' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">محاكي مطابقة البصمة ومسير الرواتب الآلي</h4>
                <p className="text-[11px] text-slate-400">ربط أجهزة ZKTeco · احتساب الإضافي والخصومات وتوليد صافي المرتب</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              ZKTeco Connected
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
              <span className="text-slate-300 font-bold block">الموظف: مهندس طارق عادل (قسم البرمجيات)</span>
              <div className="space-y-2 font-mono">
                <div className="flex justify-between p-2 rounded-lg bg-white/5">
                  <span className="text-slate-300">الراتب الأساسي التعاقدي:</span>
                  <span className="font-bold text-white">18,000 ج.م</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-emerald-500/15 text-emerald-300">
                  <span>ساعات العمل الإضافي ({hrShiftOvertime} ساعات):</span>
                  <span className="font-bold">+ 450 ج.م</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-rose-500/15 text-rose-300">
                  <span>قسط سلفة شهرية (تمت الموافقة):</span>
                  <span className="font-bold">- 1,000 ج.م</span>
                </div>
              </div>
              <button
                onClick={() => setHrPunchStatus(true)}
                className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-bold cursor-pointer transition-colors"
              >
                {hrPunchStatus ? '✓ تم سحب سجلات البصمة واحتساب المسير' : 'سحب سجلات البصمة وتوليد المسير'}
              </button>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-slate-300 font-bold block pb-2 border-b border-white/10">مفردات الراتب وصافي المستحق:</span>
                <div className="pt-3 space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>إجمالي الاستحقاقات:</span>
                    <span className="font-mono font-bold text-emerald-400">18,450.00 ج.م</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>إجمالي الاستقطاعات:</span>
                    <span className="font-mono font-bold text-rose-400">- 1,000.00 ج.م</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-extrabold text-white">
                    <span>صافي المرتب المحول للبنك:</span>
                    <span className="font-mono text-emerald-400 text-base">17,450.00 ج.م</span>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 text-[11px] text-slate-400 font-mono">
                // Auto Posted to GL Cost Center: #DEV-CC-04
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. CRM SIMULATOR */}
      {solutionId === 'crm-pipeline' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">لوحة كانبان لخط الصفقات ومتابعة المبيعات (Deals Pipeline)</h4>
                <p className="text-[11px] text-slate-400">تتبع تقدم العميل المحتمل من أول اتصال وحتى إغلاق الصفقة</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              Lead Score: 92% Hot
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setCrmStage('lead')}
                className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${crmStage === 'lead' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                1. عميل محتمل جديد
              </button>
              <button
                onClick={() => setCrmStage('offer')}
                className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${crmStage === 'offer' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                2. تقديم عرض سعر
              </button>
              <button
                onClick={() => setCrmStage('negotiation')}
                className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${crmStage === 'negotiation' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                3. مرحلة التفاوض
              </button>
              <button
                onClick={() => setCrmStage('won')}
                className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${crmStage === 'won' ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                4. صفقة رابحة (Won ✓)
              </button>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-white block">شركة البركة للتجارة والتوزيع · قيمة الصفقة: 85,000 ج.م</span>
                <span className="text-[11px] text-slate-400">مسؤول المبيعات: محمد سامي · آخر اتصال: منذ ساعتين</span>
              </div>
              {crmStage === 'won' ? (
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/40">
                  ✓ تم تحويل العميل تلقائياً إلى فاتورة مبيعات وأمر تسليم
                </span>
              ) : (
                <button
                  onClick={() => setCrmNoteAdded(true)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer text-xs"
                >
                  {crmNoteAdded ? '✓ تم تسجيل متابعة واتساب' : '+ تسجيل مكالمة ومتابعة'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. PRINT HOUSE SIMULATOR */}
      {solutionId === 'printing-production' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Printer className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">حاسبة تفصيل مقاسات الورق والهدر وتذاكر الصالة المعزولة</h4>
                <p className="text-[11px] text-slate-400">حساب فوري للتقطيع الأمثل من أفرخ 70x100 وحجب الأسعار عن المشغل</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              -22% تقليل هدر الورق
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="text-slate-400 block">كمية العلب / المطبوعات المطلوبة:</span>
              <input
                type="number"
                value={printSheets}
                onChange={(e) => setPrintSheets(Number(e.target.value))}
                className="w-full bg-[#063B5C] border border-white/20 rounded-lg p-2 text-white font-bold font-mono"
              />
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="text-slate-400 block">عدد التكرارات في الفرخ (Ups):</span>
              <input
                type="number"
                value={printUps}
                onChange={(e) => setPrintUps(Number(e.target.value))}
                className="w-full bg-[#063B5C] border border-white/20 rounded-lg p-2 text-white font-bold font-mono"
              />
            </div>

            <div className="bg-emerald-500/15 p-4 rounded-xl border border-emerald-400/30 space-y-1 text-emerald-200">
              <span className="text-slate-300 block text-[11px]">أفرخ الورق الخام المطلوبة (70x100):</span>
              <div className="text-xl font-extrabold font-mono text-emerald-400">
                {Math.ceil(printSheets / printUps) + 15} فرخ
              </div>
              <span className="text-[10px] text-slate-400">شامل 15 فرخ هدر تجهيز الماكينة والزنكات</span>
            </div>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
            <span>تذكرة تشغيل صالة الماكينات: #JOB-8842 · المواصفات: ورق كوشيه 350 جم + سلوفان مط + تكسير</span>
            <span className="text-emerald-400 font-bold">✓ الأسعار محجوبة تماماً عن عمال الصالة</span>
          </div>
        </div>
      )}

      {/* 7. EDUCATION & ACADEMY SIMULATOR */}
      {solutionId === 'education-academy' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">محاكي المنظومة التعليمية (المدارس والأكاديميات)</h4>
                <p className="text-[11px] text-slate-400">الحساب العائلي للأشقاء · أسطول الباصات · الطلاب المؤجلين · توثيق الشهادات</p>
              </div>
            </div>
            
            {/* Mode switcher */}
            <div className="flex bg-white/10 p-1 rounded-xl border border-white/15 text-xs font-bold">
              <button
                onClick={() => setEduMode('school')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${eduMode === 'school' ? 'bg-[#00ACD4] text-[#063B5C]' : 'text-slate-300 hover:text-white'}`}
              >
                منظومة المدارس (K-12)
              </button>
              <button
                onClick={() => setEduMode('academy')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${eduMode === 'academy' ? 'bg-[#00ACD4] text-[#063B5C]' : 'text-slate-300 hover:text-white'}`}
              >
                منظومة الأكاديميات والكورسات
              </button>
            </div>
          </div>

          {eduMode === 'school' ? (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Family Account */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold block">الحساب العائلي الموحد: أ. ممدوح إبراهيم</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                      حساب أستاذ موحد
                    </span>
                  </div>
                  <div className="space-y-2 font-mono">
                    <div className="p-2.5 rounded-lg bg-white/5 flex justify-between items-center">
                      <div>
                        <div className="text-slate-200 font-bold">الطالب: عمر ممدوح (الصف الأول الثانوي)</div>
                        <div className="text-[10px] text-slate-400">المصروفات الدراسية الأساسية</div>
                      </div>
                      <span className="text-white font-bold">25,000 ج.م</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 flex justify-between items-center">
                      <div>
                        <div className="text-slate-200 font-bold">الطالبة: مريم ممدوح (الصف الخامس الابتدائي)</div>
                        <div className="text-[10px] text-emerald-400">خصم الإخوة المعتمد (-15%)</div>
                      </div>
                      <div className="text-end">
                        <span className="text-slate-400 line-through text-[11px] block">20,000 ج.م</span>
                        <span className="text-emerald-400 font-bold">17,000 ج.م</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-slate-200 font-bold">
                    <span>إجمالي مطالبة العائلة المسددة:</span>
                    <span className="text-emerald-400 font-mono text-sm">42,000.00 ج.م</span>
                  </div>
                </div>

                {/* Bus Fleet & Canteen POS */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-white font-bold block pb-2 border-b border-white/10">إدارة خطوط الباصات ومبيعات الكانتين</span>
                    <div className="pt-2 space-y-2 text-[11px]">
                      <div className="p-2 bg-white/5 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300">خط باص #04 (التجمع - الرحاب)</span>
                        </div>
                        <span className="text-emerald-400 font-mono">السائق: عماد · المشرفة: أماني</span>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Store className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-300">كارت الكانتين الذكي (عمر ممدوح)</span>
                        </div>
                        <span className="text-white font-mono">الرصيد: 350 ج.م</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-400/20 text-[11px] text-emerald-300 text-center font-bold">
                    ✓ تم ربط مشتريات الزي والكانتين وقسط الباص بالفاتورة العائلية آلياً
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Academy Course CRM & Deferred Student */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold block">إدارة حجز الدفعات والطلاب المؤجلين</span>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">
                      Fawry Ref: #994012
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-white/5 flex justify-between items-center">
                      <div>
                        <div className="text-slate-200 font-bold">الطالب: كريم سامح (دورة Full Stack - Batch #12)</div>
                        <div className="text-[11px] text-amber-300">الحالة: طلب تأجيل لظروف السفر</div>
                      </div>
                      <span className="text-slate-300 font-mono">المدفوع: 4,000 ج.م</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setAcadPostponedTransferred(true)}
                    className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-bold cursor-pointer transition-colors"
                  >
                    {acadPostponedTransferred ? '✓ تم نقل الطالب لـ Batch #13 مع حفظ الرصيد وعمولة المدرب' : 'إعادة تسكين الطالب في الدفعة القادمة (Batch #13)'}
                  </button>
                </div>

                {/* QR Certificate Verification */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-white font-bold block pb-2 border-b border-white/10">بوابة التحقق العام من الشهادات الرقمية</span>
                    <p className="text-[11px] text-slate-300 pt-2 leading-relaxed">
                      شهادة إتمام معتمدة بكود تشفير فريد متصل بقاعدة بيانات الأكاديمية الرسمية.
                    </p>
                  </div>
                  <button
                    onClick={() => setAcadQrVerified(true)}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>فحص الشهادة برمز QR المعتمد</span>
                  </button>
                  {acadQrVerified && (
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-[11px] text-emerald-200 text-center font-mono font-bold">
                      ✓ VERIFIED: الشهادة رقم #CRT-2026-88 · الطالب: كريم سامح · التقدير: ممتاز
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 8. AUTOMATION & APIS SIMULATOR */}
      {solutionId === 'automation-integrations' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">منصة الـ Webhooks وحوكمة منع التكرار (Idempotency)</h4>
                <p className="text-[11px] text-slate-400">ربط مباشر مع Paymob، شركات الشحن، وWhatsApp Cloud API</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              200 OK · Idempotency Verified
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setApiEvent('payment')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${apiEvent === 'payment' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                حدث: Paymob Payment Callback
              </button>
              <button
                onClick={() => setApiEvent('shipping')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${apiEvent === 'shipping' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                حدث: Bosta Courier AWB Generated
              </button>
              <button
                onClick={() => setApiEvent('whatsapp')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${apiEvent === 'whatsapp' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                حدث: WhatsApp Invoice Template Sent
              </button>
            </div>

            <div className="bg-[#041D2E] p-4 rounded-xl border border-white/10 font-mono text-[11px] text-emerald-300 space-y-1">
              <div className="text-slate-400">// Incoming Secure Webhook Payload (HMAC & Idempotency Key Protected)</div>
              <div>{`{ "event": "${apiEvent}.success", "idempotency_key": "idemp_99a81f3d", "status": "200_OK", "timestamp": "2026-10-06T12:00:00Z", "payload": { "id": "MW-8842", "verified": true } }`}</div>
            </div>
          </div>
        </div>
      )}

      {/* 9. BESPOKE PORTAL SIMULATOR */}
      {solutionId === 'bespoke-portals' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#00ACD4]" />
              <div>
                <h4 className="text-sm font-bold text-white">بوابة الخدمة الذاتية وتخصيص الصلاحيات (B2B Portal & RBAC)</h4>
                <p className="text-[11px] text-slate-400">شاشات وصلاحيات مخصصة لكل دور (إدارة، عميل، مقاول باطن)</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
              NIST Level 2 RBAC
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex gap-2">
              <button
                onClick={() => setPortalRole('client')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${portalRole === 'client' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                منظور: العميل (Client Portal)
              </button>
              <button
                onClick={() => setPortalRole('subcontractor')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${portalRole === 'subcontractor' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                منظور: مقاول الباطن (Subcontractor)
              </button>
              <button
                onClick={() => setPortalRole('admin')}
                className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${portalRole === 'admin' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                منظور: الإدارة العليا (Executive)
              </button>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block">
                  {portalRole === 'client' && 'مشروع برج النرجس · نسبة الإنجاز: 75% · مرحلة تسليم الواجهات'}
                  {portalRole === 'subcontractor' && 'أمر تكليف تركيبات كهربائية #SUB-201 · المستخلص المعتمد: 45,000 ج.م'}
                  {portalRole === 'admin' && 'متابعة ربحية 12 مشروع مفتوح · نسبة الالتزام بالجدول الزمني: 98.4%'}
                </span>
                <span className="text-[11px] text-slate-400">صلاحية البيانات مشفرة ومعزولة تماماً حسب الدور الوظيفي</span>
              </div>

              <button
                onClick={() => setPortalMilestoneApproved(true)}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold cursor-pointer whitespace-nowrap"
              >
                {portalMilestoneApproved ? '✓ تم الاعتماد والتوقيع' : 'اعتماد المرحلة إلكترونياً'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
