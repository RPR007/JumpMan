/*
  X posiiton horisontale , Y posiiton verticale 
*/
  function initScene() {
   }

  function initBackground(pX , pY) {
  
  }
  //ajoute des points pour créer une ligne de plancher horisontale
   function pushArrayFloor(pArr,pX, pY, nbRep) {
     for (var i = 0; i < nbRep; i++) {
      pArr.push( {x:pX+(i*2), y:pY} )
     }
   }
   function drawFloor(pX , pY) {
     context.beginPath();
     context.fillStyle = '#6dac49'
     context.rect( pX*dimPx  ,pY*dimPx , 2*dimPx , 3*dimPx)
     context.fill()

     context.beginPath()
     context.fillStyle = 'black'
     context.rect( (pX*dimPx)+dimPx , (pY*dimPx)+dimPx , dimPx , dimPx)
     context.fill()
   }
   //ajoute des points pour créer une échelle verticale
   function pushArrayLadders(pArr,pX, pY, nbRep) {
     for (var i = 0; i < nbRep; i++) {
      pArr.push( {x:pX, y:pY+(i*4) } )
     }
   }

   function drawLadders(pX , pY) {
     
     context.beginPath()
     context.fillStyle = '#3a36a3'
     context.rect( (pX*dimPx)   , (pY)*dimPx   , 2*dimPx   , 4*dimPx)
     context.rect( (pX+1)*dimPx , (pY+2)*dimPx , 5*dimPx , dimPx)
     context.rect( (pX+6)*dimPx , (pY)*dimPx   , 2*dimPx  , 4*dimPx)
     context.fill()
   }

   function drawBomb(pX , pY) {
    context.save()
     
     var bomb = [[false,true,true,false],[true,false,false,true],[false,true,true,false]]
     pX *= dimPx;pY *= dimPx
     
     context.strokeStyle = 'brown'
     context.fillStyle = 'brown'
     
     for(var i = 0; i < bomb.length; i++)
        for(var j = 0; j < bomb[i].length;j++)
            if(bomb[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                
     context.restore()
   }
