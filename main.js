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

function drop(ev){
  //mediante ev.target.id tomo el nombre del id del div que puede ser 0, 1, 2...
  //si el arreglo en div posicion está vacío, significa que no tiene nada, es decir,
  //puedo soltar allí, en caso contrario, ya hay un elemento
  if(arreglo[parseInt(ev.target.id)] == ""){
    //obtengo los datos arrastrados con el metodo dataTransfer.getData(). Este método devolverá
    // cualquier dato que se haya establecido en el mismo tipo en el método setData(). 
    //En este ejemplo data quedará con el módulo que sea
    let data = ev.dataTransfer.getData("text");
    //agrego al arreglo el nombre del id
    arreglo[parseInt(ev.target.id)] = data;
    //agrego el elemento arrastrado al elemento soltado
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("columna2").textContent = document.getElementById(data).dataset.secret;
    
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




