/*
  X posiiton horisontale , Y posiiton verticale 
*/
  function initScene() {
   }

  function initBackground(pX , pY) {
  
  }
  //ajoute des points pour créer une ligne de plancher horisontale
   function pushArrayFloor(pArr,  pFloor ){
     for (var i = 0; i < pFloor.nbRep; i++) {
      pArr.push( {x:pFloor.x+(i*4), y:pFloor.y } )
     }
   }
   //répliquer les planchers symétriques
   function duplArrayFloorSym(pArr) {
   originals = pArr
   var length = originals.length
     for (var i = 0; i < length; i++) {
      pArr.push( {x:356-(originals[i].x+originals[i].nbRep*4) , y:originals[i].y ,nbRep:originals[i].nbRep} )
     }
   }
   function drawFloor(pX , pY) {
     context.beginPath();
     context.fillStyle = '#6dac49'
     //context.strokeStyle = '#6dac49'
     context.rect( pX*dimPx  ,pY*dimPx , 4*dimPx , 6*dimPx)
     context.fill()

     context.beginPath()
     context.fillStyle = 'black'
     context.rect( (pX+2)*dimPx ,(pY+2)*dimPx , 2*dimPx , 2*dimPx)
     context.fill()
   }

   //répliquer les planchers symétriques
   function duplArrayLadders(pArr) {
   originals = pArr
   var length = originals.length
     for (var i = 0; i < length; i++) {
      pArr.push( {x:356-(originals[i].x+originals[i].nbRep*4) , y:originals[i].y ,nbRep:originals[i].nbRep} )
     }
   }
   //ajoute les points nécessaires pour créer une échelle verticale
   function pushArrayLadders(pArr,pLadder) {
     for (var i = 0; i < pLadder.nbRep; i++) {
      pArr.push( {x:pLadder.x, y:pLadder.y+(i*4) } )
      console.log("echelles: "+i)
     }
   }

   function drawLadders(pX , pY) {
     context.beginPath()
     context.fillStyle = '#3a36a3'
     context.rect( (pX*dimPx)   , (pY)*dimPx   , 4*dimPx   , 8*dimPx)
     context.rect( (pX+2)*dimPx , (pY+4)*dimPx , 10*dimPx , dimPx)
     context.rect( (pX+12)*dimPx , (pY)*dimPx   , 4*dimPx  , 8*dimPx)
     context.fill()
     console.log("drawLadders")
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
