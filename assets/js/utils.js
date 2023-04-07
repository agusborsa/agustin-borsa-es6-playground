import songs from "../js/songs.js";

const loveSongs = songs.filter(({ ...title }) => title === 'Love');

export default loveSongs;