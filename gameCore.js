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
    collisionBomb()

    //si pas dans corde , pas dans échelle et pas jumping
    if (true) { 
      applyGravity()
    }
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
           && jumpMan.posAct.y+jumpMan.graphic.h <= decors.arrLadders[i].y + decors.arrLadders[i].w)) 
        {
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
    collide = false
    for (var i = 0; i < decors.arrBombs.length; i++) {
      bxMin = decors.arrBombs[i].x                        //A
      bxMax = decors.arrBombs[i].x +decors.arrBombs[i].w  //B
      jxMin = jumpMan.posAct.x                            //C
      jxMax = jumpMan.posAct.x + jumpMan.graphic.w        //D
      a=bxMin
      b=bxMax
      c=jxMin
      d=jxMax
      
      if (  (bxMin <= jxMax && jxMin <= bxMax )||(jxMin <= bxMax && bxMin <= jxMax) ) {
          collide = true
          disarmBomb(decors.arrBombs[i])
          break
        //return
      }
    }
    console.log("collide avec bomb "+collide ) 

    return collide
  }
  function toutchFloor()
  {
    toutch =  false
    for (var i = 0; i < decors.arrFloors.length; i++) {
      if (jumpMan.posAct.y+jumpMan.graphic.h == decors.arrFloors[i].y  && 
          jumpMan.posAct.x+jumpMan.graphic.w >= decors.arrFloors[i].x &&
          jumpMan.posAct.x<= decors.arrFloors[i].x+decors.arrFloors[i].w )  {
            toutch = true
            break
      }
    }
    return toutch
  }
  function applyGravity()
  {
    if (!toutchFloor()) {
      canStillDrop = !toutchFloor()
      for (var i = 0; i < 6; i++) {
        if (canStillDrop) {
          jumpMan.posAct.y ++
          canStillDrop = !toutchFloor()
        }
        else{ 
          break 
        }
      }
    }
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
    else{ console.log("disarmBomb no "+pBomb.id+" impossible") }
  }