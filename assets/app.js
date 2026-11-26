
/* ============================================================
MONEYWISE — APPLICATION CORE
Icons, currency table, state and formatting helpers.
============================================================ */
'use strict';

/* ---------------- Icons ---------------- */
const ICONS = {
calc:'<path d="M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 7h6M9 11h1M12 11h1M15 11h1M9 15h1M12 15h1M15 15h1"/>',
wallet:'<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
piggy:'<path d="M19 5c-1.5 0-2.8 1-3.3 2.3A6.5 6.5 0 0 0 12 6c-3.9 0-7 2.7-7 6 0 1.6.7 3 1.9 4.1V19h3v-1.5c.7.2 1.4.3 2.1.3s1.4-.1 2.1-.3V19h3v-2.9c.9-.7 1.6-1.6 2-2.6H21v-4h-2.2A5 5 0 0 0 19 5Z"/><path d="M15.5 10h.01"/>',
card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
bank:'<path d="M3 21h18M4 10h16M5 10V21M19 10V21M9 21v-7M15 21v-7"/><path d="M12 3 3 8h18l-9-5Z"/>',
home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-8.2-8.2V3h9.4l8.8 8.6a2 2 0 0 1 0 1.8Z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
brief:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
chev:'<polyline points="6 9 12 15 18 9"/>',
chevR:'<polyline points="9 18 15 12 9 6"/>',
check:'<polyline points="20 6 9 17 4 12"/>',
info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
reset:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
spark:'<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
function icon(name, size = 18, extraClass = '') {
return `<svg class="${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ---------------- Currency ---------------- */
const CURRENCIES = {
USD:{symbol:'$', name:'US Dollar', locale:'en-US'},
EUR:{symbol:'€', name:'Euro', locale:'de-DE'},
GBP:{symbol:'£', name:'British Pound', locale:'en-GB'},
JPY:{symbol:'¥', name:'Japanese Yen', locale:'ja-JP'},
CAD:{symbol:'C$', name:'Canadian Dollar', locale:'en-CA'},
AUD:{symbol:'A$', name:'Australian Dollar', locale:'en-AU'},
CHF:{symbol:'CHF', name:'Swiss Franc', locale:'de-CH'},
CNY:{symbol:'¥', name:'Chinese Yuan', locale:'zh-CN'},
INR:{symbol:'₹', name:'Indian Rupee', locale:'en-IN'},
IDR:{symbol:'Rp', name:'Indonesian Rupiah', locale:'id-ID'},
MYR:{symbol:'RM', name:'Malaysian Ringgit', locale:'ms-MY'},
SGD:{symbol:'S$', name:'Singapore Dollar', locale:'en-SG'},
PHP:{symbol:'₱', name:'Philippine Peso', locale:'en-PH'},
THB:{symbol:'฿', name:'Thai Baht', locale:'th-TH'},
VND:{symbol:'₫', name:'Vietnamese Dong', locale:'vi-VN'},
PKR:{symbol:'₨', name:'Pakistani Rupee', locale:'en-PK'},
BDT:{symbol:'৳', name:'Bangladeshi Taka', locale:'bn-BD'},
BRL:{symbol:'R$', name:'Brazilian Real', locale:'pt-BR'},
MXN:{symbol:'MX$', name:'Mexican Peso', locale:'es-MX'},
ARS:{symbol:'$', name:'Argentine Peso', locale:'es-AR'},
NGN:{symbol:'₦', name:'Nigerian Naira', locale:'en-NG'},
KES:{symbol:'KSh', name:'Kenyan Shilling', locale:'en-KE'},
ZAR:{symbol:'R', name:'South African Rand', locale:'en-ZA'},
EGP:{symbol:'E£', name:'Egyptian Pound', locale:'ar-EG'},
AED:{symbol:'د.إ', name:'UAE Dirham', locale:'ar-AE'},
SAR:{symbol:'﷼', name:'Saudi Riyal', locale:'ar-SA'},
TRY:{symbol:'₺', name:'Turkish Lira', locale:'tr-TR'},
RUB:{symbol:'₽', name:'Russian Ruble', locale:'ru-RU'},
PLN:{symbol:'zł', name:'Polish Zloty', locale:'pl-PL'},
SEK:{symbol:'kr', name:'Swedish Krona', locale:'sv-SE'},
KRW:{symbol:'₩', name:'South Korean Won', locale:'ko-KR'}
};

const state = {
currency: localStorage.getItem('mw_currency') || 'USD',
searchQuery: '',
activeCat: 'all'
};

function fmt(n, dec) {
if (!isFinite(n)) n = 0;
const c = CURRENCIES[state.currency] || CURRENCIES.USD;
const d = dec !== undefined ? dec : (Math.abs(n) >= 10000 ? 0 : 2);
try {
return new Intl.NumberFormat(c.locale, {
style: 'currency', currency: state.currency,
minimumFractionDigits: d, maximumFractionDigits: d
}).format(n);
} catch (e) {
return c.symbol + n.toFixed(d);
}
}
function num(n, dec) {
const d = dec === undefined ? 0 : dec;
return new Intl.NumberFormat('en-US', {minimumFractionDigits:d, maximumFractionDigits:d}).format(isFinite(n)?n:0);
}
function pctStr(n, dec) {
if (!isFinite(n)) n = 0;
return n.toFixed(dec === undefined ? 1 : dec) + '%';
}
function symbolOf(code) { return (CURRENCIES[code] || CURRENCIES.USD).symbol; }

/* ---------------- Date helpers ---------------- */
function monthsToDate(m) {
const d = new Date();
d.setMonth(d.getMonth() + Math.round(m));
return d.toLocaleDateString('en-US', {month:'short', year:'numeric'});
}
/* ============================================================
CHART RENDERERS (SVG)
============================================================ */
const PALETTE = ['#0B1B33','#059669','#2563EB','#7C3AED','#D97706','#0891B2','#DB2777','#65A30D','#EA580C','#4F46E5'];

function donutChart(items, size) {
const S = size || 168;
const R = S/2 - 16;
const C = 2 * Math.PI * R;
const total = items.reduce((s,i)=> s + Math.max(0, i.value), 0);
let offset = 0;
let segs = '';
if (total <= 0) {
segs = `<circle cx="${S/2}" cy="${S/2}" r="${R}" fill="none" stroke="#EDF1F6" stroke-width="20"/>`;
} else {
items.forEach(i => {
const frac = Math.max(0, i.value) / total;
const len = frac * C;
if (len <= 0) return;
segs += `<circle cx="${S/2}" cy="${S/2}" r="${R}" fill="none" stroke="${i.color}"
stroke-width="20" stroke-dasharray="${len} ${C-len}"
stroke-dashoffset="${-offset}" transform="rotate(-90 ${S/2} ${S/2})"
stroke-linecap="butt"><title>${esc(i.label)}: ${fmt(i.value)}</title></circle>`;
offset += len;
});
}
return `<svg viewBox="0 0 ${S} ${S}" width="${S}" height="${S}" role="img" aria-label="Breakdown chart">
${segs}
<text x="${S/2}" y="${S/2 - 3}" text-anchor="middle" font-size="10" fill="#8794A8"
font-family="Inter,sans-serif" font-weight="600" letter-spacing="0.6">TOTAL</text>
<text x="${S/2}" y="${S/2 + 14}" text-anchor="middle" font-size="13" fill="#0B1B33"
font-family="Inter,sans-serif" font-weight="700">${fmt(total, 0)}</text>
</svg>`;
}

function lineChart(series, labels, opts) {
const W = 420, H = 180, PL = 46, PR = 10, PT = 12, PB = 26;
const all = series.flatMap(s => s.values).filter(v => isFinite(v));
const max = Math.max(...all, 1);
const min = 0;
const n = Math.max(...series.map(s => s.values.length));
if (n < 2) return '<p style="color:#8794A8;font-size:13px">Not enough data to draw a chart.</p>';

const xAt = i => PL + (i / (n - 1)) * (W - PL - PR);
const yAt = v => H - PB - ((v - min) / ((max - min) || 1)) * (H - PT - PB);

// gridlines
let grid = '';
for (let g = 0; g <= 4; g++) {
const val = min + (max - min) * (g / 4);
const y = yAt(val);
grid += `<line x1="${PL}" y1="${y}" x2="${W-PR}" y2="${y}" stroke="#EEF1F6" stroke-width="1"/>`;
grid += `<text x="${PL-7}" y="${y+3.5}" text-anchor="end" font-size="9" fill="#8794A8"
font-family="Inter,sans-serif">${fmt(val, 0)}</text>`;
}

let paths = '';
series.forEach((s, si) => {
const pts = s.values.map((v, i) => `${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).join(' ');
const color = s.color || PALETTE[si % PALETTE.length];
const areaPts = `${PL},${H-PB} ${pts} ${xAt(s.values.length-1).toFixed(1)},${H-PB}`;
paths += `<polygon points="${areaPts}" fill="${color}" opacity="0.07"/>`;
paths += `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.2"
stroke-linecap="round" stroke-linejoin="round"/>`;
});

let xlabels = '';
const step = Math.max(1, Math.ceil(n / 6));
(labels || []).forEach((lb, i) => {
if (i % step !== 0 && i !== n - 1) return;
xlabels += `<text x="${xAt(i)}" y="${H-8}" text-anchor="middle" font-size="9"
fill="#8794A8" font-family="Inter,sans-serif">${esc(String(lb))}</text>`;
});

let legend = '';
if (series.length > 1) {
legend = `<div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:10px">` +
series.map((s, si) => `<span style="display:flex;align-items:center;gap:6px;font-size:12px;color:#5C6B82">
<i style="width:9px;height:9px;border-radius:3px;background:${s.color || PALETTE[si%PALETTE.length]};display:inline-block"></i>
${esc(s.label)}</span>`).join('') + `</div>`;
}

