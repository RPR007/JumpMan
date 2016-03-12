
function p(pX, pY, pW, pH){
   return {x:pX,y:pY,w:pW,h:pH}
}

function jumpManFront() {
    graphic = new Object()
    graphic.etat = 0
    graphic.h = 10
    graphic.w = 12
    graphic.mdl = 6
    graphic.tetePied=[{x:4,y:0,w:4,h:2},{x:2,y:9,w:8,h:1}]
    graphic.corps=[{x:2,y:2,w:8,h:1},{x:0,y:3,w:2,h:1},{x:4,y:3,w:4,h:1},{x:10,y:3,w:2,h:1},{x:2,y:4,w:8,h:1}]
    graphic.jambes=[{x:4,y:5,w:4,h:4}]
    return graphic
}

function jumpManLeft1() {
    graphic = new Object()
    graphic.etat = 1
    graphic.h = 10
    graphic.w = 14
    graphic.mdl = 8
    graphic.tetePied=[p(6,0,2,1),p(8,0,2,2),p(2,9,4,1),p(10,9,4,1)]
    graphic.corps=[p(0,2,2,1),p(2,3,2,1),p(4,2,2,1),p(10,2,2,1),p(12,3,2,1),p(10,4,2,1),p(6,2,4,3)]
    graphic.jambes=[p(4,6,2,3),p(6,5,4,2),p(10,6,2,2),p(12,8,2,1)]
    return graphic
}

function jumpManLeft2() {
    graphic = new Object()
    graphic.etat = 2
    graphic.h = 10
    graphic.w = 12
    graphic.mdl = 4
    graphic.tetePied=[p(2,0,2,1),p(4,0,2,2),p(0,9,4,1),p(8,9,4,1)]
    graphic.corps=[p(0,4,2,1),p(2,2,4,3),p(6,2,2,1),p(8,3,2,1),p(10,4,2,1)]
    graphic.jambes=[p(2,5,4,2),p(2,7,2,2),p(6,6,2,1),p(8,7,2,1),p(10,8,2,1)]
    return graphic
}

function jumpManRight1() {
    graphic = new Object()
    graphic.etat = 3
    graphic.h = 10
    graphic.w = 14
    graphic.mdl = 6
    graphic.tetePied=[{x:4,y:0,w:4,h:1},{x:4,y:1,w:2,h:1},{x:0,y:9,w:4,h:1},{x:8,y:9,w:4,h:1}]
    graphic.corps=[{x:0,y:3,w:2,h:1},{x:2,y:2,w:2,h:1},{x:2,y:4,w:2,h:1},{x:4,y:2,w:4,h:3},{x:8,y:2,w:2,h:1},{x:10,y:3,w:2,h:1},{x:12,y:2,w:2,h:1}]
    graphic.jambes=[{x:0,y:8,w:2,h:1},{x:2,y:6,w:2,h:2},{x:4,y:5,w:4,h:2},{x:8,y:6,w:2,h:3}]
    return graphic
}

function jumpManRight2() {
    graphic = new Object()
    graphic.etat = 4
    graphic.h = 10
    graphic.w = 12
    graphic.mdl = 8
    graphic.tetePied=[{x:6,y:0,w:4,h:1},{x:6,y:1,w:2,h:1},{x:0,y:9,w:4,h:1},{x:8,y:9,w:4,h:1}]
    graphic.corps=[{x:0,y:4,w:2,h:1},{x:2,y:3,w:2,h:1},{x:4,y:2,w:2,h:1},{x:6,y:2,w:4,h:3},{x:10,y:4,w:2,h:1}]
    graphic.jambes=[{x:0,y:8,w:2,h:1},{x:2,y:7,w:2,h:1},{x:4,y:6,w:2,h:1},{x:6,y:5,w:4,h:2},{x:8,y:7,w:2,h:2}]
    return graphic
}

function jumpManLadder1() {
    graphic = new Object()
    graphic.etat = 5
    graphic.h = 10
    graphic.w = 16
    graphic.mdl = 8
    graphic.tetePied=[{x:6,y:0,w:4,h:2},{x:0,y:9,w:4,h:1},{x:12,y:9,w:4,h:1}]
    graphic.corps=[{x:0,y:0,w:2,h:1},{x:2,y:1,w:2,h:1},{x:4,y:2,w:2,h:1},{x:6,y:2,w:4,h:3},{x:10,y:2,w:2,h:1},{x:12,y:1,w:2,h:1},{x:14,y:0,w:2,h:1}]
    graphic.jambes=[{x:2,y:8,w:2,h:1},{x:4,y:6,w:2,h:2},{x:6,y:5,w:4,h:2},{x:10,y:6,w:2,h:2},{x:12,y:8,w:2,h:1}]
    return graphic
}

function jumpManLadder2() {
     graphic = new Object()
     graphic.etat = 6
     graphic.h = 10
     graphic.w = 16
     graphic.mdl = 8
     graphic.tetePied=[{x:6,y:0,w:4,h:1},{x:6,y:1,w:2,h:1},{x:0,y:7,w:4,h:1},{x:12,y:9,w:4,h:1}]
     graphic.corps=[{x:0,y:4,w:2,h:1},{x:2,y:3,w:2,h:1},{x:4,y:2,w:2,h:1},{x:6,y:2,w:4,h:4},{x:10,y:2,w:2,h:1},{x:12,y:1,w:2,h:1},{x:14,y:0,w:2,h:1}]
     graphic.jambes=[{x:2,y:6,w:10,h:1},{x:10,y:7,w:2,h:1},{x:12,y:8,w:2,h:1}]
     return graphic
}

