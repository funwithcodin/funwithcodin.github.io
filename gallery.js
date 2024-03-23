function upDate(previewPic){
    x = document.getElementById('image') 
    x.innerHTML = previewPic.alt;
    console.log(previewPic.src);
    x.style.backgroundImage = 'url("'+previewPic.src+'")';
}
   
function unDo(){
    x = document.getElementById('image')
    x.innerHTML = "Hover over an image below to display here."
    x.style.backgroundImage = "url('')";
}