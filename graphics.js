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
      pArr.push( {x:pX+(i*4), y:pY} )
     }
   }
   //décupler les floors symétriques
   function dupArrayFloorSym(pArr) {
    var originals = pArr

     for (var i = 0; i < originals; i++) {
      pArr.push( {x:pX+(i*4), y:pY} )
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
   //ajoute des points pour créer une échelle verticale
   function pushArrayLadders(pArr,pX, pY, nbRep) {
     for (var i = 0; i < nbRep; i++) {
      pArr.push( {x:pX, y:pY+(i*4) } )
     }
   }

   function drawLadders(pX , pY) {
     
     context.beginPath()
     context.fillStyle = '#3a36a3'
     context.rect( (pX*dimPx)   , (pY)*dimPx   , 4*dimPx   , 8*dimPx)
     context.rect( (pX+2)*dimPx , (pY+4)*dimPx , 10*dimPx , dimPx)
     context.rect( (pX+12)*dimPx , (pY)*dimPx   , 4*dimPx  , 8*dimPx)
     context.fill()
   }

   function drawRope(pX , pY) {
     context.save()
     
     var rope = [[true,false],[false,true],[true,false],[false,true],[true,false],[false,true],[true,false],[false,true]]
     pX *= dimPx;pY *= dimPx
     
     context.fillStyle = 'green'
     
     for(var i = 0; i < rope.length; i++)
        for(var j = 0; j < rope[i].length;j++)
            if(rope[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                
     context.restore()
   }
   
   function drawBomb(pX , pY) {
    context.save()
     
     var bomb = [[false,true,true,false],[true,false,false,true],[false,true,true,false]]
     pX *= dimPx;pY *= dimPx
     
     context.fillStyle = 'brown'
     
     for(var i = 0; i < bomb.length; i++)
        for(var j = 0; j < bomb[i].length;j++)
            if(bomb[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                
     context.restore()
   }
