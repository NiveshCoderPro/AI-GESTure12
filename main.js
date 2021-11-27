noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function preload() {

}

function setup() {
    canvas = createCanvas(400,300);
    video = createCapture(VIDEO);
    canvas.position(1000,500)

    video.size(350,350)

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}

function draw() {
    background('#ff00bb');
    fill('#4000ff');
    stroke('#4000ff');
    square(noseX , noseY , difference);
}
function modelLoaded() {
    console.log("Posenet is intialized");

}



function gotPoses(results) {
    if (results.length > 0) {
 console.log(results);
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;

   rightWristX = results[0].pose.rightWrist.x;
   leftWristX = results[0].pose.leftWrist.x;
   difference = floor(leftWristX - rightWristX);
    }
}