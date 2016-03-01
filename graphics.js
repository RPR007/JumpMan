/*
	X posiiton verticale , Y posiiton horisontale
*/
  function initScene() {
   }

	function initBackground(pX , pY) {
   }

   function drawFloor(pX , pY) {
     context.save()
     context.fillStyle = 'green'
     context.rect( pX  ,pX , 60 , 60)
     context.rect( pX+20  ,pX+20 , 20 , 20)
     context.restore()
     console.log("florr")
   }

   function drawStair(pX , pY) {
     context.save()
     context.fillStyle = 'blue'
     context.rect( pX  ,pX , 240 , 120)
     context.rect( pX  ,pX+40 , 160 , 50)
     context.rect( pX+60  ,pX+40 , 160 , 50)
     context.restore()
   }

   function drawBomb(pX , pY) {
   }

