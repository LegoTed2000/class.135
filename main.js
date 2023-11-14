video = "";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 700, 600);
}

function modelloaded() {
    console.log("THE MODEL HAS LOADED");
    video.loop();
    video.rate(1);
    video.volume(0);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status: Objects Detected";
}