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
      jumpMan.deplacement.fr++
      jumpMan.jump.velY = -0.7 * Math.pow(jumpMan.jump.jumpX,2) + 6
      jumpMan.posAct.x += jumpMan.jump.jumpX+3
      jumpMan.posAct.y = jumpMan.jump.posAct.y - jumpMan.jump.velY
      console.log(jumpMan.jump.jumpX + ',' + jumpMan.jump.velY)
      if(jumpMan.jump.jumpX == 3 ) {
        jumpMan.deplacement.jumping = false
        jumpMan.jump.velY = 0
      } else
        jumpMan.jump.jumpX++
    }
     //left AND right == not moving
    else if (jumpMan.deplacement.l && jumpMan.deplacement.r) {
      jumpMan.jump.jumpX = -2
      jumpMan.jump.posAct = jumpMan.posAct
    }
    else{
      
      //start jumping
      if (jumpMan.deplacement.u) {
        jumpMan.jump.jumpX  = -3
        jumpMan.deplacement.jumping = true
        jumpMan.jump.velY=0 //give it a kick
      }//go left
      else if (jumpMan.deplacement.l) {//reduce velX if possible
        jumpMan.jump.velX= jumpMan.jump.velX>0?0:jumpMan.jump.velX> -6?jumpMan.jump.velX-=1:jumpMan.jump.velX
        if(jumpMan.posAct.x < 1 && jumpMan.jump.velX < 0)
           jumpMan.jump.velX = 0 
        //jumpMan.graphic.etat =  jumpMan.graphic.etat==X?Y:Z // changer etat
      }//go right
      else if (jumpMan.deplacement.r) {//augment velX if possible
        jumpMan.graphic.etat =  jumpMan.graphic.etat==2?3:2 // changer etat

        jumpMan.jump.velX = jumpMan.jump.velX<0?0:jumpMan.jump.velX<6?jumpMan.jump.velX+=1:jumpMan.jump.velX
        
        if(jumpMan.posAct.x >= 302 && jumpMan.jump.velX > 0)
           jumpMan.jump.velX = 0
      }//stop going left OR right
      else if (!jumpMan.deplacement.l  && !jumpMan.deplacement.l){
          jumpMan.jump.velX=0
      }
      jumpMan.posAct.x+= jumpMan.jump.velX
      jumpMan.posAct.y+= jumpMan.jump.velY
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


    function disarmBomb(pBomb)
    {
      arrTmp = []
      if (pBomb.id == 1 || pBomb.id == 10 ) {
          for (var i = 0 ; i<decors.arrFloors.length ; i++) {
            if (!decors.arrFloors[i].bomb || decors.arrFloors[i].bomb != pBomb.id) {
              arrTmp.push(decors.arrFloors[i])
            }
          }
          decors.arrFloors = arrTmp
          decors.arrPointsFloors = []
          for (var i = 0 ; i<decors.arrFloors.length ; i++) {
              pushArrayPointsFloor(decors.arrFloors[i])
          }
      }
      else if (pBomb.id == 2 || pBomb.id == 11 ) {
          for (var i = 0 ; i<decors.arrLadders.length ; i++) {
            if (!decors.arrLadders[i].bomb || decors.arrLadders[i].bomb != pBomb.id) {
              arrTmp.push(decors.arrLadders[i])
            }
          }
          decors.arrLadders = arrTmp
          decors.arrPointsLadders = []
          for (var i = 0 ; i<decors.arrLadders.length ; i++) {
              pushArrayPointsLadders(decors.arrLadders[i] ) 
          }
      }
      else{ console.log("disarmBomb no "+pBomb.id+" impossible") }
    }