
var canvas = null
var context = null
var dimPx = null
var height  = null
var width  = null
var decors = new Object()
decors.arrLadders = []
decors.arrFloors = []
decors.arrRopes = []

function initGame() {
     canvas =  document.getElementById('canJumpMan')
     context = canvas.getContext('2d')
     dimPx = 4.5
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
    //top left floor
    //center top left floor

    /*middle-top left floor

    //middle-btm left floor

    //btm-top left floor

    //btm-btm left floor
    */
    //decors.arrLadders.push({x:50,  y:50,  nbRep:5})
    //decors.arrLadders.push({x:150, y:75,  nbRep:10})
    decors.arrLadders.push({x:190, y:75, nbRep:7})

    //duplArrayLaddersSym(decors.arrFloors)

    // créer les morceaux individuels
    var arrPointsFloors = []
    for (var i = 0 ; i<decors.arrFloors.length ; i++) {
        pushArrayFloor(arrPointsFloors , decors.arrFloors[i].x , decors.arrFloors[i].y, decors.arrFloors[i].nbRep) 
        console.log("test"+decors.arrFloors[i].nbRep)
    }
    console.log("hello")
    //dessiner les morceaux individuels
    context.save()
    for(var i = 0; i < arrPointsFloors.length; i++) {
	   drawFloor(arrPointsFloors[i].x , arrPointsFloors[i].y)         
	}
    context.restore()
}

function initLadders() {
    decors.arrLadders.push({x:50,  y:50,  nbRep:5})
    //decors.arrLadders.push({x:100, y:75,  nbRep:10})
    //decors.arrLadders.push({x:300, y:300, nbRep:7})
    //créer les obj échelles

    // créer les morceaux individuels
    var arrPointsLadders = []
    for (var i = 0 ; i<decors.arrLadders.length ; i++) {
        pushArrayLadders(arrPointsLadders , decors.arrLadders[i].x , decors.arrLadders[i].y, decors.arrLadders[i].nbRep) 
    }
    //dessiner les morceaux individuels
    context.save()
    for(var i = 0; i < arrPointsLadders.length; i++) {
       drawLadders(arrPointsLadders[i].x , arrPointsLadders[i].y)         
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
    var points = [{x:80, y:20}]

	for(var i = 0; i < points.length; i++) {
	   console.log(points[i].x + "," + points[i].y)
	   drawJumpMan(points[i].x , points[i].y)         
	}
}

function initBombs() {
    var points = [{x:50, y:50}, {x:75, y:75}, {x:97, y:97}]

	for(var i = 0; i < points.length; i++) {
	   console.log(points[i].x + "," + points[i].y)
	   drawBomb(points[i].x , points[i].y)         
	}
}