rightEarX = 0;
leftEarX = 0;
rightEarY = 0;
leftEarY = 0;

function preload() {
    santaHat = loadImage("https://i.postimg.cc/3WQ5PtKR/2059876.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modeloaded)
    posenet.on('pose', gotPoses)

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        rightEarY = results[0].pose.rightEar.y - 30;
        rightEarX = results[0].pose.rightEar.x - 50;
        leftEarY = results[0].pose.leftEar.y - 300;
        leftEarX = results[0].pose.leftEar.x - 60;
        console.log("rightEarX=" + rightEarX);
        console.log("rightEarY=" + rightEarY);
        console.log("leftEarX=" + leftEarX);
        console.log("leftEarY=" + leftEarY);
    }


}

function modeloaded() {
    console.log("posenet worked");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(santaHat, rightEarX, rightEarY, leftEarX, leftEarY, 50, 50);
}



function takeSnap() {
    save("face.png");
}