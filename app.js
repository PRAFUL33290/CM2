const storageKey = 'cm2-bal-2026-state';

const defaultTracks = [
  { id: 1, title: 'Merry Go Round of Life', artist: 'Joe Hisaishi', style: 'Ambiance Japon', energy: 2, moment: 'Accueil', recommended: true },
  { id: 2, title: 'Blue Bird', artist: 'Ikimono-gakari', style: 'Generiques Anime', energy: 4, moment: 'Ouverture', recommended: true },
  { id: 3, title: 'Gurenge', artist: 'LiSA', style: 'Generiques Anime', energy: 5, moment: 'Pic ambiance', recommended: true },
  { id: 4, title: 'Tokyo Drift', artist: 'Teriyaki Boyz', style: 'Ambiance Japon', energy: 4, moment: 'Transition', recommended: false },
  { id: 5, title: 'Sparkle', artist: 'RADWIMPS', style: 'Ambiance Japon', energy: 3, moment: 'Photo souvenir', recommended: false },
  { id: 6, title: 'APT', artist: 'ROSÉ & Bruno Mars', style: 'K-POP', energy: 5, moment: 'Dancefloor', recommended: true },
  { id: 7, title: 'Dynamite', artist: 'BTS', style: 'K-POP', energy: 5, moment: 'Dancefloor', recommended: true },
  { id: 8, title: 'Butter', artist: 'BTS', style: 'K-POP', energy: 5, moment: 'Dancefloor', recommended: true },
  { id: 9, title: 'How You Like That', artist: 'BLACKPINK', style: 'K-POP', energy: 5, moment: 'Battle Dance', recommended: true },
  { id: 10, title: 'Cupid', artist: 'FIFTY FIFTY', style: 'TikTok Kids Friendly', energy: 4, moment: 'TikTok', recommended: true },
  { id: 11, title: 'Macarena', artist: 'Los Del Rio', style: 'Danse Facile', energy: 4, moment: 'Animation', recommended: true },
  { id: 12, title: 'Jerusalema', artist: 'Master KG', style: 'Danse Facile', energy: 4, moment: 'Animation', recommended: false },
  { id: 13, title: 'Waka Waka', artist: 'Shakira', style: 'Danse Facile', energy: 5, moment: 'Animation', recommended: true },
  { id: 14, title: 'Magic In The Air', artist: 'Magic System', style: 'Hits CM2 2026', energy: 5, moment: 'Animation', recommended: true },
  { id: 15, title: 'Party Rock Anthem', artist: 'LMFAO', style: 'Battle Dance', energy: 5, moment: 'Battle Dance', recommended: true },
  { id: 16, title: 'Timber', artist: 'Pitbull feat. Kesha', style: 'Battle Dance', energy: 5, moment: 'Battle Dance', recommended: false },
  { id: 17, title: 'Watch Me', artist: 'Silentó', style: 'Battle Dance', energy: 4, moment: 'Battle Dance', recommended: false },
  { id: 18, title: 'Peaches', artist: 'Jack Black', style: 'Jeux Video', energy: 3, moment: 'Jeux', recommended: false },
  { id: 19, title: 'Super Mario Theme', artist: 'Koji Kondo', style: 'Jeux Video', energy: 4, moment: 'Blind Test', recommended: true },
  { id: 20, title: 'Megalovania', artist: 'Toby Fox', style: 'Jeux Video', energy: 5, moment: 'Blind Test', recommended: false },
  { id: 21, title: 'On ecrit sur les murs', artist: 'Kids United', style: 'Fin de Soiree', energy: 3, moment: 'Final', recommended: true },
  { id: 22, title: 'Happy', artist: 'Pharrell Williams', style: 'Fin de Soiree', energy: 4, moment: 'Final', recommended: true },
  { id: 23, title: 'Firework', artist: 'Katy Perry', style: 'Fin de Soiree', energy: 4, moment: 'Final', recommended: true },
  { id: 24, title: 'Training Season', artist: 'Dua Lipa', style: 'Hits CM2 2026', energy: 4, moment: 'Dancefloor', recommended: true }
];

