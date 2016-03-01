/*
	X posiiton verticale , Y posiiton horisontale
*/
  function initScene() {
     initBackground()
   }

	function initBackground(pX , pY) {
     allert("initBackground")
   }

   function drawFloor(pX , pY) {
     allert("dessinerPlancher")
     context.rect( pX  ,pX , 60 , 60)
     context.rect( pX  ,pX , 20 , 20)
   }

   function drawStair(pX , pY) {
     allert("drawStair")
   }

   function drawBomb(pX , pY) {
     allert("drawBomb")
   }

