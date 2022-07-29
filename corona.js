var compteurImage=1;
var tolaleImage=4;
function slider(x){
    var image=document.getElementById('img1');
    
    compteurImage=compteurImage + x;
    image.src="corona"+compteurImage+".jpg";
    
    if(compteurImage>=tolaleImage)
    {
        compteurImage=1;
    }
    if(compteurImage<1)
    {
        compteurImage=tolaleImage;
    }
   
    
    
    
}
/*function sliderAuto(x){
    var image=document.getElementById('img1');
    compteurImage=compteurImage + x;
    image.src="corona"+compteurImage+".jpg";
    
    if(compteurImage>=tolaleImage)
    {
        compteurImage=1;
    }
    if(compteurImage<1)
    {
        compteurImage=tolaleImage;
    }
}
window.setInterval(sliderAuto,3000);*/