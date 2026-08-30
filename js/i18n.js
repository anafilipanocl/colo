(function () {
  var STORAGE = "colo-lang";
  var htmlLang = { en: "en", pt: "pt-PT" };

  var strings = {
    en: {
      "meta.homeTitle": "Colo — Professional cuddling in Lisbon",
      "meta.homeDesc": "Professional cuddling in Lisbon. A space for platonic, consensual human touch — where you can feel safe, slow down and simply be.",
      "meta.faqTitle": "FAQ — Colo, professional cuddling in Lisbon",
      "meta.faqDesc": "Answers about professional cuddling in Lisbon: what it is, safety and boundaries, booking, sessions, and what Colo means.",
      "meta.contactTitle": "Contact — Colo, professional cuddling in Lisbon",
      "meta.contactDesc": "Write to Ana to ask a question or arrange a professional cuddling session in Lisbon. A message does not book a session or commit you to anything.",
      "meta.ogHomeTitle": "Colo — Professional cuddling in Lisbon",
      "meta.ogHomeDesc": "A space for platonic, consensual human touch. Professional cuddling in Lisbon.",
      "skip": "Skip to content",
      "nav.primary": "Primary",
      "nav.mobile": "Mobile",
      "nav.lang": "Language",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.book": "Book a session",
      "nav.menu": "Menu",
      "hero.h1": "Sometimes we just need to be held.",
      "hero.lede": "Professional cuddling is a space for platonic, consensual human touch — a place where you can feel safe, slow down and simply be.",
      "touch.h2": "Touch is part of being human",
      "touch.p1": "Maybe you live alone. Maybe you’re far from the people you love. Maybe you’re going through something difficult. Maybe you’ve spent a long time being the person who holds everyone else.",
      "touch.p2": "Or maybe nothing is particularly wrong — you just want to share the joy of human touch.",
      "touch.p3": "You don’t need to earn it, explain it or have a reason that feels important enough.",
      "how.h2": "How it works",
      "how.s1": "Reach out",
      "how.s1p": "Send me a message through the contact form below. You can tell me as much or as little as you like.",
      "how.s2": "We talk",
      "how.s2p": "Before your first session, we’ll have a free intro call to meet, answer any questions, and talk through boundaries and expectations.",
      "how.s3": "We meet",
      "how.s3p": "We’ll start by checking in and then move at your pace — talking, sitting close, cuddling, or simply being held in a comfortable silence. You don’t need to know exactly what you want beforehand. We can find out together.",
      "space.h2": "What this space is",
      "space.p1": "Professional cuddling is fully platonic. It isn’t dating, massage, therapy or a sexual service.",
      "space.p2": "We are two human beings sharing space and touch, with boundaries that are spoken about rather than assumed.",
      "space.p3": "There’s no right way to be here, and nothing you need to perform.",
      "space.l1": "You can talk. You can be quiet. You can laugh.",
      "space.l2": "You can feel awkward.",
      "space.l3": "You can ask for something and then realise you don’t actually want it.",
      "space.l4": "You can change your mind.",
      "why.safe": "Safe & professional",
      "why.safep": "Clear boundaries, a trauma-aware approach, and a space that stays fully clothed. Either of us can pause or stop at any moment.",
      "why.genuine": "Genuine connection",
      "why.genuinep": "Platonic touch is part of being human. You don’t need a crisis, a diagnosis, or a reason that feels important enough.",
      "why.simple": "Simple & personal",
      "why.simplep": "No accounts, no app, no marketplace. One message reaches me directly, and we shape the session around you.",
      "about.alt": "Ana, smiling in a forest, reflected in a circular mirror on mossy ground.",
      "about.h2": "Hey, I’m Ana.",
      "about.p1": "I’m naturally drawn to the small things that make connection feel human. Quiet moments, meaningful conversations, softness, laughter, curiosity, and sometimes simply sharing space in a comfortable silence.",
      "about.p2": "My background is in psychology and therapeutic work, and that experience shapes the way I hold space: with attention, warmth and respect for each person’s pace. I bring a trauma-aware perspective and aim to create a space that is inclusive of different bodies, identities, relationships and ways of relating.",
      "about.p3": "Mostly, I hope to bring warmth, presence and a little pocket of human connection — somewhere you can simply arrive as you are.",
      "about.p4": "Outside of this space, you’ll most likely find me sharing a meal with friends, somewhere in nature, making something with my hands, or moving my body.",
      "about.background": "Background",
      "about.backgroundv": "Psychology & therapeutic work",
      "about.approach": "Approach",
      "about.approachv": "Trauma-aware · inclusive",
      "about.languages": "Languages",
      "about.where": "Where",
      "foot.blurb": "Platonic, professional cuddling for adults — one practitioner, by appointment, in a private space in Lisbon.",
      "foot.site": "Site",
      "foot.where": "Where",
      "foot.serving": "Currently serving Lisbon, Portugal",
      "foot.legal": "Strictly platonic · Adults only",
      "faq.h1": "Questions",
      "faq.intro": "Nothing here is a strange question. If yours isn’t answered, write to me and ask.",
      "faq.general": "General",
      "faq.safety": "Safety",
      "faq.booking": "Booking",
      "faq.sessions": "Sessions",
      "faq.q1": "What is professional cuddling?",
      "faq.a1": "Professional cuddling is a space for platonic, consensual human touch. We might cuddle, hold hands, sit close, talk, laugh or simply rest together. There is no right way for a session to look. We find what feels comfortable together.",
      "faq.q2": "Is it sexual?",
      "faq.a2": "No. Professional cuddling is fully platonic and we both remain clothed throughout the session. Sexual touch isn’t part of this space. Clear boundaries are what allow us to relax into closeness without wondering where it is supposed to lead.",
      "faq.q3": "Is this therapy?",
      "faq.a3": "No. Although my background is in psychology and therapeutic work, cuddling sessions are not therapy. My background does shape the care I bring to the space — particularly around safety, consent, trauma awareness and making room for different bodies, identities and ways of being.",
      "faq.q4": "What is Colo?",
      "faq.a4": "<em>Colo</em> is one of those Portuguese words that doesn’t quite translate. <em>Dar colo</em> is to hold someone, to offer warmth, comfort, and care. That feeling is at the heart of what I hope to create here.",
      "faq.q5": "Who is welcome?",
      "faq.a5": "Adults of different genders, sexualities, bodies, abilities, identities and ways of relating are welcome here. You don’t need to fit a certain profile or have a particular reason for coming. You can simply be you.",
      "faq.q6": "Where do sessions happen?",
      "faq.a6": "Sessions take place in a quiet, private space in Lisbon. I’ll share the exact address once we’ve spoken and arranged a session.",
      "faq.q7": "Is it safe?",
      "faq.a7": "We start with a free intro call, then check in again before any touch. Boundaries are spoken rather than assumed. We both stay fully clothed, and either of us can pause, change our mind, or end the session at any moment.",
      "faq.q8": "How do I book a session?",
      "faq.a8": "Send me a message through the <a href=\"#contact\">contact form</a>. Then we’ll have a short, free intro call so we can meet, talk through any questions and get a sense of whether this feels right for both of us. Writing to me does not book a session or commit you to anything.",
      "faq.q9": "How much does it cost?",
      "faq.a9": "Sessions are €90 per hour. The intro call is always free.",
      "faq.q10": "How do I pay?",
      "faq.a10": "We’ll arrange payment when we confirm a session — typically after we’ve spoken and agreed a time.",
      "faq.q11": "What if I need to cancel?",
      "faq.a11": "If something comes up, just let me know as soon as you can. For cancellations with less than 24 hours’ notice, the full session fee will still apply.",
      "faq.q12": "What happens before my first session?",
      "faq.a12": "First, send me a message. Then we’ll have a short, free intro call so we can meet, talk through any questions and get a sense of whether this feels right for both of us.",
      "faq.q13": "What actually happens during a session?",
      "faq.a13": "We start by checking in and talking about what feels comfortable that day. From there, we take it slowly. We might talk, sit close, cuddle, laugh, be quiet or simply rest together. There’s no checklist and nothing you have to do. In the end there’s always a time to integrate.",
      "faq.q14": "What if I feel nervous or awkward?",
      "faq.a14": "That’s okay. Sharing touch with someone new can feel vulnerable, unfamiliar or just a little strange at first. We can take our time. Awkwardness is allowed here too.",
      "faq.q15": "Do I need to know what I want?",
      "faq.a15": "Not at all. You might know exactly what kind of touch feels good to you, or you might have no idea yet. We can find out together.",
      "faq.q16": "What should I wear?",
      "faq.a16": "Something clean, comfortable and easy to relax in. Basically, whatever you’d happily curl up on a sofa in. We both stay fully clothed throughout the session.",
      "faq.q17": "How long are sessions?",
      "faq.a17": "Sessions are available for 60, 90 or 120 minutes. If it’s your first time, we can figure out together what feels like a good place to start.",
      "contact.h1": "Contact",
      "contact.lede": "Tell me as much or as little as you want. We’ll take it from there — usually with a free intro call before any session.",
      "contact.note": "Writing to me does not book a session or commit you to anything.",
      "form.name": "Name *",
      "form.namePh": "How should I call you?",
      "form.pronouns": "Pronouns",
      "form.pronounsPh": "e.g. she/her, he/him, they/them",
      "form.email": "Email *",
      "form.phone": "Phone *",
      "form.free": "When are you generally free? *",
      "form.freePh": "e.g. weekday evenings, or Saturday mornings",
      "form.note": "Anything you’d like me to know",
      "form.notePh": "Optional. Share any questions, needs or anything you’d like me to know before our call.",
      "form.send": "Send message",
      "form.sending": "Sending…",
      "form.thanks": "Thank you.",
      "form.thanksp": "I’ll get back to you soon. Writing to me does not book a session or commit you to anything — we can take it slowly from here.",
      "form.error": "Something went wrong sending the form. Please try again, or write to me directly.",
    },
    pt: {
      "meta.homeTitle": "Colo — Cuddling profissional em Lisboa",
      "meta.homeDesc": "Cuddling profissional em Lisboa. Um espaço de toque humano platónico e consensual — onde podes sentir-te em segurança, abrandar e simplesmente estar.",
      "meta.faqTitle": "Perguntas — Colo, cuddling profissional em Lisboa",
      "meta.faqDesc": "Respostas sobre cuddling profissional em Lisboa: o que é, segurança e limites, marcação, sessões, e o que significa Colo.",
      "meta.contactTitle": "Contacto — Colo, cuddling profissional em Lisboa",
      "meta.contactDesc": "Escreve à Ana para fazer uma pergunta ou marcar uma sessão de cuddling profissional em Lisboa. Uma mensagem não marca uma sessão nem te compromete com nada.",
      "meta.ogHomeTitle": "Colo — Cuddling profissional em Lisboa",
      "meta.ogHomeDesc": "Um espaço de toque humano platónico e consensual. Cuddling profissional em Lisboa.",
      "skip": "Saltar para o conteúdo",
      "nav.primary": "Principal",
      "nav.mobile": "Telemóvel",
      "nav.lang": "Idioma",
      "nav.about": "Sobre",
      "nav.faq": "Perguntas",
      "nav.contact": "Contacto",
      "nav.book": "Marcar sessão",
      "nav.menu": "Menu",
      "hero.h1": "Às vezes só precisamos de colo",
      "hero.lede": "O cuddling profissional é um espaço de toque humano platónico e consensual — um sítio onde podes sentir-te em segurança, abrandar e simplesmente estar.",
      "touch.h2": "O toque faz parte de ser humano",
      "touch.p1": "Talvez vivas sozinho. Talvez estejas longe das pessoas de quem gostas. Talvez estejas a passar por algo difícil. Talvez tenhas passado muito tempo a ser quem dá colo a toda a gente.",
      "touch.p2": "Ou talvez não esteja nada particularmente mal — só queres partilhar a alegria do toque humano.",
      "touch.p3": "Não precisas de o merecer, de o explicar, nem de ter um motivo que pareça suficientemente importante.",
      "how.h2": "Como funciona",
      "how.s1": "Escreve-me",
      "how.s1p": "Envia-me uma mensagem pelo formulário de contacto abaixo. Podes contar-me o quanto quiseres — ou quase nada.",
      "how.s2": "Falamos",
      "how.s2p": "Antes da primeira sessão, temos uma chamada de apresentação gratuita para nos conhecermos, esclarecer dúvidas e falar de limites e expectativas.",
      "how.s3": "Encontramo-nos",
      "how.s3p": "Começamos por um momento para alinhar e avançamos ao teu ritmo — a conversar, sentados ao pé um do outro, a dar colo, ou simplesmente a estar em silêncio, com conforto. Não precisas de saber exactamente o que queres de antemão. Descobrimos juntos.",
      "space.h2": "O que é este espaço",
      "space.p1": "O cuddling profissional é totalmente platónico. Não é namoro, massagem, terapia nem um serviço sexual.",
      "space.p2": "Somos dois seres humanos a partilhar espaço e toque, com limites de que se fala em vez de se assumir.",
      "space.p3": "Não há uma forma certa de estar aqui, e nada que tenhas de representar.",
      "space.l1": "Podes falar. Podes estar em silêncio. Podes rir.",
      "space.l2": "Podes sentir-te sem jeito.",
      "space.l3": "Podes pedir uma coisa e depois perceber que afinal não a queres.",
      "space.l4": "Podes mudar de ideias.",
      "why.safe": "Seguro e profissional",
      "why.safep": "Limites claros, uma abordagem informada sobre o trauma, e um espaço em que ficamos vestidos. Qualquer um de nós pode pausar ou parar a qualquer momento.",
      "why.genuine": "Ligação genuína",
      "why.genuinep": "O toque platónico faz parte de ser humano. Não precisas de uma crise, de um diagnóstico, nem de um motivo que pareça suficientemente importante.",
      "why.simple": "Simples e pessoal",
      "why.simplep": "Sem contas, sem aplicação, sem marketplace. Uma mensagem chega-me a mim, e moldamos a sessão à tua volta.",
      "about.alt": "A Ana, a sorrir numa floresta, reflectida num espelho redondo sobre musgo.",
      "about.h2": "Olá, sou a Ana.",
      "about.p1": "Sinto-me naturalmente atraída pelas pequenas coisas que tornam a ligação humana. Momentos calmos, conversas com sentido, suavidade, riso, curiosidade, e às vezes simplesmente partilhar o espaço num silêncio confortável.",
      "about.p2": "A minha formação é em psicologia e trabalho terapêutico, e essa experiência molda a forma como cuido do espaço: com atenção, calor e respeito pelo ritmo de cada pessoa. Trago uma perspectiva informada sobre o trauma e procuro criar um espaço inclusivo de diferentes corpos, identidades, relações e formas de nos relacionarmos.",
      "about.p3": "Acima de tudo, espero trazer calor, presença e um pequeno bolso de ligação humana — um sítio onde podes simplesmente chegar como és.",
      "about.p4": "Fora deste espaço, é bem possível que me encontres a partilhar uma refeição com amigos, algures na natureza, a fazer alguma coisa com as mãos, ou a mexer o corpo.",
      "about.background": "Percurso",
      "about.backgroundv": "Psicologia e trabalho terapêutico",
      "about.approach": "Abordagem",
      "about.approachv": "Informada sobre o trauma · inclusiva",
      "about.languages": "Línguas",
      "about.where": "Onde",
      "foot.blurb": "Cuddling profissional e platónico para adultos — uma praticante, por marcação, num espaço privado em Lisboa.",
      "foot.site": "Site",
      "foot.where": "Onde",
      "foot.serving": "Neste momento em Lisboa, Portugal",
      "foot.legal": "Estritamente platónico · Só adultos",
      "faq.h1": "Perguntas",
      "faq.intro": "Nenhuma pergunta é estranha. Se a tua não estiver aqui, escreve-me e pergunta.",
      "faq.general": "Geral",
      "faq.safety": "Segurança",
      "faq.booking": "Marcação",
      "faq.sessions": "Sessões",
      "faq.q1": "O que é o cuddling profissional?",
      "faq.a1": "O cuddling profissional é um espaço de toque humano platónico e consensual. Podemos dar colo, dar as mãos, sentar-nos ao pé, conversar, rir ou simplesmente descansar juntos. Não há uma forma certa para uma sessão. Descobrimos o que se sente confortável, juntos.",
      "faq.q2": "É sexual?",
      "faq.a2": "Não. O cuddling profissional é totalmente platónico e ambos permanecemos vestidos durante a sessão. O toque sexual não faz parte deste espaço. São os limites claros que nos permitem relaxar na proximidade sem nos perguntarmos para onde isto é suposto ir.",
      "faq.q3": "Isto é terapia?",
      "faq.a3": "Não. Embora a minha formação seja em psicologia e trabalho terapêutico, as sessões de cuddling não são terapia. A formação molda o cuidado que trago ao espaço — sobretudo em torno da segurança, do consentimento, da consciência do trauma e de deixar lugar a diferentes corpos, identidades e formas de ser.",
      "faq.q4": "O que é o Colo?",
      "faq.a4": "<em>Colo</em> é uma daquelas palavras portuguesas que não se traduz bem. <em>Dar colo</em> é pegar alguém ao colo, oferecer calor, conforto e cuidado. Esse sentimento está no centro do que espero criar aqui.",
      "faq.q5": "Quem é bem-vindo?",
      "faq.a5": "Pessoas adultas de diferentes géneros, sexualidades, corpos, capacidades, identidades e formas de se relacionar são bem-vindas aqui. Não precisas de encaixar num perfil nem de ter um motivo particular para vires. Podes simplesmente ser tu.",
      "faq.q6": "Onde acontecem as sessões?",
      "faq.a6": "As sessões acontecem num espaço quieto e privado em Lisboa. Partilho a morada exacta depois de falarmos e marcarmos uma sessão.",
      "faq.q7": "É seguro?",
      "faq.a7": "Começamos com uma chamada de apresentação gratuita e voltamos a alinhar antes de qualquer toque. Os limites são falados, não assumidos. Ambos ficamos vestidos, e qualquer um de nós pode pausar, mudar de ideias ou terminar a sessão a qualquer momento.",
      "faq.q8": "Como marco uma sessão?",
      "faq.a8": "Envia-me uma mensagem pelo <a href=\"#contact\">formulário de contacto</a>. Depois temos uma chamada de apresentação curta e gratuita para nos conhecermos, esclarecer dúvidas e perceber se isto faz sentido para os dois. Escrever-me não marca uma sessão nem te compromete com nada.",
      "faq.q9": "Quanto custa?",
      "faq.a9": "As sessões são 90 € por hora. A chamada de apresentação é sempre gratuita.",
      "faq.q10": "Como pago?",
      "faq.a10": "Combinamos o pagamento quando confirmarmos a sessão — normalmente depois de falarmos e acordarmos uma hora.",
      "faq.q11": "E se precisar de cancelar?",
      "faq.a11": "Se aparecer alguma coisa, avisa-me assim que puderes. Em cancelamentos com menos de 24 horas de antecedência, o valor da sessão aplica-se na mesma.",
      "faq.q12": "O que acontece antes da primeira sessão?",
      "faq.a12": "Primeiro, envia-me uma mensagem. Depois temos uma chamada de apresentação curta e gratuita para nos conhecermos, esclarecer dúvidas e perceber se isto faz sentido para os dois.",
      "faq.q13": "O que acontece realmente numa sessão?",
      "faq.a13": "Começamos por alinhar e falar do que se sente confortável nesse dia. A partir daí, vamos com calma. Podemos conversar, sentar-nos ao pé, dar colo, rir, estar em silêncio ou simplesmente descansar juntos. Não há lista de tarefas nem nada que tenhas de fazer. No fim, há sempre um tempo para integrar.",
      "faq.q14": "E se me sentir com nervos ou sem jeito?",
      "faq.a14": "Não faz mal. Partilhar toque com alguém novo pode parecer vulnerável, pouco familiar ou simplesmente um pouco estranho no início. Podemos ir com calma. Estar sem jeito também é bem-vindo.",
      "faq.q15": "Preciso de saber o que quero?",
      "faq.a15": "De todo. Podes saber exactamente que tipo de toque te faz bem, ou podes não ter ideia nenhuma. Descobrimos juntos.",
      "faq.q16": "O que visto?",
      "faq.a16": "Algo limpo, confortável e em que seja fácil relaxar. Basicamente, o que vestirias para te encolheres num sofá. Ambos ficamos vestidos durante toda a sessão.",
      "faq.q17": "Quanto duram as sessões?",
      "faq.a17": "Há sessões de 60, 90 ou 120 minutos. Se for a primeira vez, podemos perceber juntos por onde começar.",
      "contact.h1": "Contacto",
      "contact.lede": "Diz-me o quanto quiseres — ou quase nada. Seguimos daí, normalmente com uma chamada de apresentação gratuita antes de qualquer sessão.",
      "contact.note": "Escrever-me não marca uma sessão nem te compromete com nada.",
      "form.name": "Nome *",
      "form.namePh": "Como te chamo?",
      "form.pronouns": "Pronomes",
      "form.pronounsPh": "ex. ela/dela, ele/dele, elu/delu",
      "form.email": "E-mail *",
      "form.phone": "Telemóvel *",
      "form.free": "Quando costumas estar livre? *",
      "form.freePh": "ex. noites durante a semana, ou sábados de manhã",
      "form.note": "Algo que gostasses que eu soubesse",
      "form.notePh": "Opcional. Perguntas, necessidades ou o que quiseres que eu saiba antes da chamada.",
      "form.send": "Enviar mensagem",
      "form.sending": "A enviar…",
      "form.thanks": "Obrigada.",
      "form.thanksp": "Respondo-te em breve. Escrever-me não marca uma sessão nem te compromete com nada — podemos ir com calma a partir daqui.",
      "form.error": "Algo correu mal ao enviar o formulário. Tenta outra vez, ou escreve-me directamente.",
    },
  };

  function readStored() {
    try {
      return localStorage.getItem(STORAGE);
    } catch (e) {
      return null;
    }
  }

  function writeStored(lang) {
    try {
      localStorage.setItem(STORAGE, lang);
    } catch (e) {}
  }

  function detect() {
    var params = new URLSearchParams(location.search);
    var query = params.get("lang");
    if (query === "pt" || query === "en") return query;
    var stored = readStored();
    if (stored === "pt" || stored === "en") return stored;
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  function t(key) {
    var pack = strings[state.lang] || strings.en;
    return pack[key] != null ? pack[key] : (strings.en[key] || key);
  }

  function setText(el, value) {
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  function apply() {
    document.documentElement.lang = htmlLang[state.lang] || "en";
    document.documentElement.setAttribute("data-lang", state.lang);

    var page = document.documentElement.getAttribute("data-page") || "home";
    document.title = t("meta." + page + "Title");

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta." + page + "Desc"));

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.ogHomeTitle"));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("meta.ogHomeDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      setText(el, t(el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-set") === state.lang ? "true" : "false");
    });

    document.documentElement.classList.add("i18n-ready");
    syncUrl(state.lang);
  }

  function syncUrl(lang) {
    var url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "pt") return;
    state.lang = lang;
    writeStored(lang);
    syncUrl(lang);
    apply();
  }

  var state = { lang: detect() };

  window.COLO_I18N = {
    t: t,
    lang: function () {
      return state.lang;
    },
    setLang: setLang,
    apply: apply,
  };

  function bind() {
    document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-set"));
      });
    });
    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
