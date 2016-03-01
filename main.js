
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
    initFloor()
    initLadders()
    initRopes()
    initJumpMan()
    initBombs()
}

function initFloor() {
	
    var arrFloor = []
    //top left floor
    pushArrayFloor(arrFloor,3, 11, 8)
    //center top left floor
    //arrFloor.push({x:28, y:3}, {x:28, y:5}, {x:28, y:7})
    /*middle-top left floor
    arrFloor.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    //middle-btm left floor
    arrFloor.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    //btm-top left floor
    arrFloor.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    //btm-btm left floor
    arrFloor.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    */

    for(var i = 0; i < arrFloor.length; i++) {
	   drawFloor(arrFloor[i].x , arrFloor[i].y)         
	}
}

function initLadders() {
    var arrLadders = []

    for(var i = 0; i < arrLadders.length; i++) {
       drawFloor(arrLadders[i].x , arrLadders[i].y)         
    }
}

function initRopes() {
    var points = [{x:45, y:45}]

	for(var i = 0; i < points.length; i++) {
	   console.log(points[i].x + "," + points[i].y)
	   drawRope(points[i].x , points[i].y)         
	}
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