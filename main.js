
var canvas = null
var context = null
var height  = null
var width  = null

function initGame() {
     canvas =  document.getElementById('canJumpMan')
     context = canvas.getContext('2d')
     width = canvas.width
     height = canvas.height
     initAnimation()
}

function initAnimation() {
    initWalls()
    initLadders()
    initRopes()
    initJumpMan()
    
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
    
}