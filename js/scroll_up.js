"use strict";
//Get the button
const scroll_up_btn = document.querySelector("#btn-back-to-top");

const scrollFunction = () => {
    if (document.body.scrollTop > 20||document.documentElement.scrollTop > 20)
        scroll_up_btn.style.display = "block";
    else
        scroll_up_btn.style.display = "none";  
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll =  () => scrollFunction();

scroll_up_btn.addEventListener("click", backToTop);
// When the user clicks on the button, scroll to the top of the document