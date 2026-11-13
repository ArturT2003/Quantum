const APP_KEY = 'quantum-ai-demo-settings-v1';

const localeConfig = {
  ch: { lang: 'fr-CH', currency: 'CHF', symbol: 'CHF', banks: [
    { name: 'UBS', short: 'UBS', color: '#d91821' },
    { name: 'PostFinance', short: 'PF', color: '#f6c900', ink: '#132653' },
    { name: 'Raiffeisen Suisse', short: 'R', color: '#e00916' },
    { name: 'Banque Cantonale · ZKB', short: 'ZKB', color: '#0864d9' }
  ]},
  pt: { lang: 'pt-PT', currency: 'EUR', symbol: '€', banks: [
    { name: 'Caixa Geral', short: 'CGD', color: '#007f49' },
    { name: 'novobanco', short: 'NB', color: '#02a24a' },
    { name: 'Millennium BCP', short: 'M', color: '#be1724' },
    { name: 'Santander', short: 'SAN', color: '#e72528' }
  ]},
  de: { lang: 'de-DE', currency: 'EUR', symbol: '€', banks: [
    { name: 'Deutsche Bank', short: 'DB', color: '#0018a8' },
    { name: 'Commerzbank', short: 'CB', color: '#ffd400', ink: '#1c2855' },
    { name: 'DKB', short: 'DKB', color: '#1d71b8' },
    { name: 'ING', short: 'ING', color: '#f36f21' }
  ]},
  gb: { lang: 'en-GB', currency: 'GBP', symbol: '£', banks: [
    { name: 'Barclays', short: 'B', color: '#00aeef' },
    { name: 'Lloyds Bank', short: 'L', color: '#006a4d' },
    { name: 'NatWest', short: 'NW', color: '#5b2c83' },
    { name: 'HSBC', short: 'HSBC', color: '#db0011' }
  ]},
  it: { lang: 'it-IT', currency: 'EUR', symbol: '€', banks: [
    { name: 'Intesa Sanpaolo', short: 'ISP', color: '#008652' },
    { name: 'UniCredit', short: 'UC', color: '#d71920' },
    { name: 'BPER Banca', short: 'BPER', color: '#009e73' },
    { name: 'Poste Italiane', short: 'PI', color: '#f7c900', ink: '#123b75' }
  ]},
  us: { lang: 'en-US', currency: 'USD', symbol: '$', banks: [
    { name: 'Chase', short: 'C', color: '#117aca' },
    { name: 'Bank of America', short: 'BOA', color: '#e31837' },
    { name: 'Wells Fargo', short: 'WF', color: '#c91920' },
    { name: 'Citibank', short: 'CITI', color: '#056dae' }
  ]}
};

