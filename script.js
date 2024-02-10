let div = document.querySelector(".products");
div.addEventListener("click", function(event){
    console.log(event);
    if(event.target.nodeName==="BUTTON"){
        console.log(event.target.innerHTML);
    }
})