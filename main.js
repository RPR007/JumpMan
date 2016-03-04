
var canvas = null
var context = null
var cycleAnimation = null
var dimPx = null
var height  = null
var width  = null
var jumpMan = new Object()

function initGame() {
     canvas =  document.getElementById('canJumpMan')
     context = canvas.getContext('2d')
     initScene()
     initSounds()
     resize()
     animer()
}

function animer() {
    cycleAnimation = requestAnimationFrame(animer)
    context.clearRect(0,0, canvas.width, canvas.height) 
    mettreAJourAnimation()
    dessiner()
}

function mettreAJourAnimation()
{
      //calculs des collisions
}