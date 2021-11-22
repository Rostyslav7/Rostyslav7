'use strict'

const personalMovieDB = {
  count : 0,
  movies : {}, 
  actors : {},
  genres : [],
  privat : false,
  start: function() {
    personalMovieDB.count = +prompt('Скільки фільмів ви подивилися', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Скільки фільмів ви подивилися', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++ ) {
      let a = prompt('Який останній фільм ви подивилися?',''),
          b = prompt('Наскільки оцінити його?','');
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
      
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Мало фільмів переглянуто'); 
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Ви класичний глядач');
    } else if (personalMovieDB.count >= 30 ) {
      console.log('Ви кіноман');
    } else {
      console.log('Виникла помилка');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for(let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш улюблений жанр? ${i}`);

      if (genre === '' || genre == null) {
        console.log('Ви ввели некоректні дані!');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      } 
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр ${i + 1} це ${item}`);
    });
  },
};





