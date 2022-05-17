function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.position(450, 180);

    canvas = createCanvas(500, 500);
    canvas.position(1000, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background("white");
}