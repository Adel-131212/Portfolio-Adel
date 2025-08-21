document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const themeToggle = document.getElementById("theme-toggle");
    let darkMode = localStorage.getItem("darkMode") === "enabled";

    // Fonction pour activer/désactiver le mode sombre
    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
    }

    // Appliquer le mode sombre si activé précédemment
    if (darkMode) {
        document.body.classList.add("dark-mode");
    }

    // Ouvrir/fermer le menu mobile
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("show-menu");
    });

    // Activer/désactiver le mode sombre
    themeToggle.addEventListener("click", toggleDarkMode);
});
