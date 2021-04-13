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
        title: 'MINDFULNESS',
        description: 'Web Informativa. Contiene informacion sobre la meditacion, practicas, Centros de meditacion',
        url: 'https://meditacion.vercel.app'
    },
    {
        title: 'COMIDAS PARAGUAYAS',
        description: 'Web Informativa. Contiene informacion sobre comidas, recetas, tutoriales',
        url: 'https://food-rho.vercel.app/home'
    },
    {
        title: 'WEB DE NOTAS',
        description: 'Web para guardar Notas',
        url: 'https://damianal99.github.io/Nota/'
    },
    {
        title: 'COMPLOT',
        description: 'Web similar a la de Complot Paraguay',
        url: 'https://damianal99.github.io/complot/'
    },
    {
        title: 'API PAISES',
        description: 'Web Informativa. Buscador de Paises con Numero de Habitantes y mas.',
        url: 'https://searchpais.herokuapp.com/index.html'
    }
];

const mainProyects = document.querySelector(".content-proyects");
let forProyect = '';



for(let i = 0; i < ListaDeProyectos.length; i++){
    forProyect += `
    <a href="${ListaDeProyectos[i].url}" class="all">
        <p>${ListaDeProyectos[i].title}</p>
        <div class="proyec">
        ${ListaDeProyectos[i].description}
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

