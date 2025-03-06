//Seleção de elementos
const scrollUp = document.getElementById("scroll-icon"); //seta de scroll up no fim da página
const homePageButton = document.getElementById("home-icon"); // botão que direciona para a home page
const projectsButton = document.getElementById("projects-icon"); //Dom para o botão que direciona para a aba de projeto
const homePage = document.querySelector(".sobre-mim"); //Dom para a home page
const projectsPage = document.querySelector(".projetos"); //Dom para a aba de projetos


//Atribuição de eventos

//Evento de scroll
scrollUp.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

projectsButton.addEventListener("click", function(){
    homePage.classList.add("none");
    projectspPage.classList.remove("none");
});

homePageButton.addEventListener("click", function(){
    projectsPage.classList.add("none");
    homePage.classList.remove("none");
});
