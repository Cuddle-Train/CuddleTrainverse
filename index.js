let bodybuildingSection = document.querySelector(".bodybuilding");
let gamingSection = document.querySelector(".gaming");
let travelSection = document.querySelector(".travel");
let aboutMeSection = document.querySelector(".about-me");
let body = document.querySelector("body");

bodybuildingSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#ffca6d';
});

bodybuildingSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

bodybuildingSection.addEventListener("click", function() {
    window.location.href = 'bodybuilding.html';
});

gamingSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#ff6d6d';
});

gamingSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

gamingSection.addEventListener("click", function() {
    window.location.href = 'gaming.html';
});

travelSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#6dffb9';
});

travelSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

travelSection.addEventListener("click", function() {
    window.location.href = 'travel.html';
});

aboutMeSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#ffffff';
});

aboutMeSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

aboutMeSection.addEventListener("click", function() {
    window.location.href = 'about-me.html';
});