//http-server .

var s = Snap("#svgout");

var triRecRec = Snap.load("svgs/triangle-with-squares.svg", function(frag){
  s.append(frag);
  var rect1 = Snap.select('#Rectangle-1'),
      rect2 = Snap.select('#Rectangle-1-copy'),
      tri1  = Snap.select('#Triangle-1');
  rect1.attr('fill', 'green');
  rect2.attr('fill', 'red');
  tri1.attr('fill', 'pink');
  rect2.animate({x:1000}, 500);

  rect1.animate({ry:100}, 500);

});
  setInterval(blink('#svgout'), 1);
function blink(elm){
  console.log('hi')
  elm.animate({r:90}, 200, function(){
    elm.animate({ry:90}, 300);
  })
}





   





