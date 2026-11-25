/* =====================================================================
   app.js  –  LAS FUNCIONES DE LA PÁGINA
   Para cargar o cambiar animales NO hace falta tocar este archivo:
   los datos están en config.js y en los archivos datos-*.js

   ÍNDICE
   1. Utilidades ..... $  linkWhatsApp  formatearFecha  avisoVacio  marcarFiltro
   2. Tarjetas ....... tarjetaAdopcion  tarjetaDifusion  tarjetaPerdida  tarjetaAdoptado
   3. Secciones ...... mostrarAdopciones  mostrarDifusion  mostrarPerdidos  mostrarAdoptados
   4. Vistas ......... mostrarVista  activarNavegacion
   5. Extras ......... activarFiltros  activarCopiarAlias  activarMenuMovil  activarLinksDeContacto
   6. Arranque ....... iniciar()  (se llama sola al final de este archivo)
   (la función fotoRespaldo está en el <head> de index.html)
   ===================================================================== */


/* ---------- 1. UTILIDADES ---------- */

const $ = id => document.getElementById(id);

// Arma el link de WhatsApp con el mensaje ya escrito. Si no le pasás número, usa CELU_VICTORIA.
const linkWhatsApp = (texto, numero) => `https://wa.me/${numero || CELU_VICTORIA}?text=${encodeURIComponent(texto)}`;

