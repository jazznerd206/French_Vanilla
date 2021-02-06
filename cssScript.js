console.log('hello world');

// BUTTON REVEAL MESSAGE SCRIPT -- include CSS
document.addEventListener('DOMContentLoaded', function(){ 
    var tail = document.querySelector('.tail');
    var height = tail.scrollHeight;
    tail.style.setProperty('--max-height', height + 'px');
}, false);
// ============================


// MOUSE CURSOR GRADIENT TRACKING -- include CSS
document.addEventListener9("DOMContentLoaded", function() {
    var btn = document.querySelector('.mouse-cursor-gradient-tracking')
    btn.onmousemove = function(e) {
      var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
      var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
      btn.style.setProperty('--x', x + 'px')
      btn.style.setProperty('--y', y + 'px')
    }
}, false)
// ============================
