const stacks = [
  {
    id: 1,
    name: "Java - Programming Language",
    job: "Programming Language Object Oriented",
    img: "./java.png",
    text: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems. Em 2008 o Java foi adquirido pela empresa Oracle Corporation",
  },
  {
    id: 2,
    name: "Angular - Framework",
    job: "Front-end framework",
    img: "./angular.png",
    text: "Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces",
  },
  {
    id: 3,
    name: "Spring - Framework",
    job: "Java Project Builder",
    img: "https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png",
    text: "O Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro 'Expert One-on-One: JEE Design e Development'. Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle e injeção de dependência.",
  },
  {
    id: 4,
    name: "Javascript - Web Programming",
    job: "Programming Language for Web",
    img: "https://www.gran-turismo.com/gtsport/decal/5125114039554278920_1.png",
    text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  },
];

// select items
const img = document.getElementById("stack-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener("DOMContentLoaded", function () {
  showStack();
});

//  show person based on item

function showStack() {
  const item = stacks[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > stacks.length - 1) {
    currentItem = 0;
  }

  showStack();
});

// show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = stacks.length - 1;
  }

  showStack();
});

// show random stack

randomBtn.addEventListener("click", function () {
  randomStack = Math.floor(Math.random() * stacks.length);
  console.log(randomStack);
  currentItem = randomStack;

  showStack();
});
