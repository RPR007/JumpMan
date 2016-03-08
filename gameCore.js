/*
	X posiiton verticale , Y posiiton horisontale
*/var sounds = new Object();

   function keyDown() {
      switch (event.keyCode) {
            case 37: // left
              jumpMan.deplacement.l = true
            break;
            case 38: // up
              jumpMan.deplacement.u = true
            break;
            case 39: // right
              jumpMan.deplacement.r = true
            break;
            case 40: // down
              jumpMan.deplacement.d = true
            break;
            default:
              console.log("down touche : "+ event.keyCode+" invalide" )
      }
   }
   function keyUp() {
     switch (event.keyCode) {
            case 37: // left
              jumpMan.deplacement.l = false
            break;
            case 38: // up
              jumpMan.deplacement.u = false
            break;
            case 39: // right
              jumpMan.deplacement.r = false
            break;
            case 40: // down
              jumpMan.deplacement.d = false
            break;
            default:
              console.log("up touche : "+ event.keyCode+" invalide" )
      }
   }