function jumpManLadder3() {
     graphic = new Object()
     graphic.etat = 7
     graphic.h = 9
     graphic.w = 16
     graphic.mdl = 8
     graphic.tetePied=[{x:6,y:0,w:4,h:1},{x:0,y:8,w:4,h:1},{x:12,y:8,w:4,h:1}]
     graphic.corps=[{x:0,y:3,w:2,h:1},{x:2,y:2,w:2,h:1},{x:4,y:1,w:2,h:1},{x:6,y:1,w:4,h:4},{x:10,y:1,w:2,h:1},{x:12,y:2,w:2,h:1},{x:14,y:3,w:2,h:1}]
     graphic.jambes=[{x:2,y:7,w:2,h:1},{x:4,y:6,w:2,h:1},{x:4,y:5,w:8,h:1},{x:10,y:6,w:2,h:1},{x:12,y:7,w:2,h:1}]
     return graphic
}

function jumpManLadder4() {
     graphic = new Object()
     graphic.etat = 8
     graphic.h = 10
     graphic.w = 16
     graphic.mdl = 8
     graphic.tetePied=[{x:6,y:0,w:4,h:1},{x:8,y:1,w:2,h:1},{x:0,y:9,w:4,h:1},{x:12,y:7,w:4,h:1}]
     graphic.corps=[{x:0,y:0,w:2,h:1},{x:2,y:1,w:2,h:1},{x:4,y:2,w:2,h:1},{x:6,y:2,w:4,h:4},{x:10,y:2,w:2,h:1},{x:12,y:3,w:2,h:1},{x:14,y:4,w:2,h:1}]
     graphic.jambes=[{x:2,y:8,w:2,h:1},{x:4,y:7,w:2,h:1},{x:4,y:6,w:10,h:1}]
     return graphic
}

function jumpManClimb1() {
    graphic = new Object()
    graphic.etat = 9
    graphic.h = 12
    graphic.w = 12
    graphic.mdl = 6
    graphic.tetePied=[p(4,0,4,2),p(2,0,2,1),p(8,4,2,1),p(2,10,2,1),p(6,11,2,1)]
    graphic.corps=[p(0,1,2,1),p(2,2,2,1),p(4,2,4,3),p(8,2,2,1),p(10,3,2,1)]
    graphic.jambes=[p(4,5,4,3),p(2,8,2,1),p(0,9,2,1),p(6,8,2,3)]
    return graphic
}

function jumpManClimb2() {
    graphic = new Object()
    graphic.etat = 10
    graphic.h = 12
    graphic.w = 12
    graphic.mdl = 6
    graphic.tetePied=[p(4,0,4,2),p(2,4,2,1),p(8,0,2,1),p(4,11,2,1),p(8,10,2,1)]
    graphic.corps=[p(4,2,4,3),p(0,3,2,1),p(2,2,2,1),p(8,2,2,1),p(10,1,2,1)]
    graphic.jambes=[p(4,5,4,3),p(4,8,2,3),p(8,8,2,1),p(10,9,2,1)] //,p(2,8,2,1),p(0,9,2,1),p(6,8,2,3)]
    return graphic
}

function jumpManDead1() {
    graphic = new Object()
    graphic.etat = 11
    graphic.h = 6
    graphic.w = 16
    graphic.mdl = 8
    graphic.tetePied=[p(6,0,4,2),p(0,4,2,1),p(14,4,2,1)]
    graphic.corps=[p(0,0,2,1),p(2,1,2,1),p(4,2,2,1),p(6,2,4,3),p(10,2,2,1),p(12,1,2,1),p(14,0,2,1)]
    graphic.jambes=[p(0,5,16,1)]
    return graphic
}

function jumpManDead2() {
    graphic = new Object()
    graphic.etat = 12
    graphic.h = 6
    graphic.w = 16
    graphic.mdl = 8
    graphic.tetePied=[p(6,0,4,2),p(0,4,2,1),p(14,4,2,1)]
    graphic.corps=[p(0,0,2,1),p(2,1,2,1),p(4,2,2,1),p(6,2,4,3),p(10,2,2,1),p(12,1,2,1),p(14,0,2,1)]
    graphic.jambes=[p(0,5,16,1)]
    return graphic
}

function jumpManDead3() {
    graphic = new Object()
    graphic.etat = 13
    graphic.h = 6
    graphic.w = 16
    graphic.mdl = 8
    graphic.tetePied=[p(6,0,4,2),p(0,4,2,1),p(14,4,2,1)]
    graphic.corps=[p(0,0,2,1),p(2,1,2,1),p(4,2,2,1),p(6,2,4,3),p(10,2,2,1),p(12,1,2,1),p(14,0,2,1)]
    graphic.jambes=[p(0,5,16,1)]
    return graphic
}