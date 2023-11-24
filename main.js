noseX=0;
noseY=0;


function preload()
{
nariz_payaso=loadImage('https://i.postimg.cc/rFTBgcqk/nariz.png');
}


function setup()
{
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results)
  {
  if (results.length >0);
  {
    console.log(results);
    noseX = results[0].pose.nose.x-20;
    noseY = results[0].pose.nose.y-20;
    console.log('coordenada nariz x ='+noseX);
    console.log('coordenada nariz y ='+noseY);
  }
  }


function modelLoaded()
{
  console.log('poseNet esta inicializado');
}

function draw()
{
image(video,0,0,300,300);

image(nariz_payaso,noseX,noseY,60,60);


}

function take_snapshot()
{
save('mifiltro.png');
}
