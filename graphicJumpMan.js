function jumpManFront() {
    graphic = new Object()
    graphic.etat = 0
    graphic.h = 0
    graphic.w = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:4,y:0,w:4,h:2},{x:2,y:9,w:8,h:1}]
    graphic.corps=[{x:2,y:2,w:8,h:1},{x:0,y:3,w:2,h:1},{x:4,y:3,w:4,h:1},{x:10,y:3,w:2,h:1},{x:2,y:4,w:8,h:1}]
    graphic.jambes=[{x:4,y:5,w:4,h:4}]
    return graphic
}

function jumpManLeft1() {
    graphic = new Object()
    graphic.etat = 1
    graphic.h = 0
    graphic.w = 0
    graphic.etat = 1
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}

function jumpManLeft2() {
    graphic = new Object()
    graphic.etat = 2
    graphic.h = 0
    graphic.w = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}

function jumpManRight1() {
    graphic = new Object()
    graphic.etat = 3
    graphic.h = 10
    graphic.w = 14
    graphic.mdl = 0
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
    graphic.mdl = 0
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
    graphic.mdl = 0
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
     graphic.mdl = 0
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
     graphic.mdl = 0
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
     graphic.mdl = 0
     graphic.tetePied=[{x:6,y:0,w:4,h:1},{x:8,y:1,w:2,h:1},{x:0,y:9,w:4,h:1},{x:12,y:7,w:4,h:1}]
     graphic.corps=[{x:0,y:0,w:2,h:1},{x:2,y:1,w:2,h:1},{x:4,y:2,w:2,h:1},{x:6,y:2,w:4,h:4},{x:10,y:2,w:2,h:1},{x:12,y:3,w:2,h:1},{x:14,y:4,w:2,h:1}]
     graphic.jambes=[{x:2,y:8,w:2,h:1},{x:4,y:7,w:2,h:1},{x:4,y:6,w:10,h:1}]
     return graphic
}

function jumpManClimb1() {
    graphic = new Object()
    graphic.etat = 9
    graphic.h = 0
    graphic.w = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}

function jumpManClimb2() {
    graphic = new Object()
    graphic.etat = 10
    graphic.h = 0
    graphic.w = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}

function jumpManDead1() {
    graphic = new Object()
    graphic.etat = 11
    graphic.h = 0
    graphic.w = 0
    graphic.etat = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}

function jumpManDead2() {
    graphic = new Object()
    graphic.etat = 12
    graphic.h = 0
    graphic.w = 0
    graphic.etat = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}

function jumpManDead3() {
    graphic = new Object()
    graphic.etat = 13
    graphic.h = 0
    graphic.w = 0
    graphic.etat = 0
    graphic.mdl = 0
    graphic.tetePied=[{x:0,y:0,w:0,h:0}]
    graphic.corps=[{x:0,y:0,w:0,h:0}]
    graphic.jambes=[{x:0,y:0,w:0,h:0}]
    return graphic
}