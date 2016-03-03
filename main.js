
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
     resize()
}

function initAnimation() {
    initFloor()
    initLadders()
    initRopes()
    initJumpMan()
    initBombs()
}

function initFloor() {
    //créer les obj planchers symétriques
    //top left floor
    decors.arrFloors.push({x:4,y:20,nbRep:10,haut:6},{x:44,y:22,nbRep:2,haut:6},{x:52,y:24,nbRep:2,haut:6},{x:60,y:22,nbRep:2,haut:6})
    decors.arrFloors.push({x:68,y:20,nbRep:12,haut:6},{x:116,y:18,nbRep:2,haut:6},{x:124,y:16,nbRep:2,haut:6},{x:132,y:14,nbRep:2,haut:6})
    //middle-top left floor
    decors.arrFloors.push({x:4,y:60,nbRep:10,haut:6})
    decors.arrFloors.push({x:76,y:52,nbRep:8,haut:6},{x:108,y:54,nbRep:2,haut:6},{x:116,y:56,nbRep:2,haut:6},{x:124,y:58,nbRep:2,haut:6})
    //middle-btm left floor
    decors.arrFloors.push({x:4,y:92,nbRep:10,haut:6},{x:68,y:92,nbRep:4,haut:6})
    //btm-top left floor
    decors.arrFloors.push({x:4,y:140,nbRep:12,haut:6},{x:52,y:138,nbRep:2,haut:6},{x:60,y:136,nbRep:2,haut:6},{x:68,y:134,nbRep:2,haut:6}) 
    decors.arrFloors.push({x:76,y:132,nbRep:2,haut:6},{x:84,y:130,nbRep:2,haut:6},{x:92,y:128,nbRep:2,haut:6},{x:100,y:126,nbRep:2,haut:6})
    //dupliquer les planchers symétriques
    duplArrayFloorSym(decors.arrFloors)
    //créer les obj planchers NON symétriques
    decors.arrFloors.push({x:132, y:60, nbRep:12, haut:6})//middle-up floor
    decors.arrFloors.push({x:108, y:92, nbRep:24, haut:6})//middle-middle floor
    decors.arrFloors.push({x:108, y:124, nbRep:24, haut:6})//middle-down floor
    
    decors.arrFloors.push({x:142, y:166, nbRep:8, haut:6})//middle bump lower florr
    decors.arrFloors.push({x:4, y:172, nbRep:76, haut:6})//full lower florr
    
    // créer les morceaux individuels
    var arrPointsFloors = []
    for (var i = 0 ; i<decors.arrFloors.length ; i++) {
        pushArrayFloor(arrPointsFloors , decors.arrFloors[i])
    }
    //dessiner les morceaux individuels
    context.save()
    for(var i = 0; i < arrPointsFloors.length; i++) {
	   drawFloor(arrPointsFloors[i].x , arrPointsFloors[i].y)         
	}
    context.restore()
}

function initLadders() {
    //créer les obj échelles symétriques
    decors.arrLadders.push({x:20, y:12,  nbRep:11, larg:16})//left up
    decors.arrLadders.push({x:20, y:132, nbRep:5, larg:16})//left down
    decors.arrLadders.push({x:84,  y:12,  nbRep:5, larg:16})//middle left-up
    decors.arrLadders.push({x:118,  y:84,  nbRep:5, larg:16})//middle left-down
    //dupliquer les échelles symétriques
    duplArrayLadders(decors.arrLadders)
    //créer les obj échelles NON symétriques
    decors.arrLadders.push({x:148,  y:52,  nbRep:5, larg:16})//middle
    
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
    var points = [{x:22, y:27}]

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