const i18n = {
  fr: {
    heroKicker: 'QUANTUM AI · BOURSE INTELLIGENTE', heroTitle: 'INVESTISSEZ DANS<br>VOTRE AVENIR', heroSubtitle: 'La plateforme d’investissement automatisé par l’IA.', startNow: 'Commencer maintenant', tradable: 'Actifs négociables', seeAll: 'Voir tout', availableBalance: 'Solde disponible', minimumDeposit: 'Dépôt minimum', launchOperation: 'Lancer l’opération', trading: 'Trading', assets: 'Actifs', withdrawal: 'Retrait', recentActivity: 'Activité récente', withdrawFunds: 'Retirer les fonds', processing: 'Traitement de l’opération…', processingSub: 'Connexion à l’algorithme Quantum AI et analyse des marchés en temps réel…', settings: 'Paramètres', regionLanguage: 'Langue et région', startAmount: 'Montant initial', endAmount: 'Montant final', chartSpeed: 'Durée du graphique', visibleBanks: 'Banques visibles', bankIconsHint: 'Activez les banques et remplacez leurs icônes.', currencyBefore: 'Devise avant le montant', save: 'Enregistrer', requestSuccess: 'Demande enregistrée avec succès.', requestReceived: 'Demande de retrait reçue.', now: 'maintenant', transferReceived: 'Virement reçu', credited: 'crédités avec succès sur votre compte bancaire.', demoNote: 'Interface de démonstration — aucune opération financière réelle.', completed: 'Opération terminée'
  },
  pt: {
    heroKicker: 'QUANTUM AI · MERCADO INTELIGENTE', heroTitle: 'INVISTA NO SEU<br>FUTURO', heroSubtitle: 'A plataforma de investimento automatizado por IA.', startNow: 'Começar agora', tradable: 'Ativos negociáveis', seeAll: 'Ver tudo', availableBalance: 'Saldo disponível', minimumDeposit: 'Depósito mínimo', launchOperation: 'Iniciar operação', trading: 'Trading', assets: 'Ativos', withdrawal: 'Levantar', recentActivity: 'Atividade recente', withdrawFunds: 'Levantar fundos', processing: 'A processar a operação…', processingSub: 'Ligação ao algoritmo Quantum AI e análise dos mercados em tempo real…', settings: 'Definições', regionLanguage: 'Idioma e região', startAmount: 'Montante inicial', endAmount: 'Montante final', chartSpeed: 'Duração do gráfico', visibleBanks: 'Bancos visíveis', bankIconsHint: 'Ative bancos e substitua os seus ícones.', currencyBefore: 'Moeda antes do valor', save: 'Guardar', requestSuccess: 'Pedido registado com sucesso.', requestReceived: 'Pedido de levantamento recebido.', now: 'agora', transferReceived: 'Transferência recebida', credited: 'creditados com sucesso na sua conta bancária.', demoNote: 'Interface de demonstração — não realiza operações financeiras reais.', completed: 'Operação concluída'
  },
  de: {
    heroKicker: 'QUANTUM AI · INTELLIGENTER HANDEL', heroTitle: 'INVESTIEREN SIE IN<br>IHRE ZUKUNFT', heroSubtitle: 'Die offizielle KI-gestützte Investmentplattform.', startNow: 'Jetzt starten', tradable: 'Handelbare Werte', seeAll: 'Alle anzeigen', availableBalance: 'Verfügbares Guthaben', minimumDeposit: 'Mindesteinzahlung', launchOperation: 'Handel starten', trading: 'Trading', assets: 'Werte', withdrawal: 'Auszahlen', recentActivity: 'Letzte Aktivitäten', withdrawFunds: 'Geld auszahlen', processing: 'Vorgang wird verarbeitet…', processingSub: 'Verbindung mit Quantum AI und Echtzeitanalyse der Märkte…', settings: 'Einstellungen', regionLanguage: 'Sprache und Region', startAmount: 'Startbetrag', endAmount: 'Endbetrag', chartSpeed: 'Chart-Dauer', visibleBanks: 'Sichtbare Banken', bankIconsHint: 'Banken aktivieren und eigene Symbole hochladen.', currencyBefore: 'Währung vor dem Betrag', save: 'Speichern', requestSuccess: 'Anfrage erfolgreich gespeichert.', requestReceived: 'Auszahlungsanfrage erhalten.', now: 'jetzt', transferReceived: 'Überweisung erhalten', credited: 'wurden Ihrem Bankkonto erfolgreich gutgeschrieben.', demoNote: 'Demo-Oberfläche — keine echten Finanztransaktionen.', completed: 'Handel abgeschlossen'
  },
  en: {
    heroKicker: 'QUANTUM AI · SMART TRADING', heroTitle: 'INVEST IN<br>YOUR FUTURE', heroSubtitle: 'The official AI-powered automated investment platform.', startNow: 'Get started', tradable: 'Tradable assets', seeAll: 'See all', availableBalance: 'Available balance', minimumDeposit: 'Minimum deposit', launchOperation: 'Launch operation', trading: 'Trading', assets: 'Assets', withdrawal: 'Withdraw', recentActivity: 'Recent activity', withdrawFunds: 'Withdraw funds', processing: 'Processing operation…', processingSub: 'Connecting to Quantum AI and analysing markets in real time…', settings: 'Settings', regionLanguage: 'Language and region', startAmount: 'Starting amount', endAmount: 'Final amount', chartSpeed: 'Chart duration', visibleBanks: 'Visible banks', bankIconsHint: 'Enable banks and upload replacement icons.', currencyBefore: 'Currency before amount', save: 'Save settings', requestSuccess: 'Request registered successfully.', requestReceived: 'Withdrawal request received.', now: 'now', transferReceived: 'Transfer received', credited: 'successfully credited to your bank account.', demoNote: 'Demonstration interface — no real financial transactions.', completed: 'Operation completed'
  },
  it: {
    heroKicker: 'QUANTUM AI · TRADING INTELLIGENTE', heroTitle: 'INVESTI NEL<br>TUO FUTURO', heroSubtitle: 'La piattaforma di investimento automatizzata dall’IA.', startNow: 'Inizia ora', tradable: 'Asset negoziabili', seeAll: 'Vedi tutto', availableBalance: 'Saldo disponibile', minimumDeposit: 'Deposito minimo', launchOperation: 'Avvia operazione', trading: 'Trading', assets: 'Asset', withdrawal: 'Prelievo', recentActivity: 'Attività recente', withdrawFunds: 'Preleva fondi', processing: 'Elaborazione operazione…', processingSub: 'Connessione a Quantum AI e analisi dei mercati in tempo reale…', settings: 'Impostazioni', regionLanguage: 'Lingua e regione', startAmount: 'Importo iniziale', endAmount: 'Importo finale', chartSpeed: 'Durata del grafico', visibleBanks: 'Banche visibili', bankIconsHint: 'Attiva le banche e carica icone personalizzate.', currencyBefore: 'Valuta prima dell’importo', save: 'Salva', requestSuccess: 'Richiesta registrata con successo.', requestReceived: 'Richiesta di prelievo ricevuta.', now: 'adesso', transferReceived: 'Bonifico ricevuto', credited: 'accreditati con successo sul tuo conto bancario.', demoNote: 'Interfaccia dimostrativa — nessuna operazione finanziaria reale.', completed: 'Operazione completata'
  }
};

