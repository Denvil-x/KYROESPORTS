// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
  const navMenu = document.querySelector("header nav ul");
  navMenu.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const sectionId = event.target.getAttribute("href");
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add event listener to register buttons
const registerButtons = document.querySelectorAll("button");
registerButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Registration is not available yet. Please check back later.");
  });
});

