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
   
   function animer() {
      objCycleAnimation = requestAnimationFrame(animer);
  
      // Le cycle d'animation
      effacerDessin()
      updateAnimation()
      dessiner()
  }

  function updateAnimation()
  {
    moveJumpMan()
    collisionFloor()
    collisionLadder()
    collisionRope()
    collisionBomb()
  }


  function moveJumpMan()
  {

    
  }
  function collisionFloor()
  {

    
  }

  function collisionLadder()
  {

    
  }
  function collisionRope()
  {

    
  }
  function collisionBomb()
  {

    
  }