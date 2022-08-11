console.log("Welcome to spotify clone");
let audioElement=new Audio('songs/1.mp3');
let songindex=0;
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let progress=0;
let gif =document.getElementById("gif");
let songs=[
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
    {songname: "Castle on the Hill", filePath:"songs/1.mp3", coverpath:"pictures/Divide_cover.png" },
]
// audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})
