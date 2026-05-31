// === PLAYLIST DATA (10 morceaux uniques extraits de Playlist_CM2_200_Morceaux.xlsx) ===
const library = [
  { id: 1, title: "Dynamite", artist: "BTS", category: "kpop", energy: 5, url: "https://music.youtube.com/search?q=Dynamite+BTS" },
  { id: 2, title: "Butter", artist: "BTS", category: "kpop", energy: 5, url: "https://music.youtube.com/search?q=Butter+BTS" },
  { id: 3, title: "Shake It Off", artist: "Taylor Swift", category: "pop", energy: 5, url: "https://music.youtube.com/search?q=Shake+It+Off+Taylor+Swift" },
  { id: 4, title: "Happy", artist: "Pharrell Williams", category: "pop", energy: 5, url: "https://music.youtube.com/search?q=Happy+Pharrell+Williams" },
  { id: 5, title: "Titanium", artist: "David Guetta ft. Sia", category: "dance", energy: 5, url: "https://music.youtube.com/search?q=Titanium+David+Guetta+ft.+Sia" },
  { id: 6, title: "Wake Me Up", artist: "Avicii", category: "dance", energy: 5, url: "https://music.youtube.com/search?q=Wake+Me+Up+Avicii" },
  { id: 7, title: "Idol", artist: "YOASOBI", category: "anime", energy: 5, url: "https://music.youtube.com/search?q=Idol+YOASOBI" },
  { id: 8, title: "Pokémon Theme", artist: "Jason Paige", category: "anime", energy: 5, url: "https://music.youtube.com/search?q=Pok%C3%A9mon+Theme+Jason+Paige" },
  { id: 9, title: "Hakuna Matata", artist: "Le Roi Lion", category: "disney", energy: 4, url: "https://music.youtube.com/search?q=Hakuna+Matata+Le+Roi+Lion" },
  { id: 10, title: "Metamorphosis", artist: "INTERWORLD", category: "phonk", energy: 5, url: "https://music.youtube.com/search?q=Metamorphosis+INTERWORLD" }
];

// === STATE ===
let queue = [];
let nowPlaying = null;
let history = [];
let activeFilter = 'all';
let searchQuery = '';

const STORAGE_KEY = 'dj-mix-cm2-state';

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ queue, nowPlaying, history }));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      queue = saved.queue || [];
      nowPlaying = saved.nowPlaying || null;
      history = saved.history || [];
    }
  } catch (e) { /* ignore */ }
}

// === DOM REFS ===
const $npTitle = document.getElementById('np-title');
const $npArtist = document.getElementById('np-artist');
const $queueList = document.getElementById('queue-list');
const $queueCount = document.getElementById('queue-count');
const $libraryList = document.getElementById('library-list');
const $libCount = document.getElementById('lib-count');
const $search = document.getElementById('search');

// === RENDER ===
function renderNowPlaying() {
  if (nowPlaying) {
    $npTitle.textContent = nowPlaying.title;
    $npArtist.textContent = nowPlaying.artist;
  } else {
    $npTitle.textContent = 'Aucun morceau';
    $npArtist.textContent = '–';
  }
}

function renderQueue() {
  $queueCount.textContent = queue.length;
  if (queue.length === 0) {
    $queueList.innerHTML = '<div class="queue-empty">File vide – ajoute des morceaux depuis la bibliothèque →</div>';
    return;
  }
  $queueList.innerHTML = queue.map((track, i) => `
    <div class="track-item" draggable="true" data-queue-idx="${i}">
      <span class="queue-num">${i + 1}</span>
      <div class="track-info">
        <div class="track-name">${track.title}</div>
        <div class="track-artist">${track.artist}</div>
      </div>
      <div class="track-actions">
        <button onclick="playFromQueue(${i})" title="Jouer maintenant">▶</button>
        <button onclick="removeFromQueue(${i})" title="Retirer">✕</button>
      </div>
    </div>
  `).join('');
  setupQueueDragDrop();
}

function renderLibrary() {
  const filtered = library.filter(t => {
    if (activeFilter !== 'all' && t.category !== activeFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q);
    }
    return true;
  });
  $libCount.textContent = filtered.length;
  $libraryList.innerHTML = filtered.map(track => `
    <div class="track-item">
      <div class="track-info">
        <div class="track-name">${track.title} <span class="track-energy">${'⚡'.repeat(track.energy)}</span></div>
        <div class="track-artist">${track.artist}</div>
      </div>
      <div class="track-actions">
        <button onclick="addToQueue(${track.id})" title="Ajouter à la file">+</button>
        <button class="btn-yt" onclick="openYT(${track.id})" title="Ouvrir YouTube Music">🔗</button>
      </div>
    </div>
  `).join('');
}

function render() {
  renderNowPlaying();
  renderQueue();
  renderLibrary();
}

// === ACTIONS ===
function addToQueue(id) {
  const track = library.find(t => t.id === id);
  if (track) {
    queue.push({ ...track });
    saveState();
    renderQueue();
  }
}

function removeFromQueue(idx) {
  queue.splice(idx, 1);
  saveState();
  renderQueue();
}

function playFromQueue(idx) {
  if (nowPlaying) history.push(nowPlaying);
  nowPlaying = queue.splice(idx, 1)[0];
  saveState();
  render();
}

function playNext() {
  if (queue.length === 0) return;
  if (nowPlaying) history.push(nowPlaying);
  nowPlaying = queue.shift();
  saveState();
  render();
}

function playPrev() {
  if (history.length === 0) return;
  if (nowPlaying) queue.unshift(nowPlaying);
  nowPlaying = history.pop();
  saveState();
  render();
}

function shuffleQueue() {
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  saveState();
  renderQueue();
}

function clearQueue() {
  queue = [];
  saveState();
  renderQueue();
}

function openYT(id) {
  const track = library.find(t => t.id === id);
  if (track) window.open(track.url, '_blank');
}

// === DRAG & DROP (Queue reorder) ===
let dragIdx = null;

function setupQueueDragDrop() {
  const items = $queueList.querySelectorAll('.track-item[draggable]');
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      dragIdx = parseInt(item.dataset.queueIdx);
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      dragIdx = null;
      document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    });
    item.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      item.classList.add('drag-over');
    });
    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-over');
    });
    item.addEventListener('drop', e => {
      e.preventDefault();
      item.classList.remove('drag-over');
      const dropIdx = parseInt(item.dataset.queueIdx);
      if (dragIdx !== null && dragIdx !== dropIdx) {
        const [moved] = queue.splice(dragIdx, 1);
        queue.splice(dropIdx, 0, moved);
        saveState();
        renderQueue();
      }
    });
  });
}

// === EVENTS ===
document.getElementById('btn-next').addEventListener('click', playNext);
document.getElementById('btn-prev').addEventListener('click', playPrev);
document.getElementById('btn-shuffle').addEventListener('click', shuffleQueue);
document.getElementById('btn-clear-queue').addEventListener('click', clearQueue);

$search.addEventListener('input', e => {
  searchQuery = e.target.value;
  renderLibrary();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderLibrary();
  });
});

// === INIT ===
loadState();
render();
