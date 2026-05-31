// === PLAYLIST DATA ===
const library = [
  { id: 1, title: "Blue Bird", artist: "Ikimonogakari", category: "anime", url: "https://music.youtube.com/search?q=Blue+Bird+Ikimonogakari" },
  { id: 2, title: "Gurenge", artist: "LiSA", category: "anime", url: "https://music.youtube.com/search?q=Gurenge+LiSA" },
  { id: 3, title: "Idol", artist: "YOASOBI", category: "anime", url: "https://music.youtube.com/search?q=Idol+YOASOBI" },
  { id: 4, title: "Cupid (Twin Version)", artist: "FIFTY FIFTY", category: "kpop", url: "https://music.youtube.com/search?q=Cupid+%28Twin+Version%29+FIFTY+FIFTY" },
  { id: 5, title: "Magnetic", artist: "ILLIT", category: "kpop", url: "https://music.youtube.com/search?q=Magnetic+ILLIT" },
  { id: 6, title: "Super Shy", artist: "NewJeans", category: "kpop", url: "https://music.youtube.com/search?q=Super+Shy+NewJeans" },
  { id: 7, title: "Dynamite", artist: "BTS", category: "kpop", url: "https://music.youtube.com/search?q=Dynamite+BTS" },
  { id: 8, title: "APT.", artist: "ROSÉ & Bruno Mars", category: "kpop", url: "https://music.youtube.com/search?q=APT.+ROS%C3%89+and+Bruno+Mars" },
  { id: 9, title: "Espresso", artist: "Sabrina Carpenter", category: "pop", url: "https://music.youtube.com/search?q=Espresso+Sabrina+Carpenter" },
  { id: 10, title: "Taste", artist: "Sabrina Carpenter", category: "pop", url: "https://music.youtube.com/search?q=Taste+Sabrina+Carpenter" },
  { id: 11, title: "Beautiful Things", artist: "Benson Boone", category: "pop", url: "https://music.youtube.com/search?q=Beautiful+Things+Benson+Boone" },
  { id: 12, title: "Flowers", artist: "Miley Cyrus", category: "pop", url: "https://music.youtube.com/search?q=Flowers+Miley+Cyrus" },
  { id: 13, title: "As It Was", artist: "Harry Styles", category: "pop", url: "https://music.youtube.com/search?q=As+It+Was+Harry+Styles" },
  { id: 14, title: "Water", artist: "Tyla", category: "pop", url: "https://music.youtube.com/search?q=Water+Tyla" },
  { id: 15, title: "Can't Stop The Feeling!", artist: "Justin Timberlake", category: "dance", url: "https://music.youtube.com/search?q=Can%27t+Stop+The+Feeling%21+Justin+Timberlake" },
  { id: 16, title: "Happy", artist: "Pharrell Williams", category: "dance", url: "https://music.youtube.com/search?q=Happy+Pharrell+Williams" },
  { id: 17, title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", category: "dance", url: "https://music.youtube.com/search?q=Uptown+Funk+Mark+Ronson+ft.+Bruno+Mars" },
  { id: 18, title: "Shake It Off", artist: "Taylor Swift", category: "pop", url: "https://music.youtube.com/search?q=Shake+It+Off+Taylor+Swift" },
  { id: 19, title: "Roar", artist: "Katy Perry", category: "pop", url: "https://music.youtube.com/search?q=Roar+Katy+Perry" },
  { id: 20, title: "Firework", artist: "Katy Perry", category: "pop", url: "https://music.youtube.com/search?q=Firework+Katy+Perry" },
  { id: 21, title: "Dance The Night", artist: "Dua Lipa", category: "dance", url: "https://music.youtube.com/search?q=Dance+The+Night+Dua+Lipa" },
  { id: 22, title: "Levitating", artist: "Dua Lipa", category: "dance", url: "https://music.youtube.com/search?q=Levitating+Dua+Lipa" },
  { id: 23, title: "Blinding Lights", artist: "The Weeknd", category: "dance", url: "https://music.youtube.com/search?q=Blinding+Lights+The+Weeknd" },
  { id: 24, title: "Stay", artist: "The Kid LAROI & Justin Bieber", category: "pop", url: "https://music.youtube.com/search?q=Stay+The+Kid+LAROI+%26+Justin+Bieber" },
  { id: 25, title: "The Business", artist: "Tiësto", category: "dance", url: "https://music.youtube.com/search?q=The+Business+Ti%C3%ABsto" },
  { id: 26, title: "Pedro", artist: "Jaxomy & Agatino Romero", category: "dance", url: "https://music.youtube.com/search?q=Pedro+Jaxomy+%26+Agatino+Romero" },
  { id: 27, title: "Makeba", artist: "Jain", category: "french", url: "https://music.youtube.com/search?q=Makeba+Jain" },
  { id: 28, title: "Sapés comme jamais", artist: "Maître Gims", category: "french", url: "https://music.youtube.com/search?q=Sap%C3%A9s+comme+jamais+Ma%C3%AEtre+Gims" },
  { id: 29, title: "Bella", artist: "Maître Gims", category: "french", url: "https://music.youtube.com/search?q=Bella+Ma%C3%AEtre+Gims" },
  { id: 30, title: "Je te le donne", artist: "Vitaa & Slimane", category: "french", url: "https://music.youtube.com/search?q=Je+te+le+donne+Vitaa+%26+Slimane" },
  { id: 31, title: "On écrit sur les murs", artist: "Kids United", category: "french", url: "https://music.youtube.com/search?q=On+%C3%A9crit+sur+les+murs+Kids+United" },
  { id: 32, title: "Dernière danse", artist: "Indila", category: "french", url: "https://music.youtube.com/search?q=Derni%C3%A8re+danse+Indila" },
  { id: 33, title: "Mii Channel Theme", artist: "Nintendo Wii", category: "gaming", url: "https://music.youtube.com/search?q=Mii+Channel+Theme+Nintendo+Wii" },
  { id: 34, title: "Super Mario Bros. Theme", artist: "Koji Kondo", category: "gaming", url: "https://music.youtube.com/search?q=Super+Mario+Bros.+Theme+Koji+Kondo" },
  { id: 35, title: "Pokémon Theme", artist: "Jason Paige", category: "gaming", url: "https://music.youtube.com/search?q=Pok%C3%A9mon+Theme+Jason+Paige" },
  { id: 36, title: "Megalovania", artist: "Toby Fox", category: "gaming", url: "https://music.youtube.com/search?q=Megalovania+Toby+Fox" },
  { id: 37, title: "YMCA", artist: "Village People", category: "dance", url: "https://music.youtube.com/search?q=YMCA+Village+People" },
  { id: 38, title: "Macarena", artist: "Los del Río", category: "dance", url: "https://music.youtube.com/search?q=Macarena+Los+del+R%C3%ADo" },
  { id: 39, title: "I Gotta Feeling", artist: "The Black Eyed Peas", category: "dance", url: "https://music.youtube.com/search?q=I+Gotta+Feeling+The+Black+Eyed+Peas" },
  { id: 40, title: "Party Rock Anthem", artist: "LMFAO", category: "dance", url: "https://music.youtube.com/search?q=Party+Rock+Anthem+LMFAO" },
  { id: 41, title: "Timber", artist: "Pitbull ft. Kesha", category: "dance", url: "https://music.youtube.com/search?q=Timber+Pitbull+ft.+Kesha" },
  { id: 42, title: "On The Floor", artist: "Jennifer Lopez ft. Pitbull", category: "dance", url: "https://music.youtube.com/search?q=On+The+Floor+Jennifer+Lopez+ft.+Pitbull" },
  { id: 43, title: "Count on Me", artist: "Bruno Mars", category: "pop", url: "https://music.youtube.com/search?q=Count+on+Me+Bruno+Mars" },
  { id: 44, title: "A Sky Full of Stars", artist: "Coldplay", category: "pop", url: "https://music.youtube.com/search?q=A+Sky+Full+of+Stars+Coldplay" },
  { id: 45, title: "Viva La Vida", artist: "Coldplay", category: "pop", url: "https://music.youtube.com/search?q=Viva+La+Vida+Coldplay" },
  { id: 46, title: "Unstoppable", artist: "Sia", category: "pop", url: "https://music.youtube.com/search?q=Unstoppable+Sia" },
  { id: 47, title: "Hall of Fame", artist: "The Script ft. will.i.am", category: "pop", url: "https://music.youtube.com/search?q=Hall+of+Fame+The+Script+ft.+will.i.am" }
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
        <div class="track-name">${track.title}</div>
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
