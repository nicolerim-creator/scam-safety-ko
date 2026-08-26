/* Scam Safety PWA – 한국어 */

const lessons = {
  phone: {
    title: "전화 사기",
    accent: "teal",
    steps: [
      { type: "mock-call", text: "모르는 번호와 자동녹음 전화.", sub: "번호를 모르면 받지 않아도 됩니다. 많은 사기 전화는 자동녹음입니다." },
      { type: "icon", icon: "🚫", anim: "", text: "음성메시지로 남겨 두어도 됩니다.", sub: "사기꾼은 급한 메시지를 남기기도 합니다. 음성메시지도 가짜일 수 있습니다." },
      { type: "mock-voicemail", text: "가짜 음성메시지는 이런 식입니다:", sub: "진짜 정부 기관이나 은행은 즉시 납부를 요구하는 메시지를 거의 남기지 않습니다." },
      { type: "icon", icon: "😰", anim: "shake", text: "공포와 긴박감을 만듭니다.", sub: "체포, 소송, 혜택 중단 위협은 전형적인 사기 수법입니다." },
      { type: "mock-payment", text: "상품권, 암호화폐, 송금을 요구합니다.", sub: "진짜 기관이나 회사는 이런 방식으로 결제를 요구하지 않습니다." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "이렇게 하세요: 모르는 번호는 받지 마세요.", sub: "중요할 수 있다면 끊고(또는 무시하고), 이미 알고 있는 번호로 다시 전화하세요 — 고지서, 명세서, 회사 공식 웹사이트. 사기 전화·문자·음성메시지에 나온 번호로는 전화하지 마세요." }
    ]
  },
  texts: {
    title: "가짜 문자",
    accent: "coral",
    steps: [
      { type: "mock-sms-package", text: "택배 관련 문자가 매우 흔합니다.", sub: "사기꾼이 우체국·택배회사처럼 보이며 링크를 누르거나 소액을 내라고 합니다." },
      { type: "mock-sms-bank", text: "가짜 은행·계정 알림.", sub: "의심스러운 로그인이나 계정 잠금을 이유로 링크로 “확인”하라고 합니다." },
      { type: "mock-sms-toll", text: "미납 통행료·교통 요금 문자.", sub: "고속도로 통행료나 범칙금을 당장 온라인으로 내야 한다고 합니다." },
      { type: "icon", icon: "⚠️", anim: "", text: "문자에서 볼 위험 신호:", sub: "예상치 못한 메시지 · 링크 클릭 요구 · 서두름·위협 · 결제나 개인정보 요구." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "이렇게 하세요: 링크를 누르지 마세요.", sub: "문자를 삭제하세요. 진짜일 수 있다면 공식 앱을 열거나 회사 웹사이트를 직접 입력하세요. 링크를 쓰지 말고, 문자에 나온 번호로도 전화하지 마세요." }
    ]
  },
  emails: {
    title: "가짜 이메일",
    accent: "blue",
    steps: [
      { type: "mock-email", text: "거의 진짜처럼 보이는 메일.", sub: "사기꾼이 로고를 복사하고 비슷한 주소(예: paypa1.com)를 씁니다." },
      { type: "icon", icon: "🔗", anim: "shake", text: "목표는 클릭을 유도하는 것입니다.", sub: "링크는 비밀번호·계좌 정보를 훔치는 가짜 사이트로 연결됩니다." },
      { type: "icon", icon: "⚠️", anim: "", text: "이메일 위험 신호:", sub: "갑작스러운 “계정 문제” · 일반적 인사 · 서두름 · 이상한 발신 주소 · 로그인 링크 요구." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "이렇게 하세요: 클릭하지 마세요.", sub: "브라우저에서 공식 주소를 직접 입력하거나 회사 공식 앱을 사용하세요." },
      { type: "icon", icon: "✅", anim: "", text: "확신이 없으면 회사에 전화하세요 — 올바른 방법으로.", sub: "공식 번호는 고지서·명세서·회사 진짜 웹사이트에서 찾으세요. 수상한 메일·문자에 나온 번호로는 절대 전화하지 마세요." }
    ]
  },
  toll: {
    title: "통행료·교통 요금 사기",
    accent: "orange",
    steps: [
      { type: "mock-sms-toll", text: "“미납 통행료가 있습니다.”", sub: "이런 문자(또는 전화)는 고속도로·다리 통행료를 당장 온라인으로 내라고 합니다." },
      { type: "icon", icon: "🚗", anim: "", text: "왜 속아 넘어갈까: 많은 사람이 유료 도로를 이용합니다.", sub: "그럴듯한 금액과 짧은 기한으로 불안을 만듭니다." },
      { type: "icon", icon: "🔗", anim: "shake", text: "링크가 함정입니다.", sub: "카드 번호나 개인정보를 빼가는 가짜 사이트로 연결됩니다. 진짜 통행료 기관은 보통 이런 결제 링크를 보내지 않습니다." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "이렇게 하세요: 문자·전화를 무시하세요.", sub: "실제로 유료 도로를 쓴다면 공식 통행료 사이트·앱에 직접 로그인하거나, 본인 고지서에 적힌 번호로만 전화하세요 — 문자에 나온 번호는 쓰지 마세요." },
      { type: "icon", icon: "✅", anim: "", text: "기억하세요:", sub: "결제 링크가 있는 미납 통행료·주차·범칙금 문자는 거의 항상 사기입니다." }
    ]
  },
  family: {
    title: "가족 긴급 상황 사기",
    accent: "orange",
    steps: [
      { type: "mock-text", text: "밤늦게 “손주”에게서 온 문자나 전화.", sub: "사기꾼이 급박함을 만들고 다른 가족에게는 말하지 말라고 합니다." },
      { type: "icon", icon: "🔊", anim: "shake", text: "AI로 목소리를 흉내 내기도 합니다.", sub: "짧은 영상이나 음성만으로도 거의 진짜 같은 가짜 목소리를 만들 수 있습니다." },
      { type: "icon", icon: "🤫", anim: "", text: "비밀과 속도를 요구합니다.", sub: "“아무에게도 말하지 마세요. 지금 바로 송금하거나 상품권을 사 주세요.”" },
      { type: "icon", icon: "🔑", anim: "gentleFloat", text: "가족 암호로 지키세요.", sub: "진짜 가족만 아는 비밀 단어를 정하세요. 상대가 말하지 못하면 — 끊으세요." },
      { type: "icon", icon: "✅", anim: "", text: "먼저 다른 친척에게 전화하세요.", sub: "이미 있는 번호로 확인하세요. 돈을 보내기 전에 가족이 안전한지 확인하세요." }
    ]
  },
  tech: {
    title: "기술 지원 사기",
    accent: "blue",
    steps: [
      { type: "mock-popup", text: "화면에 무서운 경고가 가득 찹니다.", sub: "가짜 지원 번호로 전화하게 만들려고 설계된 팝업입니다." },
      { type: "icon", icon: "☎️", anim: "shake", text: "전화하면 친절해 보입니다.", sub: "문제를 “고친다”며 원격 접속을 요구하고 결제를 요청할 수 있습니다." },
      { type: "icon", icon: "🚫", anim: "", text: "진짜 회사는 이런 팝업을 보내지 않습니다.", sub: "마이크로소프트, 애플, 통신사는 바이러스를 이유로 먼저 전화하지 않습니다." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "이렇게 하세요: 창을 닫거나 재시작하세요.", sub: "화면의 번호로 전화하지 마세요. 누구에게도 컴퓨터 원격 제어를 주지 마세요." },
      { type: "icon", icon: "✅", anim: "", text: "걱정되면 믿을 수 있는 수리점에 가져가세요.", sub: "또는 가족에게 도움을 요청하세요. 먼저 연락해 온 낯선 사람에게 돈을 내거나 비밀번호를 알려 주지 마세요." }
    ]
  },
  romance: {
    title: "연애·온라인 친구 사기",
    accent: "purple",
    steps: [
      { type: "mock-chat", text: "온라인에서 완벽한 사람이 나타납니다.", sub: "자주 연락하고 사진을 공유하다 결국 돈을 요구합니다." },
      { type: "icon", icon: "✈️", anim: "", text: "흔한 이야기: 해외 체류, 의료 응급, 투자 기회.", sub: "사랑한다면서 “이번만” 도와 달라고 할 수 있습니다." },
      { type: "icon", icon: "💰", anim: "shake", text: "직접 만나지 않고 계속 돈을 요구합니다.", sub: "온라인으로만 아는 사람에게 상품권·암호화폐·송금 요청은 큰 위험 신호입니다." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "지키세요: 실제로 만나지 않은 사람에게 돈을 보내지 마세요.", sub: "돈이 오가기 전에 믿을 수 있는 친구·가족과 그 관계를 이야기하세요." },
      { type: "icon", icon: "✅", anim: "", text: "너무 좋으면 대부분 가짜입니다.", sub: "진짜 관계는 금전 위기로 시작하지 않습니다." }
    ]
  },
  prize: {
    title: "당첨·복권 사기",
    accent: "gold",
    steps: [
      { type: "mock-prize", text: "“축하합니다! 큰 상금을 받으셨습니다!”", sub: "응모한 적도 없는데, 받으려면 세금·수수료를 먼저 내라고 합니다." },
      { type: "icon", icon: "🚫", anim: "shake", text: "진짜 복권은 당첨금을 받으려고 먼저 돈을 내지 않습니다.", sub: "특히 상품권·송금·암호화폐로는 절대 아닙니다." },
      { type: "icon", icon: "🛡️", anim: "gentleFloat", text: "이렇게 하세요: 무시하고 삭제하세요.", sub: "번호로 전화하지 마세요. 돈을 보내지 마세요. 정상 당첨은 이렇게 진행되지 않습니다." },
      { type: "icon", icon: "✅", anim: "", text: "황금 규칙:", sub: "돈을 받아야 하는데 먼저 돈을 내야 한다면 — 거의 항상 사기입니다." }
    ]
  }
};

