function navigateTo(page) {
    window.location.href = page;
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll to Top Button Logic
window.onscroll = function() { toggleScrollButton() };

function toggleScrollButton() {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function openFullscreen(imageSrc) {
    // Create a new image element
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.width = '100%'; // Fullscreen width
    img.style.height = 'auto'; // Maintain aspect ratio
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.left = '0';
    img.style.zIndex = '1000';
    img.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    img.style.cursor = 'zoom-out';

    // Append the image to the body
    document.body.appendChild(img);
    
    // Request full-screen mode
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.mozRequestFullScreen) { // Firefox
        img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // IE/Edge
        img.msRequestFullscreen();
    }

    // Exit full-screen mode when clicking the image
    img.onclick = function() {
        closeFullscreen();
    };

    // Exit full-screen mode when the Esc key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeFullscreen();
        }
    });
}

function closeFullscreen() {
    // Exit full-screen mode if the document is in full-screen mode
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    // Remove the image from the DOM
    const img = document.querySelector('body > img');
    if (img) {
        document.body.removeChild(img);
    }
}
document.querySelectorAll('.job-cycle-item').forEach(item => {
    item.addEventListener('click', event => {
        // Toggle expanded class
        event.currentTarget.classList.toggle('expanded');
    });
});
// Select buttons
const backButton = document.getElementById('backButton');
const scrollTopButton = document.getElementById('scrollTopButton');

// Show Scroll to Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll to Top Functionality
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Go Back Functionality
backButton.addEventListener('click', () => {
    history.back();
});
