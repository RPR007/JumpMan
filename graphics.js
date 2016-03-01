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

   function drawLadders(pX , pY) {
     context.save()
     context.strokeStyle = 'blue'
     context.strokeRect( pX  ,pX , 240 , 120)
     context.strokeRect( pX  ,pX+40 , 160 , 50)
     context.strokeRect( pX+60  ,pX+40 , 160 , 50)
     context.restore()
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
