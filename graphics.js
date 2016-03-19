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
  decors.dims = {x:320 ,y:200 ,dimPx:0 }
  
  var resizeTimer
  function resize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(closureResize, 250);
    width =  window.innerWidth 
    height =  window.innerHeight
    function closureResize() {
        var w =  window.innerWidth / decors.dims.x 
        var h =  window.innerHeight / decors.dims.y
        dimPx = (w < h ? w:h)
        document.getElementById('canJumpMan').width=(decors.dims.x*dimPx)
        document.getElementById('canJumpMan').height=(decors.dims.y*dimPx)
    }
  }

  function restart() {
      effacer()
      initScene()
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
    }
    //ball
    drawBall()
    //JumpMan
    context.restore()
    drawJumpMan()
    context.restore()
    //score
    drawScore()
    
    context.restore()
  }

  function initScene() {
    initFloor()
    initLadders()
    initRopes()
    initBombs()
    initJumpMan()
    initBal()
    initScore()
  }

  function floor(pX , pY , pNbRep , pIdBomb) {
    if (pIdBomb) {
           decors.arrFloors.push({x:pX ,y:pY,nbRep:pNbRep,h:6,w:4*pNbRep,bomb:pIdBomb})
    }
    else{
        decors.arrFloors.push({x:pX ,y:pY,nbRep:pNbRep,h:6,w:4*pNbRep})
    }
  }

  function initFloor() {
    //créer les obj planchers symétriques
    //top left floor
    floor(8,20,10); 
    floor(72,20,12);floor(120,18,2);floor(128,16,2);floor(136,14,2); 
    //middle-top left floor
    floor(8,60,10); 
    floor(80,52,8);floor(112,54,2);floor(120,56,2);floor(128,58,2);
    //middle-btm left floor
    floor(8,92,10);floor(72,92,4);
    //btm-top left floor
    floor(8,140,12);floor(56,138,2);floor(64,136,2);floor(72,134,2);
    floor(80,132,2);floor(88,130,2);floor(96,128,2);floor(104,126,2);
    //dupliquer les planchers symétriques
    duplArrayFloorSym(decors.arrFloors)
    //créer les obj planchers NON symétriques
    floor(136,60,12);//middle-up floor
    floor(112,92,24);//middle-middle floor
    floor(112,124,24);//middle-down floor
    floor(146,166,8); //middle bump lower florr
    floor(6,172,76);//full lower florr

    floor(48,22,2,1);floor(56,24,2,1);floor(64,22,2,1);//associé bombe 1
    floor(248,22,2,10);floor(256,24,2,10);floor(264,22,2,10);//associé bombe 10
    
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
      floor( decors.dims.x -(originals[i].x+originals[i].nbRep*4) , originals[i].y , originals[i].nbRep)
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

   function ladder(pX , pY , pNbRep , pIdBomb) {

    if (pIdBomb) {
        decors.arrLadders.push({x:pX, y:pY, nbRep:pNbRep, h:8*pNbRep, w:16, bomb:pIdBomb})
    }
    else{
        decors.arrLadders.push({x:pX, y:pY, nbRep:pNbRep, h:8*pNbRep, w:16})
    }
   }

   function initLadders() {
      //créer les obj échelles symétriques
      ladder(24,12,7) ;ladder(24,84,2)//left up 2/3 pieces
      ladder(88, 12, 5)//middle left-up
      ladder(88, 12, 5)//middle left-down
      ladder(122, 84, 5)//middle left-down
      ladder(24, 132, 5)//left-down
      //dupliquer les échelles symétriques
      duplArrayLadders(decors.arrLadders)
      //créer les obj échelles NON symétriques
      ladder(152, 52, 5)//middle
      ladder(24,68, 2,2)//associé bombe 2
      ladder(280, 68, 2,11)//associé bombe 11

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
      pArr.push( {x:decors.dims.x -(originals[i].x+originals[i].w) , y:originals[i].y ,nbRep:originals[i].nbRep,h:originals[i].h,w:originals[i].w})
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
      decors.arrRopes = [{x:78, y:98}, {x:238, y:98}]
    }

   function drawRope(pX , pY) {
      var b = true
      for (var i = 0; i < 8; i++) {
        context.fillRect(pX*dimPx+(Boolean(b)?0:dimPx*2) ,pY*dimPx+(i*(dimPx*2)) , (2*dimPx) , (2*dimPx))
        b = !b
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

   function bomb(pX , pY, pID) {
       decors.arrBombs.push({x:pX,y:pY,w:4,h:3, id:pID , armed:true})
   }

   function initBombs() {
       bomb(8,14,1);             bomb(136,8,4);  bomb(176,8,7);               bomb(304,14,10);  
       bomb(8,46,112);bomb(70,76,5);                             bomb(240,76,8);bomb(304,50,11); //y 46
       bomb(8,166,113);            bomb(130,146,6);bomb(182,146,9);             bomb(304,166,12); 
   }

   function drawBomb(pX , pY) {
    var t = p(1,0,2,1)
     var bomb=[p(1,0,2,1),p(0,1,1,1),p(3,1,1,1),p(1,2,2,1)]
      context.beginPath()
      for(var i = 0; i < bomb.length; i++) {
            context.fillRect( (bomb[i].x+pX)*dimPx ,(bomb[i].y+pY)*dimPx , bomb[i].w*dimPx , bomb[i].h*dimPx)
      }
      context.fill()
  }

  function initJumpMan() {
      decors.JumpManGraphics[0] = jumpManFront()
      decors.JumpManGraphics[1] = jumpManLeft1()
      decors.JumpManGraphics[2] = jumpManLeft2()
      decors.JumpManGraphics[3] = jumpManRight1()
      decors.JumpManGraphics[4] = jumpManRight2()
      decors.JumpManGraphics[5] = jumpManLadder1()
      decors.JumpManGraphics[6] = jumpManLadder2()
      decors.JumpManGraphics[7] = jumpManLadder3()
      decors.JumpManGraphics[8] = jumpManLadder4()
      decors.JumpManGraphics[9] = jumpManClimb1()
      decors.JumpManGraphics[10] = jumpManClimb2()
      decors.JumpManGraphics[11] = jumpManDead1()
      decors.JumpManGraphics[12] = jumpManDead2()
      decors.JumpManGraphics[13] = jumpManDead3()

      jumpMan.posAct = {x:280,y:0}
     // jumpMan.posAct = {x:(316/2)-8,y:114}
      jumpMan.posPr  = {x:0,y:0}
      jumpMan.deplacement = {l:false,u:false,r:false,j:false,fr:1}
      jumpMan.jump = { jumping:false,jumpX : 0, direction : 2 , a : 1, posAct : {x:(316/2)-8,y:114},velX:0.0, velY:0.0, gravity:0.5}
      jumpMan.graphic = decors.JumpManGraphics[0]
      drawJumpMan()
    }

    
    function drawJumpMan() {
      var actX = jumpMan.posAct.x
      var actY = jumpMan.posAct.y
      var grTetePied = jumpMan.graphic.tetePied
      var grCorps = jumpMan.graphic.corps
      var grJambes = jumpMan.graphic.jambes
      
      context.save()
      context.beginPath() 
      context.fillStyle = 'white'
      for(var i = 0; i < grTetePied.length; i++){
          context.rect( (actX+grTetePied[i].x)*dimPx, (actY+grTetePied[i].y)*dimPx, grTetePied[i].w*dimPx, grTetePied[i].h*dimPx)
      }
      context.fill()
      context.beginPath() 
      context.fillStyle = 'red'
      for(var i = 0; i < grCorps.length; i++){
          context.rect( (actX+grCorps[i].x)*dimPx, (actY+grCorps[i].y)*dimPx, grCorps[i].w*dimPx, grCorps[i].h*dimPx)
      }
      context.fill()
      context.beginPath() 
      context.fillStyle = 'purple'
      for(var i = 0; i < grJambes.length; i++){
          context.rect( (actX+grJambes[i].x)*dimPx, (actY+grJambes[i].y)*dimPx, grJambes[i].w*dimPx, grJambes[i].h*dimPx)
      }
      context.fill()
      context.restore()
    }
    
    function initScore() {
        life = 3
        score = 0
        level = 1
        player = 1
        speed = 1
        bonus = 1500
        
        setInterval(function(){ bonus > 0 ? bonus-=100 : bonus == 0}, 5000);
    }
    
    function drawScore() {
        context.save()
        
        if(dimPx != null) {
            var scoreY = 178*dimPx
            var scoreHeight = canvas.height-scoreY
            var vSpaceWidth = (canvas.width/3)/24
            
            var yellow = "#ffff66"
            var green = "#66ff66"
            var blue = "#3333ff"
            
            // Life
            context.fillStyle = yellow
            context.fillRect(0,scoreY,canvas.width/3,scoreHeight/2)
            
            context.fillStyle = "black"
            context.font=scoreHeight/2-5 + "px commodore64";
            context.fillText("JUMPMEN = " + life, 0, scoreY+(scoreHeight/2)-5)
            // Score
            context.fillStyle = 'white'
            context.fillRect(0,scoreY+scoreHeight/2,canvas.width/3,scoreHeight/2)
            
            context.fillStyle = "black"
            context.font=scoreHeight/2-5 + "px commodore64";
            context.fillText("SCORE = " + score, 0, scoreY+scoreHeight-5)
            // Level
            context.fillStyle = green
            context.fillRect(canvas.width/3+vSpaceWidth,scoreY,canvas.width/3-vSpaceWidth,scoreHeight/2)
            context.fillStyle = "black"
            context.font=scoreHeight/2-5 + "px commodore64";
            context.fillText("LEVEL = " + level, canvas.width/3+vSpaceWidth, scoreY+(scoreHeight/2)-5)
            
            // Player
            context.fillStyle = blue
            context.fillRect(canvas.width/3+vSpaceWidth,scoreY+scoreHeight/2,canvas.width/3-vSpaceWidth,scoreHeight/2)
            context.fillStyle = "black"
            context.font=scoreHeight/2-5 + "px commodore64";
            context.fillText("PLAYER = " + player, canvas.width/3+vSpaceWidth, scoreY+scoreHeight-5)
            
            // Run Speed
            context.fillStyle = yellow
            context.fillRect(canvas.width*(2/3)+vSpaceWidth,scoreY,canvas.width*(2/3),scoreHeight/2)
             context.fillStyle = "black"
            context.font=scoreHeight/2-5 + "px commodore64";
            context.fillText("RUN SPEED = " + speed, canvas.width*(2/3)+vSpaceWidth, scoreY+(scoreHeight/2)-5)
            
            // Bonus
            context.fillStyle = 'white'
            context.fillRect(canvas.width*(2/3)+vSpaceWidth,scoreY+scoreHeight/2,canvas.width*(2/3),scoreHeight/2)
             context.fillStyle = "black"
            context.font=scoreHeight/2-5 + "px commodore64";
            context.fillText("BONUS = " + bonus, canvas.width*(2/3)+vSpaceWidth, scoreY+(scoreHeight-5))
        }
        
        context.restore()
    }
   
   