const quizQuestions = [
  {
    q: "모르는 번호로 전화가 왔습니다. 가장 안전한 첫 단계는?",
    icon: "icons/lesson-phone.png",
    visual: "call",
    options: [
      "받아서 무슨 일인지 들어 본다",
      "음성메시지로 두거나 무시한다. 필요하면 고지서·공식 사이트의 번호로만 다시 전화한다 — 그 전화에 나온 번호는 쓰지 않는다",
      "부재중 목록의 그 번호로 바로 다시 전화한다"
    ],
    correct: 1,
    feedback: "맞습니다. 모르는 번호는 받지 않아도 됩니다. 많은 사기는 자동녹음이나 가짜 발신 번호로 시작합니다."
  },
  {
    q: "문자에 고속도로 미납 통행료가 있다며 24시간 안에 링크로 내라고 합니다. 어떻게 해야 할까요?",
    icon: "icons/lesson-toll.png",
    visual: "toll",
    options: [
      "과태료가 커지기 전에 링크를 눌러 결제한다",
      "문자를 무시한다. 필요하면 공식 통행료 계정을 직접 확인한다",
      "번호판을 알려 주어 조회하게 한다"
    ],
    correct: 1,
    feedback: "맞습니다. 결제 링크가 있는 갑작스러운 통행료·범칙금 문자는 거의 항상 사기입니다."
  },
  {
    q: "사회보장(또는 공공기관)이라고 하며, 상품권으로 수수료를 내지 않으면 혜택이 중단된다고 전화가 왔습니다. 어떻게 해야 할까요?",
    icon: "icons/tip-gift.svg",
    visual: "gift",
    options: [
      "상품권을 사서 전화로 번호를 알려 준다",
      "끊고 공식 웹사이트에 있는 번호로 기관에 전화한다",
      "고친다며 주민번호 등을 알려 준다"
    ],
    correct: 1,
    feedback: "맞습니다! 정부 기관은 상품권을 요구하지 않습니다. 끊고 공식 번호(웹사이트·명세서)로만 전화하세요 — 상대가 준 번호는 쓰지 마세요."
  },
  {
    q: "택배가 지연되었다며 $2.99(소액) 수수료를 링크로 내라고 문자가 왔습니다. 가장 안전한 방법은?",
    icon: "icons/lesson-text.png",
    visual: "package",
    options: [
      "택배가 빨리 오도록 링크를 눌러 결제한다",
      "문자를 무시하고 공식 배송 조회 사이트나 앱으로 직접 확인한다",
      "주소를 답장해 재배송을 요청한다"
    ],
    correct: 1,
    feedback: "맞습니다! 예상치 못한 메시지의 링크는 누르지 마세요. 공식 웹사이트나 앱으로 직접 가세요."
  },
  {
    q: "“손주”가 울며 곤란하다며 아무에게도 말하지 말라고 전화했습니다. 먼저 무엇을 해야 할까요?",
    icon: "icons/lesson-family.png",
    visual: "family",
    options: [
      "바로 송금해서 도와준다",
      "가족 암호를 물어보거나 다른 친척에게 전화해 확인한다",
      "가족이 걱정하지 않도록 비밀로 한다"
    ],
    correct: 1,
    feedback: "맞습니다! 사기꾼은 공포와 비밀을 이용합니다. 가족 암호나 다른 친척에게 확인하는 것만으로도 대부분 막을 수 있습니다."
  }
];

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button, .nav-home').forEach(b => b.classList.remove('active'));
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  const btn = document.querySelector(`[data-section="${id}"]`);
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

