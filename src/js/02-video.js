import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

function onVideoTimeUpdate (event) {
    localStorage.setItem('videplayer-current-time', JSON.stringify(event)
     )
}
player.on('timeupdate', throttle(onVideoTimeUpdate, 1000))
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });