/* MENT CREATIVA - chatbot FAQ propio, local y sin terceros.
 * Se carga con defer; no hace peticiones de red ni escribe cookies.
 */
(function () {
  'use strict';

  var D = {
    es: {
      open: 'Abrir chat', title: 'Chat MENT CREATIVA', close: 'Cerrar',
      placeholder: 'Escribe tu mensaje...', send: 'Enviar',
      quick: [['Servicios', 'servicios'], ['Portfolio', 'portfolio'], ['Presupuesto', 'presupuesto'], ['Contacto', 'contacto']],
      greeting: '¡Hola! Soy el asistente de MENT CREATIVA. Puedo ayudarte con servicios, portfolio, presupuesto o contacto. ¿Qué necesitas?',
      fallback: 'Puedo ayudarte con <strong>servicios</strong>, <strong>portfolio</strong>, <strong>presupuesto</strong> o <strong>contacto</strong>. Elige una opción o escribe tu pregunta.',
      intents: [
        [['servicio', 'servicios', 'que haceis', 'web', 'seo', 'diseno', 'diseno web', 'marketing'],
          'Trabajamos <strong>identidad corporativa, diseño y desarrollo web, posicionamiento SEO, hosting y contenido</strong>. <a href="./servicios.html">Ver todos los servicios</a>.'],
        [['portfolio', 'trabajos', 'proyectos', 'proyecto', 'ejemplos'],
          'Puedes ver algunos de nuestros trabajos en el <a href="./portfolio.html">portfolio</a>.'],
        [['presupuesto', 'precio', 'cuanto cuesta', 'cotizacion', 'tarifa', 'cuanto', 'coste'],
          'Para un presupuesto necesitamos saber qué necesitas. Rellena el <a href="./hola.html">formulario de contacto</a> o escríbenos a <a href="mailto:joancarlesdisseny@hotmail.com">joancarlesdisseny@hotmail.com</a>.'],
        [['equipo', 'staff', 'quienes sois', 'personas', 'agencia'],
          'Conoce al equipo en la página de <a href="./staff.html">staff</a>.'],
        [['contacto', 'contactar', 'email', 'correo', 'telefono', 'llamar', 'hablar'],
          'Escríbenos a <a href="mailto:joancarlesdisseny@hotmail.com">joancarlesdisseny@hotmail.com</a> o usa el <a href="./hola.html">formulario</a>.'],
        [['privacidad', 'aviso legal', 'legal', 'politica', 'datos'],
          'Nuestra política está en el <a href="./aviso-legal.html">aviso legal</a>.'],
        [['wines', 'vino', 'vinos'],
          'Tenemos una sección dedicada al mundo del vino: <a href="./wines.html">Wines</a>.'],
        [['3d', 'impresion 3d', 'impresion', 'printing'],
          'Trabajamos también con impresión 3D: <a href="./impresion-3d.html">Impresión 3D</a>.'],
        [['realidad aumentada', 'realidad aumentada', 'ar'],
          'Descubre nuestra sección de <a href="./realidad-aumentada.html">realidad aumentada</a>.'],
        [['noticias', 'news', 'novedades', 'blog'],
          'Las novedades están en <a href="./news.html">News</a>.'],
        [['idioma', 'idiomas', 'lenguaje', 'lengua'],
          'Puedes cambiar de idioma con la bandera de la esquina superior derecha.'],
        [['gracias', 'muchas gracias'],
          '¡De nada! Si necesitas algo más, estoy aquí.']
      ]
    },
    ca: {
      open: 'Obrir xat', title: 'Chat MENT CREATIVA', close: 'Tancar',
      placeholder: 'Escriu el teu missatge...', send: 'Enviar',
      quick: [['Serveis', 'servicios'], ['Portfoli', 'portfolio'], ['Pressupost', 'presupuesto'], ['Contacte', 'contacto']],
      greeting: 'Hola! Sóc l’assistent de MENT CREATIVA. Puc ajudar-te amb serveis, portfoli, pressupost o contacte. Què necessites?',
      fallback: 'Puc ajudar-te amb <strong>serveis</strong>, <strong>portfoli</strong>, <strong>pressupost</strong> o <strong>contacte</strong>. Tria una opció o escriu la teva pregunta.',
      intents: [
        [['servei', 'serveis', 'que feu', 'web', 'seo', 'disseny', 'marketing'],
          'Treballem <strong>identitat corporativa, disseny i desenvolupament web, posicionament SEO, hosting i contingut</strong>. <a href="./servicios.html">Veure tots els serveis</a>.'],
        [['portfoli', 'treballs', 'projectes', 'projecte', 'exemples'],
          'Pots veure alguns dels nostres treballs al <a href="./portfolio.html">portfoli</a>.'],
        [['pressupost', 'preu', 'quant costa', 'tarifa', 'quant', 'costic'],
          'Per a un pressupost necessitem saber què necessites. Omple el <a href="./hola.html">formulari de contacte</a> o escriu-nos a <a href="mailto:info@mentcreativa.es">info@mentcreativa.es</a>.'],
        [['equip', 'staff', 'qui sou', 'persones', 'agencia'],
          'Coneix l’equip a la pàgina de <a href="./staff.html">staff</a>.'],
        [['contacte', 'contactar', 'correu', 'email', 'telefon', 'trucar', 'parlar'],
          'Escriu-nos a <a href="mailto:info@mentcreativa.es">info@mentcreativa.es</a> o fes servir el <a href="./hola.html">formulari</a>.'],
        [['privacitat', 'avis legal', 'legal', 'politica', 'dades'],
          'La nostra política és a l’<a href="./aviso-legal.html">avis legal</a>.'],
        [['wines', 'vi', 'vins'],
          'Tenim una secció dedicada al món del vi: <a href="./wines.html">Wines</a>.'],
        [['3d', 'impressio 3d', 'impressio', 'printing'],
          'També treballem amb impressió 3D: <a href="./impresion-3d.html">Impressió 3D</a>.'],
        [['realitat augmentada', 'ra', 'ar'],
          'Descobreix la nostra secció de <a href="./realidad-aumentada.html">realitat augmentada</a>.'],
        [['noticies', 'news', 'novetats', 'blog'],
          'Les novetats són a <a href="./news.html">News</a>.'],
        [['idioma', 'idiomes', 'llengua'],
          'Pots canviar d’idioma amb la bandera de la cantonada superior dreta.'],
        [['gracies', 'moltes gracies'],
          'De res! Si necessites alguna cosa més, sóc aquí.']
      ]
    },
    en: {
      open: 'Open chat', title: 'Chat MENT CREATIVA', close: 'Close',
      placeholder: 'Type your message...', send: 'Send',
      quick: [['Services', 'servicios'], ['Portfolio', 'portfolio'], ['Quote', 'presupuesto'], ['Contact', 'contacto']],
      greeting: 'Hi! I am the MENT CREATIVA assistant. I can help with services, portfolio, quotes or contact. What do you need?',
      fallback: 'I can help you with <strong>services</strong>, <strong>portfolio</strong>, <strong>quotes</strong> or <strong>contact</strong>. Choose an option or type your question.',
      intents: [
        [['service', 'services', 'what do you do', 'web', 'seo', 'design', 'marketing'],
          'We work on <strong>corporate identity, web design and development, SEO, hosting and content</strong>. <a href="./servicios.html">See all services</a>.'],
        [['portfolio', 'work', 'projects', 'project', 'examples'],
          'You can see some of our work in the <a href="./portfolio.html">portfolio</a>.'],
        [['quote', 'budget', 'price', 'how much', 'cost', 'rate'],
          'For a quote we need to know what you need. Fill in the <a href="./hola.html">contact form</a> or email <a href="mailto:joancarlesdisseny@hotmail.com">joancarlesdisseny@hotmail.com</a>.'],
        [['team', 'staff', 'who are you', 'people', 'agency'],
          'Meet the team on our <a href="./staff.html">staff</a> page.'],
        [['contact', 'email', 'phone', 'call', 'talk'],
          'Email <a href="mailto:joancarlesdisseny@hotmail.com">joancarlesdisseny@hotmail.com</a> or use the <a href="./hola.html">form</a>.'],
        [['privacy', 'legal', 'terms', 'data'],
          'Our policy is on the <a href="./aviso-legal.html">legal notice</a> page.'],
        [['wines', 'wine', 'wines'],
          'We have a section dedicated to wine: <a href="./wines.html">Wines</a>.'],
        [['3d', '3d printing', 'printing'],
          'We also work with 3D printing: <a href="./impresion-3d.html">3D printing</a>.'],
        [['augmented reality', 'ar'],
          'Discover our <a href="./realidad-aumentada.html">augmented reality</a> section.'],
        [['news', 'blog', 'updates'],
          'Latest news is in <a href="./news.html">News</a>.'],
        [['language', 'languages'],
          'You can change the language with the flag in the top right corner.'],
        [['thanks', 'thank you', 'thank'],
          'You are welcome! I am here if you need anything else.']
      ]
    },
    fr: {
      open: 'Ouvrir le chat', title: 'Chat MENT CREATIVA', close: 'Fermer',
      placeholder: 'Écrivez votre message...', send: 'Envoyer',
      quick: [['Services', 'servicios'], ['Portfolio', 'portfolio'], ['Devis', 'presupuesto'], ['Contact', 'contacto']],
      greeting: 'Bonjour ! Je suis l’assistant MENT CREATIVA. Je peux vous aider avec les services, le portfolio, un devis ou le contact. Que souhaitez-vous ?',
      fallback: 'Je peux vous aider avec les <strong>services</strong>, le <strong>portfolio</strong>, un <strong>devis</strong> ou le <strong>contact</strong>. Choisissez une option ou écrivez votre question.',
      intents: [
        [['service', 'services', 'que faites', 'web', 'seo', 'design', 'marketing'],
          'Nous travaillons sur <strong>l’identité visuelle, la création et le développement web, le référencement SEO, l’hébergement et le contenu</strong>. <a href="./servicios.html">Voir tous les services</a>.'],
        [['portfolio', 'travaux', 'projets', 'projet', 'exemples'],
          'Vous pouvez voir certains de nos travaux dans le <a href="./portfolio.html">portfolio</a>.'],
        [['devis', 'prix', 'combien', 'coût', 'tarif', 'cotation'],
          'Pour un devis, nous devons savoir ce dont vous avez besoin. Remplissez le <a href="./hola.html">formulaire de contact</a> ou écrivez-nous à <a href="mailto:info@mentcreativa.es">info@mentcreativa.es</a>.'],
        [['equipe', 'staff', 'qui etes', 'personnes', 'agence'],
          'Découvrez l’équipe sur la page <a href="./staff.html">staff</a>.'],
        [['contact', 'email', 'telephone', 'appeler', 'parler'],
          'Écrivez-nous à <a href="mailto:info@mentcreativa.es">info@mentcreativa.es</a> ou utilisez le <a href="./hola.html">formulaire</a>.'],
        [['confidentialite', 'mentions legales', 'legal', 'donnees'],
          'Notre politique est sur la page <a href="./aviso-legal.html">mentions légales</a>.'],
        [['wines', 'vin', 'vins'],
          'Nous avons une section dédiée au vin : <a href="./wines.html">Wines</a>.'],
        [['3d', 'impression 3d', 'impression', 'printing'],
          'Nous travaillons aussi avec l’impression 3D : <a href="./impresion-3d.html">Impression 3D</a>.'],
        [['realite augmentee', 'ra', 'ar'],
          'Découvrez notre section de <a href="./realidad-aumentada.html">réalité augmentée</a>.'],
        [['actualites', 'news', 'nouvelles', 'blog'],
          'Les actualités sont dans <a href="./news.html">News</a>.'],
        [['langue', 'langues', 'idiome'],
          'Vous pouvez changer de langue avec le drapeau en haut à droite.'],
        [['merci', 'merci beaucoup'],
          'De rien ! Je suis là si vous avez besoin d’autre chose.']
      ]
    }
  };

  var seg = (location.pathname.split('/')[1] || '').toLowerCase();
  var lang = D[seg] ? seg : 'es';
  var t = D[lang];

  var css = document.createElement('style');
  css.id = 'ment-chat-css';
  css.textContent = [
    '.ment-chat-panel{position:fixed;right:16px;bottom:84px;width:min(320px,calc(100vw - 32px));height:min(440px,calc(100vh - 110px));background:#fff;border:2px solid #007a68;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;overflow:hidden;font:14px/1.45 Arial,sans-serif;color:#222;z-index:2147483000}',
    '.ment-chat-panel[hidden]{display:none!important}',
    '.ment-chat-head{background:#007a68;color:#fff;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;font-weight:bold;flex:0 0 auto}',
    '.ment-chat-close{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.7);border-radius:6px;min-height:34px;padding:0 10px;cursor:pointer;font-size:13px}',
    '.ment-chat-log{flex:1;overflow:auto;padding:12px;background:#fafcfc}',
    '.ment-chat-msg{margin:0 0 10px;max-width:90%;padding:8px 10px;border-radius:10px;word-wrap:break-word}',
    '.ment-chat-msg.bot{background:#eef6f4;color:#222;border:1px solid #d5e8e4}',
    '.ment-chat-msg.user{background:#007a68;color:#fff;margin-left:auto}',
    '.ment-chat-msg a{color:#005a4d;text-decoration:underline;font-weight:bold}',
    '.ment-chat-quick{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px;background:#fafcfc;flex:0 0 auto}',
    '.ment-chat-quick button{background:#fff;color:#007a68;border:1px solid #007a68;border-radius:16px;min-height:32px;padding:0 10px;cursor:pointer;font-size:13px}',
    '.ment-chat-form{display:flex;gap:6px;padding:10px;border-top:1px solid #d5e8e4;background:#fff;flex:0 0 auto}',
    '.ment-chat-input{flex:1;min-width:0;height:40px;border:1px solid #777;border-radius:6px;padding:0 10px;font-size:14px;color:#222}',
    '.ment-chat-send{background:#007a68;color:#fff;border:0;border-radius:6px;min-width:74px;min-height:40px;cursor:pointer;font-weight:bold}',
    '@media (max-width:480px){.ment-chat-panel{right:8px;bottom:80px;width:calc(100vw - 16px);height:min(440px,calc(100vh - 100px))}}'
  ].join('\n');
  document.head.appendChild(css);

  var btn = document.getElementById('ment-chat-open');
  if (!btn) {
    btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'ment-chat-open';
    btn.className = 'ment-chat-btn';
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.7 1.2 5.2 3.2 6.9L4 22l4.1-2.1c1.2.4 2.6.6 3.9.6 5.5 0 10-4.1 10-9.3S17.5 2 12 2z"/></svg>';
  }

  var panel = document.createElement('div');
  panel.id = 'ment-chat-panel';
  panel.className = 'ment-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', t.title);
  panel.hidden = true;
  panel.innerHTML =
    '<div class="ment-chat-head"><span>' + t.title + '</span>' +
    '<button type="button" class="ment-chat-close" id="ment-chat-close">' + t.close + '</button></div>' +
    '<div class="ment-chat-log" id="ment-chat-log" role="log" aria-live="polite" aria-relevant="additions"></div>' +
    '<div class="ment-chat-quick" id="ment-chat-quick"></div>' +
    '<form class="ment-chat-form" id="ment-chat-form">' +
    '<input class="ment-chat-input" id="ment-chat-input" type="text" autocomplete="off" aria-label="' + t.placeholder + '" placeholder="' + t.placeholder + '"/>' +
    '<button class="ment-chat-send" type="submit">' + t.send + '</button></form>';

  if (!document.body.contains(btn)) document.body.appendChild(btn);
  document.body.appendChild(panel);
  btn.setAttribute('aria-label', t.open);
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'ment-chat-panel');

  var log = document.getElementById('ment-chat-log');
  var quick = document.getElementById('ment-chat-quick');
  var form = document.getElementById('ment-chat-form');
  var input = document.getElementById('ment-chat-input');
  var closeBtn = document.getElementById('ment-chat-close');
  var greeted = false;

  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function botSay(html) {
    var d = document.createElement('div');
    d.className = 'ment-chat-msg bot';
    d.innerHTML = html;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function userSay(text) {
    var d = document.createElement('div');
    d.className = 'ment-chat-msg user';
    d.textContent = text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function showQuick(show) {
    quick.innerHTML = '';
    if (!show) return;
    t.quick.forEach(function (q) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = q[0];
      b.addEventListener('click', function () { ask(q[1]); });
      quick.appendChild(b);
    });
  }

  function respond(key) {
    var q = norm(key);
    var best = -1;
    var bestLen = 0;
    for (var i = 0; i < t.intents.length; i++) {
      var words = t.intents[i][0];
      for (var j = 0; j < words.length; j++) {
        var w = norm(words[j]);
        if (w && q.indexOf(w) >= 0 && w.length > bestLen) {
          best = i;
          bestLen = w.length;
        }
      }
    }
    if (best >= 0) {
      botSay(t.intents[best][1]);
      showQuick(false);
    } else {
      botSay(t.fallback);
      showQuick(true);
    }
  }

  function ask(text) {
    userSay(text);
    respond(text);
  }

  function openChat() {
    panel.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    if (!greeted) {
      greeted = true;
      botSay(t.greeting);
      showQuick(true);
    }
    input.focus();
  }

  function closeChat() {
    panel.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  btn.addEventListener('click', function () { panel.hidden ? openChat() : closeChat(); });
  closeBtn.addEventListener('click', closeChat);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (!v) return;
    input.value = '';
    ask(v);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closeChat();
  });
  if (window.__mentChatPendingOpen) openChat();
})();
