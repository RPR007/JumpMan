
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
    //créer les obj planchers
    decors.arrFloors.push({x:4, y:22, nbRep:10, haut:6}) //top left floor
    decors.arrFloors.push({x:4, y:75, nbRep:7, haut:6})  //middle-top left floor
    decors.arrFloors.push({x:4, y:110, nbRep:7, haut:6}) //middle-btm left floor
    decors.arrFloors.push({x:4, y:140, nbRep:7, haut:6}) //btm-top left floor
    //dupliquer les planchers symétriques
    duplArrayFloorSym(decors.arrFloors)
    
    decors.arrFloors.push({x:170, y:164, nbRep:7, haut:6})//middle bump lower florr
    decors.arrFloors.push({x:4, y:170, nbRep:87, haut:6})//full lower florr
    

    // créer les morceaux individuels
    var arrPointsFloors = []
    for (var i = 0 ; i<decors.arrFloors.length ; i++) {
        pushArrayFloor(arrPointsFloors , decors.arrFloors[i])//.x , decors.arrFloors[i].y, decors.arrFloors[i].nbRep) 
    }
    //dessiner les morceaux individuels
    context.save()
    for(var i = 0; i < arrPointsFloors.length; i++) {
	   drawFloor(arrPointsFloors[i].x , arrPointsFloors[i].y)         
	}
    context.restore()
}

function initLadders() {
    //créer les obj échelles
    decors.arrLadders.push({x:50,  y:50,  nbRep:5, larg:11})
    //decors.arrLadders.push({x:100, y:75,  nbRep:10})
    //decors.arrLadders.push({x:300, y:300, nbRep:7})
    
    //dupliquer les planchers symétriques
    duplArrayLadders(decors.arrLadders)
    // créer les morceaux individuels
    var arrPointsLadders = []
    for (var i = 0 ; i<decors.arrLadders.length ; i++) {
        pushArrayLadders(arrPointsLadders , decors.arrLadders[i] ) 
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
	   drawRope(points[i].x , points[i].y)         
	}
}

function initJumpMan() {
    var points = [{x:80, y:20}]

	for(var i = 0; i < points.length; i++) {
	   drawJumpMan(points[i].x , points[i].y)         
	}
}

function initBombs() {
    var points = [{x:50, y:50}, {x:75, y:75}, {x:97, y:97}]

	for(var i = 0; i < points.length; i++) {
	   drawBomb(points[i].x , points[i].y)         
	}
}