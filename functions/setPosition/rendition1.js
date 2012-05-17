var setPosition;
if(html){
  setPosition = (function(el) {  
    var px = (typeof html.style.top == 'number') ? 0 : 'px';
    return function(el, x, y) {
      if (x !== null) { el.style.left = x + px; }
      if (y !== null) { el.style.top = y + px; }
    };
  })();
}