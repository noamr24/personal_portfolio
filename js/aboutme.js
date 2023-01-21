
"use strict";

let photos = document.getElementsByClassName("aboutme-photo");
let idx = 0;
setInterval(update_aboutme_pic, 5000);

function update_aboutme_pic() {
    photos[idx].classList.remove("aboutme-active");
    idx++;
    if (idx >= photos.length) {
        idx = 0
    }
    photos[idx].classList.add("aboutme-active");
}