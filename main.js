
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
}

function initLadders() {
    
}

function initRopes() {
    
}

function initJumpMan() {
    
}

function initBombs() {
    
}