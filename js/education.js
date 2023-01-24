"using strict";

const edu_observer = new IntersectionObserver ( entries => {

    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-left");
        } else{
            entry.target.classList.remove("slide-in-left");
        }
    });
});

let edu_boxes = document.querySelectorAll(".edu-box");
edu_boxes.forEach(element => {
    edu_observer.observe(element);
});