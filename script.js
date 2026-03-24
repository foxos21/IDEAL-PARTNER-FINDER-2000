// ═══════════════════════════════════════════════════════
//  DATA: QUESTIONS
// ═══════════════════════════════════════════════════════

const SECTIONS_GF = [
  "ABOUT YOU", "PERSONALITY PREFERENCES", "LIFESTYLE & INTERESTS",
  "PHYSICAL APPEARANCE", "RELATIONSHIP DYNAMICS"
];
const SECTIONS_BF = [
  "ABOUT YOU", "PERSONALITY PREFERENCES", "LIFESTYLE & INTERESTS",
  "PHYSICAL APPEARANCE", "RELATIONSHIP DYNAMICS"
];

const GF_QUESTIONS = [
  // ── ABOUT YOU (0-2)
  { section: 0, type: "mc", key: "user_energy",
    text: "How would you describe your own energy level day-to-day?",
    opts: ["High energy — always busy, love doing things",
           "Balanced — active but enjoy downtime",
           "Relaxed — prefer calm, low-key days"] },
  { section: 0, type: "mc", key: "user_social",
    text: "How social are you?",
    opts: ["Very social — love parties and meeting new people",
           "Selectively social — close circle matters most",
           "Introverted — prefer one-on-one or solo time"] },
  { section: 0, type: "mc", key: "user_humor",
    text: "How important is humor in your daily life?",
    opts: ["Essential — I laugh constantly",
           "Important — but I'm serious when needed",
           "Not a priority — I value depth over jokes"] },
  // ── PERSONALITY (3-12)
  { section: 1, type: "mc", key: "independence",
    text: "In a relationship, do you prefer a partner who is…",
    opts: ["Very independent — has her own life, goals, and space",
           "Balanced — independent but emotionally connected",
           "Nurturing and attentive — very present in the relationship"] },
  { section: 1, type: "mc", key: "ambition",
    text: "How important is ambition in your ideal partner?",
    opts: ["Very important — she must have strong goals and drive",
           "Somewhat important — a direction in life is enough",
           "Not important — contentment matters more than achievement"] },
  { section: 1, type: "mc", key: "intellect",
    text: "What kind of intellectual dynamic do you prefer?",
    opts: ["Deep, stimulating conversations on complex topics",
           "A mix of serious topics and light fun",
           "Playful banter — I don't need philosophical debates"] },
  { section: 1, type: "mc", key: "emotional_expression",
    text: "How emotionally expressive should she be?",
    opts: ["Very open — shares feelings freely and deeply",
           "Balanced — expressive but not overwhelmingly so",
           "Reserved — shows love through actions more than words"] },
  { section: 1, type: "mc", key: "adventure",
    text: "How adventurous should she be?",
    opts: ["Highly adventurous — spontaneous travel, new experiences always",
           "Occasionally adventurous — mix of routine and novelty",
           "Homebody at heart — comfort over excitement"] },
  { section: 1, type: "mc", key: "creativity",
    text: "Is creativity important to you in a partner?",
    opts: ["Yes — artistic, imaginative, always creating something",
           "Somewhat — appreciates art and culture without being a creator",
           "Not particularly — practicality wins"] },
  { section: 1, type: "mc", key: "social_style",
    text: "How social should she be?",
    opts: ["Very social — loves going out and meeting people",
           "Balanced — social but also values quiet time",
           "Introverted — prefers small gatherings or staying in"] },
  { section: 1, type: "mc", key: "loyalty",
    text: "How important is loyalty and commitment?",
    opts: ["Absolutely paramount — trust is everything",
           "Very important but flexibility matters",
           "Important but I value independence over possessiveness"] },
  { section: 1, type: "mc", key: "humor_style",
    text: "What kind of humor do you enjoy most?",
    opts: ["Witty and sarcastic",
           "Silly and playful / goofy",
           "Dry and deadpan",
           "Warm and wholesome"] },
  { section: 1, type: "mc", key: "conflict_style",
    text: "How should she handle disagreements?",
    opts: ["Direct — addresses issues immediately and openly",
           "Calm and composed — prefers space then resolution",
           "Avoids conflict — keeps the peace whenever possible"] },
  { section: 1, type: "mc", key: "core_value",
    text: "Which values matter most in a partner?",
    opts: ["Honesty and transparency above all",
           "Kindness and compassion",
           "Ambition and personal growth",
           "Loyalty and reliability"] },
  // ── LIFESTYLE (14-16)
  { section: 2, type: "mc", key: "lifestyle",
    text: "What lifestyle should she lean toward?",
    opts: ["Active and sporty — gym, hikes, outdoors",
           "Cultured — museums, books, cafés, travel",
           "Homebody — cooking, movies, cozy evenings",
           "Nightlife — social events, music, going out"] },
  { section: 2, type: "mc", key: "career_orientation",
    text: "Career orientation?",
    opts: ["Career-focused — work is a major part of her identity",
           "Work-life balanced — professional but family-minded",
           "Creative freelancer or passion-driven",
           "Doesn't matter — any path is fine"] },
  // ── APPEARANCE (16-21)
  { section: 3, type: "mc", key: "height",
    text: "Preferred height?",
    opts: ["Shorter than me (petite)",
           "Around my height",
           "Taller than average",
           "No preference"] },
  { section: 3, type: "mc", key: "build",
    text: "Preferred body type?",
    opts: ["Slim / lean",
           "Athletic / fit",
           "Curvy / fuller figure",
           "No preference"] },
  { section: 3, type: "mc", key: "hair_length",
    text: "Preferred hair length?",
    opts: ["Short (pixie / bob)",
           "Medium (shoulder length)",
           "Long",
           "No preference"] },
  { section: 3, type: "mc", key: "hair_color",
    text: "Preferred hair color?",
    opts: ["Blonde","Brunette / dark brown","Black","Red / auburn","No preference"] },
  { section: 3, type: "mc", key: "eyes",
    text: "Preferred eye color?",
    opts: ["Blue / grey","Green / hazel","Brown / dark","No preference"] },
  { section: 3, type: "mc", key: "overall_style",
    text: "What aesthetic / style appeals to you most?",
    opts: ["Natural / minimal — barely-there makeup, clean look",
           "Elegant / classic — polished but understated",
           "Edgy / alternative — bold, dark, or unconventional",
           "Feminine / romantic — dresses, soft tones, delicate",
           "Casual / sporty — effortless, comfortable, active"] },
  // ── RELATIONSHIP (22-28)
  { section: 4, type: "mc", key: "affection",
    text: "How affectionate should she be?",
    opts: ["Very physically affectionate — lots of touch and closeness",
           "Moderately affectionate",
           "Emotionally affectionate but not overly physical"] },
  { section: 4, type: "mc", key: "quality_time",
    text: "How do you prefer spending time together?",
    opts: ["Active dates — activities, travel, events",
           "Cozy at home — movies, cooking, gaming",
           "A healthy mix of both",
           "Very independent — we do our own things mostly"] },
  { section: 4, type: "mc", key: "communication",
    text: "Communication style you prefer?",
    opts: ["Constant contact — texts throughout the day",
           "Regular but not constant — check-ins matter",
           "Minimal — both focused on own lives, reunite at end of day"] },
  { section: 4, type: "mc", key: "future_vision",
    text: "What future do you envision?",
    opts: ["Marriage and family eventually",
           "Long-term commitment without necessarily marrying",
           "Live in the present — no need to plan far ahead",
           "I'm not sure yet"] },
  { section: 4, type: "open", key: "dealbreaker",
    text: "Name ONE personality trait that would be an absolute dealbreaker for you." },
  { section: 4, type: "open", key: "must_have",
    text: "Name ONE quality that is absolutely non-negotiable — she MUST have this." },
];

