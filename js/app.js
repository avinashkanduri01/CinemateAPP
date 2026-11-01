/* CineMate - web version. Mirrors movie_data.py, database.py, pages.py and details.py */

const GENRES = ["Action", "Comedy", "Horror", "Romance", "Thriller", "Sci-Fi"];
const MOODS  = ["Happy", "Sad", "Excited", "Relaxed", "Romantic", "Thoughtful", "Scared"];

/* ---------- movie_data ---------- */
const getMovie  = id => MOVIES.find(m => m.id === id);
const byGenre   = g  => MOVIES.filter(m => m.genres.includes(g)).sort((a, b) => b.rating - a.rating);
const byMood    = md => MOVIES.filter(m => m.moods.includes(md)).sort((a, b) => b.rating - a.rating);
const topRated  = n  => [...MOVIES].sort((a, b) => b.rating - a.rating).slice(0, n);
const shuffle   = a  => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const randomPicks = (n, excludeIds = []) => shuffle(MOVIES.filter(m => !excludeIds.includes(m.id))).slice(0, n);
const randomMovie = excludeId => { const pool = MOVIES.filter(m => m.id !== excludeId); return pool[Math.floor(Math.random() * pool.length)]; };
function search(query) {                       // every word typed must appear somewhere in the movie
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  return MOVIES.filter(m => {
    const text = [m.title, m.year, ...m.genres, ...m.moods, m.description].join(" ").toLowerCase();
    return words.every(w => text.includes(w));
  });
}