const defaultRequests = [
  { id: 1, firstName: 'Lina', school: 'Arc-en-Ciel', song: 'Dynamite', status: 'En attente' },
  { id: 2, firstName: 'Noa', school: 'Jacques Prévert', song: 'Blue Bird', status: 'Jouee' },
  { id: 3, firstName: 'Ines', school: 'Frida Kahlo', song: 'Waka Waka', status: 'En attente' },
  { id: 4, firstName: 'Sohan', school: 'Arc-en-Ciel', song: 'Mario Theme', status: 'Refusee' },
  { id: 5, firstName: 'Mila', school: 'Frida Kahlo', song: 'Cupid', status: 'En attente' }
];

const schedule = [
  { time: '18:30', title: 'Accueil des enfants', detail: 'Entrée en musique, ambiance Japon et arrivée des classes.' },
  { time: '19:00', title: 'Ouverture officielle', detail: 'Lancement du bal et mot de bienvenue.' },
  { time: '19:15', title: 'Première session danse', detail: 'Premiers tubes connus pour installer l’ambiance.' },
  { time: '19:45', title: 'Animations', detail: 'Jeux rapides, défis express et participation collective.' },
  { time: '20:15', title: 'Blind Test', detail: 'Spécial génériques anime, jeux vidéo et hits CM2.' },
  { time: '20:45', title: 'Battle Dance', detail: 'Duel chorégraphique en équipe avec jury du public.' },
  { time: '21:15', title: 'Photo souvenir', detail: 'Temps calme, visuels manga et captures de groupe.' },
  { time: '21:45', title: 'Dernières musiques', detail: 'Finale grand public, favoris et chansons émotion.' },
  { time: '22:00', title: 'Fin du bal', detail: 'Clôture, remerciements et sortie progressive.' }
];

const animations = [
  { title: 'Blind Test', duration: '20 min', equipment: 'Ecran, buzzer DJ, playlist dédiée', rules: '1 point par bonne réponse, bonus si l’artiste est trouvé.', players: 'Par équipe', status: 'ready' },
  { title: 'Battle Dance', duration: '15 min', equipment: 'Piste libre, playlist énergique', rules: 'Deux groupes, un passage chacun, applaudimètre final.', players: '8 à 12' },
  { title: 'Just Dance', duration: '12 min', equipment: 'TV géante, espace libre', rules: 'Reproduire les mouvements et gagner par synchronisation.', players: '4 à 6' },
  { title: 'Quiz Japon', duration: '10 min', equipment: 'Micro, visuels Tokyo', rules: 'Questions rapides sur manga, culture pop et Japon moderne.', players: 'Par équipe' },
  { title: 'Photo Booth Manga', duration: '15 min', equipment: 'Cadres photo, accessoires manga', rules: 'Passage libre pendant la pause souvenir.', players: 'Libre' },
  { title: 'Roi et Reine de la soirée', duration: '8 min', equipment: 'Urne ou applaudimètre', rules: 'Vote final du public dans la bonne humeur.', players: 'Tous' },
  { title: 'Défis express', duration: '10 min', equipment: 'Cartes défi', rules: 'Mini-défis de 30 secondes entre deux morceaux.', players: '2 à 6' }
];

const themeCards = [
  { title: 'Tokyo de nuit', text: 'Lignes lumineuses, enseignes néon, pluie sur l’asphalte et skyline arcade.' },
  { title: 'Sakura animés', text: 'Pétales flottants, halo rose et douceur visuelle pour équilibrer l’énergie du dancefloor.' },
  { title: 'Manga & Anime', text: 'Références visuelles inspirées des openings, panels rythmés et effets de scène.' },
  { title: 'K-Pop & Arcades', text: 'Palette vive, chorégraphies, jauges d’énergie et interface de borne premium.' }
];