const BF_QUESTIONS = [
  // ABOUT YOU (0-2)
  { section: 0, type: "mc", key: "user_energy",
    text: "How would you describe your own energy level day-to-day?",
    opts: ["High energy — always busy, love doing things",
           "Balanced — active but enjoy downtime",
           "Relaxed — prefer calm, low-key days"] },
  { section: 0, type: "mc", key: "user_social",
    text: "How social are you?",
    opts: ["Very social — love events and meeting new people",
           "Selectively social — close circle matters most",
           "Introverted — prefer one-on-one or solo time"] },
  { section: 0, type: "mc", key: "user_humor",
    text: "How important is humor in your daily life?",
    opts: ["Essential — I laugh constantly",
           "Important — but I'm serious when needed",
           "Not a priority — I value depth over jokes"] },
  // PERSONALITY (3-14)
  { section: 1, type: "mc", key: "independence",
    text: "In a relationship, do you prefer a partner who is…",
    opts: ["Very independent — has his own life, goals, and space",
           "Balanced — independent but emotionally connected",
           "Attentive and present — very focused on the relationship"] },
  { section: 1, type: "mc", key: "ambition",
    text: "How important is ambition in your ideal partner?",
    opts: ["Very important — he must have strong goals and drive",
           "Somewhat important — a direction in life is enough",
           "Not important — contentment matters more than achievement"] },
  { section: 1, type: "mc", key: "intellect",
    text: "What kind of intellectual dynamic do you prefer?",
    opts: ["Deep, stimulating conversations on complex topics",
           "A mix of serious topics and light fun",
           "Playful banter — I don't need philosophical debates"] },
  { section: 1, type: "mc", key: "emotional_expression",
    text: "How emotionally open should he be?",
    opts: ["Very open — comfortable sharing feelings and being vulnerable",
           "Balanced — expressive when it matters but composed day-to-day",
           "Reserved — shows love through actions more than words"] },
  { section: 1, type: "mc", key: "adventure",
    text: "How adventurous should he be?",
    opts: ["Highly adventurous — spontaneous travel, always up for something new",
           "Occasionally adventurous — mix of routine and novelty",
           "Homebody at heart — comfort and familiarity over excitement"] },
  { section: 1, type: "mc", key: "creativity",
    text: "Is creativity important to you in a partner?",
    opts: ["Yes — artistic, imaginative, always making or building something",
           "Somewhat — appreciates art and culture without being a creator",
           "Not particularly — practicality and logic win for me"] },
  { section: 1, type: "mc", key: "social_style",
    text: "How social should he be?",
    opts: ["Very social — loves going out, has a big friend group",
           "Balanced — social but also values quiet time",
           "Introverted — prefers small gatherings or staying in"] },
  { section: 1, type: "mc", key: "loyalty",
    text: "How important is loyalty and commitment to you?",
    opts: ["Absolutely paramount — trust and faithfulness are everything",
           "Very important but with healthy independence",
           "Important but I value freedom over possessiveness"] },
  { section: 1, type: "mc", key: "humor_style",
    text: "What kind of humor do you enjoy most?",
    opts: ["Witty and sarcastic",
           "Silly and goofy / playful",
           "Dry and deadpan",
           "Warm and wholesome"] },
  { section: 1, type: "mc", key: "conflict_style",
    text: "How should he handle disagreements?",
    opts: ["Direct — addresses issues immediately and honestly",
           "Calm and composed — prefers space then resolution",
           "Avoids conflict — keeps the peace whenever possible"] },
  { section: 1, type: "mc", key: "core_value",
    text: "Which value matters most to you in a partner?",
    opts: ["Honesty and transparency above all",
           "Kindness and compassion",
           "Ambition and personal growth",
           "Loyalty and reliability"] },
  { section: 1, type: "mc", key: "masculine_energy",
    text: "What kind of masculine energy appeals to you most?",
    opts: ["Protective and strong — a natural leader and provider",
           "Gentle and sensitive — emotionally intelligent and soft",
           "Playful and fun — a big kid at heart",
           "Calm and steady — quiet strength, unshakeable composure"] },
  // LIFESTYLE (15-17)
  { section: 2, type: "mc", key: "lifestyle",
    text: "What lifestyle should he lean toward?",
    opts: ["Active and sporty — gym, hikes, outdoors",
           "Cultured — books, art, cafés, travel",
           "Homebody — cooking, movies, gaming, cozy evenings",
           "Nightlife — social events, music, going out"] },
  { section: 2, type: "mc", key: "career_orientation",
    text: "Career orientation?",
    opts: ["Career-focused — work is a major part of his identity",
           "Work-life balanced — professional but present at home",
           "Creative or passion-driven — follows what he loves",
           "Doesn't matter — any path is fine"] },
  { section: 2, type: "mc", key: "shared_interests",
    text: "Which shared interest matters most to you?",
    opts: ["Shared physical activities (sports, hiking, gym)",
           "Shared creative pursuits (music, art, writing)",
           "Shared intellectual interests (books, documentaries, debate)",
           "Shared social life (same friend group, events, travel)"] },
  // APPEARANCE (18-24)
  { section: 3, type: "mc", key: "height",
    text: "Preferred height?",
    opts: ["Noticeably taller than me","Slightly taller than me","Around my height","No preference"] },
  { section: 3, type: "mc", key: "build",
    text: "Preferred body type?",
    opts: ["Slim / lean","Athletic / muscular","Broad and sturdy / larger build","No preference"] },
  { section: 3, type: "mc", key: "hair_length",
    text: "Preferred hair length?",
    opts: ["Short (buzzed or close-cropped)","Short to medium (classic length)","Medium to longer (shaggy, wavy, or styled)","No preference"] },
  { section: 3, type: "mc", key: "hair_color",
    text: "Preferred hair color?",
    opts: ["Blonde","Brown","Dark brown / black","Red / auburn","No preference"] },
  { section: 3, type: "mc", key: "facial_hair",
    text: "Facial hair preference?",
    opts: ["Clean-shaven","Light stubble","Full beard","No preference"] },
  { section: 3, type: "mc", key: "eyes",
    text: "Preferred eye color?",
    opts: ["Blue / grey","Green / hazel","Brown / dark","No preference"] },
  { section: 3, type: "mc", key: "overall_style",
    text: "What aesthetic / style appeals to you most?",
    opts: ["Casual / relaxed — jeans, tees, effortless",
           "Smart casual — put-together without being formal",
           "Sporty / athletic — activewear, clean sneakers",
           "Edgy / alternative — darker tones, layered, distinctive",
           "Refined / classic — quality basics, tailored fits"] },
  // RELATIONSHIP (25-31)
  { section: 4, type: "mc", key: "affection",
    text: "How affectionate should he be?",
    opts: ["Very physically affectionate — lots of touch and closeness",
           "Moderately affectionate — warm but not overwhelming",
           "Emotionally affectionate but not overly physical"] },
  { section: 4, type: "mc", key: "romance",
    text: "How romantic should he be?",
    opts: ["Very romantic — grand gestures, thoughtful surprises",
           "Quietly romantic — small meaningful acts of love",
           "Not particularly romantic — straightforward and practical"] },
  { section: 4, type: "mc", key: "quality_time",
    text: "How do you prefer spending time together?",
    opts: ["Active dates — activities, travel, new experiences",
           "Cozy at home — movies, cooking, gaming",
           "A healthy mix of both",
           "Fairly independent — we do our own things mostly"] },
  { section: 4, type: "mc", key: "communication",
    text: "Preferred communication style?",
    opts: ["Constant contact — texts and calls throughout the day",
           "Regular but not constant — check-ins that feel natural",
           "Minimal — both focused on own lives, reunite at end of day"] },
  { section: 4, type: "mc", key: "future_vision",
    text: "What future do you envision?",
    opts: ["Marriage and family eventually",
           "Long-term commitment without necessarily marrying",
           "Live in the present — no need to plan far ahead",
           "I'm not sure yet"] },
  { section: 4, type: "open", key: "dealbreaker",
    text: "Name ONE personality trait that would be an absolute dealbreaker for you." },
  { section: 4, type: "open", key: "must_have",
    text: "Name ONE quality that is absolutely non-negotiable — he MUST have this." },
];

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════

