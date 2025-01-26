// JavaScript for button functionality (if you want it to display a message when clicked)
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".content button");

    button.addEventListener("click", function () {
        alert("Thank you for getting started with us!");
    });
});
