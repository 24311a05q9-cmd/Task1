const images = [
"https://picsum.photos/id/1015/700/400",
"https://picsum.photos/id/1016/700/400",
"https://picsum.photos/id/1018/700/400",
"https://picsum.photos/id/1025/700/400"
];
let index = 0;
function showImage(){
    document.getElementById("sliderImage").src = images[index];
}
function nextSlide(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showImage();
}
function prevSlide(){
    index--;
    if(index < 0){
        index = images.length-1;
    }
    showImage();
}
setInterval(nextSlide,3000);
async function getJoke(){
    try{
        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
        let data = await response.json();
        document.getElementById("joke").innerHTML =
        "<strong>" + data.setup + "</strong><br><br>" + data.punchline;
    }
    catch(error){
        document.getElementById("joke").innerHTML =
        "Unable to fetch joke.";

    }
}