const languageForLocale = { ch: 'fr', pt: 'pt', de: 'de', gb: 'en', it: 'it', us: 'en' };
const defaultSettings = { locale: 'ch', start: 2150, end: 2500, duration: 8, currencyBefore: true, bankPrefs: {} };
let settings = loadSettings();
let draftBankPrefs = JSON.parse(JSON.stringify(settings.bankPrefs || {}));
let currentView = 'splash';
let selectedBank = 0;
let chartData = [];
let chartProgress = 0;
let animationFrame = null;
let notificationTimer = null;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function loadSettings() {
  try { return { ...defaultSettings, ...JSON.parse(localStorage.getItem(APP_KEY)) }; }
  catch { return { ...defaultSettings }; }
}

function getCopy() { return i18n[languageForLocale[settings.locale]] || i18n.en; }
function getLocale() { return localeConfig[settings.locale] || localeConfig.ch; }

function groupedNumber(value) {
  const rounded = Math.round(Number(value) || 0);
  return new Intl.NumberFormat(getLocale().lang, { maximumFractionDigits: 0 }).format(rounded).replace(/[\s\u00a0\u202f]/g, '’');
}

function money(value, signed = false) {
  const cfg = getLocale();
  const n = Math.round(Number(value) || 0);
  const sign = signed && n > 0 ? '+' : n < 0 ? '−' : '';
  const amount = groupedNumber(Math.abs(n));
  return settings.currencyBefore ? `${sign}${cfg.symbol} ${amount}` : `${sign}${amount} ${cfg.symbol}`;
}

function investmentAmount() { return Math.max(50, Math.min(200, Math.round(settings.start * .1 / 50) * 50)); }

function isSafeIcon(value) { return typeof value === 'string' && /^data:image\/(png|jpeg|webp);base64,/i.test(value); }

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function getBankPreference(localeKey, index, source = settings.bankPrefs) {
  return source?.[localeKey]?.[index] || { visible: true, icon: null, name: null };
}

function getVisibleBanks(localeKey = settings.locale) {
  const cfg = localeConfig[localeKey] || localeConfig.ch;
  const banks = cfg.banks.map((bank, index) => {
    const pref = getBankPreference(localeKey, index);
    return { ...bank, name: String(pref.name || '').trim() || bank.name, sourceIndex: index, icon: isSafeIcon(pref.icon) ? pref.icon : null, visible: pref.visible !== false };
  });
  const visible = banks.filter(bank => bank.visible);
  return visible.length ? visible : [banks[0]];
}

function bankLogoMarkup(bank) {
  return bank.icon ? `<img src="${bank.icon}" alt="${bank.name}" />` : bank.short;
}