/* ---------- favourites (localStorage replaces SQLite) ---------- */
const KEY = "cinemate_favourites";
function getFavs() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
function saveFavs(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
const isFav = id => getFavs().includes(id);
function toggleFav(id) {
  let f = getFavs(), now;
  if (f.includes(id)) { f = f.filter(x => x !== id); now = false; } else { f.unshift(id); now = true; }
  saveFavs(f); updateBadge(); return now;
}

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const content = $("#content");
const poster = m => `posters/${m.id}.png`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
let current = { page: "home", genre: GENRES[0], mood: MOODS[0], query: "" };
let lastSurpriseId = null;

function updateBadge() { const n = getFavs().length; $("#listLabel").textContent = n ? `My List (${n})` : "My List"; }
function highlightNav(name) { document.querySelectorAll("#nav button").forEach(b => b.classList.toggle("active", b.dataset.page === name)); }

/* ---------- components ---------- */
function movieCard(m) {
  const el = document.createElement("div");
  el.className = "card"; el.tabIndex = 0; el.dataset.id = m.id;
  el.innerHTML = `<img src="${poster(m)}" alt="${esc(m.title)} poster" loading="lazy">
    <button class="heart" aria-label="Add or remove from My List"></button>
    <div class="info"><div class="t">${esc(m.title)}</div><div class="m"><span class="star">★</span> ${m.rating} · ${m.year}</div></div>`;
  const heart = el.querySelector(".heart");
  const paint = () => { const on = isFav(m.id); heart.textContent = on ? "♥" : "♡"; heart.classList.toggle("on", on); };
  paint();
  heart.addEventListener("click", e => { e.stopPropagation(); toggleFav(m.id); paint(); if (current.page === "list") showFavourites(); });
  el.addEventListener("click", () => openDetails(m));
  el.addEventListener("keydown", e => { if (e.key === "Enter") openDetails(m); });
  return el;
}
function grid(movies) { const g = document.createElement("div"); g.className = "grid"; movies.forEach(m => g.appendChild(movieCard(m))); return g; }
function chipBar(options, selected, onSelect) {
  const bar = document.createElement("div"); bar.className = "chips";
  options.forEach(o => {
    const c = document.createElement("button"); c.className = "chip" + (o === selected ? " on" : ""); c.textContent = o;
    c.onclick = () => onSelect(o); bar.appendChild(c);
  });
  return bar;
}
const favBtnLabel = id => isFav(id) ? "− Remove from My List" : "+ Add to My List";

/* ---------- pages ---------- */
function setPage(name) { current.page = name; highlightNav(name); content.innerHTML = ""; window.scrollTo(0, 0); }

function showHome() {
  setPage("home");
  const hero = topRated(8)[Math.floor(Math.random() * 8)];
  const h = document.createElement("div"); h.className = "hero";
  h.innerHTML = `<img src="${poster(hero)}" alt="${esc(hero.title)} poster">
    <div class="body"><div class="eyebrow">FEATURED TONIGHT</div><h1>${esc(hero.title)}</h1>
      <div class="meta">${hero.year} · ${hero.genres.join(" / ")} · <span class="star">★ ${hero.rating}</span></div>
      <p class="desc">${esc(hero.description)}</p>
      <div class="row"><button class="btn" id="heroDetails">View Details</button><button class="btn ghost" id="heroFav"></button></div></div>`;
  content.appendChild(h);
  const hf = h.querySelector("#heroFav");
  const paint = () => { hf.textContent = favBtnLabel(hero.id); hf.className = "btn " + (isFav(hero.id) ? "danger" : "ghost"); };
  paint();
  hf.onclick = () => { toggleFav(hero.id); paint(); refreshHearts(); };
  h.querySelector("#heroDetails").onclick = () => openDetails(hero);

  const section = (title, movies) => { const t = document.createElement("h2"); t.textContent = title; content.append(t, grid(movies)); };
  section("Top Rated", topRated(6));
  section("Trending Now", randomPicks(6, [hero.id]));

  const t = document.createElement("h2"); t.textContent = "Browse by Genre"; content.appendChild(t);
  content.appendChild(chipBar(GENRES, null, g => { current.genre = g; showGenres(); }));
  const t2 = document.createElement("h2"); t2.textContent = "What's Your Mood?"; content.appendChild(t2);
  content.appendChild(chipBar(MOODS, null, m => { current.mood = m; showMoods(); }));
}

function chipPage(name, title, options, key, getter, sub) {
  setPage(name);
  const sel = current[key], movies = getter(sel);
  content.insertAdjacentHTML("beforeend", `<h1>${title}</h1><p class="subtitle">${sub(movies.length, sel)}</p>`);
  content.appendChild(chipBar(options, sel, v => { current[key] = v; chipPage(name, title, options, key, getter, sub); }));
  content.appendChild(grid(movies));
}
const showGenres = () => chipPage("genres", "Browse by Genre", GENRES, "genre", byGenre, (n, v) => `${n} ${v} movies, best rated first`);
const showMoods  = () => chipPage("moods", "Pick Your Mood", MOODS, "mood", byMood, (n, v) => `${n} picks for when you're feeling ${v}`);

function showResults(title, movies, emptyMsg) {
  content.insertAdjacentHTML("beforeend", `<h1>${esc(title)}</h1><p class="subtitle">${movies.length} movie(s)</p>`);
  content.appendChild(movies.length ? grid(movies) : Object.assign(document.createElement("div"), { className: "empty", textContent: emptyMsg }));
}
function showFavourites() {
  setPage("list");
  showResults("My List", getFavs().map(getMovie).filter(Boolean), "Your list is empty. Tap the ♡ on any movie to add it here.");
}
function doSearch() {
  const q = $("#searchInput").value.trim();
  if (!q) return;
  current.query = q; setPage("search");
  showResults(`Search: "${q}"`, search(q), "No movies matched your search. Try fewer words, a genre or a mood.");
}

/* ---------- details / surprise pop-up ---------- */
function openDetails(m, surprise = false) {
  const modal = $("#modal");
  const full = Math.round(m.rating / 2);
  modal.innerHTML = `<img src="${poster(m)}" alt="${esc(m.title)} poster">
    <div class="body">
      ${surprise ? '<div class="eyebrow">🎲 YOUR SURPRISE PICK</div>' : ""}
      <h1>${esc(m.title)}</h1>
      <div class="meta">${m.year} · ${m.genres.join(" / ")}</div>
      <div><span class="stars">${"★".repeat(full)}${"☆".repeat(5 - full)}</span> <span class="meta"><b style="color:var(--text)">${m.rating}</b> / 10</span></div>
      <div class="tags">${m.moods.map(x => `<span class="tag">${x}</span>`).join("")}</div>
      <p class="desc">${esc(m.description)}</p>
      <div class="row"><button class="btn" id="mFav"></button>
        ${surprise ? '<button class="btn ghost" id="mAgain">🎲 Another one</button>' : ""}
        <button class="btn ghost" id="mClose">Close</button></div>
    </div>`;
  const fav = $("#mFav");
  const paint = () => { fav.textContent = favBtnLabel(m.id); fav.className = "btn " + (isFav(m.id) ? "danger" : ""); };
  paint();
  fav.onclick = () => { toggleFav(m.id); paint(); refreshHearts(); };
  $("#mClose").onclick = closeDetails;
  if (surprise) $("#mAgain").onclick = surpriseMe;
  $("#overlay").hidden = false; document.body.style.overflow = "hidden";
}
function closeDetails() { $("#overlay").hidden = true; document.body.style.overflow = ""; }
function refreshHearts() {                     // repaint hearts after a change made in the pop-up / hero
  if (current.page === "list") { showFavourites(); return; }
  document.querySelectorAll(".card").forEach(c => {
    const h = c.querySelector(".heart"), on = isFav(Number(c.dataset.id));
    h.textContent = on ? "♥" : "♡"; h.classList.toggle("on", on);
  });
}
function surpriseMe() { const m = randomMovie(lastSurpriseId); lastSurpriseId = m.id; openDetails(m, true); }

/* ---------- wiring ---------- */
$("#nav").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  ({ home: showHome, genres: showGenres, moods: showMoods, list: showFavourites })[b.dataset.page]();
});
$("#logo").onclick = showHome;
$("#surpriseBtn").onclick = surpriseMe;
$("#searchForm").addEventListener("submit", e => { e.preventDefault(); doSearch(); $("#searchInput").blur(); });
$("#overlay").addEventListener("click", e => { if (e.target.id === "overlay") closeDetails(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetails(); });

updateBadge();
showHome();
