/*
В формате массива пар задается плейлист. Пара состоит из песни и ее продолжительности. Например:


const innuendo = [
  ["Innuendo", "6:31"],
  ["I'm Going Slightly Mad", "4:22"],
  ["Headlong", "4:38"],
  ["I Can't Live with You", "4:33"],
  ["Don't Try So Hard", "3:39"],
  ["Ride the Wild Wind", "4:42"],
  ["All God's People", "4:21"],
  ["These Are the Days of Our Lives", "4:15"],
  ["Delilah", "3:35"],
  ["The Hitman", "4:56"],
  ["Bijou", "3:36"],
  ["The Show Must Go On", "4:35"],
];

console.log(playlistDuration(innuendo)); // "53:43"

const blackMirrorSeason4 = [
  ["USS Callister", "01:16:00"],
  ["Arkangel", "52:00"],
  ["Crocodile", "59:00"],
  ["Hang the DJ", "51:00"],
  ["Metalhead", "41:00"],
  ["Black Museum", "01:09:00"],
];

console.log(playlistDuration(blackMirrorSeason4)); // "05:48:00"
Необходимо вернуть продолжительность всего плейлиста в формате HH:MM:SS.

Если плейлист длится меньше часа, ответ должен быть в формате MM:SS. Если хотя бы 1 час, то HH:MM:SS.
*/

function playlistDuration(playlist) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let onlyTime = playlist.map((item) => item[1])

  onlyTime.forEach((time)=> {
    const splittedTime = time.split(":");

    if(splittedTime.length > 2) {
        hours += Number(splittedTime[0]);
        minutes += Number(splittedTime[1]);
        seconds += Number(splittedTime[2]);
    } else {
        minutes += Number(splittedTime[0]);
        seconds += Number(splittedTime[1]);
    }
  })
  

    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;

    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;

    return hours ? `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}` : `${addZero(minutes)}:${addZero(seconds)}`;
}


function addZero(num) {
    if(num < 10) return `0${num}`;
    return `${num}`
}
