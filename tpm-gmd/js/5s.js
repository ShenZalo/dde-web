function navigateTo(page) {
    window.location.href = page;
}
 document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});



// ======== back button & back to top 
document.getElementById("backButton").addEventListener("click", () => {
    window.history.back();
});

document.getElementById("topButton").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Smooth scroll (button option) to the selected section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}



// full screen image
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-image");
var images = document.querySelectorAll(".clickable-image");

// Loop through each image and add an event listener for the click event
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the clicked image source to the modal image
    };
});

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}