let currentGender = 'girlfriend';
let questions = GF_QUESTIONS;
let currentQ = 0;
let answers = {};
let chartInstance = null;

// ═══════════════════════════════════════════════════════
//  GENDER TOGGLE
// ═══════════════════════════════════════════════════════

function setGender(g) {
  currentGender = g;
  questions = g === 'girlfriend' ? GF_QUESTIONS : BF_QUESTIONS;
  answers = {};
  currentQ = 0;
  document.getElementById('tab-gf').classList.toggle('active', g === 'girlfriend');
  document.getElementById('tab-bf').classList.toggle('active', g === 'boyfriend');
  renderQ();
}

// ═══════════════════════════════════════════════════════
//  QUIZ ENGINE
// ═══════════════════════════════════════════════════════

function renderQ() {
  const q = questions[currentQ];
  const total = questions.length;
  const pct = Math.round((currentQ / total) * 100);

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = pct + '%';
  document.getElementById('qcounter').textContent = `Question ${currentQ + 1} of ${total}`;

  const sections = currentGender === 'girlfriend' ? SECTIONS_GF : SECTIONS_BF;
  document.getElementById('question-section-title').textContent =
    '📋 ' + (sections[q.section] || 'QUESTIONNAIRE') + '.EXE';

  document.getElementById('qnum').textContent = `QUESTION ${currentQ + 1}`;
  document.getElementById('qtext').textContent = q.text;

  document.getElementById('btn-prev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  document.getElementById('btn-next').textContent = currentQ === total - 1 ? 'FINISH ★' : 'NEXT ►';

  const optsList = document.getElementById('options-list');
  const openWrap = document.getElementById('open-wrap');

  if (q.type === 'mc') {
    optsList.style.display = 'block';
    openWrap.style.display = 'none';
    optsList.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const li = document.createElement('li');
      li.className = 'option-item';
      const saved = answers[q.key];
      const isSelected = saved === i;
      li.innerHTML = `
        <label class="option-label ${isSelected ? 'selected' : ''}">
          <input type="radio" name="q${currentQ}" value="${i}" ${isSelected ? 'checked' : ''}>
          ${opt}
        </label>`;
      li.querySelector('input').addEventListener('change', () => {
        answers[q.key] = i;
        document.querySelectorAll(`#options-list .option-label`).forEach((l, idx) => {
          l.classList.toggle('selected', idx === i);
        });
      });
      optsList.appendChild(li);
    });
  } else {
    optsList.style.display = 'none';
    openWrap.style.display = 'block';
    const inp = document.getElementById('open-input');
    inp.value = answers[q.key] !== undefined ? answers[q.key] : '';
    inp.placeholder = 'Type your answer here...';
  }
}

