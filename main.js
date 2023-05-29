//Drag and Drop
//arreglo: para saber cuales son los divs ocupados
let arreglo = ["","",""];

//función que evita que se abra como enlace al soltar un elemento
function allowDrop(ev){
  ev.preventDefault();
}

//lo que ocurre cuando arrastramos un elemento
function drag(ev){
//metodo que establece el tip de datos y el valor del modulo arrastrado
//en este caso el dato es texto y el valor es el id del elemento arrastrado: "modulo específico"
  ev.dataTransfer.setData("text", ev.target.id, event.target.dataset.secret);
}

function drop(ev) {
  ev.preventDefault();
  if (arreglo[parseInt(ev.target.id)] == "") {
    let data = ev.dataTransfer.getData("text");
    arreglo[parseInt(ev.target.id)] = data;
    ev.target.appendChild(document.getElementById(data));

    // Obtener el número secreto correspondiente al elemento arrastrado
    let secretNumber = ev.target.dataset.secret;

    // Crear un elemento para mostrar el número secreto
    let secretDiv = document.createElement('div');
    secretDiv.innerHTML = secretNumber;

    // Agregar la clase 'secret' al elemento creado
    secretDiv.classList.add('secret');

    // Agregar el número secreto al div
    ev.target.appendChild(secretDiv);
  } else {
    // Si el espacio ya está ocupado, eliminar el número secreto si existe
    let secretDiv = ev.target.querySelector('.secret');
    if (secretDiv) {
      secretDiv.remove();
    }
  }
}



//Barra de navegación elementos 
const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
  console.log("scroll width: ", tabsList.scrollWidth);
  console.log("client width: ", tabsList.clientWidth);

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  manageIcons();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  manageIcons();
});