function applyBankLogo(element, bank) {
  element.innerHTML = bankLogoMarkup(bank);
  element.style.background = bank.icon ? '#fff' : bank.color;
  element.style.color = bank.ink || '#fff';
}

function applySettingsToUI() {
  const copy = getCopy();
  const cfg = getLocale();
  document.documentElement.lang = cfg.lang;
  qsa('[data-i18n]').forEach(el => {
    const value = copy[el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
  qsa('[data-current-balance]').forEach(el => el.textContent = money(settings.start));
  qsa('[data-final-balance]').forEach(el => el.textContent = money(settings.end));
  qsa('[data-live-amount]').forEach(el => el.textContent = money(settings.start));
  qsa('[data-investment]').forEach(el => el.textContent = money(investmentAmount()));
  qsa('[data-profit]').forEach(el => el.textContent = money(settings.end - settings.start, true));
  qsa('[data-chart-goal]').forEach(el => el.textContent = money(settings.end));
  qsa('[data-currency]').forEach(el => el.textContent = cfg.symbol);
  qsa('[data-activity-value]').forEach(el => el.textContent = money(Number(el.dataset.activityValue), true));
  qs('#withdrawAmount').value = Math.max(0, settings.end - settings.start);
  qs('#localeSelect').value = settings.locale;
  qs('#startAmount').value = settings.start;
  qs('#endAmount').value = settings.end;
  qs('#tradeDuration').value = settings.duration;
  qs('#durationValue').textContent = `${settings.duration} s`;
  qs('#currencyBefore').checked = settings.currencyBefore;
  qs('#currencyPreview').textContent = money(settings.end);
  renderBanks();
  renderNavs();
  drawChart(0);
}

function showView(name) {
  qsa('.view').forEach(view => view.classList.toggle('active', view.dataset.view === name));
  currentView = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'trade') resetTrade();
  if (name === 'withdrawal') {
    qs('#withdrawSuccess').classList.remove('show');
    qs('#withdrawBtn').disabled = false;
  }
}

function renderNavs() {
  const copy = getCopy();
  const items = [
    { key: 'home', icon: '⌂', label: languageForLocale[settings.locale] === 'fr' ? 'Accueil' : 'Home', view: 'dashboard' },
    { key: 'assets', icon: '▣', label: copy.assets, view: 'market' },
    { key: 'trade', icon: '⌁', label: copy.trading, view: 'trade' },
    { key: 'withdraw', icon: '⇄', label: copy.withdrawal, view: 'withdrawal' },
    { key: 'profile', icon: '♙', label: languageForLocale[settings.locale] === 'fr' ? 'Profil' : 'Profile', settings: true }
  ];
  qsa('.bottom-nav').forEach(nav => {
    nav.innerHTML = items.map(item => `<button type="button" class="${nav.dataset.active === item.key ? 'active' : ''}" data-nav="${item.key}"><i>${item.icon}</i><span>${item.label}</span></button>`).join('');
    qsa('[data-nav]', nav).forEach((btn, index) => btn.addEventListener('click', () => items[index].settings ? openSettings() : showView(items[index].view)));
  });
}

function renderBanks() {
  const banks = getVisibleBanks();
  selectedBank = Math.min(selectedBank, banks.length - 1);
  qs('#bankGrid').innerHTML = banks.map((bank, index) => `
    <button type="button" class="bank-option ${index === selectedBank ? 'selected' : ''}" data-bank-index="${index}">
      <span class="bank-logo" style="--bank-color:${bank.icon ? '#fff' : bank.color};color:${bank.ink || '#fff'}">${bankLogoMarkup(bank)}</span>
      <span>${bank.name}</span>
    </button>`).join('');
  qsa('[data-bank-index]').forEach(btn => btn.addEventListener('click', () => {
    selectedBank = Number(btn.dataset.bankIndex);
    renderBanks();
  }));
}

function renderBankSettings(localeKey = qs('#localeSelect').value) {
  const cfg = localeConfig[localeKey] || localeConfig.ch;
  if (!draftBankPrefs[localeKey]) draftBankPrefs[localeKey] = {};
  qs('#bankSettingsList').innerHTML = cfg.banks.map((bank, index) => {
    const pref = getBankPreference(localeKey, index, draftBankPrefs);
    const icon = isSafeIcon(pref.icon) ? pref.icon : null;
    const customName = String(pref.name || '').trim();
    return `<div class="bank-setting-row">
      <span class="bank-setting-preview" style="--bank-color:${icon ? '#fff' : bank.color};color:${bank.ink || '#fff'}">${icon ? `<img src="${icon}" alt="${bank.name}" />` : bank.short}</span>
      <input class="bank-setting-name" type="text" data-bank-name="${index}" value="${escapeHTML(customName || bank.name)}" placeholder="${escapeHTML(bank.name)}" maxlength="36" aria-label="Bank name" />
      <span class="bank-setting-actions">
        <input type="checkbox" data-bank-visible="${index}" ${pref.visible !== false ? 'checked' : ''} aria-label="${bank.name}" />
        <label class="upload-bank-icon" title="Upload icon">＋<input type="file" accept="image/png,image/jpeg,image/webp" data-bank-icon="${index}" /></label>
      </span>
    </div>`;
  }).join('');
  qsa('[data-bank-name]', qs('#bankSettingsList')).forEach(input => input.addEventListener('input', () => {
    const index = Number(input.dataset.bankName);
    const current = getBankPreference(localeKey, index, draftBankPrefs);
    draftBankPrefs[localeKey][index] = { ...current, name: input.value.trim() };
  }));
  qsa('[data-bank-visible]', qs('#bankSettingsList')).forEach(input => input.addEventListener('change', () => {
    const index = Number(input.dataset.bankVisible);
    const current = getBankPreference(localeKey, index, draftBankPrefs);
    draftBankPrefs[localeKey][index] = { ...current, visible: input.checked };
  }));
  qsa('[data-bank-icon]', qs('#bankSettingsList')).forEach(input => input.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file) return;
    const index = Number(input.dataset.bankIcon);
    const icon = await resizeBankIcon(file);
    if (!icon) return;
    const current = getBankPreference(localeKey, index, draftBankPrefs);
    draftBankPrefs[localeKey][index] = { ...current, icon };
    renderBankSettings(localeKey);
  }));
}

