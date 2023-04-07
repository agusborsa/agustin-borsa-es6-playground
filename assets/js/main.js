/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

/* ANSWERS */

/* 1) Import songs array using modules. */

import songs from "./songs.js";

console.log("Ex1", songs);

/* 2. Use the map function to create a new array with the title of each song in uppercase letters. */

const upperTitles = songs.map(({ title }) => {
  return title;
});

console.log("Ex2", upperTitles);

/* 3. Use the filter function to create a new array with all the songs released before 1975. */

const songsBefore1975 = songs.filter(({ year }) => year < 1975);

console.log("Ex3", songsBefore1975);

/* 4. Use destructuring to create a variable that stores the title of the first song in the array. */

const { title, artist, year } = songs[0];

console.log("Ex4", title, artist, year);

/* 5. Use the find function to get the object representing the song "Hotel California". */

const encontrarBeatles = songs.find(({ artist }) => {
  return artist === "The Beatles";
});
console.log(
  "Ex5",
  `${encontrarBeatles.artist} realised ${encontrarBeatles.title} in ${encontrarBeatles.year}.`
);

/* 6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce) */

const sum = (...values) => values.reduce((acc, curr) => acc + curr, 0);

console.log("Ex6", sum(1, 2, 10, 20));

/* 7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song. */

const stringSongs = songs.map(({ title, artist, year }) => {
  return `Title: ${title} - Artist: ${artist} - Year: ${year}`;
});

console.log("Ex7", stringSongs);

/* 8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles. */

const beatlesSongs = songs
  .filter(({ artist }) => {
    return artist === "The Beatles";
  })
  .map(({ title }) => title);

console.log("Ex8", beatlesSongs);

/* 9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce) */

const songsSummatory = songs.reduce(
  (accumulator, { year }) => accumulator + year,
  0
);

console.log("Ex9", songsSummatory);

/* 10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.) */

const songsAverage = parseInt(songsSummatory / songs.length);

console.log("Ex10", songsAverage);

/* 11. Use the find function to get the object representing the song with the longest title. */

const longestSong = songs.find(
  ({ title }) =>
    title.length === Math.max(...songs.map(({ title }) => title.length))
);

console.log("Ex11", longestSong);

/* 12. Use destructuring and template literals to log the title, artist and year of the first element of the array. */

const firstElement = songs[0];
console.log(
  "Ex12",
  `${firstElement.artist} - ${firstElement.title} - ${firstElement.year}.`
);

/* 13. Use the rest operator to create a new array without the first element. */

const [, ...newSongsWithoutTheFirst] = songs;

console.log("Ex13", newSongsWithoutTheFirst);

/* 14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title. */

import loveSongs from "../js/utils.js";

console.log("Ex14", loveSongs);

/* 15. Use the every() method to check if all the songs have titles that are 5 or more characters long. */

const fiveOrMoreCharactersLong = songs.every(({ title }) => {
  return title.length >= 5;
});

console.log("Ex15", fiveOrMoreCharactersLong);

/* 16. Use the some() method to check if there are any songs from the 80s. */

const anySongsFromThe80s = songs.some(({ year }) => {
  return year > 1979 && year < 1990;
});

console.log("Ex16", anySongsFromThe80s);

/* 17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970." */

const infoLetItBe = songs.find(({ title }) => {
  return title === "Let It Be";
});

console.log("Ex17", infoLetItBe);

/* 18. Use the map() method to create a new array with just the artist names. */

const artistsNames = songs.map(({ artist }) => {
  return artist;
});

console.log("Ex18", artistsNames);

/* 19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times. */

const randomSong = (max, min) =>
  songs[Math.floor(Math.random() * (max - min) + min)];

console.log("Ex19", randomSong(songs.length, 0));

/* 20. Write your own function using at least 3 concepts. */
