// Movie data (from your data/movies.json). Kept as a .js file so the site works by just double-clicking index.html.
const MOVIES = [
  {
    "id": 1,
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "genres": [
      "Action"
    ],
    "rating": 8.1,
    "moods": [
      "Excited"
    ],
    "description": "In a desert wasteland, a drifter and a rebel warrior race across the sands in a high-speed escape from a tyrant warlord."
  },
  {
    "id": 2,
    "title": "John Wick",
    "year": 2014,
    "genres": [
      "Action",
      "Thriller"
    ],
    "rating": 7.4,
    "moods": [
      "Excited"
    ],
    "description": "A retired hitman is dragged back into the criminal underworld after thugs wreck the last gift from his late wife."
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "year": 2008,
    "genres": [
      "Action",
      "Thriller"
    ],
    "rating": 9.0,
    "moods": [
      "Excited",
      "Thoughtful"
    ],
    "description": "Batman faces the Joker, a chaotic criminal who pushes Gotham City and its hero to the breaking point."
  },
  {
    "id": 4,
    "title": "Gladiator",
    "year": 2000,
    "genres": [
      "Action"
    ],
    "rating": 8.5,
    "moods": [
      "Excited",
      "Sad"
    ],
    "description": "A betrayed Roman general becomes a gladiator and fights his way towards revenge on the emperor who destroyed his family."
  },
  {
    "id": 5,
    "title": "Mission: Impossible - Fallout",
    "year": 2018,
    "genres": [
      "Action",
      "Thriller"
    ],
    "rating": 7.7,
    "moods": [
      "Excited"
    ],
    "description": "Ethan Hunt and his team race against time to stop a nuclear threat after a mission goes badly wrong."
  },
  {
    "id": 6,
    "title": "Die Hard",
    "year": 1988,
    "genres": [
      "Action",
      "Thriller"
    ],
    "rating": 8.2,
    "moods": [
      "Excited"
    ],
    "description": "An off-duty cop becomes the only hope for the hostages when terrorists take over a Los Angeles skyscraper on Christmas Eve."
  },
  {
    "id": 7,
    "title": "Superbad",
    "year": 2007,
    "genres": [
      "Comedy"
    ],
    "rating": 7.6,
    "moods": [
      "Happy"
    ],
    "description": "Two best friends try to get alcohol for a party before graduation, and one wild night spirals completely out of control."
  },
  {
    "id": 8,
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "genres": [
      "Comedy"
    ],
    "rating": 8.1,
    "moods": [
      "Happy",
      "Relaxed"
    ],
    "description": "A legendary hotel concierge and his young lobby boy get tangled up in a stolen painting and a family fortune."
  },
  {
    "id": 9,
    "title": "Groundhog Day",
    "year": 1993,
    "genres": [
      "Comedy",
      "Romance"
    ],
    "rating": 8.0,
    "moods": [
      "Happy",
      "Relaxed"
    ],
    "description": "A grumpy weatherman is stuck reliving the same day over and over until he finally learns to change."
  },
  {
    "id": 10,
    "title": "Step Brothers",
    "year": 2008,
    "genres": [
      "Comedy"
    ],
    "rating": 6.9,
    "moods": [
      "Happy"
    ],
    "description": "Two grown men are forced to live as stepbrothers when their parents marry, and their rivalry turns absurdly out of hand."
  },
  {
    "id": 11,
    "title": "Paddington 2",
    "year": 2017,
    "genres": [
      "Comedy"
    ],
    "rating": 7.8,
    "moods": [
      "Happy",
      "Relaxed"
    ],
    "description": "The polite little bear is framed for a theft he did not commit and must clear his name with help from his adoptive family."
  },
  {
    "id": 12,
    "title": "Jojo Rabbit",
    "year": 2019,
    "genres": [
      "Comedy"
    ],
    "rating": 7.9,
    "moods": [
      "Happy",
      "Sad"
    ],
    "description": "A lonely boy in wartime Germany, with an imaginary friend who is a silly Hitler, discovers a girl hiding in his home."
  },
  {
    "id": 13,
    "title": "Get Out",
    "year": 2017,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "rating": 7.8,
    "moods": [
      "Scared",
      "Thoughtful"
    ],
    "description": "A young man visits his girlfriend's family estate and slowly realises that something deeply disturbing is going on."
  },
  {
    "id": 14,
    "title": "The Conjuring",
    "year": 2013,
    "genres": [
      "Horror"
    ],
    "rating": 7.5,
    "moods": [
      "Scared"
    ],
    "description": "Two paranormal investigators help a family terrorised by a dark presence in their remote farmhouse."
  },
  {
    "id": 15,
    "title": "Hereditary",
    "year": 2018,
    "genres": [
      "Horror"
    ],
    "rating": 7.3,
    "moods": [
      "Scared",
      "Sad"
    ],
    "description": "After the death of their grandmother, a grieving family begins to uncover terrifying secrets about their ancestry."
  },
  {
    "id": 16,
    "title": "A Quiet Place",
    "year": 2018,
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "rating": 7.5,
    "moods": [
      "Scared",
      "Excited"
    ],
    "description": "A family must live in complete silence to hide from mysterious creatures that hunt by sound."
  },
  {
    "id": 17,
    "title": "Scream",
    "year": 1996,
    "genres": [
      "Horror"
    ],
    "rating": 7.4,
    "moods": [
      "Scared"
    ],
    "description": "A masked killer stalks a small town's teenagers, and the survivors realise the murders follow the rules of horror movies."
  },
  {
    "id": 18,
    "title": "It",
    "year": 2017,
    "genres": [
      "Horror"
    ],
    "rating": 7.3,
    "moods": [
      "Scared"
    ],
    "description": "A group of outcast kids band together to face a shape-shifting evil that appears as a clown and preys on their fears."
  },
  {
    "id": 19,
    "title": "The Notebook",
    "year": 2004,
    "genres": [
      "Romance"
    ],
    "rating": 7.8,
    "moods": [
      "Romantic",
      "Sad"
    ],
    "description": "A poor young man and a wealthy girl fall in love one summer, and the story is told years later by an elderly man to a woman."
  },
  {
    "id": 20,
    "title": "Pride & Prejudice",
    "year": 2005,
    "genres": [
      "Romance"
    ],
    "rating": 7.8,
    "moods": [
      "Romantic",
      "Relaxed"
    ],
    "description": "Sparks fly between the spirited Elizabeth Bennet and the proud Mr. Darcy in 19th-century England."
  },
  {
    "id": 21,
    "title": "La La Land",
    "year": 2016,
    "genres": [
      "Romance",
      "Comedy"
    ],
    "rating": 8.0,
    "moods": [
      "Romantic",
      "Happy",
      "Sad"
    ],
    "description": "A jazz pianist and an aspiring actress chase their dreams in Los Angeles while their love is put to the test."
  },
  {
    "id": 22,
    "title": "Before Sunrise",
    "year": 1995,
    "genres": [
      "Romance"
    ],
    "rating": 8.1,
    "moods": [
      "Romantic",
      "Relaxed",
      "Thoughtful"
    ],
    "description": "Two strangers meet on a train and spend one unforgettable night wandering Vienna, talking about life and love."
  },
  {
    "id": 23,
    "title": "Titanic",
    "year": 1997,
    "genres": [
      "Romance"
    ],
    "rating": 7.9,
    "moods": [
      "Romantic",
      "Sad"
    ],
    "description": "A young artist and a first-class passenger fall in love aboard the doomed ocean liner on its maiden voyage."
  },
  {
    "id": 24,
    "title": "Crazy Rich Asians",
    "year": 2018,
    "genres": [
      "Romance",
      "Comedy"
    ],
    "rating": 6.9,
    "moods": [
      "Romantic",
      "Happy",
      "Relaxed"
    ],
    "description": "A professor travels to Singapore to meet her boyfriend's family and discovers they are among the richest in Asia."
  },
  {
    "id": 25,
    "title": "Se7en",
    "year": 1995,
    "genres": [
      "Thriller"
    ],
    "rating": 8.6,
    "moods": [
      "Thoughtful"
    ],
    "description": "Two detectives hunt a serial killer whose crimes are inspired by the seven deadly sins."
  },
  {
    "id": 26,
    "title": "Gone Girl",
    "year": 2014,
    "genres": [
      "Thriller"
    ],
    "rating": 8.1,
    "moods": [
      "Thoughtful"
    ],
    "description": "When a woman disappears on her fifth wedding anniversary, her husband becomes the main suspect in a twisting media storm."
  },
  {
    "id": 27,
    "title": "Shutter Island",
    "year": 2010,
    "genres": [
      "Thriller"
    ],
    "rating": 8.2,
    "moods": [
      "Thoughtful"
    ],
    "description": "A U.S. Marshal investigates the disappearance of a patient from a hospital for the criminally insane on a remote island."
  },
  {
    "id": 28,
    "title": "Prisoners",
    "year": 2013,
    "genres": [
      "Thriller"
    ],
    "rating": 8.1,
    "moods": [
      "Thoughtful",
      "Sad"
    ],
    "description": "When two young girls vanish, a desperate father takes matters into his own hands while a detective races to find them."
  },
  {
    "id": 29,
    "title": "Parasite",
    "year": 2019,
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "rating": 8.5,
    "moods": [
      "Thoughtful"
    ],
    "description": "A poor family schemes its way into the lives of a wealthy household, with consequences nobody expects."
  },
  {
    "id": 30,
    "title": "Zodiac",
    "year": 2007,
    "genres": [
      "Thriller"
    ],
    "rating": 7.7,
    "moods": [
      "Thoughtful"
    ],
    "description": "A cartoonist, a reporter and a detective become obsessed with finding the elusive Zodiac killer in 1970s San Francisco."
  },
  {
    "id": 31,
    "title": "Inception",
    "year": 2010,
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "rating": 8.8,
    "moods": [
      "Excited",
      "Thoughtful"
    ],
    "description": "A skilled thief who steals secrets from people's dreams is offered a chance to plant an idea in someone's mind instead."
  },
  {
    "id": 32,
    "title": "Interstellar",
    "year": 2014,
    "genres": [
      "Sci-Fi"
    ],
    "rating": 8.7,
    "moods": [
      "Thoughtful",
      "Sad"
    ],
    "description": "As Earth becomes unlivable, a former pilot leads a team through a wormhole to search for a new home for humanity."
  },
  {
    "id": 33,
    "title": "The Matrix",
    "year": 1999,
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "rating": 8.7,
    "moods": [
      "Excited"
    ],
    "description": "A hacker discovers that his world is a simulation and joins a rebellion against the machines that control it."
  },
  {
    "id": 34,
    "title": "Blade Runner 2049",
    "year": 2017,
    "genres": [
      "Sci-Fi"
    ],
    "rating": 8.0,
    "moods": [
      "Thoughtful",
      "Sad"
    ],
    "description": "A young blade runner uncovers a long-buried secret that leads him to search for a missing former blade runner."
  },
  {
    "id": 35,
    "title": "Arrival",
    "year": 2016,
    "genres": [
      "Sci-Fi"
    ],
    "rating": 7.9,
    "moods": [
      "Thoughtful",
      "Sad"
    ],
    "description": "A linguist is recruited to communicate with mysterious alien visitors before the world's nations lose patience."
  },
  {
    "id": 36,
    "title": "Ex Machina",
    "year": 2014,
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 7.7,
    "moods": [
      "Thoughtful"
    ],
    "description": "A young programmer is invited to test whether an advanced humanoid robot has real consciousness."
  }
];
