var istatus=document.querySelector("h5")

var flag=0 

var add = document.querySelector("#add")
add.addEventListener("click",function(){
   if(flag==0){
    istatus.innerHTML = "Friends"
    istatus.style.color= "green"
    add.innerHTML = "Remove friend"
  
    flag=1
   }
   else{
    istatus.innerHTML = "Stranger"
    istatus.style.color= "red"
    add.innerHTML = "Add firend"
    
    flag=0

   }
})

