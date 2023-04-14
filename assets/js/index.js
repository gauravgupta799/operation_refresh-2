const header = document.querySelector(".header_container");

window.addEventListener('scroll',()=>{
    if(window.scrollY > 20){
        header.classList.add("stickyHeader")
    }else{
        header.classList.remove("stickyHeader")
    }
})