const schools = ['Arc-en-Ciel', 'Jacques Prévert', 'Frida Kahlo'];

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return {
      theme: parsed.theme || 'dark',
      tracks: Array.isArray(parsed.tracks) && parsed.tracks.length ? parsed.tracks : defaultTracks.map(prepareTrack),
      requests: Array.isArray(parsed.requests) && parsed.requests.length ? parsed.requests : defaultRequests,
      history: Array.isArray(parsed.history) ? parsed.history : [],
      blindTest: parsed.blindTest || { Rouge: 0, Bleu: 0, Or: 0 }
    };
  } catch {
    return {
      theme: 'dark',
      tracks: defaultTracks.map(prepareTrack),
      requests: defaultRequests,
      history: [],
      blindTest: { Rouge: 0, Bleu: 0, Or: 0 }
    };
  }
}

function prepareTrack(track) {
  return {
    ...track,
    favorite: Boolean(track.favorite),
    status: track.status || 'En attente',
    playedAt: track.playedAt || ''
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

const state = loadState();

function formatEnergy(level) {
  return '★'.repeat(level) + '☆'.repeat(Math.max(0, 5 - level));
}

function statusClass(status) {
  const key = status.toLowerCase();
  if (key.includes('jou')) return 'played';
  if (key.includes('ref')) return 'refused';
  return 'pending';
}

function setTheme(theme) {
  state.theme = theme;
  document.body.dataset.theme = theme;
  saveState();
}

function injectNavigation() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;

  const current = document.body.dataset.page;
  const links = [
    ['index', 'index.html', 'Accueil'],
    ['programme', 'programme.html', 'Programme'],
    ['playlist', 'playlist.html', 'Playlist'],
    ['demandes', 'demandes.html', 'Demandes'],
    ['animations', 'animations.html', 'Animations'],
    ['dashboard', 'dashboard.html', 'Dashboard'],
    ['theme-japon', 'theme-japon.html', 'Thème Japon'],
    ['mode-tv', 'mode-tv.html', 'Mode TV']
  ];

  nav.innerHTML = links.map(([key, href, label]) => `<a href="${href}" class="${current === key ? 'active' : ''}">${label}</a>`).join('');
}

function injectFooter() {
  const footer = document.querySelector('[data-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <div class="site-shell footer">
      <div class="toolbar">
        <span>Bal des CM2 2026 · DJ Julien · Bruges</span>
        <span>Sauvegarde locale active · Compatible GitHub Pages</span>
      </div>
    </div>
  `;
}

function setupThemeToggle() {
  document.body.dataset.theme = state.theme;
  document.querySelectorAll('[data-toggle-theme]').forEach((button) => {
    button.addEventListener('click', () => {
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  });
}

function setupSakura() {
  const layer = document.querySelector('[data-sakura]');
  if (!layer) return;

  const spawn = () => {
    const petal = document.createElement('span');
    petal.className = 'sakura-petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${8 + Math.random() * 10}s`;
    petal.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
    layer.appendChild(petal);
    window.setTimeout(() => petal.remove(), 18000);
  };

  for (let index = 0; index < 12; index += 1) {
    window.setTimeout(spawn, index * 350);
  }
  window.setInterval(spawn, 1200);
}

function playSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const ctx = new AudioContextClass();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(523.25, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(783.99, ctx.currentTime + 0.18);
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.36);
}

function launchConfetti() {
  const wrap = document.querySelector('[data-confetti]');
  if (!wrap) return;
  wrap.innerHTML = '';
  for (let index = 0; index < 50; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ['#d90429', '#00d4ff', '#ffb7c5', '#ffd166'][index % 4];
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;
    piece.style.setProperty('--drift', `${-100 + Math.random() * 200}px`);
    wrap.appendChild(piece);
  }
  window.setTimeout(() => {
    wrap.innerHTML = '';
  }, 5200);
}

