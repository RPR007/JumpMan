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


   function drawRope(pX , pY) {
     context.save()
     
     var rope = [[true,false],[false,true],[true,false],[false,true],[true,false],[false,true],[true,false],[false,true]]
     pX *= dimPx;pY *= dimPx
     
     context.fillStyle = 'green'
     
     for(var i = 0; i < rope.length; i++)
        for(var j = 0; j < rope[i].length;j++)
            if(rope[i][j])
                context.fillRect(pX+(j*(dimPx*2)) ,pY+(i*(dimPx*2)) , (dimPx*2) , (dimPx*2))
                
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
     context.strokeStyle = 'white'
     context.lineWidth = 1
     for(var i = 0; i < head.length; i++) {
        for(var j = 0; j < head[i].length;j++) {
            if(head[i][j]) {
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                context.strokeRect(pX+(j*dimPx)+1 ,pY+(i*dimPx)+1 , dimPx-1 , dimPx-1)
            }
        }
     }
        
     // corps
     pY += (2*dimPx) 
     context.fillStyle = 'brown'
     context.strokeStyle = 'brown'
     for(var i = 0; i < body.length; i++) {
        for(var j = 0; j < body[i].length;j++) {
            if(body[i][j]) {
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                context.strokeRect(pX+(j*dimPx)+1 ,pY+(i*dimPx)+1 , dimPx-1 , dimPx-1)
            }
        }
     }
               
     // jambe
     pY += (3*dimPx) 
     context.fillStyle = 'purple'
     context.strokeStyle = 'purple'
     for(var i = 0; i < leg.length; i++) {
        for(var j = 0; j < leg[i].length;j++) {
            if(leg[i][j]) {
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                context.strokeRect(pX+(j*dimPx)+1 ,pY+(i*dimPx)+1 , dimPx-1 , dimPx-1)
            }
        }
     }
                
     // pied
     pY += (4*dimPx)
     context.fillStyle = 'white'
     context.strokeStyle = 'white'
     for(var i = 0; i < feet.length; i++) {
        for(var j = 0; j < feet[i].length;j++) {
            if(feet[i][j]) {
                context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
                context.strokeRect(pX+(j*dimPx)+1 ,pY+(i*dimPx)+1 , dimPx-1 , dimPx-1)
            }
        }
     }
                
     context.restore()
   }
   
   function drawJumpManLeft(pX , pY) {
     context.save()
     
     var jumpMan = 
         [
             [(x : 9, length : 5)]
            ,[(x : 7, length : 4), (x : 14, length : 2)]
            ,[(x : 4, length : 10)]
            ,[(x : 3, length : 2),(x : 7 , length : 4) ]
            ,[(x : 3, length : 2),(x : 7, length : 4)]
            ,[(x : 7, length : 4)]
            ,[(x : 5, length : 10)]
            ,[(x : 3, length : 2),(x :13 , length : 2)]
            ,[(x : 1, length : 2),(x : 13, length : 16)]
         ]
     
     pX *= dimPx;pY *= dimPx
     
     context.fillStyle = 'green'
     
     for(var i = 0; i < jumpMan.length; i++) {
        for(var j = 0; j < jumpMan[i].length;j++) {
           // if(jumpMan[i][j]) {
            //    context.fillRect(pX+(j*dimPx) ,pY+(i*dimPx) , dimPx , dimPx)
            //}
        }
     }
                
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
     context.strokeStyle = 'brown'
     for(var i = 0; i < bomb.length; i++) {
        for(var j = 0; j < bomb[i].length;j++) {
            if(bomb[i][j]) {
                context.fillRect(pX+(j*(dimPx*2)) ,pY+(i*(dimPx*2)) , (dimPx*2) , (dimPx*2))
                context.strokeRect(pX+(j*(dimPx*2))+1 ,pY+(i*(dimPx*2))+1 , (dimPx*2)-1 , (dimPx*2)-1)
            }
        }
     }
                
     context.restore()
   }
