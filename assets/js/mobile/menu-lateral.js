const iconesDeEstado = document.querySelectorAll("[data-icone-estado]");
const menuLateral = document.querySelector("[data-menu-lateral]");

iconesDeEstado.forEach(icone => {
    icone.addEventListener("click", () => {
        menuLateral.classList.toggle("lateral--ativo");
    });
});
