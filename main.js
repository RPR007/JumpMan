
var canvas = null
var context = null
var dimPx = null
var height  = null
var width  = null

function initGame() {
     canvas =  document.getElementById('canJumpMan')
     context = canvas.getContext('2d')
     dimPx = 9
     width = canvas.width
     height = canvas.height
     initAnimation()
}

function initAnimation() {
    initWalls()
    initLadders()
    initRopes()
    initJumpMan()
    initBombs()
}

function initWalls() {
	var points = [{x:100, y:100}, {x:160, y:100}, {x:200, y:260}]

	for(var i = 0; i < points.length; i++) {
	   drawFloor(points[i].x , points[i].y)         
	}

}

function initLadders() {
    
}

function initRopes() {
    
}

function initJumpMan() {
    
}

function initBombs() {
    var points = [{x:50, y:50}, {x:75, y:75}, {x:97, y:97}]

	for(var i = 0; i < points.length; i++) {
	   console.log(points[i].x + "," + points[i].y)
	   drawBomb(points[i].x , points[i].y)         
	}
}