function playInstrument (instrument) {
   console.log("Hola1")
   let audioSound = document.createElement("audio")
   audioSound.src = instrument
   audioSound.play()

}

console.log("Hola2")

/*playInstrument('./sounds/bombo.wav')
playInstrument('./sounds/crash.wav')
playInstrument('./sounds/hit-hat.wav')
playInstrument('./sounds/redoblante.wav')
playInstrument('./sounds/tom1.wav')
playInstrument('./sounds/tom2.wav')
playInstrument('./sounds/tom3.wav')
playInstrument('./sounds/tom4.wav')

playInstrument('./sounds/bombo.wav')
playInstrument('./sounds/crash.wav')
playInstrument('./sounds/hit-hat.wav')
playInstrument('./sounds/redoblante.wav')
playInstrument('./sounds/tom1.wav')
playInstrument('./sounds/tom2.wav')
playInstrument('./sounds/tom3.wav')
playInstrument('./sounds/tom4.wav')

playInstrument('./sounds/tom4.wav')*/

