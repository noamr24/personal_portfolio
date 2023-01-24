"using strict";

const hobbie_observer = new IntersectionObserver ( entries => {

    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-right");
        } else{
            entry.target.classList.remove("slide-in-right");
        }
    });
});

let hobbie_boxes = document.querySelectorAll(".hobbie-box");
hobbie_boxes.forEach(element => {
    hobbie_observer.observe(element);
});