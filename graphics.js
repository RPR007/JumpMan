/*
  X posiiton horisontale , Y posiiton verticale 
*/
  var decors = new Object({})
  decors.arrLadders = []
  decors.arrPointsLadders  = []
  decors.arrFloors = []
  decors.arrPointsFloors = []
  decors.arrRopes = []
  decors.arrBombs = []
  decors.JumpManGraphics = []
  
  var resizeTimer
  function resize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(closureResize, 250);
    width =  window.innerWidth 
    height =  window.innerHeight
    function closureResize() {
        var w =  window.innerWidth / 316 
        var h =  window.innerHeight / 178
        dimPx = (w < h ? w:h)
        document.getElementById('canJumpMan').width=(316*dimPx)
        document.getElementById('canJumpMan').height=(178*dimPx)
    }
  }

  function effacer() {
    context.clearRect(0, 0, width , height )
  }
  
  function dessiner() {
    //flors
    context.save()
    for(var i = 0; i < decors.arrPointsFloors.length; i++) {
       drawFloor(decors.arrPointsFloors[i].x , decors.arrPointsFloors[i].y) 
    }//ladders
    context.restore()
     context.fillStyle = '#3a36a3'
    for(var i = 0; i < decors.arrPointsLadders.length; i++) {
       drawLadders(decors.arrPointsLadders[i].x , decors.arrPointsLadders[i].y)         
    }//ropes
    context.restore()
    context.fillStyle = '#6dac49'
    for(var i = 0; i < decors.arrRopes.length; i++) {
       drawRope(decors.arrRopes[i].x , decors.arrRopes[i].y)         
    }//bombs
    context.restore()
    context.fillStyle = '#935a28'
    for(var i = 0; i < decors.arrBombs.length; i++) {
        drawBomb(decors.arrBombs[i].x , decors.arrBombs[i].y)         
    }//JumpMan
    context.restore()
    drawJumpMan()
    context.restore()
  }

  function initScene() {
    initFloor()
    initLadders()
    initRopes()
    initBombs()
    initJumpMan()
  }

  function initFloor() {
    //créer les obj planchers symétriques
    //top left floor
    decors.arrFloors.push({x:4,y:20,nbRep:10,haut:6},{x:44,y:22,nbRep:2,haut:6},{x:52,y:24,nbRep:2,haut:6},{x:60,y:22,nbRep:2,haut:6})
    decors.arrFloors.push({x:68,y:20,nbRep:12,haut:6},{x:116,y:18,nbRep:2,haut:6},{x:124,y:16,nbRep:2,haut:6},{x:132,y:14,nbRep:2,haut:6})
    //middle-top left floor
    decors.arrFloors.push({x:4,y:60,nbRep:10,haut:6})
    decors.arrFloors.push({x:76,y:52,nbRep:8,haut:6},{x:108,y:54,nbRep:2,haut:6},{x:116,y:56,nbRep:2,haut:6},{x:124,y:58,nbRep:2,haut:6})
    //middle-btm left floor
    decors.arrFloors.push({x:4,y:92,nbRep:10,haut:6},{x:68,y:92,nbRep:4,haut:6})
    //btm-top left floor
    decors.arrFloors.push({x:4,y:140,nbRep:12,haut:6},{x:52,y:138,nbRep:2,haut:6},{x:60,y:136,nbRep:2,haut:6},{x:68,y:134,nbRep:2,haut:6}) 
    decors.arrFloors.push({x:76,y:132,nbRep:2,haut:6},{x:84,y:130,nbRep:2,haut:6},{x:92,y:128,nbRep:2,haut:6},{x:100,y:126,nbRep:2,haut:6})
    //dupliquer les planchers symétriques
    duplArrayFloorSym(decors.arrFloors)
    //créer les obj planchers NON symétriques
    decors.arrFloors.push({x:132, y:60, nbRep:12, haut:6})//middle-up floor
    decors.arrFloors.push({x:108, y:92, nbRep:24, haut:6})//middle-middle floor
    decors.arrFloors.push({x:108, y:124, nbRep:24, haut:6})//middle-down floor
    decors.arrFloors.push({x:142, y:166, nbRep:8, haut:6})//middle bump lower florr
    decors.arrFloors.push({x:4, y:172, nbRep:76, haut:6})//full lower florr
    // créer les morceaux individuels
    for (var i = 0 ; i<decors.arrFloors.length ; i++) {
        pushArrayPointsFloor(decors.arrFloors[i])
    }
  }
  //ajoute des points pour créer une ligne de plancher horisontale
   function pushArrayPointsFloor(pFloor){
     for (var i = 0; i < pFloor.nbRep; i++) {
      decors.arrPointsFloors.push( {x:pFloor.x+(i*4), y:pFloor.y } )
     }
   }
   //répliquer les planchers symétriques
   function duplArrayFloorSym(pArr) {
   originals = pArr
   var length = originals.length
     for (var i = 0; i < length; i++) {
      pArr.push( {x:312-(originals[i].x+originals[i].nbRep*4) , y:originals[i].y ,nbRep:originals[i].nbRep} )
     }
   }

   function drawFloor(pX , pY) {
     context.beginPath();
     context.fillStyle = '#6dac49'
     context.rect( pX*dimPx  ,pY*dimPx , 4*dimPx , 6*dimPx)
     context.fill()

     context.beginPath()
     context.fillStyle = 'black'
     context.rect( (pX+2)*dimPx ,(pY+2)*dimPx , 2*dimPx , 2*dimPx)
     context.fill()
   }

   function initLadders() {
      //créer les obj échelles symétriques
      decors.arrLadders.push({x:20, y:12,  nbRep:11, larg:16})//left up
      decors.arrLadders.push({x:20, y:132, nbRep:5, larg:16})//left down
      decors.arrLadders.push({x:84,  y:12,  nbRep:5, larg:16})//middle left-up
      decors.arrLadders.push({x:118,  y:84,  nbRep:5, larg:16})//middle left-down
      //dupliquer les échelles symétriques
      duplArrayLadders(decors.arrLadders)
      //créer les obj échelles NON symétriques
      decors.arrLadders.push({x:148,  y:52,  nbRep:5, larg:16})//middle
      // créer les morceaux individuels
      for (var i = 0 ; i<decors.arrLadders.length ; i++) {
          pushArrayPointsLadders(decors.arrLadders[i] ) 
      }
    }
    //ajoute les points nécessaires pour créer une échelle verticale
   function pushArrayPointsLadders(pLadder) {
     for (var i = 0; i < pLadder.nbRep; i++) {
      decors.arrPointsLadders.push( {x:pLadder.x, y:pLadder.y+(i*8) } )
     }
   }
   //répliquer les échelles symétriques
   function duplArrayLadders(pArr) {
   originals = pArr
   var length = originals.length
     for (var i = 0; i < length; i++) {
      pArr.push( {x:312-(originals[i].x+originals[i].larg) , y:originals[i].y ,nbRep:originals[i].nbRep} )
     }
   }
   
   function drawLadders(pX , pY) {
     context.beginPath()
     context.rect( (pX*dimPx)   , (pY)*dimPx   , 4*dimPx   , 8*dimPx)
     context.rect( (pX+4)*dimPx , (pY+4)*dimPx , 8*dimPx , 2*dimPx)
     context.rect( (pX+12)*dimPx , (pY)*dimPx   , 4*dimPx  , 8*dimPx)
     context.fill()
   }

    function initRopes() {
      decors.arrRopes = [{x:74, y:98}, {x:234, y:98}]
    }

   function drawRope(pX , pY) {
     var rope = [[true,false],[false,true],[true,false],[false,true],[true,false],[false,true],[true,false],[false,true]]
     pX *= dimPx;pY *= dimPx
     
     for(var i = 0; i < rope.length; i++)
        for(var j = 0; j < rope[i].length;j++)
            if(rope[i][j])
                context.fillRect(pX+(j*(dimPx*2)) ,pY+(i*(dimPx*2)) , (dimPx*2) , (dimPx*2))
      /*var b = true
      for (var i = 0; i < 8; i++) {
        context.fillRect(pX*dimPx+(Boolean(b)?0:dimPx*2) ,pY*dimPx+(i*(dimPx*2)) , (2*dimPx) , (2*dimPx))
        b = !b
      }*/
   }

   function initBombs() {
       decors.arrBombs = [{x:4,y:14},{x:4,y:46},{x:4,y:166}]
       decors.arrBombs.push({x:132,y:8},{x:66,y:76},{x:126,y:146})
       decors.arrBombs.push({x:300,y:14},{x:300,y:46},{x:300,y:166})
       decors.arrBombs.push({x:172,y:8},{x:236,y:76},{x:178,y:146})
   }

   function drawBomb(pX , pY) {
     var bomb = [[false,true,true,false],[true,false,false,true],[false,true,true,false]]
     pX *= dimPx;pY *= dimPx
     
      for(var i = 0; i < bomb.length; i++) {
        for(var j = 0; j < bomb[i].length;j++) {
            if(bomb[i][j]) {
                context.fillRect(pX+(j*(dimPx*2)) ,pY+(i*(dimPx*2)) , (dimPx*2) , (dimPx*2))
                context.strokeRect(pX+(j*(dimPx*2))+1 ,pY+(i*(dimPx*2))+1 , (dimPx*2)-1 , (dimPx*2)-1)
            }
        }
      }
  }

  function initJumpMan() {
      decors.JumpManGraphics[0] = jumpManFront()
      decors.JumpManGraphics[1] = jumpManRight1()
      decors.JumpManGraphics[2] = jumpManRight2()
      decors.JumpManGraphics[3] = jumpManLeft1()
      decors.JumpManGraphics[4] = jumpManLeft2()
      decors.JumpManGraphics[5] = jumpManLadder1()
      decors.JumpManGraphics[6] = jumpManLadder2()
      decors.JumpManGraphics[7] = jumpManLadder3()
      decors.JumpManGraphics[8] = jumpManLadder4()
      decors.JumpManGraphics[9] = jumpManClimb1()
      decors.JumpManGraphics[10] = jumpManClimb2()
      decors.JumpManGraphics[11] = jumpManDead1()
      //decors.JumpManGraphics[12] = jumpManDead2()
      //decors.JumpManGraphics[13] = jumpManDead3()

      jumpMan.posAct = {x:(316/2)-8,y:114,h : 0,w : 0}
      jumpMan.posPr  = {x:0,y:0}
      jumpMan.etat = 1
      jumpMan.deplacement = {l:false,u:false,r:false,fr:1}
      jumpMan.jump = { jumping:false,jumpX : 0, posAct : {x:(316/2)-8,y:114,h : 0,w : 0},velX:0.0, velY:0.0, gravity:0.5}
      jumpMan.graphic = decors.JumpManGraphics[6]
      drawJumpMan()
    }

    function drawJumpMan() {
      context.save()

      context.beginPath() 
      context.fillStyle = 'white'
      for(var i = 0; i < graphic.tetePied.length; i++){
          context.rect( (jumpMan.posAct.x+jumpMan.graphic.tetePied[i].x)*dimPx, (jumpMan.posAct.y+jumpMan.graphic.tetePied[i].y)*dimPx, jumpMan.graphic.tetePied[i].w*dimPx, jumpMan.graphic.tetePied[i].h*dimPx)
      }
      context.fill()
      context.beginPath() 
      context.fillStyle = 'red'
      for(var i = 0; i < graphic.corps.length; i++){
          context.rect( (jumpMan.posAct.x+jumpMan.graphic.corps[i].x)*dimPx, (jumpMan.posAct.y+jumpMan.graphic.corps[i].y)*dimPx, jumpMan.graphic.corps[i].w*dimPx, jumpMan.graphic.corps[i].h*dimPx)
      }
      context.fill()
      context.beginPath() 
      context.fillStyle = 'purple'
      for(var i = 0; i < graphic.jambes.length; i++){
          context.rect( (jumpMan.posAct.x+jumpMan.graphic.jambes[i].x)*dimPx, (jumpMan.posAct.y+jumpMan.graphic.jambes[i].y)*dimPx, jumpMan.graphic.jambes[i].w*dimPx, jumpMan.graphic.jambes[i].h*dimPx)
      }
      context.fill()
      
      context.restore()
    }
   