return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-height:200px" role="img"
aria-label="${esc(opts && opts.label || 'Financial growth chart')}">
${grid}${paths}${xlabels}
</svg>${legend}`;
}

function barRow(items) {
const max = Math.max(...items.map(i => i.value), 1);
return `<div style="display:flex;flex-direction:column;gap:10px">` + items.map(i => `
<div>
<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px">
<span style="color:#5C6B82">${esc(i.label)}</span>
<b style="font-variant-numeric:tabular-nums">${fmt(i.value)}</b>
</div>
<div class="progress"><i style="width:${(Math.max(0,i.value)/max*100).toFixed(1)}%;background:${i.color || '#059669'}"></i></div>
</div>`).join('') + `</div>`;
}

/* ---------------- Escape ---------------- */
function esc(s) {
return String(s == null ? '' : s).replace(/[&<>"']/g, c => (
{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
));
}
/* ============================================================
FINANCIAL MATH ENGINE
All functions pure. Edge cases (0, negative, huge) guarded.
============================================================ */
const Calc = {
/** Monthly payment for an amortizing loan. */
payment(principal, annualRatePct, months) {
const P = Math.max(0, principal || 0);
const n = Math.max(0, Math.floor(months || 0));
const r = (annualRatePct || 0) / 100 / 12;
if (n === 0) return 0;
if (r === 0) return P / n;
return P * r / (1 - Math.pow(1 + r, -n));
},

/** Full amortization schedule. extra = additional monthly principal. */
amortize(principal, annualRatePct, months, extra) {
const P = Math.max(0, principal || 0);
const r = Math.max(0, annualRatePct || 0) / 100 / 12;
const basePay = Calc.payment(P, annualRatePct, months);
const pay = basePay + Math.max(0, extra || 0);
const rows = [];
let balance = P, totalInterest = 0, totalPaid = 0, m = 0;
const cap = 1200; // 100 years safety cap

if (P <= 0) return {rows, totalInterest:0, totalPaid:0, months:0, monthlyPayment:basePay};

while (balance > 0.005 && m < cap) {
m++;
const interest = balance * r;
let principalPaid = pay - interest;
if (principalPaid <= 0) { // payment can't cover interest
return {rows, totalInterest:Infinity, totalPaid:Infinity, months:Infinity, monthlyPayment:basePay, impossible:true};
}
if (principalPaid > balance) principalPaid = balance;
const actualPay = principalPaid + interest;
balance -= principalPaid;
totalInterest += interest;
totalPaid += actualPay;
rows.push({m, interest, principal:principalPaid, balance:Math.max(0,balance), payment:actualPay});
}
return {rows, totalInterest, totalPaid, months:m, monthlyPayment:basePay};
},

/** Future value with monthly contributions, monthly compounding. */
compound(principal, monthly, annualRatePct, years, compoundsPerYear) {
const P = Math.max(0, principal || 0);
const PMT = monthly || 0;
const y = Math.max(0, years || 0);
const cpy = compoundsPerYear || 12;
const rAnnual = (annualRatePct || 0) / 100;
const totalMonths = Math.round(y * 12);
const monthlyRate = Math.pow(1 + rAnnual / cpy, cpy / 12) - 1;

const series = [{year:0, balance:P, contributed:P, interest:0}];
let balance = P, contributed = P;

for (let m = 1; m <= totalMonths; m++) {
balance = balance * (1 + monthlyRate) + PMT;
contributed += PMT;
if (m % 12 === 0) {
series.push({
year: m/12,
balance: balance,
contributed: contributed,
interest: balance - contributed
});
}
}
// partial final year
if (totalMonths % 12 !== 0) {
series.push({
year: totalMonths/12,
balance: balance,
contributed: contributed,
interest: balance - contributed
});
}
return {final: balance, contributed, interest: balance - contributed, series};
},

/** Debt payoff simulation. strategy: 'snowball' | 'avalanche' */
payoff(debts, extra, strategy) {
const list = debts
.filter(d => d.balance > 0 && d.minPayment > 0)
.map(d => ({...d}));
if (!list.length) return {months:0, totalInterest:0, order:[], impossible:false, log:[]};

let month = 0, totalInterest = 0;
const cap = 1200;
const payoffOrder = [];
const log = [];

while (list.some(d => d.balance > 0.005) && month < cap) {
month++;
// 1. accrue interest & pay minimums
let pool = Math.max(0, extra || 0);
list.forEach(d => {
if (d.balance <= 0.005) return;
const interest = d.balance * (d.rate / 100 / 12);
d.balance += interest;
totalInterest += interest;
const pay = Math.min(d.minPayment, d.balance);
d.balance -= pay;
pool += Math.max(0, d.minPayment - pay);
});
// 2. target debt
const active = list.filter(d => d.balance > 0.005);
if (!active.length) break;
active.sort((a,b) => strategy === 'avalanche'
? (b.rate - a.rate) || (a.balance - b.balance)
: (a.balance - b.balance) || (b.rate - a.rate));
const target = active[0];
const applied = Math.min(pool, target.balance);
target.balance -= applied;
if (applied <= 0.005 && pool > 0) break;

// record payoffs
list.forEach(d => {
if (d.balance <= 0.005 && !d._paid) {
d._paid = true;
payoffOrder.push({name:d.name, balance:d.balance, month});
}
});
}
return {
months: month,
totalInterest,
order: payoffOrder,
log,
impossible: month >= cap
};
},

/** Credit card payoff with percentage-based minimum. */
creditCard(balance, apr, minPct, minFloor, extra) {
const r = Math.max(0, apr || 0) / 100 / 12;
let bal = Math.max(0, balance || 0);
let months = 0, totalInterest = 0, totalPaid = 0;
const cap = 1200;
const schedule = [];

while (bal > 0.005 && months < cap) {
months++;
const interest = bal * r;
totalInterest += interest;
const minimum = Math.max(bal * (minPct/100), minFloor || 0);
const payment = Math.min(bal + interest, minimum + (extra || 0));
const principal = payment - interest;
if (principal <= 0) return {months:Infinity, totalInterest:Infinity, totalPaid:Infinity, impossible:true, schedule:[]};
bal = Math.max(0, bal - principal);
totalPaid += payment;
if (months <= 360) schedule.push({month:months, payment, interest, principal, balance:bal});
}
return {months, totalInterest, totalPaid, impossible:months>=cap, schedule};
}
};
/* ============================================================
TOOL DEFINITIONS
============================================================ */
const CATEGORIES = {
budgeting:   {name:'Budgeting',            icon:'wallet', cls:''},
savings:     {name:'Savings & Interest',   icon:'piggy',  cls:'blue'},
debt:        {name:'Debt & Loans',         icon:'bank',   cls:'amber'},
income:      {name:'Salary & Income',      icon:'brief',  cls:'navy'},
currency:    {name:'Currency & Travel',    icon:'globe',  cls:'blue'},
shopping:    {name:'Shopping & Deals',     icon:'tag',    cls:''},
business:    {name:'Business',             icon:'card',   cls:'navy'}
};

const money = (key, label, def, hint) => ({
key, label, type:'number', def, prefix:true, min:0, step:'0.01', hint
});

const TOOLS = [
/* ============ BUDGETING ============ */
{
slug:'monthly-budget-calculator',
name:'Monthly Budget Calculator',
cat:'budgeting',
icon:'wallet',
desc:'See exactly where your money goes each month and how much you can save.',
keywords:'budget monthly income expenses savings spending',
fields:[
money('income','Monthly income (after tax)',4000,'Your take-home pay.'),
money('otherIncome','Additional income',0,'Side work, rental income, etc.'),
money('housing','Housing (rent / mortgage)',1200),
money('food','Food & groceries',500),
money('transport','Transportation',250),
money('utilities','Utilities',150),
money('insurance','Insurance',120),
money('debt','Debt payments',200),
money('entertainment','Entertainment',150),
money('shopping','Shopping',180),
money('other','Other expenses',100)
],
compute(v) {
const income = (v.income||0) + (v.otherIncome||0);
const cats = [
{label:'Housing', value:v.housing, color:PALETTE[0]},
{label:'Food', value:v.food, color:PALETTE[1]},
{label:'Transport', value:v.transport, color:PALETTE[2]},
{label:'Utilities', value:v.utilities, color:PALETTE[3]},
{label:'Insurance', value:v.insurance, color:PALETTE[4]},
{label:'Debt', value:v.debt, color:PALETTE[5]},
{label:'Entertainment', value:v.entertainment, color:PALETTE[6]},
{label:'Shopping', value:v.shopping, color:PALETTE[7]},
{label:'Other', value:v.other, color:PALETTE[8]}
].filter(c => c.value > 0);
const expenses = cats.reduce((s,c)=>s+c.value,0);
const remaining = income - expenses;
const rate = income > 0 ? (remaining / income) * 100 : 0;

const kpis = [
{label:'Total income', value:fmt(income), tone:'neutral'},
{label:'Total expenses', value:fmt(expenses), tone:'neutral'},
{label: remaining >= 0 ? 'Left over' : 'Over budget', value:fmt(Math.abs(remaining)),
tone: remaining >= 0 ? 'primary' : 'warn',
sub: remaining >= 0 ? 'Available to save' : 'You are spending more than you earn'},
{label:'Savings rate', value:pctStr(rate), tone: rate >= 20 ? 'good' : 'neutral',
sub: rate >= 20 ? 'Excellent — above the 20% benchmark' : 'Aim for 20% if you can'}
];
if (income > 0) {
kpis.push({label:'Housing ratio', value:pctStr((v.housing/income)*100),
tone: (v.housing/income) <= 0.30 ? 'good' : 'warn',
sub:'Keep housing under 30% of income'});
}
return {
kpis,
chart: cats.length ? {type:'donut', items:cats} : null,
notes: [
remaining < 0
? 'Your expenses exceed your income. Start by trimming the largest discretionary categories — usually shopping and entertainment.'
: `If you save ${fmt(remaining)} every month, that is ${fmt(remaining*12)} per year.`,
'Track your actual spending for one full month to make these numbers accurate — estimates are usually too optimistic.'
]
};
},
about:'A monthly budget is the single most useful financial tool there is. This calculator takes your take-home income and your major expense categories and shows you, in one glance, whether your month balances — and how much is genuinely left to save.',
formula:'<code>Remaining = Total income − Total expenses<br>Savings rate = (Remaining ÷ Total income) × 100</code>',
example:'If you take home $4,000 and spend $3,200, you have $800 left over — a 20% savings rate, which is the widely used benchmark for healthy finances.',
faqs:[
['Should I use gross or net income?','Use your take-home (net) pay — the amount that actually lands in your account. Using gross income makes your budget look better than it is.'],
['What counts as a healthy savings rate?','Many financial planners suggest 20% of net income. If you are paying off high-interest debt, that payoff can reasonably substitute for part of it.'],
['How much should housing cost?','A common guideline is 30% of net income or less. Above that, other categories usually have to be squeezed.']
]
},
{
slug:'daily-spending-calculator',
name:'Daily Spending Calculator',
cat:'budgeting',
icon:'clock',
desc:'Turn your remaining budget into a simple daily spending allowance.',
keywords:'daily spending budget allowance per day',
fields:[
money('budget','Amount available to spend',1200),
money('days','Number of days',30)
],
compute(v) {
const b = Math.max(0, v.budget||0);
const d = Math.max(1, Math.floor(v.days||1));
const daily = b/d;
return {
kpis:[
{label:'Per day', value:fmt(daily), tone:'primary'},
{label:'Per week', value:fmt(daily*7)},
{label:'Per month (30d)', value:fmt(daily*30)},
{label:'Total budget', value:fmt(b), sub:`Spread over ${d} days`}
],
notes:['This is an average. Fixed bills on specific dates mean your real daily allowance will vary — recalculate after large expenses.'],
chart:null
};
},
about:'A daily allowance turns an abstract budget number into something you can act on at the checkout counter. Divide what is genuinely available by the days remaining.',
formula:'<code>Daily allowance = Amount available ÷ Number of days</code>',
example:'With $1,200 available over 30 days you can spend $40 per day on average.',
faqs:[
['Should I include bills in this?','No. Subtract rent, utilities and other fixed bills first, then divide what is left — that is your discretionary allowance.']
]
},
{
slug:'expense-split-calculator',
name:'Expense Split Calculator',
cat:'budgeting',
icon:'wallet',
desc:'Split a bill fairly between friends, with tip handling included.',
keywords:'split bill expense tip share group dinner',
fields:[
money('total','Bill total',120),
{key:'tip', label:'Tip', type:'number', def:15, suffix:true, min:0, step:'1', hint:'Percentage added to the bill.'},
{key:'people', label:'Number of people', type:'number', def:4, min:1, step:'1'}
],
compute(v) {
const total = Math.max(0, v.total||0);
const tipPct = Math.max(0, v.tip||0);
const people = Math.max(1, Math.floor(v.people||1));
const tipAmt = total * tipPct/100;
const grand = total + tipAmt;
const each = grand / people;
return {
kpis:[
{label:'Grand total', value:fmt(grand), tone:'primary', sub:`Includes ${fmt(tipAmt)} tip`},
{label:'Each person pays', value:fmt(each), tone:'good'},
{label:'Tip amount', value:fmt(tipAmt)},
{label:'Bill before tip', value:fmt(total)}
],
chart:null,
notes:['Rounding to the nearest whole unit usually makes settling up easier — someone covers the difference.'],
table:{
title:'Split summary',
head:['Item','Amount'],
rows:[
['Bill', fmt(total)],
[`Tip (${tipPct}%)`, fmt(tipAmt)],
['Total', fmt(grand)],
[`Per person (${people})`, fmt(each)]
]
}
};
},
about:'Splitting a bill is simple arithmetic, but tipping and rounding make it fiddly. This tool gives you an exact per-person figure.',
formula:'<code>Grand total = Bill × (1 + Tip% ÷ 100)<br>Per person = Grand total ÷ Number of people</code>',
example:'A $120 bill with a 15% tip is $138; split four ways that is $34.50 each.',
faqs:[['Does this handle unequal shares?','This version assumes equal splits. For unequal shares, calculate each person\'s subtotal separately and add their proportional tip.']]
},

/* ============ SAVINGS ============ */
{
slug:'savings-goal-calculator',
name:'Savings Goal Calculator',
cat:'savings',
icon:'piggy',
desc:'Find out exactly how much to save each month to hit your goal on time.',
keywords:'savings goal target monthly contribution save',
fields:[
money('goal','Goal amount',10000),
money('current','Current savings',1500),
money('monthly','Monthly contribution',300),
{key:'months', label:'Target timeframe', type:'number', def:24, suffix:true, min:1, step:'1', hint:'How many months until you need the money.'}
],
compute(v) {
const goal = Math.max(0, v.goal||0);
const current = Math.max(0, v.current||0);
const monthly = Math.max(0, v.monthly||0);
const months = Math.max(1, Math.floor(v.months||1));
const remaining = Math.max(0, goal - current);
const required = remaining / months;
const progress = goal > 0 ? Math.min(100, (current/goal)*100) : 0;

let actualMonths = Infinity;
if (remaining <= 0) actualMonths = 0;
else if (monthly > 0) actualMonths = Math.ceil(remaining/monthly);

const onTrack = monthly >= required;
return {
kpis:[
{label:'Amount remaining', value:fmt(remaining), tone:'primary'},
{label:'Required per month', value:fmt(required), tone: onTrack ? 'good' : 'warn',
sub:`To reach the goal in ${months} months`},
{label:'Your monthly amount', value:fmt(monthly),
sub: onTrack ? 'You are on track' : `Short by ${fmt(required-monthly)}/month`},
{label:'Goal progress', value:pctStr(progress), sub:fmt(current)+' saved so far'}
],
chart:{
type:'bars',
items:[
{label:'Saved so far', value:current, color:'#059669'},
{label:'Still needed', value:remaining, color:'#2563EB'}
]
},
notes:[
actualMonths === Infinity
? 'With no monthly contribution the goal is never reached. Set a monthly amount to see a completion date.'
: `At ${fmt(monthly)} per month you would finish in ${actualMonths} month${actualMonths===1?'':'s'} — around ${monthsToDate(actualMonths)}.`,
'Keep goal savings in a separate, easily accessible account so you are not tempted to spend it.'
]
};
},
about:'Saving for a goal is far easier when you know the exact monthly number. This calculator works out both directions: what you must save to hit a deadline, and when you will arrive at your current pace.',
formula:'<code>Remaining = Goal − Current savings<br>Required monthly = Remaining ÷ Months<br>Months to finish = Remaining ÷ Your monthly amount</code>',
example:'To save $10,000 starting from $1,500 in 24 months you need $354.17 per month.',
faqs:[
['Should I account for interest?','If your savings account earns meaningful interest, use the Compound Interest Calculator instead — it will show a slightly shorter timeline.'],
['What if I miss a month?','Add the missed amount to future contributions. Recalculating monthly keeps you honest.']
]
},
{
slug:'compound-interest-calculator',
name:'Compound Interest Calculator',
cat:'savings',
icon:'trend',
desc:'See how your savings grow over time with the power of compounding.',
keywords:'compound interest investment growth future value',
fields:[
money('principal','Initial amount',5000),
money('monthly','Monthly contribution',200),
{key:'rate', label:'Annual interest rate', type:'number', def:7, suffix:true, min:0, step:'0.01', hint:'Average annual return, before inflation and tax.'},
{key:'years', label:'Years invested', type:'number', def:20, min:0, step:'1'},
{key:'comp', label:'Compounding frequency', type:'select', def:'12', options:[
{v:'12', l:'Monthly'},{v:'4', l:'Quarterly'},{v:'2', l:'Semi-annually'},{v:'1', l:'Annually'},{v:'365', l:'Daily'}
]}
],
compute(v) {
const years = Math.max(0, v.years||0);
const comp = parseInt(v.comp, 10) || 12;
const res = Calc.compound(v.principal, v.monthly, v.rate, years, comp);

const labels = res.series.map(s => s.year % 1 === 0 ? 'Y' + s.year : '');
return {
kpis:[
{label:'Final balance', value:fmt(res.final), tone:'primary'},
{label:'Total contributed', value:fmt(res.contributed)},
{label:'Interest earned', value:fmt(res.interest), tone:'good',
sub:'Growth on top of your contributions'},
{label:'Money multiple', value: res.contributed > 0 ? (res.final/res.contributed).toFixed(2) + '×' : '—'}
],
chart:{
type:'line',
series:[
{label:'Balance', values:res.series.map(s=>s.balance), color:'#059669'},
{label:'Contributed', values:res.series.map(s=>s.contributed), color:'#2563EB'}
],
labels
},
table:{
title:'Growth by year',
head:['Year','Contributed','Interest','Balance'],
rows: res.series.filter(s => s.year % Math.max(1, Math.ceil(res.series.length/12)) === 0 || s.year === res.series[res.series.length-1].year)
.map(s => [ s.year % 1 === 0 ? 'Year ' + s.year : s.year.toFixed(1) + ' yr',
fmt(s.contributed), fmt(s.interest), fmt(s.balance) ])
},
notes:[
res.interest > res.contributed
? 'Notice that compounding has now earned you more than you put in — this is the inflection point where growth accelerates.'
: 'Your contributions still outweigh your growth. Time is the key ingredient: extending the horizon has a dramatic effect.',
'Returns are not guaranteed. Market investments fluctuate and can lose value. This is an illustration, not a promise.'
]
};
},
about:'Compound interest means your interest earns interest. Over long periods this snowball effect can dwarf the money you actually put in — which is why starting early matters far more than starting big.',
formula:'<code>Balance = P(1+r)ⁿ + PMT × [((1+r)ⁿ − 1) ÷ r]<br><br>P = initial amount, PMT = monthly contribution,<br>r = monthly rate, n = number of months</code>',
example:'$5,000 plus $200/month at 7% for 20 years grows to roughly $112,000 — of which only $53,000 is money you contributed.',
faqs:[
['Compound vs simple interest — what is the difference?','Simple interest is calculated only on your original principal. Compound interest is calculated on principal plus previously earned interest, so it grows faster over time.'],
['What return should I assume?','Be conservative. A global equity index has historically returned roughly 7% per year after inflation, but individual years vary wildly. Try 4%, 7% and 10% to see the range.'],
['Does this include tax or fees?','No. Use a slightly lower rate to approximate fees and taxes.']
]
},
{
slug:'simple-interest-calculator',
name:'Simple Interest Calculator',
cat:'savings',
icon:'trend',
desc:'Calculate interest that is charged only on the original principal.',
keywords:'simple interest principal rate time',
fields:[
money('principal','Principal amount',10000),
{key:'rate', label:'Annual interest rate', type:'number', def:5, suffix:true, min:0, step:'0.01'},
{key:'years', label:'Time period', type:'number', def:3, suffix:true, min:0, step:'0.25', hint:'In years. Use 0.5 for six months.'}
],
compute(v) {
const P = Math.max(0, v.principal||0);
const r = Math.max(0, v.rate||0)/100;
const t = Math.max(0, v.years||0);
const interest = P * r * t;
const total = P + interest;
const series = [];
for (let y = 0; y <= Math.ceil(t); y += Math.max(1, Math.ceil(t/10)) ) {
if (y > t) break;
series.push({x:y, v:P + P*r*y});
}
if (!series.some(s=>s.x===t)) series.push({x:t, v:total});

return {
kpis:[
{label:'Interest earned', value:fmt(interest), tone:'primary'},
{label:'Total balance', value:fmt(total), tone:'good'},
{label:'Principal', value:fmt(P)},
{label:'Effective growth', value: P>0 ? pctStr((interest/P)*100) : '—'}
],
chart:{type:'line', series:[{label:'Balance', values:series.map(s=>s.v), color:'#2563EB'}],
labels:series.map(s=>s.x % 1 === 0 ? 'Y'+s.x : s.x.toFixed(1))},
notes:['Simple interest grows in a straight line — it never earns interest on interest. Most savings accounts and loans actually use compound interest.']
};
},
about:'Simple interest is the most straightforward interest calculation: a fixed percentage of the original amount, for each period, with no compounding.',
formula:'<code>Interest = Principal × Rate × Time<br>Total = Principal + Interest</code>',
example:'$10,000 at 5% simple interest for 3 years earns $1,500, giving a total of $11,500.',
faqs:[['Where is simple interest used?','Some short-term loans, car loans in certain jurisdictions, and certain bonds use simple interest. Most deposit accounts compound.']]
},
{
slug:'emergency-fund-calculator',
name:'Emergency Fund Calculator',
cat:'savings',
icon:'shield',
desc:'Work out how much you need set aside to handle the unexpected.',
keywords:'emergency fund savings safety net months expenses',
fields:[
money('expenses','Essential monthly expenses',2200,'Rent, food, utilities, insurance, transport, minimum debt payments.'),
{key:'months', label:'Months of cover', type:'select', def:'6', options:[
{v:'3', l:'3 months — stable salaried job'},
{v:'6', l:'6 months — standard recommendation'},
{v:'9', l:'9 months — variable income'},
{v:'12', l:'12 months — freelance / business owner'}
]},
money('current','Already saved',500)
],
compute(v) {
const exp = Math.max(0, v.expenses||0);
const months = parseInt(v.months, 10) || 6;
const target = exp * months;
const current = Math.max(0, v.current||0);
const gap = Math.max(0, target - current);
const progress = target > 0 ? Math.min(100, current/target*100) : 0;
return {
kpis:[
{label:'Target fund', value:fmt(target), tone:'primary', sub:`${months} months of essentials`},
{label:'Already saved', value:fmt(current)},
{label:'Still to save', value:fmt(gap), tone: gap > 0 ? 'warn' : 'good'},
{label:'Progress', value:pctStr(progress)}
],
chart:{type:'bars', items:[
{label:'Saved', value:current, color:'#059669'},
{label:'Remaining', value:gap, color:'#D97706'}
]},
notes:[
'Keep your emergency fund in a separate, easily accessible account — not in investments that could be down when you need them.',
'Build it before aggressively investing. It is what stops a bad month from becoming high-interest debt.'
]
};
},
about:'An emergency fund is money set aside specifically for the unexpected — a job loss, a medical bill, a car repair. It is the foundation that stops a single bad event from derailing your finances.',
formula:'<code>Target fund = Essential monthly expenses × Months of cover</code>',
example:'If your essentials cost $2,200 a month and you want 6 months of cover, your target is $13,200.',
faqs:[
['How many months do I need?','Three months if you have a stable salaried job and no dependants. Six is the standard recommendation. Nine to twelve if your income is variable or you support a family.'],
['Should I count all my expenses?','No — count essentials only. In an emergency you would cut entertainment and shopping first.']
]
},
/* ============ DEBT ============ */
{
slug:'loan-calculator',
name:'Loan Calculator',
cat:'debt',
icon:'bank',
desc:'Calculate repayments, total interest and a full amortization schedule.',
keywords:'loan repayment amortization interest monthly payment',
fields:[
money('amount','Loan amount',20000),
{key:'rate', label:'Annual interest rate', type:'number', def:8, suffix:true, min:0, step:'0.01'},
{key:'years', label:'Loan term', type:'number', def:5, suffix:true, min:0.5, step:'0.5'},
money('extra','Extra monthly payment',0,'Optional. Any amount paid above the required payment.')
],
compute(v) {
const months = Math.round((v.years||0)*12);
const res = Calc.amortize(v.amount, v.rate, months, v.extra);
if (res.impossible) {
return {kpis:[{label:'Cannot repay', value:'—', tone:'warn'}],
notes:['At this interest rate the required payment does not cover the interest, so the loan would never be repaid. Increase the payment or reduce the rate.']};
}
const base = Calc.amortize(v.amount, v.rate, months, 0);
const interestSaved = base.totalInterest - res.totalInterest;

const yearly = [];
res.rows.forEach(r => {
const y = Math.ceil(r.m/12);
if (!yearly[y-1]) yearly[y-1] = {y, principal:0, interest:0, balance:0};
yearly[y-1].principal += r.principal;
yearly[y-1].interest += r.interest;
yearly[y-1].balance = r.balance;
});

return {
kpis:[
{label:'Monthly payment', value:fmt(res.monthlyPayment + (v.extra||0)), tone:'primary',
sub: (v.extra||0) > 0 ? `${fmt(res.monthlyPayment)} + ${fmt(v.extra)} extra` : 'Required payment'},
{label:'Total interest', value:fmt(res.totalInterest), tone:'warn'},
{label:'Total repaid', value:fmt(res.totalPaid)},
{label:'Payoff time', value: res.months + ' months', sub: res.months !== months ? `Saved ${months - res.months} months` : 'As scheduled'}
],
chart:{type:'line',
series:[{label:'Remaining balance', values:yearly.map(y=>y.balance), color:'#0B1B33'}],
labels:yearly.map(y=>'Y'+y.y)},
table:{title:'Yearly amortization', head:['Year','Principal paid','Interest paid','Balance'],
rows: yearly.slice(0, 30).map(y => ['Year '+y.y, fmt(y.principal), fmt(y.interest), fmt(y.balance)])},
notes:[
(v.extra||0) > 0 && interestSaved > 0
? `Paying ${fmt(v.extra)} extra each month saves ${fmt(interestSaved)} in interest and finishes ${months - res.months} months earlier.`
: 'Try adding an extra monthly payment to see how much interest you could avoid.',
'Early payments are mostly interest. That is why extra payments made early in the loan have the biggest effect.'
]
};
},
about:'A loan calculator shows the true cost of borrowing. The monthly payment tells you what you commit to; the total interest tells you what the loan actually costs.',
formula:'<code>M = P × r ÷ (1 − (1+r)⁻ⁿ)<br><br>M = monthly payment, P = principal,<br>r = monthly interest rate, n = number of months</code>',
example:'A $20,000 loan at 8% over 5 years costs $405.53 per month and $4,332 in interest.',
faqs:[
['Why is so much of my early payment interest?','Interest is charged on the outstanding balance, which is highest at the start. As the balance falls, more of each payment goes to principal.'],
['Do extra payments always reduce interest?','Only if your lender applies them to the principal and does not charge a prepayment penalty. Check your agreement.']
]
},
{
slug:'mortgage-calculator',
name:'Mortgage Calculator',
cat:'debt',
icon:'home',
desc:'Estimate your full monthly housing cost, including tax and insurance.',
keywords:'mortgage home loan down payment property',
fields:[
money('price','Property price',320000),
{key:'downPct', label:'Down payment', type:'number', def:20, suffix:true, min:0, max:100, step:'0.5', hint:'Percentage of the property price.'},
{key:'rate', label:'Annual interest rate', type:'number', def:6.5, suffix:true, min:0, step:'0.01'},
{key:'years', label:'Loan term', type:'number', def:30, suffix:true, min:1, step:1},
money('tax','Annual property tax',2400),
money('insurance','Annual home insurance',1200),
money('hoa','Monthly HOA / maintenance',150)
],
compute(v) {
const price = Math.max(0, v.price||0);
const downPct = Math.min(100, Math.max(0, v.downPct||0));
const down = price * downPct/100;
const loan = Math.max(0, price - down);
const months = Math.round((v.years||30)*12);
const res = Calc.amortize(loan, v.rate, months, 0);
const pi = res.monthlyPayment;
const taxM = (v.tax||0)/12;
const insM = (v.insurance||0)/12;
const hoaM = v.hoa||0;
const total = pi + taxM + insM + hoaM;
const ltv = price > 0 ? (loan/price)*100 : 0;

return {
kpis:[
{label:'Total monthly', value:fmt(total), tone:'primary', sub:'Principal, interest, tax, insurance'},
{label:'Loan amount', value:fmt(loan), sub:`${pctStr(ltv)} LTV`},
{label:'Down payment', value:fmt(down), sub:downPct+'% of price'},
{label:'Total interest', value:fmt(res.totalInterest), tone:'warn', sub:'Over the full term'}
],
chart:{type:'donut', items:[
{label:'Principal & interest', value:pi, color:PALETTE[0]},
{label:'Property tax', value:taxM, color:PALETTE[2]},
{label:'Insurance', value:insM, color:PALETTE[1]},
{label:'HOA / maintenance', value:hoaM, color:PALETTE[4]}
].filter(x=>x.value>0)},
table:{title:'Monthly breakdown', head:['Component','Monthly','Annual'], rows:[
['Principal & interest', fmt(pi), fmt(pi*12)],
['Property tax', fmt(taxM), fmt((v.tax||0))],
['Home insurance', fmt(insM), fmt((v.insurance||0))],
['HOA / maintenance', fmt(hoaM), fmt(hoaM*12)],
['Total', fmt(total), fmt(total*12)]
]},
notes:[
'This estimate excludes mortgage insurance, closing costs, and maintenance beyond the HOA figure.',
ltv > 80 ? 'A loan-to-value above 80% usually triggers mortgage insurance, which adds to your monthly cost.' : 'An LTV of 80% or below typically avoids mortgage insurance in many markets.'
]
};
},
about:'A mortgage payment is more than principal and interest. Property taxes, insurance and maintenance all belong in the real monthly number — this calculator puts them together.',
formula:'<code>Loan = Price − Down payment<br>M = P × r ÷ (1 − (1+r)⁻ⁿ)<br>Total monthly = P&I + Tax/12 + Insurance/12 + HOA</code>',
example:'A $320,000 home with 20% down at 6.5% over 30 years: the loan is $256,000 and principal + interest is about $1,618 per month.',
faqs:[
['How much should I put down?','20% avoids mortgage insurance in many countries and reduces the monthly payment. But a smaller deposit can be sensible if it leaves you with a solid emergency fund.'],
['Should I choose a 15 or 30 year term?','A shorter term means a higher payment but dramatically less interest. A longer term lowers the payment but costs far more overall.']
]
},
{
slug:'debt-payoff-calculator',
name:'Debt Payoff Calculator',
cat:'debt',
icon:'card',
desc:'Compare the snowball and avalanche strategies across multiple debts.',
keywords:'debt snowball avalanche payoff multiple debts',
fields:[
{key:'strategy', label:'Payoff strategy', type:'select', def:'avalanche', options:[
{v:'avalanche', l:'Avalanche — highest interest rate first'},
{v:'snowball', l:'Snowball — smallest balance first'}
]},
{key:'d1n', label:'Debt 1 name', type:'text', def:'Credit card'},
money('d1b','Debt 1 balance',3000),
{key:'d1r', label:'Debt 1 interest rate', type:'number', def:22, suffix:true, min:0, step:'0.01'},
money('d1p','Debt 1 minimum payment',90),
{key:'d2n', label:'Debt 2 name', type:'text', def:'Store card'},
money('d2b','Debt 2 balance',1500),
{key:'d2r', label:'Debt 2 interest rate', type:'number', def:18, suffix:true, min:0, step:'0.01'},
money('d2p','Debt 2 minimum payment',45),
{key:'d3n', label:'Debt 3 name', type:'text', def:'Personal loan'},
money('d3b','Debt 3 balance',6000),
{key:'d3r', label:'Debt 3 interest rate', type:'number', def:9, suffix:true, min:0, step:'0.01'},
money('d3p','Debt 3 minimum payment',130),
money('extra','Extra monthly payment',250,'Any amount above the minimums.')
],
compute(v) {
const debts = [1,2,3].map(i => ({
name: (v['d'+i+'n'] || 'Debt '+i),
balance: v['d'+i+'b'] || 0,
rate: v['d'+i+'r'] || 0,
minPayment: v['d'+i+'p'] || 0
})).filter(d => d.balance > 0 && d.minPayment > 0);

if (!debts.length) {
return {kpis:[{label:'No debts entered', value:'—', tone:'warn'}], notes:['Enter at least one debt balance and minimum payment to see a plan.']};
}

const chosen = Calc.payoff(debts, v.extra, v.strategy);
const other = Calc.payoff(debts, v.extra, v.strategy === 'avalanche' ? 'snowball' : 'avalanche');
const minOnly = Calc.payoff(debts, 0, v.strategy);

const totalDebt = debts.reduce((s,d)=>s+d.balance,0);
const totalMin = debts.reduce((s,d)=>s+d.minPayment,0);

return {
kpis:[
{label:'Debt-free in', value: chosen.months + ' months', tone:'primary', sub:`Around ${monthsToDate(chosen.months)}`},
{label:'Total interest', value:fmt(chosen.totalInterest), tone:'warn'},
{label:'Monthly outlay', value:fmt(totalMin + (v.extra||0)), sub:`Minimums ${fmt(totalMin)} + extra`},
{label:'Total debt', value:fmt(totalDebt)}
],
chart:{type:'bars', items:[
{label:'This strategy interest', value:chosen.totalInterest, color:'#059669'},
{label:'Other strategy interest', value:other.totalInterest, color:'#8794A8'},
{label:'Minimums only', value:minOnly.impossible ? chosen.totalInterest*2 : minOnly.totalInterest, color:'#DC2626'}
]},
table:{title:'Payoff order', head:['Order','Debt','Cleared in'],
rows: chosen.order.map((o,i) => [String(i+1), o.name, o.month + ' months'])},
notes:[
v.strategy === 'avalanche'
? 'Avalanche targets the highest interest rate first — mathematically it saves the most money.'
: 'Snowball targets the smallest balance first — it costs slightly more but the quick wins keep you motivated.',
chosen.totalInterest < other.totalInterest
? `Your chosen strategy saves ${fmt(other.totalInterest - chosen.totalInterest)} compared to the alternative.`
: `The alternative strategy would save ${fmt(chosen.totalInterest - other.totalInterest)} — but motivation matters more than the math for many people.`,
'Always pay at least the minimum on every debt. Missing a payment damages your credit and can trigger penalty rates.'
]
};
},
about:'Two strategies dominate debt payoff. Avalanche minimises interest by attacking the highest rate first. Snowball builds momentum by clearing the smallest balance first. Both work — the best one is the one you will actually stick to.',
formula:'<code>Each month: accrue interest, pay all minimums,<br>then throw the entire surplus at the target debt.<br>Target = highest rate (avalanche) or lowest balance (snowball)</code>',
example:'With $10,500 across three debts and $250 extra per month, avalanche typically clears the debt several months sooner and saves hundreds in interest versus minimum payments alone.',
faqs:[
['Which strategy is better?','Avalanche saves more money. Snowball produces faster psychological wins. If you have abandoned payoff plans before, snowball may genuinely be better for you.'],
['Should I use savings to pay off debt?','Keep a small emergency buffer first. Beyond that, paying off a 22% credit card almost always beats earning 4% in a savings account.']
]
},
{
slug:'credit-card-interest-calculator',
name:'Credit Card Interest Calculator',
cat:'debt',
icon:'card',
desc:'See how long a balance takes to clear and what the interest really costs.',
keywords:'credit card interest minimum payment payoff apr',
fields:[
money('balance','Current balance',3500),
{key:'apr', label:'Annual interest rate (APR)', type:'number', def:24, suffix:true, min:0, step:'0.01'},
{key:'minPct', label:'Minimum payment', type:'number', def:2, suffix:true, min:0.1, step:'0.1', hint:'Percentage of the balance most issuers require.'},
money('minFloor','Minimum payment floor',25,'The smallest payment the issuer allows.'),
money('extra','Extra monthly payment',0)
],
compute(v) {
const res = Calc.creditCard(v.balance, v.apr, v.minPct, v.minFloor, v.extra);
if (res.impossible) {
return {kpis:[{label:'Never repaid', value:'—', tone:'warn'}],
notes:['Your payment does not cover the monthly interest, so the balance grows forever. This is how credit card debt spirals. Increase your payment.']};
}
const minOnly = Calc.creditCard(v.balance, v.apr, v.minPct, v.minFloor, 0);
const saved = minOnly.totalInterest - res.totalInterest;

return {
kpis:[
{label:'Time to clear', value: res.months + ' months', tone:'primary', sub:`Around ${monthsToDate(res.months)}`},
{label:'Total interest', value:fmt(res.totalInterest), tone:'warn'},
{label:'Total paid', value:fmt(res.totalPaid)},
{label:'Interest vs balance', value: v.balance > 0 ? pctStr(res.totalInterest/v.balance*100) : '—',
sub:'Interest as a share of what you borrowed'}
],
chart:{type:'donut', items:[
{label:'Original balance', value:v.balance, color:PALETTE[0]},
{label:'Interest charges', value:res.totalInterest, color:PALETTE[4]}
]},
notes:[
(v.extra||0) > 0
? `Your extra ${fmt(v.extra)} per month saves ${fmt(saved)} in interest and clears the balance ${minOnly.months - res.months} months sooner.`
: 'Try adding even a small extra payment — credit card interest compounds against you quickly.',
'Minimum payments are designed to maximise the issuer\'s interest income, not to clear your balance quickly.'
]
};
},
about:'Credit cards are the most expensive common form of borrowing. Because minimum payments are a percentage of a shrinking balance, they fall over time — which is why balances can linger for decades.',
formula:'<code>Monthly interest = Balance × (APR ÷ 12)<br>Minimum payment = max(Balance × Min%, Floor)<br>Principal reduction = Payment − Interest</code>',
example:'A $3,500 balance at 24% APR paying 2% minimum takes over 20 years to clear and costs more in interest than the original balance.',
faqs:[
['Why does paying the minimum take so long?','The minimum is a percentage of the balance, so as the balance falls the payment falls too. Only a small slice ever goes to principal.'],
['What APR should I use?','Use the APR shown on your statement. If you have a promotional rate, use the rate that applies after the promotion ends.']
]
},
/* ============ INCOME ============ */
{
slug:'salary-calculator',
name:'Salary Calculator',
cat:'income',
icon:'brief',
desc:'Convert between hourly, weekly, monthly and annual pay.',
keywords:'salary hourly annual monthly weekly convert wage',
fields:[
money('amount','Amount',25),
{key:'period', label:'This amount is', type:'select', def:'hourly', options:[
{v:'hourly', l:'Per hour'},{v:'daily', l:'Per day'},{v:'weekly', l:'Per week'},
{v:'biweekly', l:'Every two weeks'},{v:'monthly', l:'Per month'},{v:'annual', l:'Per year'}
]},
{key:'hours', label:'Hours per week', type:'number', def:40, min:1, max:168, step:'0.5'},
{key:'weeks', label:'Paid weeks per year', type:'number', def:52, min:1, max:52, step:1, hint:'Use 48–50 if you have unpaid leave.'}
],
compute(v) {
const amount = Math.max(0, v.amount||0);
const hours = Math.max(0.1, v.hours||40);
const weeks = Math.max(1, Math.min(52, v.weeks||52));
const daysPerWeek = 5;

let annual;
switch (v.period) {
case 'hourly': annual = amount * hours * weeks; break;
case 'daily': annual = amount * daysPerWeek * weeks; break;
case 'weekly': annual = amount * weeks; break;
case 'biweekly': annual = amount * (weeks/2); break;
case 'monthly': annual = amount * 12; break;
default: annual = amount;
}
const hourly = hours * weeks > 0 ? annual / (hours * weeks) : 0;

return {
kpis:[
{label:'Annual', value:fmt(annual), tone:'primary'},
{label:'Monthly', value:fmt(annual/12)},
{label:'Weekly', value:fmt(annual/weeks)},
{label:'Hourly', value:fmt(hourly), tone:'good'}
],
chart:null,
table:{title:'All conversions', head:['Period','Amount'], rows:[
['Hourly', fmt(hourly)],
['Daily (5-day week)', fmt(hourly*hours/daysPerWeek)],
['Weekly', fmt(annual/weeks)],
['Biweekly', fmt(annual/weeks*2)],
['Monthly', fmt(annual/12)],
['Annual', fmt(annual)]
]},
notes:['These are gross figures — before tax and deductions. Use the Take-Home estimate in your own payroll system for net pay.']
};
},
about:'Comparing job offers across different pay structures is confusing. Converting everything to an annual and an hourly figure puts offers on the same footing.',
formula:'<code>Annual = Hourly × Hours/week × Weeks/year<br>Hourly = Annual ÷ (Hours/week × Weeks/year)</code>',
example:'$25 per hour at 40 hours a week for 52 weeks is $52,000 per year.',
faqs:[
['Should I use 52 weeks?','Only if you are paid for every week of the year. If you get unpaid holiday, use the number of weeks you are actually paid.'],
['Is this gross or net?','Gross. Income tax, social security and pension contributions are deducted separately.']
]
},
{
slug:'overtime-calculator',
name:'Overtime Calculator',
cat:'income',
icon:'clock',
desc:'Calculate overtime pay with any multiplier your local rules require.',
keywords:'overtime pay hourly rate multiplier time and a half',
fields:[
money('wage','Regular hourly wage',22),
{key:'regular', label:'Regular hours', type:'number', def:40, min:0, step:'0.5'},
{key:'otHours', label:'Overtime hours', type:'number', def:8, min:0, step:'0.5'},
{key:'mult', label:'Overtime multiplier', type:'number', def:1.5, min:1, step:'0.1', hint:'1.5 = time and a half, 2 = double time.'}
],
compute(v) {
const wage = Math.max(0, v.wage||0);
const reg = Math.max(0, v.regular||0);
const ot = Math.max(0, v.otHours||0);
const mult = Math.max(1, v.mult||1.5);
const regPay = wage * reg;
const otRate = wage * mult;
const otPay = otRate * ot;
const total = regPay + otPay;

return {
kpis:[
{label:'Total pay', value:fmt(total), tone:'primary'},
{label:'Overtime pay', value:fmt(otPay), tone:'good', sub:`at ${fmt(otRate)}/hour`},
{label:'Regular pay', value:fmt(regPay)},
{label:'Effective hourly', value: (reg+ot) > 0 ? fmt(total/(reg+ot)) : '—'}
],
chart:{type:'bars', items:[
{label:'Regular hours', value:regPay, color:'#2563EB'},
{label:'Overtime hours', value:otPay, color:'#059669'}
]},
notes:['Overtime rules vary widely between countries and even between regions. Always check your local labour law or contract for the correct multiplier.']
};
},
about:'Overtime pay rules differ enormously around the world — from no statutory requirement to double time on public holidays. This calculator lets you enter the multiplier that applies to you.',
formula:'<code>Overtime rate = Hourly wage × Multiplier<br>Overtime pay = Overtime rate × Overtime hours<br>Total = Regular pay + Overtime pay</code>',
example:'$22/hour with 8 hours at 1.5× gives $121 in overtime pay on top of $880 regular pay.',
faqs:[
['What is time and a half?','A multiplier of 1.5 — the most common overtime rate in many jurisdictions.'],
['Is overtime always paid at a premium?','No. Some salaried roles are exempt, and some countries have no statutory overtime premium at all.']
]
},
{
slug:'freelance-rate-calculator',
name:'Freelance Rate Calculator',
cat:'income',
icon:'brief',
desc:'Work out the hourly rate you need to charge to hit your income target.',
keywords:'freelance rate hourly consulting pricing income',
fields:[
money('income','Desired annual take-home income',60000),
money('expenses','Annual business expenses',8000,'Software, equipment, insurance, marketing.'),
{key:'tax', label:'Tax & deductions rate', type:'number', def:25, suffix:true, min:0, max:80, step:'1'},
{key:'billable', label:'Billable hours per week', type:'number', def:25, min:1, max:80, step:1, hint:'Realistically, only 60–70% of working hours are billable.'},
{key:'weeksOff', label:'Weeks off per year', type:'number', def:6, min:0, max:30, step:1}
],
compute(v) {
const income = Math.max(0, v.income||0);
const expenses = Math.max(0, v.expenses||0);
const taxRate = Math.min(80, Math.max(0, v.tax||0))/100;
const billable = Math.max(1, v.billable||25);
const weeksOff = Math.min(30, Math.max(0, v.weeksOff||0));
const workingWeeks = Math.max(1, 52 - weeksOff);
const billableHours = billable * workingWeeks;

const preTax = income + expenses;
const requiredRevenue = taxRate < 1 ? preTax / (1 - taxRate) : preTax;
const hourly = billableHours > 0 ? requiredRevenue / billableHours : 0;
const dayRate = hourly * 8;
const weekRate = hourly * billable;

return {
kpis:[
{label:'Required hourly rate', value:fmt(hourly), tone:'primary'},
{label:'Revenue needed', value:fmt(requiredRevenue), tone:'warn', sub:'Before tax and expenses'},
{label:'Billable hours/year', value:num(billableHours), sub:`${workingWeeks} working weeks`},
{label:'Day rate (8h)', value:fmt(dayRate), tone:'good'}
],
chart:null,
table:{title:'Rate card', head:['Unit','Rate'], rows:[
['Hourly', fmt(hourly)],
['Half day (4h)', fmt(hourly*4)],
['Full day (8h)', fmt(dayRate)],
['Week', fmt(weekRate)],
['Month (4 weeks)', fmt(weekRate*4)]
]},
notes:[
'Most freelancers underestimate the gap between working hours and billable hours. Admin, marketing and sales all take time you cannot invoice.',
'Add a buffer. Late payments, quiet months and scope creep are normal — price them in.'
]
};
},
about:'The classic freelance mistake is dividing a salary by 2,080 hours. Freelancers pay their own tax, cover their own expenses, and only bill a fraction of their working time. This calculator accounts for all three.',
formula:'<code>Billable hours = Billable hrs/week × Working weeks<br>Revenue needed = (Income + Expenses) ÷ (1 − Tax rate)<br>Hourly rate = Revenue needed ÷ Billable hours</code>',
example:'Wanting $60,000 take-home with $8,000 expenses, 25% tax and 1,150 billable hours requires about $79 per hour.',
faqs:[
['Why is my freelance rate so much higher than my old salary rate?','Because you now pay both halves of social contributions, cover your own equipment and holidays, and lose unpaid time to admin.'],
['How many billable hours is realistic?','For most solo freelancers, 20–30 billable hours in a 40-hour week is a solid target.']
]
},
{
slug:'income-goal-calculator',
name:'Income Goal Calculator',
cat:'income',
icon:'trend',
desc:'Reverse-engineer the income you need to reach a savings target.',
keywords:'income goal target savings requirement earnings',
fields:[
money('target','Monthly savings target',800),
money('expenses','Monthly expenses',2500),
{key:'tax', label:'Average tax rate', type:'number', def:20, suffix:true, min:0, max:80, step:'1'}
],
compute(v) {
const target = Math.max(0, v.target||0);
const expenses = Math.max(0, v.expenses||0);
const taxRate = Math.min(80, Math.max(0, v.tax||0))/100;
const netNeeded = expenses + target;
const grossNeeded = taxRate < 1 ? netNeeded/(1-taxRate) : netNeeded;
return {
kpis:[
{label:'Gross monthly income needed', value:fmt(grossNeeded), tone:'primary'},
{label:'Net monthly income needed', value:fmt(netNeeded)},
{label:'Annual gross', value:fmt(grossNeeded*12)},
{label:'Savings target', value:fmt(target), tone:'good', sub:`${fmt(target*12)} per year`}
],
chart:null,
notes:['Your average tax rate is not the same as your marginal rate. Use your total tax divided by total income for the most accurate figure.']
};
},
about:'Instead of asking "how much can I save?", this calculator asks "how much do I need to earn?". It is useful when setting a savings goal and working backwards to the salary or revenue required.',
formula:'<code>Net needed = Expenses + Savings target<br>Gross needed = Net needed ÷ (1 − Tax rate)</code>',
example:'To save $800 a month while spending $2,500, with a 20% tax rate, you need $4,125 gross per month.',
faqs:[['Should I include pension contributions?','Yes — treat them as part of your deduction rate so the gross figure is realistic.']]
},
/* ============ SHOPPING ============ */
{
slug:'discount-calculator',
name:'Discount Calculator',
cat:'shopping',
icon:'tag',
desc:'Work out sale prices and savings, including stacked discounts.',
keywords:'discount sale price percentage off savings',
fields:[
money('price','Original price',249),
{key:'d1', label:'First discount', type:'number', def:20, suffix:true, min:0, max:100, step:'0.1'},
{key:'d2', label:'Second discount (optional)', type:'number', def:0, suffix:true, min:0, max:100, step:'0.1', hint:'For "extra 10% off" offers, applied on top.'}
],
compute(v) {
const price = Math.max(0, v.price||0);
const d1 = Math.min(100, Math.max(0, v.d1||0));
const d2 = Math.min(100, Math.max(0, v.d2||0));
const afterFirst = price * (1 - d1/100);
const final = afterFirst * (1 - d2/100);
const totalSaved = price - final;
const effective = price > 0 ? totalSaved/price*100 : 0;

return {
kpis:[
{label:'Final price', value:fmt(final), tone:'primary'},
{label:'You save', value:fmt(totalSaved), tone:'good'},
{label:'Effective discount', value:pctStr(effective), sub:'Combined across both discounts'},
{label:'After first discount', value:fmt(afterFirst)}
],
chart:null,
table:{title:'Price breakdown', head:['Step','Amount'], rows:[
['Original price', fmt(price)],
[`After ${d1}% off`, fmt(afterFirst)],
d2 > 0 ? [`After extra ${d2}% off`, fmt(final)] : null,
['Total saved', fmt(totalSaved)]
].filter(Boolean)},
notes:[ d2 > 0
? 'Two 20% discounts do not equal 40% off. The second discount applies to the already-reduced price, so the combined effect is 36%.'
: 'Add a second discount to see how stacked offers actually combine.' ]
};
},
about:'Stacked discounts are deliberately confusing. Two 20% discounts sound like 40% off but actually total 36%, because the second discount applies to the reduced price.',
formula:'<code>After first = Price × (1 − d₁ ÷ 100)<br>Final = After first × (1 − d₂ ÷ 100)<br>Effective discount = (1 − Final ÷ Price) × 100</code>',
example:'$249 with 20% off then another 10% off comes to $179.28 — a combined 28% discount, not 30%.',
faqs:[['Why is 20% + 20% not 40%?','The second discount is calculated on the lower price, not the original. 0.8 × 0.8 = 0.64, so you pay 64% — a 36% discount.']]
},
{
slug:'unit-price-calculator',
name:'Unit Price Calculator',
cat:'shopping',
icon:'tag',
desc:'Compare two products and find which is genuinely cheaper per unit.',
keywords:'unit price compare value per gram per litre',
fields:[
{key:'n1', label:'Product A name', type:'text', def:'Product A'},
money('p1','Product A price',6.50),
money('q1','Product A quantity',750),
{key:'u1', label:'Product A unit', type:'select', def:'g', options:[
{v:'g', l:'grams'},{v:'ml', l:'millilitres'},{v:'count', l:'items'},{v:'kg', l:'kilograms'},{v:'l', l:'litres'}
]},
{key:'n2', label:'Product B name', type:'text', def:'Product B'},
money('p2','Product B price',9.80),
money('q2','Product B quantity',1200),
{key:'u2', label:'Product B unit', type:'select', def:'g', options:[
{v:'g', l:'grams'},{v:'ml', l:'millilitres'},{v:'count', l:'items'},{v:'kg', l:'kilograms'},{v:'l', l:'litres'}
]}
],
compute(v) {
const p1 = Math.max(0, v.p1||0), q1 = Math.max(0.0001, v.q1||0);
const p2 = Math.max(0, v.p2||0), q2 = Math.max(0.0001, v.q2||0);
const u1 = p1/q1, u2 = p2/q2;
const cheaper = u1 < u2 ? 'A' : (u2 < u1 ? 'B' : 'tie');
const diffPct = Math.max(u1,u2) > 0 ? (Math.abs(u1-u2)/Math.max(u1,u2))*100 : 0;
const sameUnit = v.u1 === v.u2;

return {
kpis:[
{label:'Cheaper option', value: cheaper === 'tie' ? 'Equal' : (cheaper === 'A' ? (v.n1||'Product A') : (v.n2||'Product B')),
tone:'primary', sub: cheaper === 'tie' ? 'Identical value' : `${pctStr(diffPct)} better value`},
{label:(v.n1||'A') + ' per unit', value: sameUnit ? fmt(u1, 4) : u1.toFixed(4), tone: cheaper==='A' ? 'good' : 'neutral'},
{label:(v.n2||'B') + ' per unit', value: sameUnit ? fmt(u2, 4) : u2.toFixed(4), tone: cheaper==='B' ? 'good' : 'neutral'},
{label:'Difference', value: sameUnit ? fmt(Math.abs(u1-u2), 4) : Math.abs(u1-u2).toFixed(4), sub:'Per unit'}
],
chart:null,
notes:[
sameUnit ? 'Both products are measured in the same unit, so the comparison is direct.'
: 'These products use different units — convert to a common unit before comparing, or change the unit selectors.',
'Unit price is not the whole story. Consider quality, waste and how much you will realistically use.'
]
};
},
about:'Supermarkets make value comparisons deliberately hard — bigger packs are not always cheaper. Comparing price per gram, per litre or per item exposes the real value.',
formula:'<code>Unit price = Price ÷ Quantity</code>',
example:'750 g for $6.50 is $8.67 per kg. 1,200 g for $9.80 is $8.17 per kg — the larger pack is genuinely better value.',
faqs:[['Is the bigger pack always cheaper?','No. That is exactly the assumption unit pricing is designed to test.']]
},
{
slug:'subscription-cost-calculator',
name:'Subscription Cost Calculator',
cat:'shopping',
icon:'card',
desc:'Add up what your subscriptions really cost over time.',
keywords:'subscription recurring cost monthly annual total',
fields:[
money('monthly','Total monthly subscription cost',85,'Add up all streaming, software, gym and membership fees.'),
{key:'years', label:'Years', type:'number', def:5, min:1, step:1}
],
compute(v) {
const m = Math.max(0, v.monthly||0);
const y = Math.max(1, v.years||1);
const annual = m*12;
const total = annual*y;
const invested = Calc.compound(0, m, 7, y, 12).final;
return {
kpis:[
{label:'Monthly', value:fmt(m), tone:'primary'},
{label:'Annual', value:fmt(annual)},
{label:`Over ${y} years`, value:fmt(total), tone:'warn'},
{label:'If invested at 7%', value:fmt(invested), tone:'good', sub:'Same money, invested instead'}
],
chart:{type:'bars', items:[
{label:'1 year', value:annual, color:'#2563EB'},
{label:'3 years', value:annual*3, color:'#0891B2'},
{label:`${y} years`, value:total, color:'#D97706'}
]},
notes:['Small recurring charges are easy to ignore individually but significant in total. Review your subscriptions every six months.']
};
},
about:'Subscriptions are designed to be invisible — small, automatic and easy to forget. Multiplying them out over several years shows their true weight.',
formula:'<code>Annual cost = Monthly cost × 12<br>Total cost = Annual cost × Years</code>',
example:'$85 per month is $1,020 per year, and $5,100 over five years.',
faqs:[['What counts as a subscription?','Streaming, software, cloud storage, gym, memberships, meal kits, news, and any app with an auto-renewal.']]
},
{
slug:'sale-price-calculator',
name:'Sale Price Calculator',
cat:'shopping',
icon:'tag',
desc:'Find the sale price and the exact amount you save.',
keywords:'sale price savings promotion percent off',
fields:[
money('price','Original price',180),
{key:'pct', label:'Discount percentage', type:'number', def:35, suffix:true, min:0, max:100, step:'0.1'}
],
compute(v) {
const price = Math.max(0, v.price||0);
const pct = Math.min(100, Math.max(0, v.pct||0));
const saved = price * pct/100;
const final = price - saved;
return {
kpis:[
{label:'Sale price', value:fmt(final), tone:'primary'},
{label:'You save', value:fmt(saved), tone:'good'},
{label:'Discount', value:pctStr(pct)},
{label:'Original price', value:fmt(price)}
],
chart:null,
notes:['A discount only represents real savings if you would have bought the item at full price anyway.']
};
},
about:'A quick way to check whether a promotion is genuinely worth it, and to know exactly what you will pay at the register.',
formula:'<code>Savings = Price × (Discount ÷ 100)<br>Sale price = Price − Savings</code>',
example:'35% off $180 saves $63, giving a sale price of $117.',
faqs:[['Is a 35% discount always a good deal?','Not necessarily — compare against other retailers. Some sale prices are set against inflated "original" prices.']]
},

/* ============ BUSINESS ============ */
{
slug:'profit-margin-calculator',
name:'Profit Margin Calculator',
cat:'business',
icon:'card',
desc:'Calculate profit, margin and markup — and understand the difference.',
keywords:'profit margin markup revenue cost business',
fields:[
money('revenue','Revenue (selling price)',120),
money('cost','Cost (what you paid)',72)
],
compute(v) {
const rev = Math.max(0, v.revenue||0);
const cost = Math.max(0, v.cost||0);
const profit = rev - cost;
const margin = rev > 0 ? (profit/rev)*100 : 0;
const markup = cost > 0 ? (profit/cost)*100 : 0;
return {
kpis:[
{label:'Gross profit', value:fmt(profit), tone: profit >= 0 ? 'primary' : 'warn'},
{label:'Profit margin', value:pctStr(margin), tone:'good', sub:'Profit as % of revenue'},
{label:'Markup', value:pctStr(markup), sub:'Profit as % of cost'},
{label:'Revenue', value:fmt(rev)}
],
chart:{type:'donut', items:[
{label:'Cost', value:cost, color:PALETTE[0]},
{label:'Profit', value:Math.max(0,profit), color:PALETTE[1]}
].filter(x=>x.value>0)},
notes:[
'Margin and markup are not the same number. A 50% markup is only a 33.3% margin.',
'Margin is the more useful measure for pricing decisions because it tells you what share of each sale you keep.'
]
};
},
about:'Margin and markup are the most commonly confused pair of terms in business pricing. Margin compares profit to revenue; markup compares profit to cost. Confusing them leads to underpricing.',
formula:'<code>Profit = Revenue − Cost<br>Margin = (Profit ÷ Revenue) × 100<br>Markup = (Profit ÷ Cost) × 100</code>',
example:'Selling for $120 what cost $72 gives $48 profit — a 40% margin but a 66.7% markup.',
faqs:[
['Which should I use for pricing?','Use margin when deciding whether a product is worth selling, and markup when setting the price from cost.'],
['What is a good margin?','It varies enormously by industry. Retail often runs 2–10%, software 70–90%. Compare against your own sector, not across sectors.']
]
},
{
slug:'break-even-calculator',
name:'Break-Even Calculator',
cat:'business',
icon:'trend',
desc:'Find out how many units you need to sell before you make a profit.',
keywords:'break even fixed costs variable cost units profit',
fields:[
money('fixed','Fixed costs (per period)',8000,'Rent, salaries, software — costs that do not change with volume.'),
money('variable','Variable cost per unit',12),
money('price','Selling price per unit',30)
],
compute(v) {
const fixed = Math.max(0, v.fixed||0);
const variable = Math.max(0, v.variable||0);
const price = Math.max(0, v.price||0);
const contribution = price - variable;

if (contribution <= 0) {
return {
kpis:[{label:'No break-even point', value:'—', tone:'warn'}],
notes:['Your selling price does not exceed the variable cost per unit. Every sale loses money, so you can never break even. Raise the price or cut variable costs.']
};
}
const units = Math.ceil(fixed / contribution);
const revenue = units * price;

return {
kpis:[
{label:'Break-even units', value:num(units), tone:'primary', sub:'To cover all costs'},
{label:'Break-even revenue', value:fmt(revenue)},
{label:'Contribution per unit', value:fmt(contribution), tone:'good'},
{label:'Contribution margin', value: price>0 ? pctStr(contribution/price*100) : '—'}
],
chart:{type:'bars', items:[
{label:'Fixed costs', value:fixed, color:'#DC2626'},
{label:'Break-even revenue', value:revenue, color:'#059669'},
{label:'Profit at 2× break-even', value:units*contribution, color:'#2563EB'}
]},
notes:[
`Every unit sold beyond ${num(units)} adds ${fmt(contribution)} of profit.`,
'Break-even analysis assumes fixed costs stay constant. In reality, growing volume eventually requires more capacity.'
]
};
},
about:'Break-even is the number of units you must sell before you stop losing money. It is the single most important number for any new product or business.',
formula:'<code>Contribution per unit = Price − Variable cost<br>Break-even units = Fixed costs ÷ Contribution per unit</code>',
example:'With $8,000 fixed costs, $12 variable cost and a $30 price, you need 445 units to break even.',
faqs:[
['What is contribution?','The money each sale leaves after covering its own variable cost — the amount that goes toward fixed costs and profit.'],
['Why does my break-even move?','Fixed costs, prices and variable costs all change over time. Recalculate whenever any of them shift.']
]
},
{
slug:'sales-tax-calculator',
name:'Sales Tax / VAT Calculator',
cat:'business',
icon:'card',
desc:'Add or remove sales tax, VAT or GST at any rate you specify.',
keywords:'sales tax vat gst add remove inclusive exclusive',
fields:[
money('amount','Amount',250),
{key:'rate', label:'Tax rate', type:'number', def:20, suffix:true, min:0, step:'0.01'},
{key:'mode', label:'Calculation', type:'select', def:'add', options:[
{v:'add', l:'Add tax (price excludes tax)'},
{v:'remove', l:'Remove tax (price includes tax)'}
]}
],
compute(v) {
const amount = Math.max(0, v.amount||0);
const rate = Math.max(0, v.rate||0)/100;
let net, tax, gross;
if (v.mode === 'remove') {
gross = amount;
net = rate > 0 ? amount / (1 + rate) : amount;
tax = gross - net;
} else {
net = amount;
tax = amount * rate;
gross = net + tax;
}
return {
kpis:[
{label:'Gross (with tax)', value:fmt(gross), tone:'primary'},
{label:'Net (before tax)', value:fmt(net)},
{label:'Tax amount', value:fmt(tax), tone:'warn'},
{label:'Tax rate', value:pctStr(rate*100, 2)}
],
chart:null,
table:{title:'Summary', head:['Item','Amount'], rows:[
['Net', fmt(net)], ['Tax', fmt(tax)], ['Gross', fmt(gross)]
]},
notes:['Tax rules differ by country and even by product category. Always confirm the correct rate with your local tax authority.']
};
},
about:'Sales tax, VAT and GST all work differently, but the arithmetic is the same. This calculator handles both directions: adding tax to a net price, and extracting tax from a tax-inclusive price.',
formula:'<code>Add: Gross = Net × (1 + Rate)<br>Remove: Net = Gross ÷ (1 + Rate)<br>Tax = Gross − Net</code>',
example:'A $250 net price at 20% VAT becomes $300 gross. A $300 gross price at 20% VAT contains $50 of tax.',
faqs:[
['Why is removing tax different from adding it?','Because the rate applies to the net amount. Dividing by 1.2 is not the same as subtracting 20% from the gross figure.'],
['Should I use VAT or sales tax?','Use whichever applies where you sell. The calculation is identical — only the name and rate differ.']
]
}
];

/* ---------------- Lookup maps ---------------- */
const TOOL_BY_SLUG = Object.fromEntries(TOOLS.map(t => [t.slug, t]));
/* ============================================================
ARTICLES
============================================================ */
const ARTICLES = [
{
slug:'how-to-build-a-budget-that-actually-works',
title:'How to Build a Budget That Actually Works',
cat:'Budgeting',
read:6,
excerpt:'Most budgets fail in the first month. Here is a simple system that survives contact with real life.',
body:[
{h:'Start with what you actually spend', p:'The biggest mistake in budgeting is starting from what you think you spend. Most people underestimate discretionary spending by 20–30%. Before you set a single target, look at the last two months of bank statements and categorise every transaction. It is uncomfortable and it is the single most valuable step.'},
{h:'Separate fixed from variable', p:'Fixed costs — rent, insurance, loan payments, subscriptions — are decided once and then happen automatically. Variable costs — food, transport, entertainment — are decided daily. These need completely different treatment. Fixed costs should be optimised once a year. Variable costs need an ongoing system.'},
{h:'Give variable spending a weekly number', p:'A monthly food budget of $500 is hard to act on. A weekly budget of $115 is something you can check on a Sunday. Weekly cycles match how people actually make decisions, and they catch overspending before it becomes a crisis.'},
{h:'Budget for irregular expenses', p:'Car servicing, dental work, gifts, annual subscriptions — these are predictable but infrequent. Divide the annual total by 12 and set that aside monthly. This single habit eliminates most "unexpected" expenses.'},
{h:'Review, do not restart', p:'A budget that fails in month one is not a failure — it is data. Adjust the number and continue. The people who succeed at budgeting are not the ones with perfect numbers; they are the ones who keep coming back.'}
]
},
{
slug:'emergency-fund-how-much-is-enough',
title:'Emergency Fund: How Much Is Actually Enough?',
cat:'Saving Money',
read:5,
excerpt:'Three months or twelve? The right answer depends far more on your situation than on generic advice.',
image: './assets/emergency-fund.png',
body:[
{h:'What the fund is for', p:'An emergency fund exists for one purpose: to stop a bad month from turning into debt. It is not an investment, it is not for holidays, and it is not for opportunities. It is insurance you pay yourself.'},
{h:'The three-month case', p:'If you have a stable salaried job, no dependants, and skills that are in demand, three months of essential expenses is often sufficient. The probability of a long unemployment gap is low, and the opportunity cost of holding more cash is real.'},
{h:'The six-month standard', p:'Six months is the widely recommended default because it covers the typical job search duration in most economies plus a buffer. It is a reasonable target for most people with a mortgage or dependants.'},
{h:'When to go higher', p:'Freelancers, business owners, commission-based earners, single-income households and anyone with a health condition should consider nine to twelve months. Your income variability, not a generic rule, should set the number.'},
{h:'Where to keep it', p:'A separate high-interest savings account, not invested in markets. The whole point is that it is available and stable when things go wrong — which is precisely when markets are often down too.'}
]
},
{
slug:'snowball-vs-avalanche-debt-payoff',
title:'Snowball vs Avalanche: Which Debt Payoff Method Wins?',
cat:'Debt Management',
read:7,
excerpt:'One saves more money. The other is more likely to be finished. Here is how to choose.',
body:[
{h:'The avalanche method', p:'Avalanche means paying minimums on everything, then throwing every spare unit at the debt with the highest interest rate. Mathematically it is optimal: you pay the least total interest possible given your monthly budget.'},
{h:'The snowball method', p:'Snowball pays minimums on everything, then attacks the smallest balance. It costs more in interest, but it produces a cleared debt — a real, visible win — much sooner.'},
{h:'What the research says', p:'Behavioural studies on debt repayment consistently find that people who experience early wins are more likely to persist. A payoff plan you abandon is worth nothing; a slightly suboptimal plan you finish is worth everything.'},
{h:'A practical hybrid', p:'If your highest-rate debt is also your smallest, the two methods are identical — take it. If not, consider starting with snowball to clear one small debt and build momentum, then switching to avalanche for the rest.'},
{h:'What actually matters most', p:'The strategy is the small lever. The big lever is the size of your extra payment. Doubling your monthly surplus typically shortens a payoff timeline by more than any strategy choice.'}
]
},
{
slug:'compound-interest-explained-simply',
title:'Compound Interest, Explained Without Jargon',
cat:'Investing Basics',
read:5,
excerpt:'The single most powerful concept in personal finance, explained in plain language with real numbers.',
body:[
{h:'Interest on interest', p:'Simple interest pays you a percentage of your original amount, forever. Compound interest pays you a percentage of your original amount plus everything you have already earned. The difference is small in year one and enormous in year thirty.'},
{h:'A concrete example', p:'Invest $10,000 at 7% for 30 years. With simple interest you end with $31,000. With annual compounding you end with about $76,000. Same starting money, same rate, same time — the only difference is whether interest earns interest.'},
{h:'Time beats amount', p:'Starting at 25 with $200 a month produces a dramatically larger final balance than starting at 35 with $400 a month — despite contributing the same total. Compounding rewards time far more than it rewards size.'},
{h:'The reverse is also true', p:'Compounding works against you on debt. A credit card at 24% APR compounds monthly against your balance, which is why minimum payments can stretch a small balance into decades.'},
{h:'What the numbers do not show', p:'Real markets are volatile. A 7% average return can include years of −20% and +30%. Compounding works over long horizons, not over any single year, and it is never guaranteed.'}
]
},
{
slug:'why-your-savings-rate-matters-more-than-your-salary',
title:'Why Your Savings Rate Matters More Than Your Salary',
cat:'Personal Finance',
read:5,
excerpt:'Two people on very different incomes can end up in surprisingly similar positions.',
body:[
{h:'The number that predicts freedom', p:'Your savings rate — the share of take-home income you keep — determines how long you must work far more reliably than your absolute income does. Someone earning $60,000 and saving 30% will reach financial independence sooner than someone earning $120,000 and saving 5%.'},
{h:'Lifestyle inflation is the silent enemy', p:'Every pay rise brings a choice: raise your spending or raise your savings rate. Most people unconsciously do the former, which is why high earners frequently report feeling broke.'},
{h:'The dual effect', p:'A higher savings rate does two things at once: it builds your assets faster, and it lowers the cost of the lifestyle you need to fund. Every dollar you do not spend is a dollar that does not need to be replaced by investment income.'},
{h:'A realistic target', p:'20% is a widely used benchmark and is achievable for most people on a median income with deliberate choices. If you are currently at 0%, aim for 5% first — the first 5% is by far the hardest.'},
{h:'How to measure it honestly', p:'Savings rate = (take-home income − all spending) ÷ take-home income. Include pension contributions and loan principal repayments as savings. Do not include investment gains — only new money.'}
]
},
{
slug:'how-to-negotiate-a-salary-increase',
title:'How to Ask for a Salary Increase (and Actually Get It)',
cat:'Money Tips',
read:6,
excerpt:'The preparation matters far more than the conversation.',
body:[
{h:'Understand what you are paid for', p:'Employers pay for the value you create and for the cost of replacing you. Both are negotiable facts, not feelings. Before any conversation, gather market data for your role, level and location from multiple sources.'},
{h:'Build the evidence file', p:'Maintain a running document of what you delivered and the measurable impact — revenue generated, costs saved, projects shipped, problems solved. Review it before your review meeting. Memory is unreliable; the document is not.'},
{h:'Choose the right moment', p:'The best moments are after a visible win, during a scheduled review, or when a new responsibility is being assigned. The worst moment is during a company-wide cost-cutting cycle.'},
{h:'Ask for a specific number', p:'"I would like a raise" invites a small gesture. "Based on market data and my results, I am looking for a base of $X" invites a real conversation. Anchor with a defensible number, slightly above your actual target.'},
{h:'Be ready to hear no', p:'If the answer is no, ask what specifically would need to be true for a yes in six months, and get it written down. A documented path is worth more than a vague promise.'}
]
}
];
const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map(a => [a.slug, a]));
/* ============================================================
UI BUILDING BLOCKS
============================================================ */
function toolCard(t) {
const cat = CATEGORIES[t.cat];
return `<a class="card tool-card" href="#/tools/${t.slug}">
<span class="tool-ico ${cat.cls}">${icon(t.icon, 19)}</span>
<h3>${esc(t.name)}</h3>
<p>${esc(t.desc)}</p>
<span class="more">Open calculator ${icon('chevR', 14)}</span>
</a>`;
}

function articleCard(a, i) {
  const alt = ['','alt1','alt2','alt3'][i % 4];
  const thumbHtml = a.image 
    ? `<img src="${window.__MW_BASE__ || ''}${a.image}" alt="${esc(a.title)}" class="card-cover-img" />`
    : `<div class="article-thumb ${alt}">${icon('book', 64, 'ico')}</div>`;

  return `<a class="card article-card" href="#/articles/${a.slug}">
  ${thumbHtml}
  <div class="article-body">
  <span class="article-cat">${esc(a.cat)}</span>
  <h3>${esc(a.title)}</h3>
  <p>${esc(a.excerpt)}</p>
  <div class="article-meta">${icon('clock', 13)} ${a.read} min read</div>
  </div>
  </a>`;
}


function faqBlock(faqs) {
if (!faqs || !faqs.length) return '';
return `<div class="panel" style="margin-top:28px">
<div class="panel-head"><h2>Frequently asked questions</h2></div>
<div class="panel-body">
${faqs.map(([q,a], i) => `
<div class="faq-item" data-faq="${i}">
<button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
<span>${esc(q)}</span>${icon('chev', 17)}
</button>
<div class="faq-a" id="faq-a-${i}"><div class="faq-a-inner">${esc(a)}</div></div>
</div>`).join('')}
</div>
</div>`;
}

function disclaimerBlock() {
return `<div class="disclaimer">
${icon('alert', 16)}
<span><strong>Estimate only.</strong> MONEYWISE provides educational tools and estimates for informational purposes only. Calculations may not account for all fees, taxes, regulations or personal circumstances. This is not individualized financial, investment, tax or legal advice. Verify important decisions with a qualified professional.</span>
</div>`;
}

/* ============================================================
PAGE: HOME
============================================================ */
function renderHome() {
const popular = ['monthly-budget-calculator','compound-interest-calculator','loan-calculator',
'savings-goal-calculator','debt-payoff-calculator','currency-converter']
.map(s => TOOL_BY_SLUG[s]).filter(Boolean);

const catCounts = {};
TOOLS.forEach(t => { catCounts[t.cat] = (catCounts[t.cat]||0)+1; });

return `
<section class="hero">
<div class="container hero-grid">
<div>
<span class="badge"><span class="dot"></span>${TOOLS.length} free tools · No sign-up required</span>
<h1>Make Better<br><span class="accent">Money Decisions.</span></h1>
<p class="hero-sub">Free calculators, smart financial tools, and practical guides to help you save more, spend smarter, and plan your future.</p>
<div class="hero-actions">
<a href="#/tools" class="btn btn-primary">Explore Free Tools ${icon('chevR',16)}</a>
<a href="#/tools/savings-goal-calculator" class="btn btn-ghost">Start Planning</a>
</div>
<div class="hero-meta">
<span>${icon('check',14)} ${TOOLS.length} working calculators</span>
<span>${icon('check',14)} ${Object.keys(CURRENCIES).length} currencies</span>
<span>${icon('check',14)} No account needed</span>
</div>
</div>
<div>
<div class="preview" aria-hidden="true">
<div class="preview-head">
<div>
<div class="preview-title">Monthly overview</div>
<div class="preview-total">${fmt(4820)}<span class="up">+18.4%</span></div>
</div>
<span class="tool-ico" style="width:34px;height:34px">${icon('trend',17)}</span>
</div>
<div class="preview-body">
${donutChart([
{label:'Housing', value:1400, color:PALETTE[0]},
{label:'Food', value:520, color:PALETTE[1]},
{label:'Transport', value:260, color:PALETTE[2]},
{label:'Other', value:640, color:PALETTE[3]}
], 150)}
<div class="preview-legend">
${[['Housing','$1,400',PALETTE[0]],['Food','$520',PALETTE[1]],['Transport','$260',PALETTE[2]],['Savings','$1,500',PALETTE[6]]]
.map(([n,v,c]) => `<div class="leg-row"><span class="leg-dot" style="background:${c}"></span>
<span class="leg-name">${n}</span><span class="leg-val">${v}</span></div>`).join('')}
</div>
</div>
<div class="preview-goal">
<div class="goal-top"><span style="color:var(--muted)">Emergency fund</span><b>68%</b></div>
<div class="progress"><i style="width:68%"></i></div>
</div>
<div class="preview-bars">
<i style="height:38%"></i><i style="height:55%" class="mid"></i><i style="height:44%"></i>
<i style="height:72%" class="mid"></i><i style="height:60%"></i><i style="height:88%" class="hi"></i>
<i style="height:70%" class="mid"></i>
</div>
</div>
</div>
</div>
</section>

