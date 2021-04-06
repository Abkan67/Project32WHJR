const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bgname;
var hour;

async function preload() {
    await getBackgroundImg();
    backgroundImg = loadImage(bgname);
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if (typeof backgroundImg == "object") {
    background(backgroundImg);}


    Engine.update(engine);

    text("Hour: "+hour, 100,100);


}

async function getBackgroundImg(){

    var database = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
console.log("Database FOund")
    var jsonData = await database.json();
console.log("Json Aquirred");
    var datetime = jsonData.datetime;

    var time = datetime.slice(11,13);
    hour = time;
console.log("Time Aqquired");

    if (time<2) {bgname = "sunrise1.png";}
    else if (time<4) {bgname = "sunrise2.png";}
    else if (time<6) {bgname = "sunrise3.png";}
    else if (time<8) {bgname = "sunrise4.png";}
    else if(time<10) {bgname = "sunrise5.png";}
    else if(time<12) {bgname = "sunrise6.png";}
    else if(time<14) {bgname = "sunset7.png";}
    else if(time<16){bgname = "sunset8.png";}
    else if(time<18){bgname = "sunset9.png";}
    else if(time<20){bgname = "sunset10.png";}
    else if(time<22){bgname = "sunset11.png";}
    else if(time<=24){bgname = "sunset12.png";}
console.log("Image found");

}
