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
     context.rect( (pX*dimPx) +dimPx  ,(pY*dimPx)+dimPx , dimPx , dimPx)
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
   
   function drawJumpMan(pX , pY) {
     context.save()
     
     var head = [[false,false,false,false,true,true,true,true,false,false,false,false]
                ,[false,false,false,false,true,true,true,true,false,false,false,false]]
     var body = [[false,false,true,true,true,true,true,true,true,true,false,false]
                ,[true,true,false,false,true,true,true,true,false,false,true,true]
                ,[false,false,true,true,true,true,true,true,true,true,false,false]]
     var leg = [[false,false,false,false,true,true,true,true,false,false,false,false]
               ,[false,false,false,false,true,true,true,true,false,false,false,false]
               ,[false,false,false,false,true,true,true,true,false,false,false,false]
               ,[false,false,false,false,true,true,true,true,false,false,false,false]]
     var feet = [[false,false,true,true,true,true,true,true,true,true,false,false]]
     
     pX *= dimPx;pY *= dimPx
     
     // tete
     context.fillStyle = 'white'
     for(var i = 0; i < head.length; i++)
        for(var j = 0; j < head[i].length;j++)
            if(head[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
        
     // corps
     pY += (2*dimPx) 
     context.fillStyle = 'brown'
     for(var i = 0; i < body.length; i++)
        for(var j = 0; j < body[i].length;j++)
            if(body[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
               
     // jambe
     pY += (3*dimPx) 
     context.fillStyle = 'purple'
     for(var i = 0; i < leg.length; i++)
        for(var j = 0; j < leg[i].length;j++)
            if(leg[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                
     // pied
     pY += (4*dimPx)
     context.fillStyle = 'white'
     for(var i = 0; i < feet.length; i++)
        for(var j = 0; j < feet[i].length;j++)
            if(feet[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx) 
                
     context.restore()
   }
   
   function drawJumpManLeft(pX , pY) {
     context.save()
     
     var head = []
     var body = []
     var hand = []
     var leg = []
     var feet = []
     
     pX *= dimPx;pY *= dimPx
     
     context.fillStyle = 'green'
     
     for(var i = 0; i < rope.length; i++)
        for(var j = 0; j < rope[i].length;j++)
            if(rope[i][j])
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                
     context.restore()
   }
   
   function drawJumpManRight(pX , pY) {
     context.save()
     
     var head = []
     var body = []
     var hand = []
     var leg = []
     var feet = []
     
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