<section class="section" style="padding-top:24px">
<div class="container">
<div class="section-head">
<span class="eyebrow">Most used</span>
<h2>Popular financial calculators</h2>
<p class="section-sub">Everything runs in your browser. Nothing is sent to a server, and no account is needed.</p>
</div>
<div class="grid grid-3">
${popular.map(toolCard).join('')}
</div>
</div>
</section>

<section class="section" style="padding-top:0">
<div class="container">
<div class="section-head">
<span class="eyebrow">Categories</span>
<h2>Browse tools by category</h2>
</div>
<div class="grid grid-4">
${Object.entries(CATEGORIES).map(([key, c]) => `
<a class="cat-tile" href="#/tools?cat=${key}">
<span class="tool-ico ${c.cls}">${icon(c.icon, 18)}</span>
<span><b>${c.name}</b><small>${catCounts[key]||0} tool${(catCounts[key]||0)===1?'':'s'}</small></span>
</a>`).join('')}
</div>
</div>
</section>

<section class="section" style="padding-top:0">
<div class="container">
<div class="section-head">
<span class="eyebrow">Learn</span>
<h2>Practical money guides</h2>
<p class="section-sub">Plain-language explanations of the concepts behind the calculators.</p>
</div>
<div class="grid grid-3">
${ARTICLES.slice(0,3).map(articleCard).join('')}
</div>
<div style="margin-top:26px">
<a href="#/articles" class="btn btn-ghost">View all guides ${icon('chevR',15)}</a>
</div>
</div>
</section>