// '2026-11-22' -> '22/11/2026'
const formatearFecha = fechaISO => {
  const [anio, mes, dia] = fechaISO.split('-').map(Number);
  return new Date(anio, mes - 1, dia).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

// Cartelito que se muestra cuando una lista está vacía
const avisoVacio = texto =>
  `<p class="col-span-full bg-white rounded-2xl p-6 border border-marron/10 text-center font-semibold">${texto}</p>`;

// Pinta el botón de filtro activo y despinta los demás
function marcarFiltro(botones, atributo, filtro) {
  botones.forEach(b => {
    const activo = b.dataset[atributo] === filtro;
    b.setAttribute('aria-pressed', activo);
    b.classList.toggle('bg-salvia-oscuro', activo);
    b.classList.toggle('text-white', activo);
    b.classList.toggle('bg-white', !activo);
  });
}


/* ---------- 2. TARJETAS ----------
   Cada una recibe los datos de UN animal y devuelve el HTML de su tarjeta. */

const tarjetaAdopcion = a => `
  <article class="bg-white rounded-[2rem] overflow-hidden border border-marron/10 flex flex-col">
    <div class="relative">
      <img src="${a.foto}" alt="${a.nombre}, ${a.especie} en adopción" loading="lazy" onerror="fotoRespaldo(this)" class="w-full h-56 object-cover">
      <span class="absolute top-3 left-3 text-white text-sm font-bold px-3 py-1 rounded-full ${a.estado === 'Urgente' ? 'bg-[#C0532E]' : 'bg-salvia-oscuro'}">${a.estado}</span>
    </div>
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div>
        <h3 class="font-titulo font-extrabold text-xl">${a.nombre}</h3>
        <p class="text-sm text-marron/80">${a.edad}</p>
      </div>
      <ul class="flex flex-wrap gap-1.5">
        ${a.etiquetas.map(e => `<li class="text-xs font-bold bg-crema border border-marron/10 rounded-full px-2.5 py-1">${e}</li>`).join('')}
      </ul>
      <p class="text-sm leading-relaxed flex-1">${a.historia}</p>
      <a href="${linkWhatsApp('Hola rescataditos.tuc! Me interesa adoptar a ' + a.nombre, a.telefono)}" target="_blank" rel="noopener noreferrer" class="btn btn-terracota">Quiero adoptarlo</a>
    </div>
  </article>`;

const tarjetaDifusion = d => {
  const mensajeWa = `Hola! Vi a ${d.nombre} en la web de rescataditos.tuc (necesita ${d.necesita.toLowerCase()}) y quiero ayudar. ¿Me pasan más info?`;
  return `
  <article class="bg-white rounded-[2rem] overflow-hidden border border-marron/10 flex flex-col">
    <div class="relative">
      <img src="${d.foto}" alt="${d.nombre}, ${d.especie} en difusión en ${d.zona}" loading="lazy" onerror="fotoRespaldo(this)" class="w-full h-56 object-cover">
      <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
        <span class="bg-salvia-oscuro text-white text-xs font-bold px-3 py-1 rounded-full">${d.necesita}</span>
        ${d.urgente ? '<span class="bg-[#C0532E] text-white text-xs font-bold px-3 py-1 rounded-full">Urgente</span>' : ''}
      </div>
      <span class="absolute bottom-3 left-3 bg-marron/85 text-crema text-xs font-bold px-2.5 py-0.5 rounded-full">En difusión</span>
    </div>
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div>
        <h3 class="font-titulo font-extrabold text-xl">${d.nombre}</h3>
        <p class="text-sm font-semibold text-marron/80 capitalize">${d.especie} · Zona ${d.zona}</p>
      </div>
      <p class="text-sm leading-relaxed flex-1">${d.historia}</p>
      <a href="${linkWhatsApp(mensajeWa, d.telefono)}" target="_blank" rel="noopener noreferrer" class="btn btn-terracota">Quiero ayudar a ${d.nombre}</a>
    </div>
  </article>`;
};

const tarjetaPerdida = m => {
  const seBusca = m.estado === 'Se busca';
  const mensajeWa = `Hola! Vi a ${m.nombre} en la web de rescataditos.tuc y tengo información sobre la mascota que se perdió en ${m.zona}`;
  const pieTarjeta = seBusca
    ? `<a href="${linkWhatsApp(mensajeWa, m.telefono)}" target="_blank" rel="noopener noreferrer" class="btn btn-terracota">Tengo información</a>`
    : `<p class="font-titulo font-extrabold text-salvia-oscuro text-center py-2">¡Volvió a casa!</p>`;
  return `
  <article class="bg-white rounded-[2rem] overflow-hidden border border-marron/10 flex flex-col">
    <div class="relative">
      <img src="${m.foto}" alt="${m.nombre}, ${m.especie} perdido en ${m.zona}" loading="lazy" onerror="fotoRespaldo(this)" class="w-full h-56 object-cover">
      <span class="absolute top-3 left-3 text-white text-sm font-bold px-3 py-1 rounded-full ${seBusca ? 'bg-[#C0532E]' : 'bg-salvia-oscuro'}">${m.estado}</span>
    </div>
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div>
        <h3 class="font-titulo font-extrabold text-xl">${m.nombre}</h3>
        <p class="text-sm font-semibold text-marron/80 capitalize">${m.especie} · Zona ${m.zona}</p>
        <p class="text-xs text-marron/70 mt-0.5">Visto por última vez: ${formatearFecha(m.fecha)}</p>
      </div>
      <p class="text-sm leading-relaxed flex-1">${m.descripcion}</p>
      ${pieTarjeta}
    </div>
  </article>`;
};

const tarjetaAdoptado = a => `
  <article class="bg-white rounded-[2rem] overflow-hidden border border-marron/10 flex flex-col">
    <div class="relative">
      <img src="${a.foto}" alt="${a.nombre}, rescatadito ya adoptado" loading="lazy" onerror="fotoRespaldo(this)" class="w-full h-60 object-cover">
      <span class="absolute top-3 left-3 bg-salvia-oscuro text-white text-sm font-bold px-3 py-1 rounded-full">¡Adoptado!</span>
    </div>
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div>
        <h3 class="font-titulo font-extrabold text-xl">${a.nombre}</h3>
        <p class="text-xs font-bold text-terracota-oscuro mt-0.5">${a.fecha}</p>
      </div>
      <p class="text-sm leading-relaxed flex-1">${a.historia}</p>
      <p class="pt-2 border-t border-marron/10 font-titulo font-bold text-sm text-salvia-oscuro text-center">Hoy vive feliz con su familia 🐾</p>
    </div>
  </article>`;


/* ---------- 3. SECCIONES ----------
   Cada una dibuja sus tarjetas dentro de su grilla del index.html. */

function mostrarAdopciones() {
  $('grilla').innerHTML = ANIMALES.map(tarjetaAdopcion).join('');
}

// filtro: 'todos', 'Adopción' o 'Tránsito'
function mostrarDifusion(filtro = 'todos') {
  marcarFiltro(document.querySelectorAll('[data-filtro-difusion]'), 'filtroDifusion', filtro);
  $('grillaDifusion').innerHTML = DIFUSION
    .filter(d => {
      if (filtro === 'Adopción') return d.necesita === 'Adopción' || d.necesita === 'Adopción o tránsito';
      if (filtro === 'Tránsito') return d.necesita === 'Tránsito' || d.necesita === 'Adopción o tránsito';
      return true;
    })
    .map(tarjetaDifusion).join('');
}

// filtro: 'todos', 'perro' o 'gato'. Las que "Se busca" aparecen primero.
function mostrarPerdidos(filtro = 'todos') {
  const contenedor = $('grillaPerdidos');
  if (!contenedor) return;
  marcarFiltro(document.querySelectorAll('[data-filtro-perdidos]'), 'filtroPerdidos', filtro);

  if (!MASCOTAS_PERDIDAS.length) {
    contenedor.innerHTML = avisoVacio('Por ahora no tenemos mascotas buscadas. ¡Eso es una buena noticia!');
    return;
  }
  const filtradas = MASCOTAS_PERDIDAS
    .filter(m => filtro === 'todos' || m.especie === filtro)
    .sort((a, b) => (a.estado === 'Se busca' ? 0 : 1) - (b.estado === 'Se busca' ? 0 : 1));

  contenedor.innerHTML = filtradas.length
    ? filtradas.map(tarjetaPerdida).join('')
    : avisoVacio('No hay mascotas cargadas en esta categoría por el momento.');
}

function mostrarAdoptados() {
  const contenedor = $('grillaAdoptados');
  if (!contenedor) return;
  contenedor.innerHTML = ADOPTADOS.length
    ? ADOPTADOS.map(tarjetaAdoptado).join('')
    : avisoVacio('Pronto vamos a subir las historias de nuestros rescataditos adoptados.');
}


/* ---------- 4. VISTAS ----------
   La página tiene 3 "vistas": la principal, las mascotas perdidas y los ya adoptados.
   mostrarVista('principal' | 'perdidos' | 'adoptados') muestra una y esconde las otras. */

function mostrarVista(vista, guardarHistorial = true) {
  $('vistaPrincipal')?.classList.toggle('hidden', vista !== 'principal');
  $('vistaPerdidos')?.classList.toggle('hidden', vista !== 'perdidos');
  $('vistaAdoptados')?.classList.toggle('hidden', vista !== 'adoptados');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (guardarHistorial) {
    try {
      const hashes = { perdidos: '#mascotas-perdidas', adoptados: '#ya-adoptados' };
      const nuevaUrl = hashes[vista] || (window.location.pathname + window.location.search);
      history.pushState({ vista }, '', nuevaUrl);
    } catch (e) {}
  }
}

// Conecta los botones de ver/volver, el botón "atrás" del navegador y los links del menú
function activarNavegacion() {
  $('btnVerPerdidos')?.addEventListener('click', () => mostrarVista('perdidos'));
  $('btnVolverPerdidos')?.addEventListener('click', () => mostrarVista('principal'));
  $('btnVerAdoptados')?.addEventListener('click', () => mostrarVista('adoptados'));
  $('btnVolverAdoptados')?.addEventListener('click', () => mostrarVista('principal'));

  window.addEventListener('popstate', () => {
    if (window.location.hash === '#mascotas-perdidas') mostrarVista('perdidos', false);
    else if (window.location.hash === '#ya-adoptados') mostrarVista('adoptados', false);
    else mostrarVista('principal', false);
  });

  // Si estás en otra vista y tocás un link del menú (Donar, Tránsito...), vuelve a la principal
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if ($('vistaPrincipal')?.classList.contains('hidden')) mostrarVista('principal');
    });
  });

  // Si entran directo a un link de una vista (por ejemplo, compartido por WhatsApp), la mostramos
  if (window.location.hash === '#mascotas-perdidas') mostrarVista('perdidos', false);
  if (window.location.hash === '#ya-adoptados') mostrarVista('adoptados', false);
}


