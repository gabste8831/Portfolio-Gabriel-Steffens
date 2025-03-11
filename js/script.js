//Seleção de elementos
const scrollUp = document.getElementById("scroll-icon"); //seta de scroll up no fim da página

const homePageButton = document.getElementById("home-icon"); // botão que direciona para a home page
const homePage = document.querySelector(".sobre-mim"); //Dom para a home page

const projectsButton = document.getElementById("projects-icon"); //Dom para o botão que direciona para a aba de projeto
const projectsPage = document.querySelector(".projetos"); //Dom para a aba de projetos

const contactButton = document.getElementById("contact-icon"); //Dom para o botão que direciona para a aba de contato
const contactPage = document.querySelector(".contact"); //Dom para a aba de contato


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
    contactPage.classList.add("none");
    projectsPage.classList.remove("none");
});

homePageButton.addEventListener("click", function(){
    projectsPage.classList.add("none");
    contactPage.classList.add("none");
    homePage.classList.remove("none");
});

contactButton.addEventListener("click", function(){
    homePage.classList.add("none");
    projectsPage.classList.add("none");
    contactPage.classList.remove("none");
}); 