<section class="section" style="padding-top:0">
<div class="container">
<div class="split-2">
<div>
<span class="eyebrow">Why MONEYWISE</span>
<h2 style="font-size:clamp(1.5rem,3.2vw,2rem);margin-top:10px">Built to be genuinely useful</h2>
<div class="stack" style="margin-top:22px">
${[
['shield','Real calculations, not decoration','Every tool uses a verified financial formula and handles zero, negative and extreme inputs correctly.'],
['globe','International by default','${Object.keys(CURRENCIES).length} currencies with locale-correct number formatting. Calculations stay independent of display formatting.'],
['check','No account required','Every calculator works fully without registration. Nothing you type is transmitted or stored.']
].map(([ic,title,body]) => `
<div style="display:flex;gap:14px">
<span class="tool-ico" style="flex-shrink:0">${icon(ic,18)}</span>
<div><b style="font-size:14.5px;display:block;margin-bottom:3px">${title}</b>
<span style="font-size:13.5px;color:var(--muted);line-height:1.6">${body}</span></div>
</div>`).join('')}
</div>
</div>
<div class="panel" style="padding:24px">
<h3 style="font-size:15px;margin-bottom:16px">Common questions</h3>
${[
['Is MONEYWISE really free?','Yes. Every calculator and guide is free to use.'],
['Do you store my financial data?','No. All calculations run locally in your browser.'],
['Are the results accurate?','They use standard financial formulas, but are estimates — not advice.']
].map(([q,a]) => `<div style="padding:14px 0;border-bottom:1px solid var(--border)">
<b style="font-size:13.5px;display:block;margin-bottom:4px">${q}</b>
<span style="font-size:13px;color:var(--muted);line-height:1.6">${a}</span></div>`).join('')}
</div>
</div>
</div>
</section>

