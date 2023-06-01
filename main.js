function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  //Creado por tu papi chulo
  /*
    Elimina el contenido del secret-number al moverlo de lugar llamando al abuelo que contiene todo
  */
  let target = ev.target;
  let currentRow = target.parentNode;
  let padrereal = currentRow.parentNode;
  if (currentRow != null) {
    console.log("estaba en mi puto lugar");
    padrereal.querySelector('.secret-number').textContent = '';
  }
}

function drop(ev) {
  ev.preventDefault();
  let target = ev.target;

  // Verificar si el elemento arrastrado es un botón
  if (target.classList.contains('box')) {
    let currentRow = target.parentNode;
    let rightColumn = currentRow.querySelector('.secret-number');
    if (!currentRow.querySelector('.draggable')) { //Comprueba que no haya un boton previo
      // Eliminar el número secreto si no hay botón en la fila
      if (ev.dataTransfer.getData('text')) {
        let secretNumber = document.getElementById(ev.dataTransfer.getData('text')).getAttribute('data-secret');
        rightColumn.textContent = secretNumber;
      }
      // Mover el botón arrastrado a la celda de destino
      let draggedButton = document.getElementById(ev.dataTransfer.getData('text'));
      target.appendChild(draggedButton);
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




