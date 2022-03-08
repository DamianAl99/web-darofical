let btn = document.querySelector("#btn-menu");
let menu = document.querySelector("#menu-pr");
var menuu = document.querySelector(".btn-menu");
let aboutme = document.querySelector(".btn-aboutme");
let proyects = document.querySelector(".btn-proyect");
let contact = document.querySelector(".btn-contact");


btn.addEventListener("click", function(){
    menu.classList.toggle("show");
});

menuu.addEventListener("click", function(){
    menu.classList.toggle("show");
});
aboutme.addEventListener("click", function(){
    menu.classList.toggle("show");
});
proyects.addEventListener("click", function(){
    menu.classList.toggle("show");
});
contact.addEventListener("click", function(){
    menu.classList.toggle("show");
});

const ListaDeProyectos = [
    {
        title: 'MEDITAPY',
        description: 'Web, contiene información importante sobre la meditación, los tipos de meditación e incluso algunos videos tutoriales',
        url: 'https://meditacion.vercel.app/',
        type: "Angular"
    },
    {
        title: 'COMIDAS PARAGUAYAS',
        description: 'Web, mostrando la comida Paraguaya, los platos mas tradicionales, Ingredientes, etc',
        url: 'https://food-rho.vercel.app/home',
        type: "Angular"
    },
    {
        title: 'WEB DE NOTAS',
        description: 'Pequeña Web hecha para guardar notas en el Local Storage',
        url: 'https://damianal99.github.io/Nota/',
        type: "JavaScript"
    },
    {
        title: 'COMPLOT',
        description: 'Web con estructura similar a la web de Complot Paraguay',
        url: 'https://damianal99.github.io/complot/',
        type: "JavaScript"
    },
    {
        title: 'API PAISES',
        description: 'Hecha para mostrar información relevante sobre los paises utilizando una Api',
        url: 'https://searchpais.herokuapp.com/index.html',
        type: "Angular"
    }
];

const mainProyects = document.querySelector(".content-proyects");
let forProyect = '';



for(let i = 0; i < ListaDeProyectos.length; i++){
    forProyect += `
    <a href="${ListaDeProyectos[i].url}" class="all">
        <div class="centerContainer">
            <div class="allTitle">
                <div class="pTitle"><p>${ListaDeProyectos[i].title}</p></div>
            </div>
            <div class="allDescription">
                <div class="pDescription"><span>${ListaDeProyectos[i].description}</span></div>
            </div>
        </div>
    </a>
    `;
}
//console.log(forProyect);
mainProyects.innerHTML = `
            <div class="title">
                 <h3>PROYECTS</h3>
             </div>
            ${forProyect}
`;

const proyectDivHover = document.querySelector(".all");



