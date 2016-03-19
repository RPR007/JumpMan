
var canvas = null
var context = null
var cycleAnimation = null
var dimPx = null
var height  = null
var width  = null
var w = null
var h = null
var jumpMan = new Object()

var score = new Object()

function initGame() {
     canvas =  document.getElementById('canJumpMan')
     context = canvas.getContext('2d')
     initScene()
     initSounds()
     resize()
     animer()
}