console.log('hello world');

// BUTTON REVEAL MESSAGE SCRIPT -- include CSS
document.addEventListener('DOMContentLoaded', function(){ 
    var tail = document.querySelector('.tail');
    var height = tail.scrollHeight();
    tail.style.setProperty('--max-height', height + 'px');
}, false);
// ============================

