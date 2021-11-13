'use strict'

const numberOfFilms = +prompt('Скільки фільмів ви подивилися', '10');
  

const personalMovieDB = {
  count : numberOfFilms,
  movies : {}, 
  actors : {},
  genres : [],
  privat : false
};


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
if(personalMovieDB.count < 10) {
  console.log('Мало фільмів переглянуто'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30 ) {
  console.log('Ви кіноман');
} else {
  console.log('Виникла помилка');
}
console.log(personalMovieDB)


