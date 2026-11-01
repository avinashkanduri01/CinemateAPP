CineMate - Web Version
======================

RUN IT ON YOUR LAPTOP
1. Unzip / keep the CineMate-Web folder together (don't move files out of it).
2. Double-click index.html. It opens in your browser. Done!

RUN IT ON YOUR PHONE
Option A (easiest): upload the whole folder to a free host such as Netlify Drop
  (app.netlify.com/drop) or GitHub Pages, then open the link on your phone.
Option B (same Wi-Fi): in the folder, run:   python -m http.server 8000
  then on your phone open  http://<your-laptop-IP>:8000

FOLDER
index.html      page structure
css/style.css   dark Netflix-style look (purple highlights), responsive
js/movies.js    the 36 movies (same data as data/movies.json)
js/app.js       all the logic: genres, moods, search, My List, Surprise Me
posters/        the 36 poster images

NOTES
- "My List" is saved in your browser (localStorage) instead of SQLite.
  It stays on that device/browser.
