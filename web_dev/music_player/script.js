var arr =[
    {songName:"Arjan Vailly Ne",url:"./songs/Arjan Vailly Ne(PagalWorld.com.sb).mp3",image:"https://m.media-amazon.com/images/I/91zTlD7AY1L.jpg"},
    {songName:"Dil Toh Bacha Hai",url:"./songs/128-Dil To Bachcha Hai - Ishqiya 128 Kbps.mp3",image:"https://i.scdn.co/image/ab67616d0000b27323ab22507817d5981ebb2f47"},
    {songName:"Pehle Bhi Main",url:"./songs/Pehle Bhi Main(PagalWorld.com.sb).mp3",image:"https://m.media-amazon.com/images/I/91zTlD7AY1L.jpg"},
    {songName:"The King's Affirmation",url:"./songs/The-King’s-Affirmation(PaglaSongs).mp3",image:"https://geo-media.beatsource.com/image_size/500x500/6/2/3/6234f404-ce4c-4d3d-b9f7-2004e9a6065a.jpg"}
]

var allSongs =document.querySelector("#all-songs")
var poster=document.querySelector("#left")
var backward= document.querySelector("#backward")
var play= document.querySelector("#play")
var forward= document.querySelector("#forward")

var  audio = new Audio()
var selectedSong = 0
function mainFunction(){
    
var clutter=""

arr.forEach(function(elem,index){
    clutter +=`<div class="song-card" id=${index}>
                        <div class="part1">
                            <img src=${elem.image} alt="">
                        <h2>${elem.songName}</h2>
                        </div>
                        <h6>3:56</h6>    
                    </div>`
})
 
 allSongs.innerHTML=clutter;

 audio.src= arr[selectedSong].url
 poster.style.backgroundImage = `url(${arr[selectedSong].image})`
}

mainFunction()

allSongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    
    mainFunction()
     play.innerHTML=`<i class="ri-pause-fill"></i>`
     flag =1
    audio.play()
})
var flag =0
play.addEventListener("click",function(){
    if (flag==0){
    play.innerHTML=`<i class="ri-pause-fill"></i>`
    mainFunction()
    audio.play()
    flag=1
    }else{
        play.innerHTML=`<i class="ri-play-fill"></i>`
        mainFunction()
    audio.pause()
        flag=0
    }
})
forward.addEventListener("click",function(){
    if(selectedSong<arr.length-1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedSong>0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})