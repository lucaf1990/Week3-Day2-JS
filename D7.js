/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando
   solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo
   e mostrala con un console.log().
*/

const stringa = function (str1, str2) {
  {
    const nuovStringa = str1.substring(0, 2);
    const nuovStringa2 = str2.substring(3, 6);
    const result = nuovStringa + nuovStringa2;
    console.log(result.toUpperCase());
  }
};
stringa("Epicode", "Scuola");

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere 
  un valore random compreso tra 0 e 100 (incluso).
*/

let arrayRandom = [];
for (let i = 0; i <= 10; i++) {
  const randomElement = Math.floor(Math.random() * 100);

  arrayRandom[i] = randomElement;
}
console.log("QUESTI ELEMENTI", arrayRandom);

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli
   valori numerici (suggerimento: il metodo filter può aiutare)
*/
const arrayOfNum = [
  1, 2, 5, 36, 214, 258, 42, 1, 235, 26, 34, 78, 451, 96, 45, 21, 25, 26, 27,
  18, 96,
];
const arrayOfPair = arrayOfNum.filter((num) => num % 2 === 0);

console.log(arrayOfPair);
/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let somma = 0;
const arrayDiNum2 = [14, 25, 26, 8, 456, 4, 69, 56, 14, 785, 235];
for (let i = 0; i < arrayDiNum2.length; i++) {
  const num = arrayDiNum2[i];
  console.log(num);
  somma += num;
}
console.log(somma);
/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
//filter map e reduce return è obbligatorio
const arrayDiNum = [14, 25, 26, 8, 456, 4, 69, 56, 14, 785, 235];
const sommaDiArr = arrayDiNum.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sommaDiArr);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, 
  ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const arrayDiNum3 = [14, 25, 26, 8, 4, 69, 56, 14];

let arraydinum43 = arrayDiNum3.map((num) => num + 2);
console.log(arraydinum43);
/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array 
  contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const arrayDiStri = [
  "Ciao",
  "Macchina",
  "Automobile",
  "Supercalifragiliinstichespiralidoso",
];

const quantiLettStrin = arrayDiStri.map((stringa) => stringa.length);
console.log(quantiLettStrin);

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
let newArrOfOdd = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    newArrOfOdd.push(i);
  }
}
console.log(newArrOfOdd);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
let year = [];
let findMovie = movies.filter((num) => {
  return num.Year, year.push(num.Year);
});
console.log(year);

year.sort();
console.log(year);
/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
let countOfMovie = [];
let numOfMovie = movies.filter((num) => {
  return num.Title, countOfMovie.push(num.Title);
});
console.log(countOfMovie.length);

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
let countOfMovie2 = [];
let numOfMovie2 = movies.filter((num) => {
  return num.Title, countOfMovie2.push(num.Title);
});
console.log(countOfMovie2);
/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
let countOfMovie5 = [];
let numOfMovie5 = movies.filter((num) => {
  if (num.Year < 2000) return num.Year;
  console.log(num.Year, "E' USCITO DOPO IL 2000");
});

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
let list = [];

let mymovies = (param) => {
  movies.filter((mov) => {
    if (mov.imdbID === param) {
      console.log(mov);
    }
  });
};
mymovies("tt0848228");
mymovies("tt4154796");

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
let year2 = [];
let sum = 0;
let findMovie4 = movies.filter((num) => {
  return num.Year, year2.push(num.Year);
});
console.log(year2);
for (let i = 0; i < year2.length; i++) {
  const element = year2[i];
  console.log(element);
  sum += element[i];
  console.log(sum.length);
}
