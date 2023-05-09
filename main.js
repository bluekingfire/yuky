img = "";
status ="";


function preload() {

    img = loadImage('dog_cat.jpg');

}

function setup() {

    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status detecting objects";
}

function modelLoaded() {

    console.log("model Loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {

if (error) {

    console.log(error);
}
else{
console.log(results);
}
}

function draw() {

    image(img,0,0,640,420);
    fill("#87CEFA");
    text("simba",45,75);
    noFill();
    stroke("#87CEFA");
    rect(30,60,450,350);

    fill("#a020f0");
    text("cat",300,100);
    noFill();
    stroke("#a020f0");
    rect(290,90,270,320);
}