let currentLesson = null;
let currentStep = 0;

function openLesson(key) {
  currentLesson = lessons[key];
  currentStep = 0;
  document.getElementById('lesson-title').textContent = currentLesson.title;
  const stage = document.querySelector('.stage');
  if (stage) stage.className = 'stage accent-' + (currentLesson.accent || 'teal');
  renderStep();
  showSection('lesson');
}

function getMockupHTML(type) {
  switch (type) {
    case 'mock-call':
      return `<div class="mock phone-call"><div class="mock-status">통신사 &nbsp; 오전 10:42 &nbsp; 100%</div><div class="mock-call-label">수신 전화</div><div class="mock-caller">알 수 없음</div><div class="mock-number">+1 (800) 555-0199</div><div class="mock-call-btns"><span class="call-decline">거절</span><span class="call-accept">받기</span></div><div class="mock-badge">사기 위험</div></div>`;
    case 'mock-voicemail':
      return `<div class="mock voicemail"><div class="vm-title">📧 음성메시지</div><div class="vm-from">발신: 1-800-829-1040 &nbsp;•&nbsp; “국세청”</div><div class="vm-body">“국세청 긴급 안내입니다. 미납 세금으로 소송이 진행 중입니다. 체포를 피하려면 즉시 이 번호로 전화하세요…”</div><div class="mock-badge">가짜</div></div>`;
    case 'mock-text':
      return `<div class="mock phone-text"><div class="mock-status">메시지 &nbsp; 오후 11:58</div><div class="bubble them">할머니 저예요. 교통사고가 나서 지금 유치장에 있어요. 보석금이 급해요. 엄마 아빠한테는 아직 말하지 마세요.</div><div class="bubble them">$2,800 송금하거나 아이튠즈 상품권 사 주실 수 있어요? 아침 전에 필요해요. 서둘러 주세요.</div><div class="bubble you">진짜 너 맞아? 우리 가족 암호가 뭐야?</div><div class="mock-badge">사기</div></div>`;
    case 'mock-sms-package':
      return `<div class="mock phone-text"><div class="mock-status">메시지 &nbsp; 오늘 오전 9:14</div><div class="bubble them">우체국: 택배가 보관 중입니다. 재배송비 $2.99를 내야 수령 가능합니다: bit.ly/usps-fee99</div><div class="bubble them">24시간 내 미결제 시 발송인에게 반송됩니다.</div><div class="mock-badge">사기</div></div>`;
    case 'mock-sms-bank':
      return `<div class="mock phone-text"><div class="mock-status">메시지 &nbsp; 오늘 오후 2:03</div><div class="bubble them">알림: 새 기기에서 은행 계정 로그인이 감지되었습니다. 본인이 아니면 지금 확인하세요: secure-bank-login.com/verify</div><div class="bubble them">1시간 내 확인하지 않으면 계정이 잠깁니다.</div><div class="mock-badge">사기</div></div>`;
    case 'mock-sms-toll':
      return `<div class="mock phone-text"><div class="mock-status">메시지 &nbsp; 오늘 오전 8:41</div><div class="bubble them">하이패스/통행료 안내: 미납 통행료 $4.75가 있습니다. 48시간 내 결제하지 않으면 $75 과태료: toll-pay-now.com/invoice</div><div class="bubble them">번호판 등록됨. 미납 시 차량 등록이 제한될 수 있습니다.</div><div class="mock-badge">사기</div></div>`;
    case 'mock-popup':
      return `<div class="mock popup-warn"><div class="popup-title">⚠️ 시스템 경고</div><div class="popup-body"><p><strong>심각한 바이러스 감지</strong></p><p>컴퓨터가 스파이웨어에 감염되었습니다. 파일과 은행 데이터가 위험합니다.</p><p>즉시 Microsoft 지원에 전화하세요:</p><p class="popup-number">1-888-555-0199</p><p class="popup-small">컴퓨터를 끄지 마세요.</p></div><div class="mock-badge">사기</div></div>`;
    case 'mock-email':
      return `<div class="mock email"><div class="email-bar">받은편지함 &nbsp;•&nbsp; 중요</div><div class="email-from"><strong>보낸사람:</strong> security@paypa1-secure.com</div><div class="email-subj"><strong>제목:</strong> 긴급: 비정상적인 로그인 시도</div><div class="email-body"><p>고객님께,</p><p>새 기기에서 로그인이 확인되었습니다. 지금 확인하지 않으면 24시간 후 계정이 잠깁니다.</p><div class="email-btn">계정 확인하기 →</div><p class="email-note">이 링크는 짧은 시간만 유효합니다.</p></div><div class="mock-badge">사기</div></div>`;
    case 'mock-chat':
      return `<div class="mock chat"><div class="chat-header">Alex M. &nbsp;•&nbsp; 온라인</div><div class="bubble them">지난 몇 주 동안 이야기해서 정말 좋았어요 ❤️</div><div class="bubble them">해외 출장 중인데 카드가 정지됐어요. 임시로 송금 도와주실 수 있나요? 돌아가면 바로 갚을게요.</div><div class="bubble them">지금은 상품권이나 암호화폐로 $900 정도면 됩니다.</div><div class="mock-badge">사기</div></div>`;
    case 'mock-prize':
      return `<div class="mock email prize"><div class="email-bar">🎉 당첨 안내</div><div class="email-from"><strong>보낸사람:</strong> claims@national-lottery-awards.com</div><div class="email-subj"><strong>제목:</strong> 축하합니다 – $750,000에 당첨되셨습니다!</div><div class="email-body"><p>무작위 추첨에서 당첨자로 선정되었습니다.</p><p>상금을 받으려면 48시간 안에 처리·세금 수수료 $485를 상품권 또는 송금으로 납부하세요.</p><div class="email-btn">지금 상금 받기</div></div><div class="mock-badge">사기</div></div>`;
    case 'mock-payment':
      return `<div class="mock payment-ask"><div class="pay-title">이런 결제를 요구합니다:</div><div class="pay-items"><div class="pay-item">🎁 상품권</div><div class="pay-item">₿ 암호화폐</div><div class="pay-item">💸 송금</div></div><div class="pay-note">진짜 기관과 회사는 이런 방식을 거의 요구하지 않습니다.</div><div class="mock-badge">위험 신호</div></div>`;
    default:
      return '';
  }
}

