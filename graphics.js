/*
  X posiiton verticale , Y posiiton horisontale
*/
  function initScene() {
   }

  function initBackground(pX , pY) {
   }

   function drawFloor(pX , pY) {
     context.save()
     context.strokeStyle = 'green'
     context.fillStyle = 'green'
     context.rect( pX  ,pX , 20 , 20)
     context.strokeRect( pX  ,pX , 20 , 20)
     context.strokeStyle = 'blue'
     context.fillStyle = 'blue'
     context.rect( pX+5  ,pX+5 , 7 , 7)
     context.fill()
     context.restore()
     console.log("florr")
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
    console.log("alex 2")
   }