function nextQ() {
  const q = questions[currentQ];
  if (q.type === 'mc') {
    if (answers[q.key] === undefined) {
      alert('Please select an option before continuing!');
      return;
    }
  } else {
    const val = document.getElementById('open-input').value.trim();
    answers[q.key] = val || 'No preference';
  }

  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQ();
    // window.scrollTo({top: 0, behavior: 'smooth'});
  } else {
    showLoading();
  }
}

function prevQ() {
  if (currentQ > 0) {
    // save open answer
    const q = questions[currentQ];
    if (q.type === 'open') {
      answers[q.key] = document.getElementById('open-input').value.trim() || 'No preference';
    }
    currentQ--;
    renderQ();
   // window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

function showLoading() {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.add('show');
  setTimeout(() => {
    overlay.classList.remove('show');
    generateResults();
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';
    // window.scrollTo({top: 0, behavior: 'smooth'});
  }, 2200);
}

function restartQuiz() {
  answers = {};
  currentQ = 0;
  document.getElementById('results-page').style.display = 'none';
  document.getElementById('quiz-page').style.display = 'block';
  renderQ();
  // window.scrollTo({top: 0, behavior: 'smooth'});
}

// ═══════════════════════════════════════════════════════
//  ARCHETYPES
// ═══════════════════════════════════════════════════════

function computeArchetypeGF(a) {
  const scores = {
    "The Independent Achiever": 0,
    "The Creative Dreamer": 0,
    "The Warm Nurturer": 0,
    "The Adventurous Free Spirit": 0,
    "The Quiet Intellectual": 0
  };
  if (a.independence === 0) scores["The Independent Achiever"] += 2;
  if (a.independence === 2) scores["The Warm Nurturer"] += 2;
  if (a.ambition === 0) { scores["The Independent Achiever"] += 1; scores["The Quiet Intellectual"] += 1; }
  if (a.intellect === 0) scores["The Quiet Intellectual"] += 2;
  if (a.intellect === 2) scores["The Creative Dreamer"] += 1;
  if (a.creativity === 0) scores["The Creative Dreamer"] += 2;
  if (a.adventure === 0) scores["The Adventurous Free Spirit"] += 3;
  if (a.emotional_expression === 0) scores["The Warm Nurturer"] += 2;
  return Object.entries(scores).sort((x,y)=>y[1]-x[1])[0][0];
}

function computeArchetypeBF(a) {
  const scores = {
    "The Ambitious Protector": 0,
    "The Creative Soul": 0,
    "The Gentle Giant": 0,
    "The Adventurous Explorer": 0,
    "The Quiet Intellectual": 0
  };
  if (a.ambition === 0) scores["The Ambitious Protector"] += 2;
  if (a.masculine_energy === 0) scores["The Ambitious Protector"] += 2;
  if (a.creativity === 0) scores["The Creative Soul"] += 3;
  if (a.career_orientation === 2) scores["The Creative Soul"] += 2;
  if (a.masculine_energy === 1) scores["The Gentle Giant"] += 3;
  if (a.emotional_expression === 0) scores["The Gentle Giant"] += 2;
  if (a.adventure === 0) scores["The Adventurous Explorer"] += 3;
  if (a.lifestyle === 0) scores["The Adventurous Explorer"] += 1;
  if (a.intellect === 0) scores["The Quiet Intellectual"] += 3;
  if (a.masculine_energy === 3) scores["The Quiet Intellectual"] += 2;
  return Object.entries(scores).sort((x,y)=>y[1]-x[1])[0][0];
}

const ARCHETYPE_DESCS = {
  "The Independent Achiever": "She is driven, self-sufficient, and knows exactly where she's going in life. She'll respect your space because she values hers. Ambitious in her own right, she pushes you to grow while never being clingy or dependent. She's confident, goal-oriented, and deeply loyal.",
  "The Creative Dreamer": "She sees the world differently — imaginative, artistic, and always bursting with ideas. Life with her is colourful and unpredictable in the best ways. She's emotionally rich, deeply empathetic, and brings a sense of wonder to even ordinary moments.",
  "The Warm Nurturer": "She leads with heart. Deeply caring, attentive, and emotionally generous, she makes those around her feel safe and loved. She prioritises relationships over everything and creates a home wherever she goes. Loyal, kind, and quietly strong.",
  "The Adventurous Free Spirit": "Life is an adventure and she's all in. Spontaneous, energetic, and always chasing the next experience, she keeps the relationship exciting and unpredictable. She's open-minded, adaptable, and infectiously enthusiastic about everything she does.",
  "The Quiet Intellectual": "Sharp-minded, curious, and endlessly interesting to talk to. She challenges your thinking and engages with the world deeply. Quiet confidence, dry wit, and a genuine love of learning define her. Conversations with her feel like a privilege.",
  "The Ambitious Protector": "He's driven, dependable, and makes you feel safe. Goal-oriented and decisive, he takes care of the people he loves without being overbearing. He works hard, leads quietly, and brings a steadiness to your life that makes everything feel more grounded.",
  "The Creative Soul": "He sees beauty in everything and expresses it in his own unique way. Life with him is colourful and surprising. He's deeply empathetic, emotionally fluent, and brings inspiration to every ordinary moment.",
  "The Gentle Giant": "Emotionally intelligent and genuinely kind, he leads with warmth. He's not afraid to be vulnerable, to listen, or to put your needs first. Strong in the quietest ways — his presence alone is reassuring. He loves deeply and shows it every single day.",
  "The Adventurous Explorer": "He's always chasing the next experience — new places, new ideas, new challenges. Spontaneous and energetic, he keeps life exciting and pulls you out of your comfort zone in the best way. Open-minded, confident, and infectious in his enthusiasm for the world.",
};

const STYLE_DESCS_GF = {
  0: "She looks effortlessly beautiful — fresh-faced, minimal makeup, clean basics like fitted jeans, white tees, and simple layers.",
  1: "Tasteful and refined — think tailored pieces, neutral tones, quality fabrics. She looks put-together without trying too hard.",
  2: "Her style makes a statement — darker palettes, interesting cuts, unique accessories. She dresses with an edge and individuality.",
  3: "Soft and romantic — flowy dresses, pastels, delicate jewellery. Her look is warm, approachable, and gently feminine.",
  4: "Relaxed and practical — athletic wear, hoodies, sneakers done right. She looks great without fuss and is always ready to move."
};
const STYLE_DESCS_BF = {
  0: "He looks naturally good without trying — well-fitted basics, clean jeans, simple tees. Effortless and approachable.",
  1: "He always looks intentional — chinos, neat shirts, quality shoes. Polished enough to impress, relaxed enough to feel real.",
  2: "He dresses for movement — athletic fits, fresh trainers, functional layers. Clean, active, and energetic.",
  3: "His style has attitude — darker palettes, interesting textures, layered outfits. He dresses with personality and intention.",
  4: "He invests in quality over quantity — tailored trousers, simple but excellent basics. He looks sharp without any fuss."
};

// ═══════════════════════════════════════════════════════
//  COMPATIBILITY CODE SYSTEM
//  Encodes all MC answers as base-N indices → base64 string
//  Prefix: GF|BF so we know the gender
// ═══════════════════════════════════════════════════════

function encodeAnswers(g, a, qs) {
  // Only encode mc answers in order
  const mcKeys = qs.filter(q => q.type === 'mc').map(q => q.key);
  // Build a string of answer indices
  const nums = mcKeys.map(k => {
    const v = a[k];
    return v !== undefined ? String(v) : '0';
  });
  const raw = (g === 'girlfriend' ? 'GF' : 'BF') + ':' + nums.join(',');
  return btoa(raw).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
}

function decodeCode(code) {
  try {
    const padded = code.replace(/-/g,'+').replace(/_/g,'/');
    const pad = padded.length % 4 === 0 ? '' : '='.repeat(4 - padded.length % 4);
    const raw = atob(padded + pad);
    const [prefix, numStr] = raw.split(':');
    const g = prefix === 'GF' ? 'girlfriend' : 'boyfriend';
    const qs = g === 'girlfriend' ? GF_QUESTIONS : BF_QUESTIONS;
    const mcKeys = qs.filter(q => q.type === 'mc').map(q => q.key);
    const nums = numStr.split(',').map(Number);
    const a = {};
    mcKeys.forEach((k, i) => { a[k] = nums[i] || 0; });
    return { gender: g, answers: a, questions: qs };
  } catch(e) {
    return null;
  }
}

// ═══════════════════════════════════════════════════════
//  COMPATIBILITY SCORING
// ═══════════════════════════════════════════════════════

function compatScore(a1, a2, qs1, qs2) {
  // Dimensions we compare
  const sharedKeys = [
    'user_energy','user_social','independence','adventure',
    'lifestyle','quality_time','communication','future_vision',
    'ambition','intellect','emotional_expression','social_style',
    'loyalty','conflict_style'
  ];

  const dims = {};
  let total = 0, matched = 0;

  sharedKeys.forEach(k => {
    const v1 = a1[k], v2 = a2[k];
    if (v1 === undefined || v2 === undefined) return;

    const q1 = qs1.find(q => q.key === k);
    const q2 = qs2.find(q => q.key === k);
    const max1 = q1 ? (q1.opts ? q1.opts.length - 1 : 3) : 3;
    const max2 = q2 ? (q2.opts ? q2.opts.length - 1 : 3) : 3;

    // Normalise both to 0-1
    const n1 = max1 > 0 ? v1 / max1 : 0;
    const n2 = max2 > 0 ? v2 / max2 : 0;
    const diff = Math.abs(n1 - n2);
    const score = Math.round((1 - diff) * 100);

    dims[k] = score;
    total += score;
    matched++;
  });

  const overall = matched > 0 ? Math.round(total / matched) : 50;
  return { overall, dims };
}

function compatLabel(score) {
  if (score >= 90) return "SOULMATE LEVEL ✨";
  if (score >= 75) return "HIGHLY COMPATIBLE 💕";
  if (score >= 60) return "GOOD MATCH 💖";
  if (score >= 45) return "MODERATE MATCH 💛";
  if (score >= 30) return "CHALLENGING 🤔";
  return "OPPOSITES 🔄";
}

const DIM_LABELS = {
  user_energy: "Energy", user_social: "Social", independence: "Independence",
  adventure: "Adventure", lifestyle: "Lifestyle", quality_time: "Time Together",
  communication: "Comms Style", future_vision: "Future Goals",
  ambition: "Ambition", intellect: "Intellect", emotional_expression: "Emotion",
  social_style: "Social Style", loyalty: "Loyalty", conflict_style: "Conflict"
};

// ═══════════════════════════════════════════════════════
//  GENERATE RESULTS
// ═══════════════════════════════════════════════════════

function generateResults() {
  const a = answers;
  const g = currentGender;
  const qs = questions;
  const userName = document.getElementById('user-name').value.trim() || 'USER';

  const archetype = g === 'girlfriend' ? computeArchetypeGF(a) : computeArchetypeBF(a);

  // Header
  document.getElementById('result-name-line').textContent = `PROFILE FOR: ${userName.toUpperCase()}`;
  document.getElementById('result-date-line').textContent =
    `GENERATED: ${new Date().toLocaleDateString('en-GB', {day:'2-digit',month:'long',year:'numeric'}).toUpperCase()} | SEEKING: IDEAL ${g.toUpperCase()}`;

  // Archetype
  document.getElementById('r-archetype-name').textContent = '★ ' + archetype + ' ★';
  document.getElementById('r-archetype-desc').textContent = ARCHETYPE_DESCS[archetype] || '';

  // Traits
  const traitKeys = g === 'girlfriend'
    ? ['independence','emotional_expression','humor_style','conflict_style','core_value','ambition','social_style']
    : ['masculine_energy','independence','emotional_expression','humor_style','conflict_style','core_value','ambition','social_style'];
  const traitLabels = {
    independence: 'Independence', emotional_expression: 'Emotional Style',
    humor_style: 'Humor', conflict_style: 'Conflict', core_value: 'Core Value',
    ambition: 'Ambition', social_style: 'Social Style', masculine_energy: 'Masculine Energy'
  };
  const tbody = document.getElementById('traits-tbody');
  tbody.innerHTML = '';
  traitKeys.forEach(k => {
    const q = qs.find(q => q.key === k);
    if (!q || a[k] === undefined) return;
    const val = q.opts ? q.opts[a[k]] : a[k];
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="trait-key">${traitLabels[k]||k}</td><td>${val}</td>`;
    tbody.appendChild(tr);
  });

  // Also add lifestyle/career
  [['lifestyle','Lifestyle'],['career_orientation','Career']].forEach(([k,l]) => {
    const q = qs.find(q => q.key === k);
    if (!q || a[k] === undefined) return;
    const val = q.opts[a[k]];
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="trait-key">${l}</td><td>${val}</td>`;
    tbody.appendChild(tr);
  });

  // Appearance
  const appKeys = g === 'girlfriend'
    ? ['height','build','hair_length','hair_color','eyes','overall_style']
    : ['height','build','hair_length','hair_color','facial_hair','eyes','overall_style'];
  const appLabels = {
    height:'Height', build:'Build', hair_length:'Hair Length',
    hair_color:'Hair Color', eyes:'Eyes', overall_style:'Style',
    facial_hair:'Facial Hair'
  };
  const abody = document.getElementById('appearance-tbody');
  abody.innerHTML = '';
  appKeys.forEach(k => {
    const q = qs.find(q => q.key === k);
    if (!q || a[k] === undefined) return;
    const val = q.opts[a[k]];
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="trait-key">${appLabels[k]||k}</td><td>${val}</td>`;
    abody.appendChild(tr);
  });

  // Style description
  const styleIdx = a['overall_style'] !== undefined ? a['overall_style'] : 0;
  const styleDescs = g === 'girlfriend' ? STYLE_DESCS_GF : STYLE_DESCS_BF;
  document.getElementById('style-desc-box').textContent = '▶ ' + (styleDescs[styleIdx] || '');

  // Non-negotiables
  document.getElementById('r-must-have').textContent = a['must_have'] || 'Not specified';
  document.getElementById('r-dealbreaker').textContent = a['dealbreaker'] || 'Not specified';

  // Summary
  const energyMap = {
    0: "Your high energy calls for someone active and engaged who can keep up with you.",
    1: "You'll thrive with someone who balances activity and rest just like you do.",
    2: "A calm, grounded partner who doesn't need constant stimulation will suit you perfectly."
  };
  const socialMap = {
    0: g === 'girlfriend'
      ? "Your social side calls for a partner who enjoys being out in the world with you."
      : "Your social nature calls for a partner who's comfortable in your world and adds to it.",
    1: "Quality over quantity — they should value your inner circle and real connection.",
    2: "Someone who respects your space and enjoys quiet intimacy is key."
  };
  const energyTxt = energyMap[a['user_energy']] || '';
  const socialTxt = socialMap[a['user_social']] || '';
  const humorQ = qs.find(q => q.key === 'humor_style');
  const humorTxt = humorQ && a['humor_style'] !== undefined ? humorQ.opts[a['humor_style']] : '';
  const affQ = qs.find(q => q.key === 'affection');
  const affTxt = affQ && a['affection'] !== undefined ? affQ.opts[a['affection']].split('—')[0].trim().toLowerCase() : '';
  const loyQ = qs.find(q => q.key === 'loyalty');
  const loyTxt = loyQ && a['loyalty'] !== undefined ? loyQ.opts[a['loyalty']].split('—')[0].trim().toLowerCase() : '';
  const pronoun = g === 'girlfriend' ? 'her' : 'his';

  document.getElementById('r-summary').innerHTML =
    `${energyTxt}<br><br>${socialTxt}<br><br>` +
    `Based on all your answers, your ideal ${g} embodies the <strong>${archetype}</strong> archetype — ` +
    `with a <em>${humorTxt.toLowerCase()}</em> sense of humor, ` +
    `${affTxt} in the way ${pronoun} shows love, ` +
    `and <em>${loyTxt}</em> when it comes to commitment.`;

  // Chart
  buildChart(a, g, qs, archetype);

  // Code
  const code = encodeAnswers(g, a, qs);
  document.getElementById('user-code').textContent = code;

  // Pre-fill compat code1
  document.getElementById('code1-input').value = code;
  document.getElementById('code2-input').value = '';
  document.getElementById('compat-result').style.display = 'none';
}

// ═══════════════════════════════════════════════════════
//  CHART
// ═══════════════════════════════════════════════════════

function buildChart(a, g, qs, archetype) {
  // Personality dimensions mapped to 0-100 scores
  const dimDefs = [
    { label: 'Independence', key: 'independence', invert: false },
    { label: 'Adventure', key: 'adventure', invert: false },
    { label: 'Intellect', key: 'intellect', invert: false },
    { label: 'Emotion', key: 'emotional_expression', invert: false },
    { label: 'Ambition', key: 'ambition', invert: false },
    { label: 'Creativity', key: 'creativity', invert: false },
    { label: 'Loyalty', key: 'loyalty', invert: false },
    { label: 'Social', key: 'social_style', invert: false },
  ];

  const labels = [], data = [];
  dimDefs.forEach(d => {
    const q = qs.find(q => q.key === d.key);
    if (!q || a[d.key] === undefined) return;
    const max = q.opts.length - 1;
    const raw = a[d.key];
    // 0 = first option (often the "most" of something)
    // We invert so higher score = more of that trait
    const score = max > 0 ? Math.round((1 - raw / max) * 100) : 50;
    labels.push(d.label);
    data.push(score);
  });

  // Archetype highlight bar
  const archetypeScores = {
    "The Independent Achiever": [90,40,65,40,85,50,80,50],
    "The Creative Dreamer": [55,65,70,85,45,95,65,60],
    "The Warm Nurturer": [30,40,55,95,35,55,90,55],
    "The Adventurous Free Spirit": [70,95,50,65,50,60,65,70],
    "The Quiet Intellectual": [65,35,95,60,70,65,75,40],
    "The Ambitious Protector": [55,45,60,50,90,40,85,55],
    "The Creative Soul": [60,60,65,80,50,90,65,60],
    "The Gentle Giant": [40,40,55,90,40,60,80,50],
    "The Adventurous Explorer": [65,92,55,65,55,60,65,75],
  };
  const archScores = archetypeScores[archetype] || data.map(()=>50);
  const trimmedArch = archScores.slice(0, labels.length);

  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

  const ctx = document.getElementById('personality-chart').getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Your Preferences',
          data,
          backgroundColor: 'rgba(0,255,0,0.7)',
          borderColor: '#00ff00',
          borderWidth: 2,
        },
        {
          label: archetype + ' (Archetype)',
          data: trimmedArch,
          backgroundColor: 'rgba(255,255,0,0.4)',
          borderColor: '#ffff00',
          borderWidth: 2,
          borderDash: [5,3],
          type: 'line',
          fill: false,
          tension: 0.3,
          pointRadius: 5,
          pointBackgroundColor: '#ffff00',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true, max: 100,
          ticks: { color: '#00ffff', font: { family: "'VT323'" }, stepSize: 20 },
          grid: { color: 'rgba(0,255,255,0.15)' },
        },
        x: {
          ticks: { color: '#00ff00', font: { family: "'VT323'", size: 14 } },
          grid: { color: 'rgba(0,255,0,0.1)' },
        }
      },
      plugins: {
        legend: {
          labels: { color: '#ffffff', font: { family: "'VT323'", size: 14 } }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.raw}%`
          }
        }
      }
    }
  });
}

