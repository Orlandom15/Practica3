// Menú móvil
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        }

        // Cierra el menú móvil si está abierto
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

// Modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
console.log("Mensaje desde la rama MASTER1");