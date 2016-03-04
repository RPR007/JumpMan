
/*
  play all the sounds 
*/
  var sounds = new Object()

  function initSounds() {
      var objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/JM1.mp3')
      objSon.load()
    sounds.jump = objSon

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/JM2.mp3')
      objSon.load()
    sounds.bomb = objSon;

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/JM3.mp3')
      objSon.load()
    sounds.rope = objSon

      objSon = document.createElement('audio')
      objSon.setAttribute('src', 'sounds/JM4.mp3')
      objSon.load()
    sounds.death = objSon;
  }