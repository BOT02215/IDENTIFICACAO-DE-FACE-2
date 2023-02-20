Webcam.set({
    width: 350,
    height: 300,
    imageFormat:"png",
    pngQuality: 100,
    flip_horiz : true
})

Webcam.attach("#camera")

function takeAPhoto() {
    Webcam.snap(function(datauri) {
        document.getElementById("foto").innerHTML="<img id='laPhoto' src='" + datauri + "'>"
    })
}

console.log("version: ml5", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hCJraA1kZ/model.json", loadModel)

function loadModel() {
    console.log("Modelo Carregado")
}

function peoplesIdentfy() {
    var personImage = document.getElementById("laPhoto")

    classifier.classify(personImage, theClassifier)
}

function theClassifier(error, trueEnding) {
    if(error) {
        console.error(error)
    }
    else {
        console.log(trueEnding)

        document.getElementById("pessoa").innerHTML="Pessoa: " + trueEnding[0].label
        document.getElementById("precisão").innerHTML="Precisão: " + trueEnding[0].confidence.toFixed(1)
    }
}

