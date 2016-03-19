/*
	X posiiton verticale , Y posiiton horisontale
*/var bal = {h:2,w:4,velX:0,velY:0,active:true}


  function collisionJM()
  {
    var ballSpeed = score.speed + 4
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
            sounds.ball.play()
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
        e = jumpMan.posAct.x
        f = bal.x

        if ( (c<b && a<d) || (a<d && c<b) ) {
            bal.chassing = true
            sounds.ball.play()
            bal.velX = (e>f?ballSpeed:-ballSpeed)
            bal.velY = 0
        }
      }
    }
  }

  function killJM()
  {
      a1 = jumpMan.posAct.x
      a2 = jumpMan.posAct.x+jumpMan.graphic.w
      b1 = jumpMan.posAct.x
      b2 = jumpMan.posAct.x+jumpMan.graphic.h

      c1 = bal.x
      c2 = bal.x+bal.w
      d1 = bal.y
      d2 = bal.y+bal.h

      if ( ( (b1<=a2 && a1<=b2) || (a1<=b2 && b1<=a2) ) && ( (d1<=c2 && c1<=d2) || (c1<=d2 && d1<=c2) ) ){
        lostOneLive()
        initBal()
      }
  }  

  function moveBal()
  {
    bal.x += bal.velX 
    bal.y += bal.velY 
    if (bal.x < 0 || bal.x > decors.dims.x ||
        bal.y < 0 || bal.y > decors.dims.y ) {
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
          bal.velY = 1
          bal.x = Math.floor((Math.random()*decors.dims.x - bal.w)+bal.w) 
          bal.y = 0
          break;
         case 2: //go right 
          bal.velX = 1
          bal.x = 0 
          bal.y = Math.floor((Math.random()*decors.dims.y- bal.w) )
          break;
        case 3://go up
          bal.velY = -1
          bal.x = Math.floor((Math.random()*180 - bal.h)) 
          bal.y = decors.dims.y - 20
          break;
        case 4: //go left
          bal.velX = -1
          bal.x = decors.dims.x
          bal.y =  Math.floor((Math.random()*decors.dims.y -20 -bal.h)+bal.h )
          break;
    }
  }