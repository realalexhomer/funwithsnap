AlexHelpers = {};

AlexHelpers.loadExternalSvg = function(src, canvas){
  Snap.load(src,
    function (loadedFragment) {
      canvas.append(loadedFragment);
    }
  );
}