<section class="section" style="padding-top:0;padding-bottom:80px">
<div class="container">
<div class="newsletter">
<h2>Money tips, once a month</h2>
<p>One short email with practical ideas you can use immediately. No spam, no upsells, unsubscribe anytime.</p>
<form class="news-form" id="newsForm">
<label class="sr-only" for="newsEmail">Email address</label>
<input type="email" id="newsEmail" placeholder="you@example.com" required autocomplete="email">
<button type="submit" class="btn btn-primary">Subscribe</button>
</form>
<p class="news-note">This demo does not send data anywhere. Connect a backend to enable real subscriptions.</p>
</div>
</div>
</section>`;
}

function mountHome() {
const form = document.getElementById('newsForm');
if (form) form.addEventListener('submit', e => {
e.preventDefault();
const input = document.getElementById('newsEmail');
const val = input.value.trim();
const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
if (!ok) { toast('Please enter a valid email address'); input.focus(); return; }
toast('Thanks — you are subscribed');
form.reset();
});
}

/* ============================================================
PAGE: TOOLS DIRECTORY
============================================================ */
function renderTools() {
return `
<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span><span>Tools</span></div>
<div class="tool-head">
<h1>All financial tools</h1>
<p>${TOOLS.length} working calculators across ${Object.keys(CATEGORIES).length} categories. Every tool runs locally in your browser.</p>
</div>

