import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');


function onVideoTimeUpdate(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}
player.on('timeupdate', throttle(onVideoTimeUpdate, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time') * 1)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