function renderStep() {
  const step = currentLesson.steps[currentStep];
  const ill = document.getElementById('stage-ill');
  const textEl = document.getElementById('stage-text');
  const subEl = document.getElementById('stage-sub');
  const mockContainer = document.getElementById('stage-mock');
  if (!ill || !textEl) return;
  ill.className = 'stage-illustration';
  ill.style.display = 'none';
  if (mockContainer) { mockContainer.innerHTML = ''; mockContainer.style.display = 'none'; }
  if (step.type && step.type.startsWith('mock-')) {
    if (mockContainer) { mockContainer.innerHTML = getMockupHTML(step.type); mockContainer.style.display = 'block'; }
    ill.style.display = 'none';
  } else {
    ill.style.display = 'block';
    ill.textContent = step.icon || '🛡️';
    ill.className = 'stage-illustration ' + (step.anim || '');
  }
  textEl.textContent = step.text || '';
  if (subEl) subEl.textContent = step.sub || '';
  const dots = document.getElementById('progress-dots');
  if (dots) {
    dots.innerHTML = '';
    currentLesson.steps.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'dot' + (i === currentStep ? ' active' : '');
      dots.appendChild(d);
    });
  }
  const prev = document.getElementById('btn-prev');
  const next = document.getElementById('btn-next');
  if (prev) prev.disabled = currentStep === 0;
  if (next) next.textContent = currentStep === currentLesson.steps.length - 1 ? '완료 ✓' : '다음 →';
}

function nextStep() {
  if (currentStep < currentLesson.steps.length - 1) { currentStep++; renderStep(); }
  else showSection('scams');
}
function prevStep() {
  if (currentStep > 0) { currentStep--; renderStep(); }
}

let quizIndex = 0, quizScore = 0;

function startQuiz() {
  quizIndex = 0; quizScore = 0;
  showSection('quiz');
  renderQuestion();
}

function getQuizVisualHTML(type) {
  if (type === 'call') return `<div class="quiz-mock phone-call"><div class="mock-status">통신사 · 오전 10:42</div><div class="mock-call-label">수신 전화</div><div class="mock-caller">알 수 없음</div><div class="mock-number">+1 (800) 555-0199</div><div class="mock-call-btns"><span class="call-decline">거절</span><span class="call-accept">받기</span></div><div class="mock-badge">사기 위험</div></div>`;
  if (type === 'toll') return `<div class="quiz-mock phone-text"><div class="mock-status">메시지 · 오늘</div><div class="bubble them">통행료 안내: 미납 $4.75. $75 과태료 피하려면 지금 결제: toll-pay-now.com</div><div class="mock-badge">사기</div></div>`;
  if (type === 'gift') return `<div class="quiz-mock payment-ask"><div class="pay-title">요구한 결제 수단:</div><div class="pay-items"><div class="pay-item">🎁 상품권</div></div><div class="pay-note">정부 기관은 상품권을 요구하지 않습니다.</div><div class="mock-badge">위험 신호</div></div>`;
  if (type === 'package') return `<div class="quiz-mock phone-text"><div class="mock-status">메시지 · 오늘</div><div class="bubble them">우체국: 택배 보관 중. 재배송비 $2.99: bit.ly/usps-fee99</div><div class="mock-badge">사기</div></div>`;
  if (type === 'family') return `<div class="quiz-mock phone-text"><div class="mock-status">메시지 · 오후 11:58</div><div class="bubble them">할머니 저예요. 큰일 나서 보석금이 필요해요. 엄마 아빠한테는 말하지 마세요.</div><div class="mock-badge">사기</div></div>`;
  return '';
}

