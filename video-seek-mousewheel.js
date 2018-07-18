const playerdata = {
  "www.twitch.tv" : {
    "keyCodes" : [39, 37],
    "elem" : ".video-player__container"
  },
  "player.twitch.tv" : {
    "keyCodes" : [39, 37],
    "elem" : "#video-playback"
  },
  "www.youtube.com" : {
    "keyCodes" : [76, 74],
    "elem" : document
  }
}

var curPlayer = playerdata[location.host]

function triggerKeydown(forward) {
  var elem;
  var e = new Event('keydown');
  e.keyCode = forward ? curPlayer.keyCodes[0] : curPlayer.keyCodes[1];
  if (typeof curPlayer.elem == "string") {
    elem = document.querySelector(curPlayer.elem)
  } else {
    elem = curPlayer.elem
  }
  elem.dispatchEvent(e);
}

document.addEventListener("wheel", function(e) {
  if (e.deltaY == 0 && e.deltaZ == 0) {
    if (e.deltaX > 0) {
      triggerKeydown(true);
    } else if (e.deltaX < 0) {
      triggerKeydown(false);
    }
  }
});