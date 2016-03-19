/*
	X posiiton verticale , Y posiiton horisontale
*/var bal = {h:2,w:4,velX:0,velY:0,active:true}


/*  Vérification si 2 ligne se touchent  L1:AB L2:CD 
        j1    b1      j2   b2     b1  j1       b2   j2
         A    C       B    D      C    A       D    B
         -----* - - - *------     -----* - - - *------
            ( C<B && A<D )    ||    ( A<D && C<B )
        */
  function collisionJM()
  {
    var ballSpeed = speed + 4
    if (bal.active && !bal.chassing) {
      //déplacement horisontal 2 || 4
      if (bal.diretion == 2 || bal.diretion == 4) {
        a = jumpMan.posAct.x
        b = jumpMan.posAct.x+jumpMan.graphic.h
        c = bal.x
        d = bal.x+bal.w
        e = jumpMan.posAct.y
        f = bal.y
        
        if ( (c<b && a<d) || (a<d && c<b) ) {
            bal.chassing = true
            bal.velY = (e>f?ballSpeed:-ballSpeed)
            bal.velX = 0
        }
      }
      //déplacement horisontal 1 || 3
      else {
        a = jumpMan.posAct.y
        b = jumpMan.posAct.y+jumpMan.graphic.w
        c = bal.y
        d = bal.y+bal.w 
        e = jumpMan.posAct.y
        f = bal.y

        if ( (c<b && a<d) || (a<d && c<b) ) {
            bal.chassing = true
            bal.velX = (e>f?speed:-speed)
            bal.velY = 0
        }
      }
    }
  }

  function moveBal()
  {
    bal.x += bal.velX 
    bal.y += bal.velY 
    if (bal.x < 0             ||bal.x > decors.dims.x ||
        bal.y < 0             ||bal.y > decors.dims.y ) {
      initBal()
    }
  }

  function drawBall() {
    if (bal.active || true) {
      context.save()
      context.beginPath() 
      context.fillStyle = (bal.active?'white':'red')
      context.fillRect(bal.x*dimPx, bal.y*dimPx, bal.w*dimPx, bal.h*dimPx )
      context.restore()
    }
  }
  

  function initBal()
  { 
    bal.velX = 0
    bal.velY = 0
    bal.active = (Math.random()>2?false:true) // s'active 82% du temps 
    bal.diretion = Math.floor((Math.random() * 4) + 1)
    bal.chassing = false
    
    switch(bal.diretion ) {
        case 1: //go down
          console.log("down")
          bal.velY = 1
          bal.x = Math.floor((Math.random()*decors.dims.x - bal.w)+bal.w) 
          bal.y = 0
          break;
         case 2: //go right 
          console.log("right")
          bal.velX = 1
          bal.x = 0 
          bal.y = Math.floor((Math.random()*decors.dims.y- bal.w) )
          break;
        case 3://go up
          console.log("up")
          bal.velY = -1
          bal.x = Math.floor((Math.random()*180 - bal.h)) 
          bal.y = decors.dims.y - 20
          break;
        case 4: //go left
          console.log("left")
          bal.velX = -1
          bal.x = decors.dims.x
          bal.y =  Math.floor((Math.random()*decors.dims.y -20 -bal.h)+bal.h )
          break;
    }
  }