function resizeBankIcon(file) {
  if (!file.type.startsWith('image/')) return Promise.resolve(null);
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onerror = () => resolve(null);
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => resolve(null);
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 160; canvas.height = 160;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 160, 160);
        const scale = Math.min(140 / image.width, 140 / image.height);
        const width = image.width * scale, height = image.height * scale;
        ctx.drawImage(image, (160 - width) / 2, (160 - height) / 2, width, height);
        resolve(canvas.toDataURL('image/png'));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function openSettings() {
  draftBankPrefs = JSON.parse(JSON.stringify(settings.bankPrefs || {}));
  qs('#localeSelect').value = settings.locale;
  qs('#startAmount').value = settings.start;
  qs('#endAmount').value = settings.end;
  qs('#tradeDuration').value = settings.duration;
  qs('#durationValue').textContent = `${settings.duration} s`;
  qs('#currencyBefore').checked = settings.currencyBefore;
  renderBankSettings(settings.locale);
  qs('#settings').classList.add('show');
}
function closeSettings() { qs('#settings').classList.remove('show'); }

function saveSettings() {
  const start = Math.max(100, Number(qs('#startAmount').value) || defaultSettings.start);
  const requestedEnd = Number(qs('#endAmount').value) || defaultSettings.end;
  const locale = qs('#localeSelect').value;
  if (!draftBankPrefs[locale]) draftBankPrefs[locale] = {};
  const localeBanks = localeConfig[locale].banks;
  const hasVisible = localeBanks.some((_, index) => getBankPreference(locale, index, draftBankPrefs).visible !== false);
  if (!hasVisible) draftBankPrefs[locale][0] = { ...getBankPreference(locale, 0, draftBankPrefs), visible: true };
  settings = {
    locale,
    start,
    end: Math.max(start + 50, requestedEnd),
    duration: Math.max(5, Math.min(40, Number(qs('#tradeDuration').value) || defaultSettings.duration)),
    currencyBefore: qs('#currencyBefore').checked,
    bankPrefs: draftBankPrefs
  };
  localStorage.setItem(APP_KEY, JSON.stringify(settings));
  selectedBank = 0;
  applySettingsToUI();
  closeSettings();
}