/* ---------- 5. EXTRAS ---------- */

// Conecta los botones de filtro (Todos / Adopción / Tránsito y Todos / Perros / Gatos)
function activarFiltros() {
  document.querySelectorAll('[data-filtro-difusion]').forEach(b =>
    b.addEventListener('click', () => mostrarDifusion(b.dataset.filtroDifusion)));
  document.querySelectorAll('[data-filtro-perdidos]').forEach(b =>
    b.addEventListener('click', () => mostrarPerdidos(b.dataset.filtroPerdidos)));
}

// Botón "Copiar alias": copia al portapapeles y cambia el texto por unos segundos
function activarCopiarAlias() {
  $('copiarAlias').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ALIAS_MP);
    } catch (e) { // plan B para navegadores que no permiten clipboard
      const t = document.createElement('textarea');
      t.value = ALIAS_MP; document.body.appendChild(t); t.select();
      document.execCommand('copy'); t.remove();
    }
    const btn = $('copiarAlias');
    btn.textContent = '¡Alias copiado!';
    setTimeout(() => btn.textContent = 'Copiar alias', 2500);
  });
}

// Menú hamburguesa (celular)
function activarMenuMovil() {
  const menu = $('menuMovil'), menuBtn = $('menuBtn');
  const alternarMenu = abrir => {
    menu.classList.toggle('hidden', !abrir);
    menu.classList.toggle('flex', abrir);
    menuBtn.setAttribute('aria-expanded', abrir);
  };
  menuBtn.addEventListener('click', () => alternarMenu(menu.classList.contains('hidden')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => alternarMenu(false)));
}

// Completa los links de Instagram y WhatsApp y el alias, usando lo que está en config.js
function activarLinksDeContacto() {
  document.querySelectorAll('[data-ig]').forEach(a => a.href = INSTAGRAM_URL);
  document.querySelectorAll('[data-wa]').forEach(a => a.href = linkWhatsApp(a.dataset.wa));
  $('alias').textContent = ALIAS_MP;
}


/* ---------- 6. ARRANQUE ----------
   Acá se llaman, en orden, todas las funciones de arriba. */

function iniciar() {
  activarLinksDeContacto();
  mostrarAdopciones();
  mostrarDifusion();
  mostrarPerdidos();
  mostrarAdoptados();
  activarFiltros();
  activarNavegacion();
  activarCopiarAlias();
  activarMenuMovil();
}

iniciar();
