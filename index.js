let bodybuildingSection = document.querySelector(".bodybuilding");
let gamingSection = document.querySelector(".gaming");
let travelSection = document.querySelector(".travel");
let body = document.querySelector("body");

bodybuildingSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#ffca6d';
});

gamingSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#ff6d6d';
});

travelSection.addEventListener("mouseover", function() {
    body.style.backgroundColor = '#6dffb9';
});

// Add these new lines
bodybuildingSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

gamingSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

travelSection.addEventListener("mouseout", function() {
    body.style.backgroundColor = '#262626';
});

bodybuildingSection.addEventListener("click", function() {
    window.location.href = 'bodybuilding.html';
});

gamingSection.addEventListener("click", function() {
    window.location.href = 'gaming.html';
});

travelSection.addEventListener("click", function() {
    window.location.href = 'travel.html';
});