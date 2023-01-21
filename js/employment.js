"using strict";


function toggle_employment_card(event){
    let item = event.target.closest(".tl-item");
    let card = item.querySelector(".tl-card");
    if (!card.classList.contains("visible")){
        card.classList.add("visible");
    } else{
        card.classList.remove("visible");
    }
}


let logos = document.querySelectorAll(".tl-logo")

logos.forEach(function(logo) {
    logo.addEventListener('mouseenter', toggle_employment_card);
    logo.addEventListener('mouseleave', toggle_employment_card);
});