function renderQuestion() {
  const q = quizQuestions[quizIndex];
  const prog = document.getElementById('quiz-progress');
  if (prog) prog.textContent = `문제 ${quizIndex + 1} / ${quizQuestions.length}`;
  document.getElementById('quiz-question').textContent = q.q;
  const vis = document.getElementById('quiz-visual');
  if (vis) {
    let h = '';
    if (q.icon) h += `<img class="quiz-icon" src="${q.icon}" alt="">`;
    if (q.visual) h += getQuizVisualHTML(q.visual);
    vis.innerHTML = h;
  }
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    opts.appendChild(btn);
  });
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('quiz-next-btn').classList.add('hidden');
}

function selectAnswer(i) {
  const q = quizQuestions[quizIndex];
  document.querySelectorAll('.quiz-option').forEach((btn, idx) => {
    btn.onclick = null;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('wrong');
  });
  if (i === q.correct) quizScore++;
  const fb = document.getElementById('quiz-feedback');
  fb.textContent = q.feedback;
  fb.classList.add('show');
  if (i === q.correct) {
    fb.style.background = '#e6f8fd';
    fb.style.borderLeft = '6px solid #18bdf1';
  } else {
    fb.style.background = 'var(--danger-soft)';
    fb.style.borderLeft = '6px solid var(--danger)';
  }
  document.getElementById('quiz-next-btn').classList.remove('hidden');
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex < quizQuestions.length) renderQuestion();
  else showResults();
}

function showResults() {
  document.getElementById('quiz-progress').textContent = '퀴즈 완료';
  document.getElementById('quiz-question').textContent =
    `${quizQuestions.length}문제 중 ${quizScore}개를 맞히셨습니다!`;
  document.getElementById('quiz-options').innerHTML = '';
  const vis = document.getElementById('quiz-visual');
  if (vis) vis.innerHTML = '';
  const fb = document.getElementById('quiz-feedback');
  fb.classList.add('show');
  if (quizScore === quizQuestions.length) {
    fb.textContent = '훌륭합니다! 흔한 사기를 잘 구별할 준비가 되었습니다.';
    fb.style.background = '#e6f8fd';
  } else if (quizScore >= 3) {
    fb.textContent = '잘하셨습니다! 틀린 부분은 수업을 다시 보세요.';
    fb.style.background = '#e6f8fd';
  } else {
    fb.textContent = '더 연습해 보세요. 수업으로 돌아가 퀴즈를 다시 풀어 보세요.';
    fb.style.background = '#fff3e0';
  }
  document.getElementById('quiz-next-btn').classList.add('hidden');
  const restart = document.createElement('button');
  restart.className = 'btn btn-large mt-1';
  restart.textContent = '퀴즈 다시 풀기';
  restart.onclick = startQuiz;
  document.getElementById('quiz-options').appendChild(restart);
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const b = document.getElementById('install-banner');
  if (b) b.classList.add('show');
});
function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      const b = document.getElementById('install-banner');
      if (b) b.classList.remove('show');
    });
  }
}
function dismissInstall() {
  const b = document.getElementById('install-banner');
  if (b) b.classList.remove('show');
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
document.addEventListener('DOMContentLoaded', () => { showSection('home'); });
