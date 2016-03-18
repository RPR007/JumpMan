/*
	X posiiton verticale , Y posiiton horisontale
*/var sounds = new Object();

 function keyDown(pEvent) {
    switch (pEvent.keyCode) {
          case 37: // left
            jumpMan.deplacement.l = true
            jumpMan.jump.direction = 0
          break;
          case 38: // up
            jumpMan.deplacement.u = true
          break;
          case 39: // right
            jumpMan.deplacement.r = true
            jumpMan.jump.direction = 1
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
    collisionBomb()
    
    //si pas dans corde , pas dans échelle et pas jumping
    if (collisionLadder() == null 
       && collisionRope() == null
       && !jumpMan.deplacement.jumping) { 
        applyGravity()
    }
  }


  function moveJumpMan()
  {
    if (jumpMan.deplacement.jumping) { jump() }
    else if (jumpMan.deplacement.l && jumpMan.deplacement.r) {}
    else if (jumpMan.deplacement.j) {
        if (touchFloor() || collisionLadder()) {
            if(jumpMan.jump.direction == 0) {
                jumpMan.jump.jumpX  = 3
                jumpMan.jump.velY=0 //give it a kick
            } else {
                jumpMan.jump.jumpX  = -3
                jumpMan.jump.velY=0 //give it a kick
            }
        
            jumpMan.jump.initPos = {x:jumpMan.posAct.x,y:jumpMan.posAct.y}
            jumpMan.deplacement.jumping = true
        }

        
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
          jumpMan.graphic = decors.JumpManGraphics[0]
        }
        else{
          jumpMan.graphic = decors.JumpManGraphics[0]
        }

    }
  }
  
  function jump() {
     jumpMan.jump.direction == 0 ? jumpLeft() : jumpRight()
     
     jumpMan.jump.velY = -(3/4) * Math.pow(jumpMan.jump.jumpX,2) + 12
     jumpMan.posAct.y = jumpMan.jump.initPos.y - jumpMan.jump.velY
     
     function jumpLeft() {
        jumpMan.posAct.x += jumpMan.jump.jumpX-4
        if(jumpMan.posAct.x == -4) {
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY = 0
        } else
            jumpMan.jump.jumpX-- 
            
     }
     
     function jumpRight() {
        jumpMan.posAct.x += jumpMan.jump.jumpX+4
        if(jumpMan.posAct.x == 4) {
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY = 0
        } else
            jumpMan.jump.jumpX++ 
     }
  }
  
  function left() {
      jumpMan.jump.velX= jumpMan.jump.velX>0?0:jumpMan.jump.velX> -6?jumpMan.jump.velX-=1:jumpMan.jump.velX
        
        //changer direction ou aretter
        if(jumpMan.posAct.x < 1 && jumpMan.jump.velX < 0)
           jumpMan.jump.velX = 0 
        // changer etat
        isL1 = jumpMan.graphic.etat==1
        isL2 = jumpMan.graphic.etat==2
        alrMovLeft = (isL1 || isL2)
        jumpMan.graphic =  (alrMovLeft?(isL1?decors.JumpManGraphics[2]:decors.JumpManGraphics[1]):decors.JumpManGraphics[1]) 

        jumpMan.posAct.x+= jumpMan.jump.velX
        jumpMan.posAct.y-= 2
        if ( !touchFloor() ) {
          jumpMan.posAct.y+= 2
          console.log("monte 2")
        }
        jumpMan.posAct.y+= jumpMan.jump.velY

  }
  
  function right() {
        jumpMan.jump.velX = jumpMan.jump.velX<0?0:jumpMan.jump.velX<6?jumpMan.jump.velX+=1:jumpMan.jump.velX
        
        //changer direction ou aretter
        if(jumpMan.posAct.x >= 302 && jumpMan.jump.velX > 0)
           jumpMan.jump.velX = 0
        // changer etat
        isR1 = jumpMan.graphic.etat==3
        isR2 = jumpMan.graphic.etat==4
        alrMovRight = (isR1 || isR2)
        jumpMan.graphic =  (alrMovRight?(isR1?decors.JumpManGraphics[4]:decors.JumpManGraphics[3]):decors.JumpManGraphics[3]) 
        

        jumpMan.posAct.x+= jumpMan.jump.velX
        jumpMan.posAct.y-= 2
        if ( !touchFloor() ) {
          console.log("monte 2")
          jumpMan.posAct.y+= 2
        }
        jumpMan.posAct.y+= jumpMan.jump.velY

  }
  
  function up() {
    var obj = null
    // Ladder
    if((obj = collisionLadder()) != null) {
        if((jumpMan.posAct.y+jumpMan.graphic.h)-4 > obj.y) {
            jumpMan.posAct.y-=4
        } else
            jumpMan.posAct.y = obj.y-jumpMan.graphic.h + 1
    } else if((obj = collisionRope()) != null) {
        if(jumpMan.posAct.y-4 > obj.y)
            jumpMan.posAct.y-=4
        else {
            jumpMan.posAct.y = obj.y
        }
    } 
  }
  
  function down() {
    var obj = null
    
    // Ladder
    if((obj = collisionLadder()) != null) {
        if((jumpMan.posAct.y+jumpMan.graphic.h)+4 < obj.y+obj.nbRep*8)
            jumpMan.posAct.y+=4
        else
            jumpMan.posAct.y = obj.y+obj.nbRep*8 - jumpMan.graphic.h
    // Rope
    } else if((obj = collisionRope()) != null) {
         if((jumpMan.posAct.y+jumpMan.graphic.h)+4 < obj.y+16+jumpMan.graphic.h-1)
            jumpMan.posAct.y+=4
        else
            jumpMan.posAct.y = obj.y+15
    }
  }
  
  function collisionFloor()
  {

  }

  function collisionLadder()
  {
    var collision = false, i
    for(i = 0; !collision && i < decors.arrLadders.length; i++) {
        if(jumpMan.posAct.x >= decors.arrLadders[i].x
          && jumpMan.posAct.x + jumpMan.graphic.w <= decors.arrLadders[i].x + (decors.arrLadders[i].w)
          && (jumpMan.posAct.y+jumpMan.graphic.h >= decors.arrLadders[i].y-1
             && jumpMan.posAct.y+jumpMan.graphic.h <= decors.arrLadders[i].y + decors.arrLadders[i].nbRep*8)) {
                 collision = true
             }
    }

    return collision ? decors.arrLadders[i-1] : null
  }
  
  function collisionRope()
  {
    var collision = false, i
    for(i = 0; !collision && i < decors.arrRopes.length; i++) {
        if(jumpMan.posAct.x >= decors.arrRopes[i].x-4
          && jumpMan.posAct.x + jumpMan.graphic.w <= decors.arrRopes[i].x + 8
          && (jumpMan.posAct.y >= decors.arrRopes[i].y
             && jumpMan.posAct.y+jumpMan.graphic.h <= decors.arrRopes[i].y + 16+jumpMan.graphic.h-1)) {
                 collision = true
             }
    }
    return collision ? decors.arrRopes[i-1] : null
  }
  
  function collisionBomb()
  {
    collide = false
    for (var i = 0; i < decors.arrBombs.length; i++) {
      /*  Vérification si 2 ligne se touchent  L1:AB L2:CD
         A    C       B    D      C    A       D    B
         -----* - - - *------     -----* - - - *------
            ( C<B && A<D )    ||    ( A<D && C<B )
      */
      bxMin = decors.arrBombs[i].x                        //A
      bxMax = decors.arrBombs[i].x +decors.arrBombs[i].w  //B
      jxMin = jumpMan.posAct.x                            //C
      jxMax = jumpMan.posAct.x + jumpMan.graphic.w        //D

      byMin = decors.arrBombs[i].y                        //A
      byMax = decors.arrBombs[i].y +decors.arrBombs[i].h  //B
      jyMin = jumpMan.posAct.y                            //C
      jyMax = jumpMan.posAct.y + jumpMan.graphic.h        //D 

      if ( ( (bxMin <= jxMax && jxMin <= bxMax )||(jxMin <= bxMax && bxMin <= jxMax) ) &&
           ( (byMin <= jyMax && jyMin <= byMax )||(jyMin <= byMax && bxMin <= jyMax) ) ) {
          disarmBomb(decors.arrBombs[i])
          collide = true
          break
      }
    } 

    return collide
  }
  function touchFloor()
  {
    touch =  false
    for (var i = 0; i < decors.arrFloors.length; i++) {
      if (Math.ceil(jumpMan.posAct.y)+jumpMan.graphic.h == decors.arrFloors[i].y  && 
          jumpMan.posAct.x+jumpMan.graphic.w-1 >= decors.arrFloors[i].x &&
          jumpMan.posAct.x<= decors.arrFloors[i].x+decors.arrFloors[i].w )  {
            touch = true
            break
      }
    }
    return touch
  }
  
  
  function applyGravity()
  {
    nbDrop = 0
    if (!touchFloor()) {
      canStillDrop = !touchFloor()
      for (var i = 0; i < 6; i++) {
        if (canStillDrop) {
          jumpMan.posAct.y ++
          canStillDrop = !touchFloor()
          nbDrop++
        }
      }
    }
    return nbDrop
  }
    

  function disarmBomb(pBomb)
  {
    pBomb.armed=false
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
    initSize = decors.arrBombs.length
    arrTmp =[]
    for (var i = 0 ; i<decors.arrBombs.length ; i++) {
      if (decors.arrBombs[i].id != pBomb.id) {
        arrTmp.push(decors.arrBombs[i])
      }
    }
    decors.arrBombs = arrTmp
    finalSize = decors.arrBombs.length

    return initSize-1 == finalSize
  
  }

