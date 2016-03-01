/*
	X posiiton verticale , Y posiiton horisontale
*/
    var canvas = null
    var context = null

   function initCore() {
     canvas =  document.getElementById('canJumpMan')
     context = canvas.getContext('2d')


        objDimentions = new Object()
        objDimentions.width = canvas.width
        objDimentions.height = canvas.height
        objDimentions.largeurEchelle = 0
        objDimentions.hauteurEchelle = 0
        objDimentions.largeurMur = 0
        objDimentions.hauteurMur = 0
        objDimentions.largeurEchelle = 0
        objDimentions.largeurEchelle = 0;
        objDimentions.largeurEchelle = 0;


     width = canvas.width
     height = canvas.height
     
     //alert("initGame")
   }

   function keyDown() {
     allert("keyDown")
   }

   function keyUp() {
     alert("keyUp")
   }

	function fn1() {
     alert("fn1")
   }

   function fn2() {
     alert("fn2")
   }

   function fn3() {
     alert("fn3")
   }

   function fn4() {
     alert("fn4")
   }

