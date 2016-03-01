/*
	X posiiton verticale , Y posiiton horisontale
*/
   function initScene() {
     initBackground()
   }

	function initBackground(pX , pY) {
     alert("initBackground")
   }

   function drawFloor(pX , pY) {
     alert("dessinerPlancher")
     context.rect( pX  ,pX , 60 , 60)
     context.rect( pX  ,pX , 20 , 20)
   }

   function drawStair(pX , pY) {
     alert("drawStair")
   }

   function drawBomb(pX , pY) {
     alert("drawBomb")
   }
   
   function test() {
       
   }