<div class="search-bar">
${icon('search', 18)}
<label class="sr-only" for="toolSearch">Search tools</label>
<input type="text" id="toolSearch" placeholder="Search calculators — try &quot;loan&quot; or &quot;savings&quot;..." autocomplete="off">
</div>

<div class="chips" id="catChips">
<button class="chip active" data-cat="all">All tools</button>
${Object.entries(CATEGORIES).map(([k,c]) =>
`<button class="chip" data-cat="${k}">${c.name}</button>`).join('')}
</div>

<div id="toolResults"></div>
</div>`;
}

function renderToolResults() {
const q = state.searchQuery.toLowerCase().trim();
const cat = state.activeCat;
let list = TOOLS.filter(t => {
const catOk = cat === 'all' || t.cat === cat;
if (!catOk) return false;
if (!q) return true;
return (t.name + ' ' + t.desc + ' ' + t.keywords).toLowerCase().includes(q);
});

const el = document.getElementById('toolResults');
if (!el) return;

if (!list.length) {
el.innerHTML = `<div class="empty">${icon('search', 40)}
<h3>No tools found</h3>
<p>Try a different search term or category.</p></div>`;
return;
}

if (cat === 'all' && !q) {
el.innerHTML = Object.entries(CATEGORIES).map(([key, c]) => {
const items = list.filter(t => t.cat === key);
if (!items.length) return '';
return `<div style="margin-bottom:40px">
<h2 style="font-size:1.1rem;margin-bottom:16px;display:flex;align-items:center;gap:9px">
<span class="tool-ico ${c.cls}" style="width:30px;height:30px;border-radius:9px">${icon(c.icon,15)}</span>
${c.name}
</h2>
<div class="grid grid-3">${items.map(toolCard).join('')}</div>
</div>`;
}).join('');
} else {
el.innerHTML = `<div class="grid grid-3">${list.map(toolCard).join('')}</div>`;
}
}

function mountToolsPage() {
const search = document.getElementById('toolSearch');
const chips = document.getElementById('catChips');

search.value = state.searchQuery;

search.addEventListener('input', () => {
state.searchQuery = search.value;
renderToolResults();
});

chips.querySelectorAll('.chip').forEach(c => {
c.classList.toggle('active', c.dataset.cat === state.activeCat);
c.addEventListener('click', () => {
state.activeCat = c.dataset.cat;
chips.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === c));
renderToolResults();
});
});

renderToolResults();
}
/* ============================================================
PAGE: TOOL DETAIL
============================================================ */
function fieldHTML(f) {
const labelId = 'f_' + f.key;
const hint = f.hint ? `<span class="hint">${esc(f.hint)}</span>` : '';
let control = '';

if (f.type === 'select') {
control = `<select id="${labelId}" data-key="${f.key}">
${f.options.map(o => `<option value="${o.v}" ${String(o.v)===String(f.def)?'selected':''}>${esc(o.l)}</option>`).join('')}
</select>`;
} else if (f.type === 'text') {
control = `<input type="text" id="${labelId}" data-key="${f.key}" value="${esc(f.def||'')}">`;
} else {
const prefix = f.prefix ? `<span class="input-prefix">${esc(symbolOf(state.currency))}</span>` : '';
const suffix = f.suffix ? `<span class="input-suffix">${f.key==='tip'||f.key==='rate'||f.key==='apr'||f.key==='mult'||f.key==='tax'||f.key==='d1'||f.key==='d2'||f.key==='pct'||f.key==='downPct'||f.key==='minPct'? '%' : ''}</span>` : '';
control = `<div class="input-wrap">
${prefix}
<input type="number" id="${labelId}" data-key="${f.key}" value="${f.def!==undefined?f.def:''}"
${f.min!==undefined?`min="${f.min}"`:''} ${f.max!==undefined?`max="${f.max}"`:''}
step="${f.step||'any'}" class="${f.prefix?'has-prefix':''} ${suffix?'has-suffix':''}"
inputmode="decimal">
${suffix}
</div>`;
}
return `<div class="field"><label for="${labelId}">${esc(f.label)}</label>${control}${hint}</div>`;
}

function renderToolPage(slug) {
const t = TOOL_BY_SLUG[slug];
if (!t) return renderNotFound();
const cat = CATEGORIES[t.cat];
const related = TOOLS.filter(x => x.cat === t.cat && x.slug !== t.slug).slice(0,3);
const relatedArticles = ARTICLES.slice(0,2);

return `
<div class="container page">
<div class="breadcrumbs">
<a href="#/">Home</a><span class="sep">/</span>
<a href="#/tools">Tools</a><span class="sep">/</span>
<a href="#/tools?cat=${t.cat}">${cat.name}</a><span class="sep">/</span>
<span>${esc(t.name)}</span>
</div>

