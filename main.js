
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
	
    var arrFloors = []
    //top left floor

    pushArrayFloor(arrFloors,3, 11, 15)
    //center top left floor
    //arrFloors.push({x:28, y:3}, {x:28, y:5}, {x:28, y:7})
    /*middle-top left floor
    arrFloors.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    //middle-btm left floor
    arrFloors.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    //btm-top left floor
    arrFloors.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    //btm-btm left floor
    arrFloors.push({x:100, y:100}, {x:160, y:100}, {x:200, y:260})
    */
    context.save()
    for(var i = 0; i < arrFloors.length; i++) {
	   drawFloor(arrFloors[i].x , arrFloors[i].y)         
	}
    context.restore()
}

function initLadders() {
    var arrLadders = []
    pushArrayLadders(arrLadders , 10, 10, 9)

    context.save()
    for(var i = 0; i < arrLadders.length; i++) {
       drawLadders(arrLadders[i].x , arrLadders[i].y)         
    }
    context.restore()
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