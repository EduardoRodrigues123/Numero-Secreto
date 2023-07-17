window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener('Result', onSpeak)

function onSpeak (e){
    console.log(e.results[0][0].transcript)
}