var video = ""
objects = []
status = ""
function preload()
{
    video = createVideo('video.mp4')
    video.hide()
}
function setup()
{
    canvas = createCanvas(450, 450)
    canvas.center()
}
function draw()
{
    image(video, 0, 0, 450, 450)
    if(status!="")
    {
      objectDetector.detect(video, gotResult)
      for (i = 0; i < objects.length; i++)
      {
         document.getElementById("status").innerHTML = "status : object found";
         document.getElementById("number_objects").innerHTML = "person  "+ objects.length;
        
         fill("#ff000")
         percent = floor(objects[i].cofidence*100)
         text(objects[i].label+""+percent+"%",objets [i].x+15,objects [i].y+15)
         
      }
    }
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "status: finding object"
}
function modelLoaded()
{
    console.log("modelloaded")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}
function gotResult(error, results)
{
   if(error)
   {
       console.log(error)
   }
   console.log(results)
   objects = results
}