document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent!");
});

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.style.color = "#fff");
        link.style.color = "#f39c12";
    });
});
