let coursesBtn = document.querySelector("header .links button");

let list =document.querySelectorAll("header .links .list a ")
coursesBtn.onclick=()=>{
    
    list.forEach((item)=>{
        item.style.display="unset"
    })
}