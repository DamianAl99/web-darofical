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
    title: "MEDITAPY",
    description:
      "Web, contiene información importante sobre la meditación, los tipos de meditación e incluso algunos videos tutoriales",
    img: "./img/contact-img.jpg",
    type: "Angular",
  },
  {
    title: "COMIDAS PARAGUAYAS",
    description:
      "Web, mostrando la comida Paraguaya, los platos mas tradicionales, Ingredientes, etc",
    img: "./img/contact-img.jpg",
    type: "Angular",
  },
  {
    title: "WEB DE NOTAS",
    description: "Pequeña Web hecha para guardar notas en el Local Storage",
    img: "./img/contact-img.jpg",
    type: "JavaScript",
  },
  {
    title: "COMPLOT",
    description: "Web con estructura similar a la web de Complot Paraguay",
    img: "./img/contact-img.jpg",
    type: "JavaScript",
  },
  {
    title: "PORTAFOLIO DE SKYLAH LEE (no real)",
    description: "Diseño Web de un portafolio hecho a medida para la Usuaria",
    img: "./img/contact-img.jpg",
    type: "Html, Css, Js ",
  },
];

const mainProyects = document.querySelector(".content-proyects");
let forProyect = "";

// for (let i = 0; i < ListaDeProyectos.length; i++) {
//   forProyect += `
//     <a href="${ListaDeProyectos[i].url}" class="all">
//         <div class="centerContainer">
//             <div class="allTitle">
//                 <div class="pTitle"><p>${ListaDeProyectos[i].title}</p></div>
//             </div>
//             <div class="allDescription">
//                 <div class="pDescription"><span>${ListaDeProyectos[i].description}</span></div>
//             </div>
//         </div>
//     </a>
//     `;
// }
for (let i = 0; i < ListaDeProyectos.length; i++) {
    forProyect += `
        <li class="item">
            <img src="${ListaDeProyectos[i].img}" alt="Proyecto Web ${i+1}">
        </li>
      `;
  }
mainProyects.innerHTML = `
             <div class="wrapper">
          <ul class="items">
            ${forProyect}
          </ul>
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

//PROYECTS DRAGGABLE
function Proyects() {
  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = document.querySelector(".items");

  const end = () => {
    isDown = false;
    slider.classList.remove("active");
  };

  const start = (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;
  };

  (() => {
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);

    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);

    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
  })();
}
Proyects();
