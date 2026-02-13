"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Meny som öppnas och stängs
    const menuBtn = document.querySelector(".menu-btn");
    const menuCloseBtn = document.querySelector(".menu-btn-close");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuLinks = document.querySelectorAll(".menu-overlay a");

    menuBtn.addEventListener("click", function () {
        menuCloseBtn.classList.toggle("active");
        menuOverlay.classList.toggle("active");
    });

    menuCloseBtn.addEventListener("click", function () {
        menuCloseBtn.classList.remove("active");
        menuOverlay.classList.remove("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuCloseBtn.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    });

});