function launchFireworks() {
  const wrap = document.querySelector('[data-fireworks]');
  if (!wrap) return;
  wrap.innerHTML = '';
  for (let index = 0; index < 18; index += 1) {
    const burst = document.createElement('span');
    burst.className = 'burst';
    burst.style.left = `${12 + Math.random() * 76}%`;
    burst.style.top = `${10 + Math.random() * 45}%`;
    burst.style.animationDelay = `${Math.random() * 0.6}s`;
    wrap.appendChild(burst);
  }
  window.setTimeout(() => {
    wrap.innerHTML = '';
  }, 1800);
}

function setupCelebrationButtons() {
  document.querySelectorAll('[data-celebrate]').forEach((button) => {
    button.addEventListener('click', () => {
      playSound();
      launchConfetti();
      launchFireworks();
    });
  });
}

function buildStats() {
  const played = state.tracks.filter((track) => track.status === 'Jouee').length;
  const favorites = state.tracks.filter((track) => track.favorite).length;
  const pendingRequests = state.requests.filter((request) => request.status === 'En attente').length;
  const mood = Math.min(100, Math.round(((played * 7) + (favorites * 4) + 48)));
  const presentChildren = 86;
  const nextAnimation = animations[played % animations.length]?.title || 'Blind Test';

  return { played, favorites, pendingRequests, mood, presentChildren, nextAnimation };
}

function renderIndex() {
  const container = document.querySelector('[data-index-schools]');
  if (!container) return;
  const bySchool = schools.map((school, index) => {
    const count = state.requests.filter((request) => request.school === school).length;
    const top = ['Blue Bird', 'Dynamite', 'Waka Waka'][index];
    return `
      <article class="card school-card">
        <strong>${school}</strong>
        <p>${count} demandes enregistrées et une participation très active sur les animations.</p>
        <div class="quick-stats">
          <span class="mini-stat"><strong>${count}</strong> demandes</span>
          <span class="mini-stat"><strong>${top}</strong> top titre</span>
        </div>
      </article>
    `;
  }).join('');
  container.innerHTML = bySchool;
}

function renderProgramme() {
  const container = document.querySelector('[data-programme]');
  if (!container) return;
  container.innerHTML = schedule.map((item) => `
    <article class="timeline-item">
      <span class="timeline-time">${item.time}</span>
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    </article>
  `).join('');
}

