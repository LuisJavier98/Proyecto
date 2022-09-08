
document.addEventListener("DOMContentLoaded",function(){
    console.log("el documento ests cargado")
} )

btnOpen.onclick=function(){
    menu.classList.add('active')
   }

btnClose.onclick=function(){
 menu.classList.remove('active')
}

obj=document.querySelector(".navegacion")

obj.addEventListener("click",function(e){
if(e.target.classList.contains("mn")){
menu.classList.remove('active')
}
})



