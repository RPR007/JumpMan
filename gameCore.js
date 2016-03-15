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
            case 40: // down
              jumpMan.deplacement.d = true 
            break;
            case 32 : // space
              jumpMan.deplacement.j = true
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
            case 40: // down
              jumpMan.deplacement.d = false 
            break;
            case 32: // space
              jumpMan.deplacement.j = false
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
  //  collisionFloor()
  //  collisionLadder()
  //  collisionRope()
  //  collisionBomb()
  }


  function moveJumpMan()
  {
    if (jumpMan.deplacement.jumping) { jump() }
    else if (jumpMan.deplacement.l && jumpMan.deplacement.r) {}
    else if (jumpMan.deplacement.j) {
        jumpMan.jump.jumpX  = -3
        jumpMan.jump.velY=0 //give it a kick
        jumpMan.deplacement.jumping = true
    } else {
        if(jumpMan.deplacement.u) {
            up()
        }
        else if(jumpMan.deplacement.d) {
            down()
        }
        else if (jumpMan.deplacement.l) {
            left()
        }
        else if (jumpMan.deplacement.r) {
            right()
        }
        else if (!jumpMan.deplacement.l  && !jumpMan.deplacement.l){
          jumpMan.jump.velX=0
        }
        
        jumpMan.posAct.x+= jumpMan.jump.velX
        jumpMan.posAct.y+= jumpMan.jump.velY
    }
  }
  
  function jump() {
     jumpMan.jump.velY = -0.7 * Math.pow(jumpMan.jump.jumpX,2) + 6
     jumpMan.posAct.x += jumpMan.jump.jumpX+3
     jumpMan.posAct.y = jumpMan.jump.posAct.y - jumpMan.jump.velY
     if(jumpMan.jump.jumpX == 3 ) {
        jumpMan.deplacement.jumping = false
        jumpMan.jump.velY = 0
     } else
        jumpMan.jump.jumpX++ 
  }
  
  function left() {
      jumpMan.jump.velX= jumpMan.jump.velX>0?0:jumpMan.jump.velX> -6?jumpMan.jump.velX-=1:jumpMan.jump.velX
        if(jumpMan.posAct.x < 1 && jumpMan.jump.velX < 0)
           jumpMan.jump.velX = 0 
        //jumpMan.graphic.etat =  jumpMan.graphic.etat==X?Y:Z // changer etat
  }
  
  function right() {
       jumpMan.graphic.etat =  jumpMan.graphic.etat==2?3:2 // changer etat

        jumpMan.jump.velX = jumpMan.jump.velX<0?0:jumpMan.jump.velX<6?jumpMan.jump.velX+=1:jumpMan.jump.velX
        
        if(jumpMan.posAct.x >= 302 && jumpMan.jump.velX > 0)
           jumpMan.jump.velX = 0
  }
  
  function up() {
    if(collisionLadder()) {
        jumpMan.posAct.y-=5
    }
  }
  
  function down() {
    if(collisionLadder()) {
        jumpMan.posAct.y+=5
    }
  }
  
  function collisionFloor()
  {

  }

  function collisionLadder()
  {
    var collision = false
    for(var i = 0; !collision && i < decors.arrLadders.length; i++) {
        if(jumpMan.posAct.x >= decors.arrLadders[i].x
          && jumpMan.posAct.x + jumpMan.graphic.w <= decors.arrLadders[i].x + (decors.arrLadders[i].larg)
          && (jumpMan.posAct.y+jumpMan.graphic.h >= decors.arrLadders[i].y
             && jumpMan.posAct.y+jumpMan.graphic.h <= decors.arrLadders[i].y + decors.arrLadders[i].nbRep*8)) {
                 collision = true
             }
    }
    
    return collision
  }
  
  function collisionRope()
  {

    
  }
  function collisionBomb()
  {

    
  }