function renderPlaylist() {
  const list = document.querySelector('[data-tracks]');
  if (!list) return;

  const search = document.querySelector('[data-filter-search]')?.value.trim().toLowerCase() || '';
  const energy = Number(document.querySelector('[data-filter-energy]')?.value || '0');
  const style = document.querySelector('[data-filter-style]')?.value || 'all';
  const moment = document.querySelector('[data-filter-moment]')?.value || 'all';
  const recommendedOnly = document.querySelector('[data-filter-recommended]')?.checked;

  const filtered = state.tracks.filter((track) => {
    const textMatch = !search || [track.title, track.artist, track.style, track.moment].join(' ').toLowerCase().includes(search);
    const energyMatch = !energy || track.energy === energy;
    const styleMatch = style === 'all' || track.style === style;
    const momentMatch = moment === 'all' || track.moment === moment;
    const recommendedMatch = !recommendedOnly || track.recommended;
    return textMatch && energyMatch && styleMatch && momentMatch && recommendedMatch;
  });

  list.innerHTML = filtered.map((track) => `
    <article class="track-card">
      <div class="track-meta">
        <span class="track-title">${track.title}</span>
        <span>${track.artist}</span>
        <span class="status-pill ${statusClass(track.status)}">${track.status}</span>
      </div>
      <div class="row-stack">
        <span><strong>Style</strong> · ${track.style}</span>
        <span><strong>Moment</strong> · ${track.moment}</span>
      </div>
      <div class="row-stack">
        <span><strong>Énergie</strong></span>
        <span>${formatEnergy(track.energy)}</span>
      </div>
      <div class="row-stack">
        <span><strong>DJ</strong></span>
        <span>${track.recommended ? 'Recommandée' : 'Libre'}</span>
      </div>
      <div class="track-actions">
        <button class="mini-button ${track.status === 'Jouee' ? 'active' : ''}" data-track-action="played" data-track-id="${track.id}">Jouée</button>
        <button class="mini-button ${track.status === 'En attente' ? 'active' : ''}" data-track-action="pending" data-track-id="${track.id}">En attente</button>
        <button class="mini-button ${track.favorite ? 'active' : ''}" data-track-action="favorite" data-track-id="${track.id}">Favori</button>
      </div>
    </article>
  `).join('');

  const summary = document.querySelector('[data-playlist-summary]');
  if (summary) {
    const recommendedTracks = state.tracks.filter((track) => track.recommended);
    const historyMarkup = state.history.length
      ? `<div class="tracks-list">${state.history.slice(0, 6).map((entry) => `<div class="card"><strong>${entry}</strong></div>`).join('')}</div>`
      : '<p>Aucune musique jouée pour le moment.</p>';
    summary.innerHTML = `
      <div class="quick-stats">
        <span class="mini-stat"><strong>${filtered.length}</strong> titres visibles</span>
        <span class="mini-stat"><strong>${state.tracks.filter((track) => track.favorite).length}</strong> favoris</span>
        <span class="mini-stat"><strong>${state.history.length}</strong> jouées</span>
      </div>
      <div class="tracks-list">
        ${[
          ['18:30', 'Ambiance Japon', '25 min', 2],
          ['19:00', 'Anime connus', '30 min', 4],
          ['19:30', 'K-pop', '30 min', 5],
          ['20:00', 'Hits CM2', '25 min', 5],
          ['20:30', 'TikTok', '20 min', 4],
          ['20:50', 'Jeux', '15 min', 4],
          ['21:05', 'Battle Dance', '15 min', 5],
          ['21:20', 'Blind Test', '20 min', 4],
          ['21:40', 'Photo souvenir', '10 min', 2],
          ['21:50', 'Final émotion', '10 min', 3]
        ].map(([time, label, duration, level]) => `
          <div class="card">
            <strong>${time} · ${label}</strong>
            <p>Durée estimée ${duration} · Niveau ${formatEnergy(level)}</p>
          </div>
        `).join('')}
      </div>
      <p>${recommendedTracks.slice(0, 3).map((track) => track.title).join(' · ')}</p>
      <h3>Historique des musiques jouées</h3>
      ${historyMarkup}
    `;
  }

  list.querySelectorAll('[data-track-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const trackId = Number(button.dataset.trackId);
      const action = button.dataset.trackAction;
      const track = state.tracks.find((item) => item.id === trackId);
      if (!track) return;

      if (action === 'played') {
        track.status = 'Jouee';
        track.playedAt = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        state.history.unshift(`${track.playedAt} · ${track.title}`);
      }
      if (action === 'pending') {
        track.status = 'En attente';
      }
      if (action === 'favorite') {
        track.favorite = !track.favorite;
      }

      saveState();
      renderPlaylist();
      renderDashboard();
      renderTV();
    });
  });
}

function setupPlaylistFilters() {
  if (!document.querySelector('[data-tracks]')) return;
  document.querySelectorAll('[data-playlist-filter]').forEach((input) => {
    input.addEventListener('input', renderPlaylist);
    input.addEventListener('change', renderPlaylist);
  });

  document.querySelector('[data-export-history]')?.addEventListener('click', () => exportCsv('historique-playlist.csv', state.history.map((line) => ({ evenement: line }))));
}

