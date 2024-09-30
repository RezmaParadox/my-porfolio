const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".button-close");
const sections = document.querySelectorAll(".hidden");
const cvButton = document.querySelector(".btn-cv");
const elementsHidden = document.querySelectorAll(".cover");
const showButton = document.querySelector(".btn-more-projects");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("show");
});

cvButton.addEventListener("click", () => {
  window.open("../media/CV-Gibran Ramsés Juárez Loyo.pdf", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

showButton.addEventListener("click", () => {
  elementsHidden.forEach((element) => {
    if (element.classList.contains("cover")) {
      element.classList.remove("cover");
      showButton.textContent = "Ver menos proyectos";
    } else {
      element.classList.add("cover");
      showButton.textContent = "Ver más proyectos";
    }
  });
});

document
  .getElementById("form-contact")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    if (
      !document.getElementById("name").value ||
      !document.getElementById("email").value ||
      !document.getElementById("message").value
    ) {
      alert("Por favor rellena todos los campos");
    } else {
      // Envía el formulario usando EmailJS
      emailjs.sendForm("service_hrqiq4j", "template_8ul2bzj", this).then(
        () => {
          alert("Mensaje enviado correctamente");
          document.getElementById("form-contact").reset();
        },
        (error) => {
          alert(
            "Error al enviar el mensaje, por favor intenta de nuevo",
            error
          );
        }
      );
    }
  });
