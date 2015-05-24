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

  tri1.animate({r:50,
                fill: "lightgreen",
                transform: "scale(0.2)"},1000);

  // rect1.animate({
  //     transform: 'r0,250,453 s1,1'
  // }, 1500, mina.elastic);

  rect1.addClass("bounce")


});






