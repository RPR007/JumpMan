/*
	X posiiton verticale , Y posiiton horisontale
*/var sounds = new Object();

   function keyDown(pEvent) {
      switch (pEvent.keyCode) {
            case 37: // left
              jumpMan.deplacement.l = true
            break;
            case 38: // up
              jumpMan.deplacement.u = true
            break;
            case 39: // right
              jumpMan.deplacement.r = true
            break;
            default:
              console.log("down touche : "+ event.keyCode+" invalide" )
      }
   }
   function keyUp(pEvent) {
     switch (pEvent.keyCode) {
            case 37: // left
              jumpMan.deplacement.l = false
            break;
            case 38: // up
              jumpMan.deplacement.u = false
            break;
            case 39: // right
              jumpMan.deplacement.r = false
            break;
            default:
              console.log("up touche : "+ event.keyCode+" invalide" )
      }
   }

   function animer() {
      objCycleAnimation = requestAnimationFrame(animer)

      if (jumpMan.deplacement.fr == 1) {closureAnimer()  }

      jumpMan.deplacement.fr = jumpMan.deplacement.fr==5?1:jumpMan.deplacement.fr+1
            

      
        function closureAnimer() {
          console.log("frame = "+jumpMan.deplacement.fr)
          effacer()
          updateAnimation()
          dessiner()
        }
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
    if (jumpMan.deplacement.jumping) {

    }
    else{//go left
      if (jumpMan.deplacement.l) {//change direction OR augment velX
        jumpMan.jump.velX=(jumpMan.jump.velX>0?0:jumpMan.jump.velX> -4?jumpMan.jump.velX-1: jumpMan.jump.velX)
      }//start jumping
      else if (jumpMan.deplacement.u) {
        jumpMan.deplacement.jumping = true
      }//go right
      else if (jumpMan.deplacement.r) {//change direction OR augment velX
        jumpMan.jump.velX=(jumpMan.jump.velX<0?0: jumpMan.jump.velX<4?jumpMan.jump.velX+1:jumpMan.jump.velX)
      }

      jumpMan.x+= jumpMan.jump.velX
      jumpMan.y+= jumpMan.jump.velY
    }


    
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