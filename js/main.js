let btn = document.querySelector("#btn-menu");
let menu = document.querySelector("#menu-pr");
var menuu = document.querySelector(".btn-menu");
let aboutme = document.querySelector(".btn-aboutme");
let proyects = document.querySelector(".btn-proyect");
let contact = document.querySelector(".btn-contact");

btn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

menuu.addEventListener("click", function () {
  menu.classList.toggle("show");
});
aboutme.addEventListener("click", function () {
  menu.classList.toggle("show");
});
proyects.addEventListener("click", function () {
  menu.classList.toggle("show");
});
contact.addEventListener("click", function () {
  menu.classList.toggle("show");
});

const ListaDeProyectos = [
  {
    title: "COMIDAS PARAGUAYAS",
    description:
      "Web, mostrando la comida Paraguaya, los platos mas tradicionales, Ingredientes, etc",
    img: "./img/web ecommerce.png",
    type: "Angular",
  },
  {
    title: "WEB DE NOTAS",
    description: "Pequeña Web hecha para guardar notas en el Local Storage",
    img: "./img/web struc.png",
    type: "JavaScript",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/Vipp Hotel - Website.jpg",
    type: "JavaScript",
  },
  {
    title: "PORTAFOLIO DE SKYLAH LEE (no real)",
    description: "Diseño Web de un portafolio hecho a medida para la Usuaria",
    img: "./img/Restaurant Website.png",
    type: "Html, Css, Js ",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/web b.png",
    type: "JavaScript",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/web C.jpg",
    type: "JavaScript",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/web cabaña.jpg",
    type: "JavaScript",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/web level.jpg",
    type: "JavaScript",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/web bali.jpg",
    type: "JavaScript",
  },
];

const mainProyects = document.querySelector(".content-proyects");
let forProyect = "";

for (let i = 0; i < ListaDeProyectos.length; i++) {
    forProyect += `
        <div><img src="${ListaDeProyectos[i].img}" alt="Proyecto Web ${i+1}"></div>
      `;
  }
mainProyects.innerHTML = `
<div id="slider">
				<div class="galeria">
          ${forProyect}
				</div>
</div>
`;

//CIRCULO DE TEXTO
circle = document.getElementById("circle");
circlearray = circle.textContent.split("");
circle.textContent = "";
for (var i = 0; i < circlearray.length; i++) {
  circle.innerHTML +=
    '<span style="transform:rotate(' +
    (i + 1) * 10 +
    'deg)">' +
    circlearray[i] +
    "</span>";
}

const proyectDivHover = document.querySelector(".all");

// Slider

$(".galeria").bxSlider({
  mode: "fade",
  captions: false,
  slideWidth: 1200,
  responsive: true,
  pager: true,
});
