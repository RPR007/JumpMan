/*
	X posiiton verticale , Y posiiton horisontale
*/var sounds = new Object();

 function keyDown(pEvent) {
    if(!jumpMan.deplacement.jumping) {
    switch (pEvent.keyCode) {
          case 37: // left
            jumpMan.deplacement.l = true
            jumpMan.jump.direction = 0
          break;
          case 38: // up
            jumpMan.deplacement.u = true
            jumpMan.jump.direction = 2
          break;
          case 39: // right
            jumpMan.deplacement.r = true
            jumpMan.jump.direction = 1
          break;
          case 40: // down=
            jumpMan.deplacement.d = true 
          break;
          case 32 : // space
            jumpMan.deplacement.j = true
            break;
          default:
            //console.log("down touche : "+ event.keyCode+" invalide" )
    }
    }
 }

 function keyUp(pEvent) {
   switch (pEvent.keyCode) {
          case 37: // left
            jumpMan.deplacement.l = false
            if(!jumpMan.deplacement.jumping)
                jumpMan.jump.direction = 2
          break;
          case 38: // up
            jumpMan.deplacement.u = false
          break;
          case 39: // right
            if(!jumpMan.deplacement.jumping)
                jumpMan.jump.direction = 2
            jumpMan.deplacement.r = false
          break;
          case 40: // down
            jumpMan.deplacement.d = false 
          break;
          case 32: // space
            jumpMan.deplacement.j = false
            break;
          default:
            //console.log("up touche : "+ event.keyCode+" invalide" )
    }
 }

 function animer() {
    objCycleAnimation = requestAnimationFrame(animer)
    //only draw 1/3 of the time
    if (jumpMan.deplacement.fr == 1) {closureAnimer()  }
    jumpMan.deplacement.fr = jumpMan.deplacement.fr==3?1:jumpMan.deplacement.fr+1
    
      function closureAnimer() {
          
        if(decors.arrBombs.length == 0 || score.live == 0) {
            gameOver()
        }
        
        effacer()
        updateAnimation()
        dessiner()
        
      }
      
  }

  function updateAnimation()
  {
    moveJumpMan()
    killJM()
    moveBal()

    
    collisionJM()
    collisionBomb()
    
    //si pas dans corde , pas dans échelle et pas jumping
    if (collisionLadder() == null && collisionRope() == null && !jumpMan.deplacement.jumping){
        drop = applyGravity()
        jumpMan.posAct.dropTotal += drop

        if (drop == 0) {
          jumpMan.posAct.dropTotal = 0
        }
        else if (jumpMan.posAct.y==162 && jumpMan.posAct.dropTotal == 6  ){
          console.log('petit jump plateforme mortelle')
        }
        else if (jumpMan.posAct.dropTotal > 40) {
          console.log('gros jump mortelle')
        }
        console.log( drop+" : "+jumpMan.posAct.dropTotal+" : "+jumpMan.posAct.y )

    }
    
    else if((obj = collisionRope()) != null) {
        switchJumpManRope()
        if(jumpMan.posAct.y+jumpMan.graphic.h-4 > obj.y)
            jumpMan.posAct.y-=4
        else {
            jumpMan.posAct.y = obj.y-16
            jumpMan.jump.velY = 0
        }
    } 
    
  }


  function moveJumpMan()
  {
    if (jumpMan.deplacement.jumping) { jump() }
    else if (jumpMan.deplacement.l && jumpMan.deplacement.r) {}
    else if (jumpMan.deplacement.j || (jumpMan.deplacement.u && !collisionLadder() && !collisionRope())) {
        if (touchFloor() != null ||  collisionLadder() != null) {
            if(jumpMan.jump.direction == 0) {
                jumpMan.jump.jumpX  = 3
                jumpMan.jump.velY=0
            } else if(jumpMan.jump.direction == 1) {
                jumpMan.jump.jumpX  = -3
                jumpMan.jump.velY=0
            } else if (jumpMan.jump.direction == 2){
               jumpMan.jump.velY=3 
               jumpMan.jump.a = 1
               
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
          
          if(!collisionLadder() && !collisionRope())
            jumpMan.graphic = decors.JumpManGraphics[0]
        }
        else{
          if(!collisionLadder() && !collisionRope())
            jumpMan.graphic = decors.JumpManGraphics[0]
        }

    }
  }
  
  function jump() {
     sounds.jump.play()
     jumpMan.jump.direction == 0 ? jumpLeft() : jumpMan.jump.direction == 1 ? jumpRight() : jumpUp()
     
     function jumpLeft() {
        jumpMan.jump.velY = -(3/4) * Math.pow(jumpMan.jump.jumpX,2) + 12
        jumpMan.posAct.y = jumpMan.jump.initPos.y - jumpMan.jump.velY
     
        jumpMan.posAct.x += jumpMan.jump.jumpX-4
        if(touchFloor() != null) {
            jumpMan.posAct.y = touchFloor().y - jumpMan.graphic.h -1
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY = 0
        } else if(collisionLadder()) {
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY = 0
        } else
            jumpMan.jump.jumpX-- 
     }
     
     function jumpRight() {
        jumpMan.jump.velY = -(3/4) * Math.pow(jumpMan.jump.jumpX,2) + 12
        jumpMan.posAct.y = jumpMan.jump.initPos.y - jumpMan.jump.velY
     
        jumpMan.posAct.x += jumpMan.jump.jumpX+4
        if(touchFloor() != null) {
            jumpMan.posAct.y = touchFloor().y - jumpMan.graphic.h -1
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY = 0
            
        } else if(collisionLadder()) {
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY = 0
        }else
            jumpMan.jump.jumpX++ 
     }
     
     function jumpUp() {
        jumpMan.graphic = decors.JumpManGraphics[5]
        if(jumpMan.jump.velY == 0 || collisionRope()) {
            jumpMan.deplacement.jumping = false
            
            if(collisionRope())
                jumpMan.graphic = decors.JumpManGraphics[9]
        } else if(jumpMan.jump.velY == 12)
            jumpMan.jump.a *= -1
            
        jumpMan.posAct.y = jumpMan.jump.initPos.y - jumpMan.jump.velY
        
        if(jumpMan.jump.a == -1) {
            
            jumpMan.jump.velY-=3
         } else {
            jumpMan.jump.velY+=3
        }
        
         if(collisionLadder()) {
            jumpMan.deplacement.jumping = false
            jumpMan.jump.velY=0
        }
     }
     
  }
  
  function left() {
        sounds.pas.play()
        jumpMan.jump.velX = jumpMan.jump.velX>0?0:jumpMan.jump.velX> -6?jumpMan.jump.velX-=score.speed:jumpMan.jump.velX

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
        if ( touchFloor() == null) {
          jumpMan.posAct.y+= 2
        }
        
        if(!collisionLadder())
            jumpMan.posAct.y+= jumpMan.jump.velY

  }
  
  function right() {
        sounds.pas.play()
        jumpMan.jump.velX = jumpMan.jump.velX<0?0:jumpMan.jump.velX<6?jumpMan.jump.velX+=score.speed:jumpMan.jump.velX

        
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
        if ( touchFloor() == null) {
          jumpMan.posAct.y+= 2
        }
        
        if(!collisionLadder())
            jumpMan.posAct.y+= jumpMan.jump.velY

  }
  
  function up() {
    var obj = null
    // Ladder
    if((obj = collisionLadder()) != null) {
        sounds.pas.play()
        switchJumpManLadder()
        if((jumpMan.posAct.y+jumpMan.graphic.h)-4 > obj.y) {
            jumpMan.posAct.y-=4
        } else {
            jumpMan.posAct.y-=4
            if(!collisionLadder())
                jumpMan.posAct.y = obj.y-jumpMan.graphic.h + 1
        }
    }
  }
  
  function down() {
    var obj = null
    
    // Ladder
    if((obj = collisionLadder()) != null) {
        switchJumpManLadder()
        sounds.pas.play()
        if((jumpMan.posAct.y+jumpMan.graphic.h)+4 < obj.y+obj.nbRep*8)
            jumpMan.posAct.y+=4
        else {
            jumpMan.posAct.y+=4
            if(!collisionLadder())
                jumpMan.posAct.y = obj.y+obj.nbRep*8 - jumpMan.graphic.h
        }
    // Rope
    }
  }
  
  function switchJumpManLadder() {

      if(jumpMan.graphic == decors.JumpManGraphics[5])
        jumpMan.graphic = decors.JumpManGraphics[6]
      else if(jumpMan.graphic == decors.JumpManGraphics[6])
        jumpMan.graphic = decors.JumpManGraphics[7]
      else if(jumpMan.graphic == decors.JumpManGraphics[7])
        jumpMan.graphic = decors.JumpManGraphics[8]
      else
        jumpMan.graphic = decors.JumpManGraphics[5]
  }
  
  function switchJumpManRope() {
      if(jumpMan.graphic == decors.JumpManGraphics[9])
        jumpMan.graphic = decors.JumpManGraphics[10]
      else
        jumpMan.graphic = decors.JumpManGraphics[9]
  }

  function collisionLadder()
  {
    var collision = false, i
    for(i = 0; !collision && i < decors.arrLadders.length; i++) {
        if(jumpMan.posAct.x >= decors.arrLadders[i].x-5
          && jumpMan.posAct.x + jumpMan.graphic.w <= decors.arrLadders[i].x + (decors.arrLadders[i].w) + 5
          && (jumpMan.posAct.y+jumpMan.graphic.h >= decors.arrLadders[i].y
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
        if(jumpMan.posAct.x >= decors.arrRopes[i].x-8
          && jumpMan.posAct.x + jumpMan.graphic.w <= decors.arrRopes[i].x + 12
          && (jumpMan.posAct.y+jumpMan.graphic.h >= decors.arrRopes[i].y
             && jumpMan.posAct.y <= decors.arrRopes[i].y + 15)) {
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

      if ( ( (bxMin < jxMax && jxMin < bxMax )||(jxMin < bxMax && bxMin < jxMax) ) &&
           ( (byMin < jyMax && jyMin < byMax )||(jyMin < byMax && byMin < jyMax) ) ) {
          disarmBomb(decors.arrBombs[i])
          sounds.bomb.play()
          collide = true
          break
      }
    } 

    return collide
  }
  function touchFloor()
  {
    touch =  null
    for (var i = 0; i < decors.arrFloors.length; i++) {
      if (jumpMan.posAct.y+jumpMan.graphic.h >= decors.arrFloors[i].y  &&
          jumpMan.posAct.y+jumpMan.graphic.h <= decors.arrFloors[i].y+8  && 
          jumpMan.posAct.x+jumpMan.graphic.w-1 >= decors.arrFloors[i].x &&
          jumpMan.posAct.x<= decors.arrFloors[i].x+decors.arrFloors[i].w )  {
            touch = decors.arrFloors[i]
            break
      }
    }
    return touch
  }
  
  
  function applyGravity()
  {
    nbDrop = 0
    if (touchFloor() == null) {
      canStillDrop = touchFloor() == null
      for (var i = 0; i < 6; i++) {
        if (canStillDrop) {
          jumpMan.posAct.y ++
          canStillDrop = touchFloor() == null
          nbDrop++
        }
      }
    }
    return nbDrop
  }
    

  function disarmBomb(pBomb)
  {
    arrTmp = []
    if (pBomb.id == 1 || pBomb.id == 10) {
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

    // Score
    score.score += 100
    
    return initSize-1 == finalSize
  
  }


  function lostOneLive()
  {
    console.log('lost 1 live')
    score.live--
  }


  function gameOver()
  {
    score.score += score.bonus
    window.cancelAnimationFrame(objCycleAnimation)
    sounds.over.play()
    alert("La partie est terminé. \n\nVous avez obtenu un score de " + score.score)
    restart()
    if ( confirm("Voulez-vous rejouer?") ) {
      animer()
    } 
    
  }

