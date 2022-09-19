function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Se4v2JCNX/model.json" , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}