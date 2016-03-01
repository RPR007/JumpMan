/*
  X posiiton verticale , Y posiiton horisontale
*/
  function initScene() {
   }

  function initBackground(pX , pY) {
   }

   function drawFloor(pX , pY) {
     context.beginPath();
     context.fillStyle = 'green'
     context.rect( pX  ,pX , 20 , 20)
     context.fill()

     context.beginPath()
     context.fillStyle = 'blue'
     context.rect( pX+10  ,pX+5 , 10 , 10)
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
    console.log("alex 2")
   }