<div class="tool-head">
<span class="pill">${cat.name}</span>
<h1>${esc(t.name)}</h1>
<p>${esc(t.desc)}</p>
</div>

<div class="calc-grid">
<div class="panel">
<div class="panel-head"><h2>Your details</h2>
<button class="btn btn-sm btn-ghost" id="resetBtn">${icon('reset',14)} Reset</button>
</div>
<div class="panel-body" id="calcForm">
${t.fields.map(fieldHTML).join('')}
<div class="form-actions">
<button class="btn btn-primary btn-block" id="printBtn">${icon('print',16)} Print result</button>
</div>
</div>
</div>

<div class="sticky-side">
<div class="panel">
<div class="panel-head"><h2>Results</h2></div>
<div class="panel-body" id="calcOut"></div>
</div>
${disclaimerBlock()}
</div>
</div>

<div class="divider"></div>

<div class="prose">
<h2>How this calculator works</h2>
<p>${esc(t.about)}</p>
<h3>The formula</h3>
<div class="formula"><code>${t.formula}</code></div>
<h3>Worked example</h3>
<p>${esc(t.example)}</p>
</div>

${faqBlock(t.faqs)}

${related.length ? `<div style="margin-top:44px">
<h2 style="font-size:1.15rem;margin-bottom:16px">Related tools</h2>
<div class="grid grid-3">${related.map(toolCard).join('')}</div>
</div>` : ''}