// ═══════════════════════════════════════════════════════
//  COMPATIBILITY CHECKER
// ═══════════════════════════════════════════════════════

function checkCompatibility() {
  const c1 = document.getElementById('code1-input').value.trim();
  const c2 = document.getElementById('code2-input').value.trim();
  const resultEl = document.getElementById('compat-result');

  if (!c1 || !c2) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<span style="color:red;">⚠ Please enter both codes!</span>';
    return;
  }

  const d1 = decodeCode(c1);
  const d2 = decodeCode(c2);

  if (!d1 || !d2) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<span style="color:red;">⚠ One or both codes are invalid. Make sure you copied them correctly.</span>';
    return;
  }

  const { overall, dims } = compatScore(d1.answers, d2.answers, d1.questions, d2.questions);
  const label = compatLabel(overall);

  const archetype1 = d1.gender === 'girlfriend' ? computeArchetypeGF(d1.answers) : computeArchetypeBF(d1.answers);
  const archetype2 = d2.gender === 'girlfriend' ? computeArchetypeGF(d2.answers) : computeArchetypeBF(d2.answers);

  // Top 3 dims
  const sortedDims = Object.entries(dims).sort((a,b)=>b[1]-a[1]);
  const best3 = sortedDims.slice(0,3);
  const worst3 = sortedDims.slice(-3).reverse();

  let barsHtml = '';
  Object.entries(dims).slice(0,8).forEach(([k,v]) => {
    barsHtml += `
      <div class="compat-bar-row">
        <span class="compat-bar-label">${DIM_LABELS[k]||k}</span>
        <div class="compat-bar-track">
          <div class="compat-bar-fill" style="width:0%;background:${v>=70?'#00ff00':v>=45?'#ffff00':'#ff4444'}" data-target="${v}"></div>
        </div>
        <span class="compat-bar-pct">${v}%</span>
      </div>`;
  });

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div style="text-align:center;margin-bottom:10px;">
      <span style="color:var(--accent3);font-family:'Press Start 2P',monospace;font-size:8px;">COMPATIBILITY RESULT:</span><br>
      <span class="compat-score">${overall}%</span>
      <span style="color:var(--accent);font-family:'Press Start 2P',monospace;font-size:9px;display:block;">${label}</span>
    </div>
    <div style="margin:8px 0;color:var(--accent3);">PROFILE 1: ${archetype1} (${d1.gender})</div>
    <div style="margin:8px 0;color:var(--accent3);">PROFILE 2: ${archetype2} (${d2.gender})</div>
    <div style="margin-top:10px;color:var(--accent3);font-family:'Press Start 2P',monospace;font-size:8px;margin-bottom:6px;">[ DIMENSION BREAKDOWN ]</div>
    <div class="compat-bars">${barsHtml}</div>
    <div style="margin-top:10px;">
      <span style="color:#00ff00;">✓ STRONGEST MATCHES: ${best3.map(([k])=>DIM_LABELS[k]||k).join(', ')}</span><br>
      <span style="color:#ff4444;">✗ BIGGEST DIFFERENCES: ${worst3.map(([k])=>DIM_LABELS[k]||k).join(', ')}</span>
    </div>`;

  // Animate bars
  setTimeout(() => {
    resultEl.querySelectorAll('.compat-bar-fill').forEach(el => {
      el.style.transition = 'width 1s ease';
      el.style.width = el.dataset.target + '%';
    });
  }, 50);
}

// ═══════════════════════════════════════════════════════
//  COPY + DOWNLOAD
// ═══════════════════════════════════════════════════════

function copyCode() {
  const code = document.getElementById('user-code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target;
    const orig = btn.textContent;
    btn.textContent = '[ ✓ COPIED! ]';
    setTimeout(() => btn.textContent = orig, 2000);
  });
}

function downloadImage() {
  const target = document.getElementById('download-target');
  const btn = event.target;
  btn.textContent = '⏳ RENDERING...';
  btn.disabled = true;

  html2canvas(target, {
    backgroundColor: '#c0c0c0',
    scale: 2,
    useCORS: true,
    logging: false,
    onclone: (doc) => {
      // Make sure fonts are applied
      doc.getElementById('download-target').style.padding = '20px';
    }
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ideal_partner_profile.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    btn.textContent = '💾 SAVE RESULTS AS IMAGE';
    btn.disabled = false;
  }).catch(err => {
    console.error(err);
    btn.textContent = '💾 SAVE RESULTS AS IMAGE';
    btn.disabled = false;
    alert('Could not generate image. Try screenshotting instead!');
  });
}

// ═══════════════════════════════════════════════════════
//  STANDALONE COMPAT CHECKER (always visible on quiz page)
// ═══════════════════════════════════════════════════════
 
function checkCompatibilityStandalone() {
  const c1 = document.getElementById('sa-code1').value.trim();
  const c2 = document.getElementById('sa-code2').value.trim();
  const resultEl = document.getElementById('sa-compat-result');
  _renderCompatResult(c1, c2, resultEl);
}
 
// Shared render logic used by both checkers
function _renderCompatResult(c1, c2, resultEl) {
  if (!c1 || !c2) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<span style="color:red;">⚠ Please enter both codes!</span>';
    return;
  }
  const d1 = decodeCode(c1);
  const d2 = decodeCode(c2);
  if (!d1 || !d2) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<span style="color:red;">⚠ One or both codes are invalid. Make sure you copied them correctly.</span>';
    return;
  }
 
  const { overall, dims } = compatScore(d1.answers, d2.answers, d1.questions, d2.questions);
  const label = compatLabel(overall);
  const archetype1 = d1.gender === 'girlfriend' ? computeArchetypeGF(d1.answers) : computeArchetypeBF(d1.answers);
  const archetype2 = d2.gender === 'girlfriend' ? computeArchetypeGF(d2.answers) : computeArchetypeBF(d2.answers);
 
  const sortedDims = Object.entries(dims).sort((a,b)=>b[1]-a[1]);
  const best3 = sortedDims.slice(0,3);
  const worst3 = sortedDims.slice(-3).reverse();
 
  let barsHtml = '';
  Object.entries(dims).slice(0,8).forEach(([k,v]) => {
    barsHtml += `
      <div class="compat-bar-row">
        <span class="compat-bar-label">${DIM_LABELS[k]||k}</span>
        <div class="compat-bar-track">
          <div class="compat-bar-fill" style="width:0%;background:${v>=70?'#00ff00':v>=45?'#ffff00':'#ff4444'}" data-target="${v}"></div>
        </div>
        <span class="compat-bar-pct">${v}%</span>
      </div>`;
  });
 
  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div style="text-align:center;margin-bottom:10px;">
      <span style="color:var(--accent3);font-family:'Press Start 2P',monospace;font-size:8px;">COMPATIBILITY RESULT:</span><br>
      <span class="compat-score">${overall}%</span>
      <span style="color:var(--accent);font-family:'Press Start 2P',monospace;font-size:9px;display:block;">${label}</span>
    </div>
    <div style="margin:8px 0;color:var(--accent3);">PROFILE 1: ${archetype1} (${d1.gender})</div>
    <div style="margin:8px 0;color:var(--accent3);">PROFILE 2: ${archetype2} (${d2.gender})</div>
    <div style="margin-top:10px;color:var(--accent3);font-family:'Press Start 2P',monospace;font-size:8px;margin-bottom:6px;">[ DIMENSION BREAKDOWN ]</div>
    <div class="compat-bars">${barsHtml}</div>
    <div style="margin-top:10px;">
      <span style="color:#00ff00;">✓ STRONGEST: ${best3.map(([k])=>DIM_LABELS[k]||k).join(', ')}</span><br>
      <span style="color:#ff4444;">✗ DIFFERENCES: ${worst3.map(([k])=>DIM_LABELS[k]||k).join(', ')}</span>
    </div>`;
 
  setTimeout(() => {
    resultEl.querySelectorAll('.compat-bar-fill').forEach(el => {
      el.style.transition = 'width 1s ease';
      el.style.width = el.dataset.target + '%';
    });
  }, 50);
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════

// Fake visitor counter
document.getElementById('visitor-num').textContent =
  (Math.floor(Math.random() * 900) + 100).toString().padStart(3,'0') + ',' +
  Math.floor(Math.random() * 900 + 100).toString().padStart(3,'0');

renderQ();
