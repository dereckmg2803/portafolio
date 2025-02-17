import parallax from './components/parallax.js';
import updateCurrentYear from './helpers/date_updater.js';
// import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import downloadCV from './helpers/download_cv.js'; 
document.getElementById('download-cv').addEventListener('click', downloadCV);
// loader();
resetToHome();
updateCurrentYear();
parallax();

// Detectar si el usuario ya seleccionó un idioma antes
const savedLanguage = localStorage.getItem("language");

// Si el usuario seleccionó inglés antes, redirigir automáticamente a la página en inglés
if (savedLanguage === "en" && !window.location.href.includes("index-en.html")) {
  window.location.href = "index-en.html";
} else if (savedLanguage === "es" && !window.location.href.includes("index.html")) {
  window.location.href = "index.html";
}

// Marcar el checkbox según el idioma guardado
document.getElementById("language-toggle").checked = savedLanguage === "en";

// Evento para cambiar de idioma
document.getElementById("language-toggle").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("language", "en"); // Guardar idioma en inglés
    window.location.href = "index-en.html";
  } else {
    localStorage.setItem("language", "es"); // Guardar idioma en español
    window.location.href = "index.html";
  }
});