${relatedArticles.length ? `<div style="margin-top:44px">
<h2 style="font-size:1.15rem;margin-bottom:16px">Related guides</h2>
<div class="grid grid-2">${relatedArticles.map(articleCard).join('')}</div>
</div>` : ''}
</div>`;
}

function renderResult(res) {
if (!res) return '';
let html = '';

if (res.kpis && res.kpis.length) {
html += `<div class="kpis">${res.kpis.map(k => `
<div class="kpi ${k.tone||''}">
<div class="kpi-label">${esc(k.label)}</div>
<div class="kpi-val">${esc(k.value)}</div>
${k.sub ? `<div class="kpi-sub">${esc(k.sub)}</div>` : ''}
</div>`).join('')}</div>`;
}

if (res.chart) {
html += `<div class="chart-block"><div class="chart-title">Visual breakdown</div>`;
if (res.chart.type === 'donut') {
const items = res.chart.items;
html += `<div class="donut-wrap">
${donutChart(items, 168)}
<div class="legend">${items.map(i => `
<div class="legend-row">
<span class="sw" style="background:${i.color}"></span>
<span class="nm">${esc(i.label)}</span>
<span class="vl">${fmt(i.value)}</span>
</div>`).join('')}</div>
</div>`;
} else if (res.chart.type === 'line') {
html += lineChart(res.chart.series, res.chart.labels);
} else if (res.chart.type === 'bars') {
html += barRow(res.chart.items);
}
html += `</div>`;
}

if (res.table) {
html += `<div class="chart-block">
<div class="chart-title">${esc(res.table.title||'Details')}</div>
<div class="table-scroll"><table class="data">
<thead><tr>${res.table.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead>
<tbody>${res.table.rows.map(r=>`<tr>${r.map((c,i)=>`<td${i===0?' style="font-weight:500"':''}>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
</table></div>
</div>`;
}

if (res.notes && res.notes.length) {
html += `<div class="notes">${res.notes.map(n =>
`<div class="note">${icon('info',15)}<span>${esc(n)}</span></div>`).join('')}</div>`;
}

return html;
}

function mountTool(slug) {
const t = TOOL_BY_SLUG[slug];
if (!t) return;
const form = document.getElementById('calcForm');
const out = document.getElementById('calcOut');
if (!form || !out) return;

function readValues() {
const v = {};
t.fields.forEach(f => {
const el = document.getElementById('f_' + f.key);
if (!el) return;
if (f.type === 'text') { v[f.key] = el.value; return; }
if (f.type === 'select') {
const raw = el.value;
v[f.key] = isNaN(parseFloat(raw)) ? raw : parseFloat(raw);
return;
}
const n = parseFloat(el.value);
v[f.key] = isNaN(n) ? 0 : n;
});
return v;
}

function run() {
let res;
try {
const vals = readValues();
res = t.compute(vals);
out.innerHTML = renderResult(res);
} catch (err) {
out.innerHTML = `<div class="empty">${icon('alert',36)}<h3>Something went wrong</h3>
<p>Check your inputs and try again.</p></div>`;
console.error(err);
}
}

form.addEventListener('input', run);
form.addEventListener('change', run);

const resetBtn = document.getElementById('resetBtn');
if (resetBtn) resetBtn.addEventListener('click', () => {
t.fields.forEach(f => {
const el = document.getElementById('f_' + f.key);
if (!el) return;
el.value = f.def !== undefined ? f.def : '';
});
run();
toast('Inputs reset to defaults');
});

const printBtn = document.getElementById('printBtn');
if (printBtn) printBtn.addEventListener('click', () => window.print());

run();
}

function mountFaqs() {
document.querySelectorAll('.faq-q').forEach(btn => {
btn.addEventListener('click', () => {
const item = btn.closest('.faq-item');
const panel = item.querySelector('.faq-a');
const open = item.classList.toggle('open');
btn.setAttribute('aria-expanded', String(open));
panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
});
});
}
/* ============================================================
PAGE: CURRENCY CONVERTER
============================================================ */
async function fetchRates(base) {
const res = await fetch('https://open.er-api.com/v6/latest/' + encodeURIComponent(base));
if (!res.ok) throw new Error('HTTP ' + res.status);
const data = await res.json();
if (data.result !== 'success' || !data.rates) throw new Error(data['error-type'] || 'Invalid response');
return { rates: data.rates, updated: data.time_last_update_utc };
}

function renderCurrencyPage() {
return `
<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span><a href="#/tools">Tools</a><span class="sep">/</span><span>Currency Converter</span></div>
<div class="tool-head">
<span class="pill">Currency</span>
<h1>Currency Converter</h1>
<p>Convert between ${Object.keys(CURRENCIES).length} currencies using live mid-market exchange rates. If the rate service is unavailable, the tool says so — it never shows stale data as live.</p>
</div>

<div class="calc-grid">
<div class="panel">
<div class="panel-head"><h2>Convert</h2></div>
<div class="panel-body">
<div class="field">
<label for="convAmount">Amount</label>
<div class="input-wrap"><input type="number" id="convAmount" value="100" min="0" step="any" inputmode="decimal"></div>
</div>
<div class="field-row">
<div class="field">
<label for="convFrom">From</label>
<select id="convFrom">${Object.entries(CURRENCIES).map(([k,c])=>
`<option value="${k}" ${k==='USD'?'selected':''}>${k} — ${esc(c.name)}</option>`).join('')}</select>
</div>
<div class="field">
<label for="convTo">To</label>
<select id="convTo">${Object.entries(CURRENCIES).map(([k,c])=>
`<option value="${k}" ${k==='EUR'?'selected':''}>${k} — ${esc(c.name)}</option>`).join('')}</select>
</div>
</div>
<div class="form-actions">
<button class="btn btn-ghost" id="swapBtn" style="flex:1">${icon('reset',15)} Swap currencies</button>
<button class="btn btn-primary" id="convBtn" style="flex:1">Convert</button>
</div>
</div>
</div>
<div class="sticky-side">
<div class="panel">
<div class="panel-head"><h2>Result</h2></div>
<div class="panel-body" id="convOut">
<div class="empty" style="padding:32px 10px">${icon('globe',36)}<h3>Ready to convert</h3><p>Press Convert to fetch the latest rate.</p></div>
</div>
</div>
${disclaimerBlock()}
</div>
</div>

<div class="prose" style="margin-top:44px">
<h2>How this converter works</h2>
<p>Rates are fetched from a public exchange-rate API using mid-market rates, which sit between the buy and sell price banks use. Mid-market is the fairest reference rate, but it is not the rate you will actually get from a bank or card provider — those typically add a margin of 0.5% to 3%.</p>
<h3>Why the tool refuses to show stale rates</h3>
<p>Financial tools that display out-of-date exchange rates as current are actively misleading. When the rate service cannot be reached, this tool shows an error rather than a cached number presented as live.</p>
</div>
${faqBlock([
['What is a mid-market rate?','The midpoint between buy and sell prices in the global currency market. It is the rate you will see on Google or XE, but not the rate a bank will give you.'],
['How often do rates update?','The underlying provider updates roughly daily. Rates are not refreshed in real time.'],
['Why does my bank give a worse rate?','Banks and card providers add a margin on top of the mid-market rate. That margin is how they make money on conversions.']
])}
</div>`;
}

function mountCurrency() {
const amountEl = document.getElementById('convAmount');
const fromEl = document.getElementById('convFrom');
const toEl = document.getElementById('convTo');
const outEl = document.getElementById('convOut');
const convBtn = document.getElementById('convBtn');
const swapBtn = document.getElementById('swapBtn');
if (!amountEl || !outEl) return;

async function convert() {
const amount = parseFloat(amountEl.value) || 0;
const from = fromEl.value, to = toEl.value;

outEl.innerHTML = `<div class="kpi" style="background:#F8FAFC"><div class="kpi-label">Fetching rate…</div>
<div class="skeleton" style="height:32px;margin-top:10px"></div></div>`;

try {
const data = await fetchRates(from);
const rate = data.rates[to];
if (!rate) throw new Error('Currency not supported by provider');
const converted = amount * rate;
const inverse = rate > 0 ? 1/rate : 0;

outEl.innerHTML = `
<div class="kpis" style="grid-template-columns:1fr">
<div class="kpi primary">
<div class="kpi-label">${esc(amount)} ${from} equals</div>
<div class="kpi-val" style="font-size:clamp(1.5rem,4vw,2rem)">${new Intl.NumberFormat('en-US',{style:'currency',currency:to}).format(converted)}</div>
<div class="kpi-sub">${to} · at mid-market rate</div>
</div>
</div>
<div class="kpis" style="margin-top:12px">
<div class="kpi"><div class="kpi-label">Rate</div>
<div class="kpi-val" style="font-size:1rem">1 ${from} = ${rate.toFixed(4)} ${to}</div></div>
<div class="kpi"><div class="kpi-label">Inverse</div>
<div class="kpi-val" style="font-size:1rem">1 ${to} = ${inverse.toFixed(4)} ${from}</div></div>
</div>
<div class="notes">
<div class="note">${icon('info',15)}<span>Rate source updated: ${esc(data.updated||'unknown')}. Fetched at ${new Date().toLocaleString()}.</span></div>
<div class="note">${icon('info',15)}<span>Mid-market rate. Your bank or card provider will typically apply a margin of 0.5%–3%.</span></div>
</div>`;
} catch (err) {
outEl.innerHTML = `<div class="empty" style="padding:32px 10px">
${icon('alert',36)}
<h3>Could not fetch exchange rate</h3>
<p style="margin-bottom:14px">The rate service is unavailable or blocked. This tool will not display a stale rate as if it were live.</p>
<button class="btn btn-ghost btn-sm" id="retryConv">Try again</button>
</div>`;
const retry = document.getElementById('retryConv');
if (retry) retry.addEventListener('click', convert);
console.warn('Rate fetch failed:', err);
}
}

convBtn.addEventListener('click', convert);
swapBtn.addEventListener('click', () => {
const a = fromEl.value; fromEl.value = toEl.value; toEl.value = a;
convert();
});
amountEl.addEventListener('keydown', e => { if (e.key === 'Enter') convert(); });
}

/* ============================================================
PAGE: ARTICLES
============================================================ */
function renderArticlesPage() {
return `
<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span><span>Guides</span></div>
<div class="tool-head">
<h1>Financial guides</h1>
<p>Plain-language explanations of the concepts behind the calculators. No jargon, no hype, no affiliate pitches.</p>
</div>
<div class="grid grid-3">${ARTICLES.map(articleCard).join('')}</div>
</div>`;
}

function renderArticlePage(slug) {
const a = ARTICLE_BY_SLUG[slug];
if (!a) return renderNotFound();
return `
<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span>
<a href="#/articles">Guides</a><span class="sep">/</span><span>${esc(a.cat)}</span></div>
<div class="split-2">
<article>
<span class="pill">${esc(a.cat)}</span>
<h1 style="font-size:clamp(1.7rem,3.8vw,2.3rem);letter-spacing:-.035em;margin:14px 0 0">${esc(a.title)}</h1>
<div class="article-meta" style="margin:14px 0 26px;font-size:13px">
${icon('clock',14)} ${a.read} min read · MONEYWISE editorial
</div>
<div class="prose">
${a.body.map(s => `<h2>${esc(s.h)}</h2><p>${esc(s.p)}</p>`).join('')}
</div>
${disclaimerBlock()}
</article>
<aside class="sticky-side">
<div class="panel" style="padding:20px">
<h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:14px">Related tools</h3>
<div class="stack">
${TOOLS.slice(0,4).map(t => `<a href="#/tools/${t.slug}" style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
<span class="tool-ico" style="width:30px;height:30px;border-radius:9px;flex-shrink:0">${icon(t.icon,15)}</span>
<span style="font-size:13.5px;font-weight:500">${esc(t.name)}</span></a>`).join('')}
</div>
</div>
<div class="panel" style="padding:20px;margin-top:16px">
<h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:14px">More guides</h3>
<div class="stack">
${ARTICLES.filter(x=>x.slug!==slug).slice(0,3).map(x =>
`<a href="#/articles/${x.slug}" style="font-size:13.5px;color:var(--muted);line-height:1.5;padding:6px 0;border-bottom:1px solid var(--border)">${esc(x.title)}</a>`).join('')}
</div>
</div>
</aside>
</div>
</div>`;
}
/* ============================================================
PAGE: STATIC (About / Contact / Legal / 404)
============================================================ */
function renderAbout() {
return `<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span><span>About</span></div>
<div class="prose">
<h1 style="font-size:clamp(1.8rem,4vw,2.4rem);letter-spacing:-.035em;margin-bottom:20px">About MONEYWISE</h1>
<p>MONEYWISE exists to make everyday financial decisions clearer. Most people are never taught how a loan actually amortises, why compound interest matters, or what a savings rate should look like. The result is a lot of avoidable stress and a lot of avoidable cost.</p>
<p>Every tool here is free, works without registration, and runs entirely in your browser. Nothing you type into a calculator is transmitted anywhere.</p>
<h2>What this is</h2>
<ul>
<li>A set of ${TOOLS.length} calculators built on standard, verifiable financial formulas.</li>
<li>Plain-language guides that explain the reasoning behind the numbers.</li>
<li>An international tool by default — ${Object.keys(CURRENCIES).length} currencies with locale-correct formatting.</li>
</ul>
<h2>What this is not</h2>
<ul>
<li>Not financial, investment, tax or legal advice.</li>
<li>Not personalised — the calculators cannot know your full circumstances.</li>
<li>Not a substitute for a qualified professional when the stakes are high.</li>
</ul>
<h2>Editorial principles</h2>
<p>No fabricated statistics. No invented testimonials. No fake urgency. Where a number depends on assumptions — investment returns, tax rates, overtime multipliers — the tool lets you set the assumption yourself rather than pretending there is one universal answer.</p>
<h2>Technical honesty</h2>
<p>Calculations handle zero, negative and extremely large inputs. Currency formatting is kept strictly separate from arithmetic, so changing your display currency never changes a result. The currency converter shows an error rather than a stale rate, because a confidently wrong number is worse than no number.</p>
</div>
</div>`;
}

/* Replace with your real inbox before launch */
const CONTACT_EMAIL = 'hello@moneywise.example';

function renderContact() {
return `<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span><span>Contact</span></div>
<div class="split-2">
<div class="prose">
<h1 style="font-size:clamp(1.8rem,4vw,2.4rem);letter-spacing:-.035em;margin-bottom:18px">Contact</h1>
<p>Found a bug in a calculator? Disagree with a formula? Have a suggestion for a tool that should exist? We want to hear it — especially the bug reports.</p>
<h2>Reporting a calculation error</h2>
<p>Please include the tool name, the exact inputs you used, the result you got, and the result you expected. Screenshots help.</p>
<div class="formula" style="margin-top:20px">
<code>Email: ${CONTACT_EMAIL}<br>Response time: within 3 working days</code>
</div>
<p style="font-size:13.5px;color:var(--muted)">The form below opens your email app with the message ready to send.</p>
</div>
<div class="panel" style="padding:24px">
<h3 style="font-size:15px;margin-bottom:16px">Send a message</h3>
<div class="field"><label for="cName">Your name</label>
<input type="text" id="cName" placeholder="Jane Smith"></div>
<div class="field"><label for="cEmail">Email address</label>
<input type="email" id="cEmail" placeholder="jane@example.com"></div>
<div class="field"><label for="cMsg">Message</label>
<textarea id="cMsg" rows="5" placeholder="How can we help?" style="resize:vertical"></textarea></div>
<button class="btn btn-primary btn-block" id="contactSend">Send message</button>
<p style="font-size:12px;color:var(--muted-2);margin-top:12px;line-height:1.55">Demo only — nothing is transmitted or stored.</p>
</div>
</div>
</div>`;
}

const LEGAL = {
privacy: { title:'Privacy Policy', body:[
'MONEYWISE is built around a simple principle: your financial data is yours.',
'This build performs every calculation locally in your browser. No values you enter into a calculator are transmitted to a server, logged, or stored. There is no account system in this build, and no personal financial information is collected.',
'The only data persisted on your device is your display-currency preference, stored in localStorage under the key "mw_currency". You can clear it at any time through your browser settings.',
'The currency converter makes a request to a public exchange-rate API. That request includes only the base currency code — never an amount you entered. The provider may log the request as any web service does.',
'This build uses no advertising networks, no third-party analytics, and no tracking pixels. If advertising or analytics are added in a future version, this policy will be updated before they are enabled.',
'If a future version introduces accounts, saved calculations, or email subscriptions, this policy will specify exactly what is collected, why, how long it is retained, and how to delete it.'
]},
terms: { title:'Terms of Service', body:[
'By using MONEYWISE you agree to these terms.',
'The tools and content on this site are provided for educational and informational purposes only. They do not constitute financial, investment, tax, accounting, or legal advice, and no advisor-client relationship is created by your use of the site.',
'Calculations are estimates. They rely on the inputs you provide and on standard formulas that may not reflect every fee, tax rule, regulation, or personal circumstance that applies to you. You are responsible for verifying any figure before acting on it.',
'The site is provided "as is" without warranties of any kind, express or implied, including fitness for a particular purpose or accuracy. To the maximum extent permitted by law, MONEYWISE accepts no liability for any loss arising from use of the site.',
'You may use the calculators freely for personal or commercial decision-making. You may not scrape, resell, or redistribute the site as a service without permission.',
'These terms may be updated. Continued use after an update constitutes acceptance.'
]},
disclaimer: { title:'Financial Disclaimer', body:[
'MONEYWISE provides educational tools and estimates for informational purposes only.',
'Calculations may not account for all fees, taxes, regulations, or personal circumstances. Results are not offers, quotes, or guarantees.',
'This website does not provide individualized financial, investment, tax, or legal advice. Nothing on this site should be interpreted as a recommendation to buy, sell, or hold any financial product.',
'Investment projections assume constant returns for illustration. Real returns vary, can be negative, and are never guaranteed. Past performance does not predict future results.',
'Loan, mortgage, and credit-card calculators do not include every possible fee. Your lender\'s actual figures will differ. Always obtain a formal quote before committing.',
'Please verify important financial decisions with qualified professionals who can consider your full circumstances.'
]},
cookies: { title:'Cookie Policy', body:[
'This build of MONEYWISE does not set advertising or analytics cookies.',
'A single localStorage entry ("mw_currency") stores your chosen display currency so the site remembers it between visits. This is strictly functional and is never shared.',
'No third-party cookies are set by this build. If analytics or advertising are introduced later, this policy will list each cookie, its purpose, and its retention period before they are enabled.'
]}
};

function renderLegal(key) {
const l = LEGAL[key];
if (!l) return renderNotFound();
return `<div class="container page">
<div class="breadcrumbs"><a href="#/">Home</a><span class="sep">/</span><span>Legal</span><span class="sep">/</span><span>${esc(l.title)}</span></div>
<div class="prose">
<h1 style="font-size:clamp(1.7rem,3.8vw,2.2rem);letter-spacing:-.035em;margin-bottom:22px">${esc(l.title)}</h1>
${l.body.map(p => `<p>${esc(p)}</p>`).join('')}
</div>
</div>`;
}

function renderNotFound() {
return `<div class="container page">
<div class="empty" style="padding:100px 20px">
${icon('search',44)}
<h3 style="font-size:1.3rem">Page not found</h3>
<p style="margin-bottom:22px">The page you were looking for does not exist.</p>
<a href="#/" class="btn btn-primary">Back to home</a>
</div>
</div>`;
}

/* ============================================================
TOAST
============================================================ */
function toast(msg) {
const wrap = document.getElementById('toasts');
const el = document.createElement('div');
el.className = 'toast';
el.innerHTML = icon('check', 16) + `<span>${esc(msg)}</span>`;
wrap.appendChild(el);
setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2200);
setTimeout(() => el.remove(), 2600);
}

/* ============================================================
MOUNT HELPERS
============================================================ */
function mountContact() {
const btn = document.getElementById('contactSend');
if (btn) btn.addEventListener('click', () => {
const name = document.getElementById('cName').value.trim();
const email = document.getElementById('cEmail').value.trim();
const msg = document.getElementById('cMsg').value.trim();
if (!name || !email || !msg) { toast('Please fill in all fields'); return; }
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast('Please enter a valid email'); return; }
const subject = encodeURIComponent('MONEYWISE feedback from ' + name);
const body = encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
toast('Opening your email app…');
});
}

function initCurrencyPicker() {
const sel = document.getElementById('currencyPicker');
sel.innerHTML = Object.entries(CURRENCIES)
.map(([k,c]) => `<option value="${k}" ${k===state.currency?'selected':''}>${c.symbol} ${k}</option>`)
.join('');
sel.addEventListener('change', () => {
state.currency = sel.value;
localStorage.setItem('mw_currency', state.currency);
route();
toast('Display currency set to ' + state.currency);
});
}

function initMenu() {
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mobileNav');
btn.addEventListener('click', () => {
const open = nav.classList.toggle('open');
btn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
nav.classList.remove('open');
btn.setAttribute('aria-expanded', 'false');
}));
}

/* ============================================================
ROUTER
============================================================ */
const app = document.getElementById('main');

function setActiveNav(hash) {
document.querySelectorAll('.nav a, .mobile-nav a').forEach(a => {
const href = a.getAttribute('href');
a.classList.toggle('active', href === hash || (href !== '#/' && hash.startsWith(href)));
});
}

function route() {
const path = window.__MW_ROUTE__ || '/';
const params = new URLSearchParams(location.search);
const segs = path.split('/').filter(Boolean);

setActiveNav('#/' + segs.join('/'));

let title = 'MONEYWISE — Your Money. Your Future. Made Clear.';
let desc = document.querySelector('meta[name="description"]').getAttribute('data-default') || document.querySelector('meta[name="description"]').content;

if (segs.length === 0) {
app.innerHTML = renderHome();
mountHome();
} else if (segs[0] === 'tools' && segs.length === 1) {
state.activeCat = params.get('cat') || 'all';
state.searchQuery = params.get('q') || '';
app.innerHTML = renderTools();
mountToolsPage();
title = 'All Financial Tools — MONEYWISE';
} else if (segs[0] === 'tools' && segs[1] === 'currency-converter') {
app.innerHTML = renderCurrencyPage();
mountCurrency();
title = 'Currency Converter — MONEYWISE';
} else if (segs[0] === 'tools' && segs[1]) {
const t = TOOL_BY_SLUG[segs[1]];
if (!t) { app.innerHTML = renderNotFound(); }
else {
app.innerHTML = renderToolPage(segs[1]);
mountTool(segs[1]);
mountFaqs();
title = t.name + ' — MONEYWISE'; desc = t.desc + ' Free, private, no sign-up.';
}
} else if (segs[0] === 'articles' && segs.length === 1) {
app.innerHTML = renderArticlesPage();
title = 'Financial Guides — MONEYWISE';
} else if (segs[0] === 'articles' && segs[1]) {
const a = ARTICLE_BY_SLUG[segs[1]];
app.innerHTML = a ? renderArticlePage(segs[1]) : renderNotFound();
title = a ? a.title + ' — MONEYWISE' : 'Not found — MONEYWISE'; if (a) desc = a.excerpt;
} else if (segs[0] === 'about') {
app.innerHTML = renderAbout(); title = 'About — MONEYWISE';
} else if (segs[0] === 'contact') {
app.innerHTML = renderContact(); mountContact();
title = 'Contact — MONEYWISE';
} else if (segs[0] === 'legal' && segs[1]) {
app.innerHTML = renderLegal(segs[1]);
title = (LEGAL[segs[1]] ? LEGAL[segs[1]].title : 'Not found') + ' — MONEYWISE';
} else {
app.innerHTML = renderNotFound();
}

document.title = title;
const md = document.querySelector('meta[name="description"]');
if (!md.getAttribute('data-default')) md.setAttribute('data-default', md.content);
md.content = desc;
const og = document.querySelector('meta[property="og:title"]'); if (og) og.content = title;
const cl = document.getElementById('canonicalLink');
if (cl && location.protocol.startsWith('http')) cl.href = location.origin + location.pathname;
fixLinks(document);
}

/* ============================================================
BOOT
============================================================ */

/* Turn internal "#/route" links into real page URLs, relative to this page's depth. */
function fixLinks(root) {
  const base = window.__MW_BASE__ || './';
  root.querySelectorAll('a[href^="#/"]').forEach(a => {
    const [path, q] = a.getAttribute('href').slice(1).split('?');
    const clean = path.replace(/^\/+|\/+$/g, '');
    a.setAttribute('href', base + (clean ? clean + '/' : '') + (q ? '?' + q : ''));
  });
}

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('year').textContent = new Date().getFullYear();
initCurrencyPicker();
initMenu();
fixLinks(document);
route();
});