function renderRequests() {
  const body = document.querySelector('[data-requests-body]');
  if (!body) return;
  const search = document.querySelector('[data-request-search]')?.value.trim().toLowerCase() || '';
  const sort = document.querySelector('[data-request-sort]')?.value || 'status';

  const list = [...state.requests].filter((request) => {
    return !search || [request.firstName, request.school, request.song, request.status].join(' ').toLowerCase().includes(search);
  }).sort((left, right) => {
    if (sort === 'school') return left.school.localeCompare(right.school);
    if (sort === 'name') return left.firstName.localeCompare(right.firstName);
    return left.status.localeCompare(right.status);
  });

  body.innerHTML = list.map((request) => `
    <tr>
      <td>${request.firstName}</td>
      <td>${request.school}</td>
      <td>${request.song}</td>
      <td><span class="status-pill ${statusClass(request.status)}">${request.status}</span></td>
    </tr>
  `).join('');

  const stats = document.querySelector('[data-request-stats]');
  if (stats) {
    stats.innerHTML = `
      <div class="quick-stats">
        <span class="mini-stat"><strong>${state.requests.length}</strong> total</span>
        <span class="mini-stat"><strong>${state.requests.filter((request) => request.status === 'En attente').length}</strong> en attente</span>
        <span class="mini-stat"><strong>${state.requests.filter((request) => request.status === 'Jouee').length}</strong> jouées</span>
      </div>
    `;
  }
}

function setupRequests() {
  const form = document.querySelector('[data-request-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    state.requests.unshift({
      id: Date.now(),
      firstName: String(formData.get('firstName') || '').trim(),
      school: String(formData.get('school') || '').trim(),
      song: String(formData.get('song') || '').trim(),
      status: 'En attente'
    });
    saveState();
    form.reset();
    renderRequests();
    renderIndex();
    renderDashboard();
  });

  document.querySelectorAll('[data-request-filter]').forEach((input) => {
    input.addEventListener('input', renderRequests);
    input.addEventListener('change', renderRequests);
  });

  document.querySelector('[data-export-requests]')?.addEventListener('click', () => exportCsv('demandes-cm2.csv', state.requests));
  document.querySelector('[data-print-requests]')?.addEventListener('click', () => window.print());
}

function renderAnimations() {
  const container = document.querySelector('[data-animations]');
  if (!container) return;
  container.innerHTML = animations.map((item, index) => `
    <article class="card">
      <span class="status-pill ${index < 2 ? 'ready' : index === 2 ? 'warning' : 'pending'}">${index < 2 ? 'Prête' : index === 2 ? 'À préparer' : 'Programmée'}</span>
      <h3>${item.title}</h3>
      <p>${item.rules}</p>
      <div class="row-stack">
        <span><strong>Durée</strong> · ${item.duration}</span>
        <span><strong>Matériel</strong> · ${item.equipment}</span>
        <span><strong>Joueurs</strong> · ${item.players}</span>
      </div>
    </article>
  `).join('');
}

function renderBlindTest() {
  const container = document.querySelector('[data-blind-test]');
  if (!container) return;

  container.innerHTML = `
    <div class="scoreboard">
      ${Object.entries(state.blindTest).map(([team, score]) => `
        <div class="score-row">
          <div class="row-stack">
            <strong>${team}</strong>
            <span>Score automatique du blind test</span>
          </div>
          <div class="stat-value">${score}</div>
          <button class="mini-button" type="button" data-score-team="${team}">+1 point</button>
        </div>
      `).join('')}
    </div>
    <div class="toolbar">
      <button class="ghost-button" type="button" data-reset-blind-test>Réinitialiser</button>
    </div>
  `;

  container.querySelectorAll('[data-score-team]').forEach((button) => {
    button.addEventListener('click', () => {
      const team = button.dataset.scoreTeam;
      state.blindTest[team] += 1;
      saveState();
      renderBlindTest();
      renderDashboard();
    });
  });

  container.querySelector('[data-reset-blind-test]')?.addEventListener('click', () => {
    state.blindTest = { Rouge: 0, Bleu: 0, Or: 0 };
    saveState();
    renderBlindTest();
  });
}

