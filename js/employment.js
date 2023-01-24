"using strict";

// show position cards when hovering over logos in wide screens
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




// Timeline update with scrolling event, update height according to position
let container = document.querySelector(".employment .content-container");
let timeline = document.querySelector(".timeline");

window.addEventListener("scroll", function() {

    let containerPosition = container.getBoundingClientRect();
    let scrollPosition = window.scrollY;

    if (containerPosition.top <= 500 && containerPosition.bottom >= 610) {
        timeline.style.setProperty("--before-height", (containerPosition.y*-1)+500 + "px");
    }
    else if (containerPosition.bottom < 610) {
        timeline.style.setProperty("--before-height", "85%");
    }
    else {
        timeline.style.setProperty("--before-height", "0px");
    }

});





