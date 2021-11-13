const numberOfFilms = +prompt('Скільки фільмів ви подивилися', '10');

const personalMovieDB = {
  count : numberOfFilms,
  movies : {}, // movies: {harry: '4', volk: '7'}
  actors : {},
  genres : [],
  privat : false
};

let a = prompt('Який останній фільм ви подивилися?',''),
    b = prompt('Наскільки оцінити його?',''),
    c = prompt('Який останній фільм ви подивилися?',''),
    d = prompt('Наскільки оцінити його?','');

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);