function renderDashboard() {
  const container = document.querySelector('[data-dashboard]');
  if (!container) return;
  const stats = buildStats();
  const now = new Date();
  const remainingMinutes = Math.max(0, Math.round((new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0).getTime() - now.getTime()) / 60000));

  container.innerHTML = [
    ['Musiques jouées', stats.played, 72],
    ['Temps restant', `${remainingMinutes} min`, 58],
    ['Animation suivante', stats.nextAnimation, 64],
    ['Niveau d’ambiance', `${stats.mood}%`, stats.mood],
    ['Jauge énergie', `${Math.min(100, stats.mood + 6)}%`, Math.min(100, stats.mood + 6)],
    ['Enfants présents', stats.presentChildren, 81],
    ['Musiques favorites', stats.favorites, Math.min(100, stats.favorites * 9)],
    ['Demandes restantes', stats.pendingRequests, Math.min(100, stats.pendingRequests * 15)]
  ].map(([label, value, progress]) => `
    <article class="metric">
      <h3>${label}</h3>
      <div class="stat-value">${value}</div>
      <div class="progress"><span style="width:${progress}%"></span></div>
    </article>
  `).join('');

  const schoolStats = document.querySelector('[data-school-stats]');
  if (schoolStats) {
    schoolStats.innerHTML = schools.map((school) => {
      const requests = state.requests.filter((request) => request.school === school);
      return `
        <article class="card school-card">
          <strong>${school}</strong>
          <p>${requests.length} demandes · participation dynamique</p>
          <div class="quick-stats">
            <span class="mini-stat"><strong>${requests.filter((request) => request.status === 'Jouee').length}</strong> validées</span>
            <span class="mini-stat"><strong>${requests.filter((request) => request.status === 'En attente').length}</strong> en attente</span>
          </div>
        </article>
      `;
    }).join('');
  }
}

function renderThemePage() {
  const container = document.querySelector('[data-theme-cards]');
  if (!container) return;
  container.innerHTML = themeCards.map((card) => `
    <article class="card">
      <div class="theme-visual"></div>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    </article>
  `).join('');
}

function nextScheduleItem() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return schedule.find((item) => {
    const [hours, minutes] = item.time.split(':').map(Number);
    return (hours * 60 + minutes) > currentMinutes;
  }) || schedule[schedule.length - 1];
}

function renderTV() {
  const clock = document.querySelector('[data-tv-clock]');
  const currentTrack = document.querySelector('[data-tv-track]');
  const nextAnimation = document.querySelector('[data-tv-next-animation]');
  const countdown = document.querySelector('[data-tv-countdown]');
  const mood = document.querySelector('[data-tv-mood]');
  if (!clock || !currentTrack || !nextAnimation || !countdown || !mood) return;

  const now = new Date();
  const nextItem = nextScheduleItem();
  const currentSong = [...state.tracks].reverse().find((track) => track.status === 'Jouee') || state.tracks[0];
  const [hours, minutes] = nextItem.time.split(':').map(Number);
  const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  const remaining = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
  const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
  const secs = String(remaining % 60).padStart(2, '0');

  clock.textContent = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  currentTrack.textContent = `${currentSong.title} · ${currentSong.artist}`;
  nextAnimation.textContent = `${nextItem.time} · ${nextItem.title}`;
  countdown.textContent = `${mins}:${secs}`;
  mood.textContent = `${buildStats().mood}%`;
}

function setupTVFullscreen() {
  document.querySelector('[data-tv-fullscreen]')?.addEventListener('click', async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }
    await document.exitFullscreen();
  });
}

function exportCsv(fileName, rows) {
  const keys = Object.keys(rows[0] || {});
  const csv = [keys.join(','), ...rows.map((row) => keys.map((key) => `"${String(row[key] ?? '').replaceAll('"', '""')}"`).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

function init() {
  injectNavigation();
  injectFooter();
  setupThemeToggle();
  setupSakura();
  setupCelebrationButtons();
  renderIndex();
  renderProgramme();
  renderPlaylist();
  setupPlaylistFilters();
  renderRequests();
  setupRequests();
  renderAnimations();
  renderBlindTest();
  renderDashboard();
  renderThemePage();
  renderTV();
  setupTVFullscreen();

  if (document.body.dataset.page === 'mode-tv') {
    window.setInterval(renderTV, 1000);
  }
}

document.addEventListener('DOMContentLoaded', init);