function prepareTrade() {
  const processing = qs('#processing');
  processing.classList.add('show');
  setTimeout(() => {
    processing.classList.remove('show');
    showView('trade');
  }, 2250);
}

function generateChart() {
  const count = 48;
  const start = settings.start;
  const end = settings.end;
  const range = Math.max(Math.abs(end - start), start * .08);
  const points = [];
  let previous = start;
  let randomWalk = 0;
  for (let i = 0; i < count; i += 1) {
    const p = i / (count - 1);
    const trend = start + (end - start) * (.24 * p + .76 * p * p);
    randomWalk = (randomWalk + (Math.random() - .5) * range * .07) * .72;
    const wave = Math.sin(p * Math.PI * 7.2) * range * .12 * (1 - p * .28);
    const secondaryWave = Math.sin(p * Math.PI * 15.5 + .7) * range * .035 * (1 - p);
    let close = trend + wave + secondaryWave + randomWalk * (1 - p);
    close = Math.max(start - range * .13, Math.min(end + range * .08, close));
    if (i === 0) close = start;
    if (i === count - 1) close = end;
    const open = i === 0 ? start : previous;
    const wick = range * (.022 + Math.random() * .04);
    points.push({ open, close, high: Math.max(open, close) + wick, low: Math.min(open, close) - wick, volume: .25 + Math.random() * .72 });
    previous = close;
  }
  return points;
}

function resetTrade() {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  chartData = generateChart();
  chartProgress = 0;
  qs('#liveAmount').textContent = money(settings.start);
  qs('#liveAmount').style.color = '#066b2a';
  qs('#tradeStatus').textContent = getCopy().launchOperation;
  qs('#tradeResult').classList.remove('show');
  qs('#startTrade').style.display = 'flex';
  qs('#startTrade').disabled = false;
  drawChart(0);
}

function drawChart(progress) {
  const canvas = qs('#tradeChart');
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(300, rect.width || 400);
  const height = Math.max(220, rect.height || 270);
  if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
    canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  const left = 8, right = 8, top = 10, bottom = 44;
  const plotW = width - left - right, plotH = height - top - bottom;
  ctx.strokeStyle = '#e2e6f1'; ctx.lineWidth = 1; ctx.setLineDash([4, 5]);
  for (let i = 0; i < 5; i++) { const y = top + (plotH / 4) * i; ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(width - right, y); ctx.stroke(); }
  for (let i = 0; i < 5; i++) { const x = left + (plotW / 4) * i; ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, top + plotH); ctx.stroke(); }
  ctx.setLineDash([]);
  const data = chartData.length ? chartData : generateChart();
  const values = data.flatMap(d => [d.low, d.high]);
  const min = Math.min(...values), max = Math.max(...values); const padding = (max - min) * .1 || 1;
  const yFor = value => top + (max + padding - value) / (max - min + padding * 2) * plotH;
  const visible = Math.max(1, Math.ceil(progress * data.length));
  const step = plotW / data.length; const candleW = Math.max(3, step * .52);
  for (let i = 0; i < visible; i++) {
    const d = data[i]; const x = left + step * i + step / 2; const up = d.close >= d.open; const color = up ? '#13ae59' : '#ff3648';
    ctx.globalAlpha = .22; ctx.fillStyle = color; const volumeH = 26 * d.volume; ctx.fillRect(x - candleW / 2, top + plotH + bottom - volumeH - 4, candleW, volumeH);
    ctx.globalAlpha = 1; ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, yFor(d.high)); ctx.lineTo(x, yFor(d.low)); ctx.stroke();
    const bodyTop = yFor(Math.max(d.open, d.close)); const bodyBottom = yFor(Math.min(d.open, d.close)); ctx.fillStyle = color; ctx.fillRect(x - candleW / 2, bodyTop, candleW, Math.max(2, bodyBottom - bodyTop));
  }
  if (visible > 0) {
    ctx.strokeStyle = '#1545df'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i < visible; i++) { const x = left + step * i + step / 2; const y = yFor(data[i].close); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke();
    const last = data[visible - 1]; const lx = left + step * (visible - 1) + step / 2; const ly = yFor(last.close); ctx.fillStyle = progress >= 1 ? '#12b45a' : '#1747e8'; ctx.beginPath(); ctx.arc(lx, ly, 5, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
  }
}

