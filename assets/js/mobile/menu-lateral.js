const iconeHamburguer = document.querySelector("[data-icone-hamburguer]");
const menuLateral = document.querySelector("[data-menu-lateral]");

iconeHamburguer.addEventListener("click", () => {
    menuLateral.classList.add("ativo");
});
