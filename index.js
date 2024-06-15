var words = ['HTML', 'CSS', 'JavaScript'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 28, // Adjusted skip delay for smoother animation
    speed = 95; // Adjusted speed for slower animation

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.typewriter-effect').text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

function notABoomerFunction() {
    alert("Sorry, not available yet");
}
