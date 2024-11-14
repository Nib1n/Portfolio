// Existing code for the education button
document.addEventListener("DOMContentLoaded", function() {
    // Education button code
    const button = document.querySelector(".education-button");
    if (button) {
        console.log("Button found, adding event listener.");
        button.addEventListener("click", function() {
            console.log("Button clicked, navigating to education.html");
            window.location.href = "education.html";
        });
    } else {
        console.error("Button with class '.education-button' not found.");
    }

    // Progress bar animation code
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill-level");
        bar.style.width = skillLevel + "%";
    });

    // Resume button code
    const resumeButton = document.querySelector(".resume-button");
    if (resumeButton) {
        resumeButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default behavior if necessary
            window.open("img/resume.png", "_blank"); // Opens in a new tab
        });
    }
});
