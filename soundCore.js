/*
  play all the sounds 
*/
  var sounds = new Object()

  function initSounds() {
      var objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/ball')
      objSon.load()
    sounds.ball = objSon

      var objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/bomb.wav')
      objSon.load()
    sounds.bomb = objSon

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/jump.wav')
      objSon.load()
    sounds.jump = objSon;

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/.wav')
      objSon.load()
    sounds.over = objSon

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/.wav')
      objSon.load()
    sounds.pas = objSon

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/still.wav')
      objSon.load()
    sounds.still = objSon;
  }