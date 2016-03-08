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
      //only draw 1/3 of the time
      if (jumpMan.deplacement.fr == 1) {closureAnimer()  }
      jumpMan.deplacement.fr = jumpMan.deplacement.fr==3?1:jumpMan.deplacement.fr+1
      
        function closureAnimer() {
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
      jumpMan.jump.fr++
      jumpMan.x += jumpMan.jump.velX * jumpMan.jump.fr
      jumpMan.y += jumpMan.jump.velY * jumpMan.jump.fr
      jumpMan.jump.velY += jumpMan.jump.gravity * jumpMan.jump.fr   
      console.log("x = "+jumpMan.x +" y = "+jumpMan.y +" velx = "+jumpMan.jump.velX )
    }
     //left AND right == not moving
    else if (jumpMan.deplacement.l && jumpMan.deplacement.r) {
      jumpMan.jump.velX=0
    }
    else{
      
      //start jumping
      if (jumpMan.deplacement.u) {
        jumpMan.deplacement.jumping = true
        jumpMan.jump.velY=-2 //give it a kick
      }//go left
      else if (jumpMan.deplacement.l) {//reduce velX if possible

        jumpMan.jump.velX= jumpMan.jump.velX>0?0:jumpMan.jump.velX> -6?jumpMan.jump.velX-=1:jumpMan.jump.velX
      }//go right
      else if (jumpMan.deplacement.r) {//augment velX if possible
        jumpMan.jump.velX = jumpMan.jump.velX<0?0:jumpMan.jump.velX<6?jumpMan.jump.velX+=1:jumpMan.jump.velX
      }//stop going left OR right
      else if (!jumpMan.deplacement.l  && !jumpMan.deplacement.l){
          jumpMan.jump.velX=0
      }
      jumpMan.x+= jumpMan.jump.velX
      jumpMan.y+= jumpMan.jump.velY
    }
    //console.log("velX = "+jumpMan.jump.velX)
    
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