function startTrade() {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  chartData = generateChart();
  const startTime = performance.now();
  const duration = Math.max(5, Math.min(40, settings.duration)) * 1000;
  qs('#startTrade').disabled = true;
  qs('#tradeStatus').textContent = getCopy().processing;
  const tick = now => {
    const raw = Math.min(1, (now - startTime) / duration);
    chartProgress = raw;
    const pointPosition = raw * (chartData.length - 1);
    const pointIndex = Math.min(chartData.length - 1, Math.floor(pointPosition));
    const nextIndex = Math.min(chartData.length - 1, pointIndex + 1);
    const pointMix = pointPosition - pointIndex;
    const value = raw >= 1 ? settings.end : chartData[pointIndex].close * (1 - pointMix) + chartData[nextIndex].close * pointMix;
    qs('#liveAmount').textContent = money(value);
    drawChart(raw);
    if (raw < 1) animationFrame = requestAnimationFrame(tick);
    else finishTrade();
  };
  animationFrame = requestAnimationFrame(tick);
}

function finishTrade() {
  qs('#tradeStatus').textContent = getCopy().completed;
  qs('#liveAmount').textContent = money(settings.end - settings.start, true);
  qs('#liveAmount').style.color = '#087a38';
  qs('#startTrade').style.display = 'none';
  qs('#tradeResult').classList.add('show');
  drawChart(1);
}

function submitWithdrawal() {
  const bank = getVisibleBanks()[selectedBank];
  const requested = Math.max(1, Math.min(settings.end, Number(qs('#withdrawAmount').value) || (settings.end - settings.start)));
  qs('#withdrawBtn').disabled = true;
  applyBankLogo(qs('#successBankLogo'), bank);
  qs('#withdrawSuccess').classList.add('show');
  setTimeout(() => showNotification(bank, requested), 650);
}

function showNotification(bank, amount) {
  const note = qs('#notification');
  applyBankLogo(qs('#notificationLogo'), bank);
  qs('#notificationBank').textContent = bank.name;
  qs('#notificationText').textContent = `${money(amount, true)} ${getCopy().credited}`;
  note.classList.remove('show');
  void note.offsetWidth;
  note.classList.add('show');
  clearTimeout(notificationTimer);
  notificationTimer = setTimeout(() => note.classList.remove('show'), 12000);
}

function updateClock() {
  const now = new Date();
  qs('#clock').textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
}

qsa('[data-go]').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.go)));
qsa('[data-open-settings]').forEach(btn => btn.addEventListener('click', openSettings));
qsa('[data-close-settings]').forEach(btn => btn.addEventListener('click', closeSettings));
qs('#saveSettings').addEventListener('click', saveSettings);
qs('#prepareTrade').addEventListener('click', prepareTrade);
qs('#startTrade').addEventListener('click', startTrade);
qs('#withdrawBtn').addEventListener('click', submitWithdrawal);
qs('#localeSelect').addEventListener('change', event => {
  const previewSettings = { ...settings, locale: event.target.value, currencyBefore: qs('#currencyBefore').checked };
  const old = settings; settings = previewSettings; qs('#currencyPreview').textContent = money(qs('#endAmount').value); settings = old;
  renderBankSettings(event.target.value);
});
qs('#tradeDuration').addEventListener('input', event => { qs('#durationValue').textContent = `${event.target.value} s`; });
qs('#currencyBefore').addEventListener('change', event => {
  const old = settings; settings = { ...settings, locale: qs('#localeSelect').value, currencyBefore: event.target.checked }; qs('#currencyPreview').textContent = money(qs('#endAmount').value); settings = old;
});
qs('#endAmount').addEventListener('input', () => {
  const old = settings; settings = { ...settings, locale: qs('#localeSelect').value, currencyBefore: qs('#currencyBefore').checked }; qs('#currencyPreview').textContent = money(qs('#endAmount').value); settings = old;
});
window.addEventListener('resize', () => drawChart(chartProgress));

applySettingsToUI();
updateClock();
setInterval(updateClock, 30000);
setTimeout(() => { if (currentView === 'splash') showView('market'); }, 1850);
