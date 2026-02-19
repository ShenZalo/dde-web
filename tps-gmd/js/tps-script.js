function navigateTo(page) {
    window.location.href = page;
}

// ======== back button & back to top 
document.getElementById("backButton").addEventListener("click", () => {
    window.history.back();
});

document.getElementById("topButton").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//========= popup function
const popup = document.getElementById("imagePopup");
const openButton = document.getElementById("openPopup");  // Ensure this button exists in your HTML
const closeButton = document.getElementById("closePopup");
const header = document.getElementById("header"); // Assuming your header has an ID 'header'

// Open the popup when the button is clicked
openButton.onclick = function() {
    popup.style.display = "flex";  // Show the popup
    header.classList.add("hidden");  // Hide the header by adding the 'hidden' class
};

// Close the popup when the close button is clicked
closeButton.onclick = function() {
    popup.style.display = "none";  // Hide the popup
    header.classList.remove("hidden");  // Show the header by removing the 'hidden' class
};

// Close the popup when clicking anywhere outside the modal
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";  // Hide the popup
        header.classList.remove("hidden");  // Show the header when clicking outside the popup
    }
};

// full screen image
function openFullscreen(src) {
    document.getElementById("expanded-img").src = src;
    document.getElementById("full-screen-img").style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("full-screen-img").style.display = "none";
}

// ============================= MODAL IMAGES ============================ //

// Get modal elements
const modal = document.getElementById("fullscreen-modal");
const modalImage = document.getElementById("modal-image");
const closeButton2 = document.querySelector(".close-button-1");

// Add event listeners to images
const images = document.querySelectorAll(".clickable-image");
images.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "flex"; // Show modal
        modalImage.src = this.src; // Set the source of the modal image
    });
});

// Close the modal when the close button is clicked
closeButton2.addEventListener("click", function() {
    modal.style.display = "none"; // Hide modal
});

// Close the modal when clicking outside of the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});
