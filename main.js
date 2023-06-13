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
    padrereal.querySelector('.secret-number').textContent = 0;  
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
        let target = ev.target;
        let currentRow = target.parentNode;
        //Obtenemos los padres para luego obtener los hijos (secrets numbers) y meter su suma en total
        if (currentRow != null) {
          let valor = document.getElementsByClassName('padre-secret-number');
          for (let i = 0; i < valor.length; i++) {
            console.log(valor[i]);
            let todo = valor[i].getElementsByClassName('secret-number');
            let numerototal=0;
            for (let i = 0; i < todo.length; i++) {
              if(isNaN(todo[i].textContent)){
              }else{
                numerototal+=parseInt(todo[i].textContent);
              }
            }
            valor[i].querySelector('.total').textContent=numerototal;
            if (numerototal == 20) {
              valor[i].querySelector('.total').style.color= "green";
            }else if (numerototal > 20 && numerototal < 22 || numerototal >= 18 && numerototal < 20) {
              valor[i].querySelector('.total').style.color= "orange";
            }else{
              valor[i].querySelector('.total').style.color= "red";
            }
          }
        }
      }
      // Mover el botón arrastrado a la celda de destino
      let draggedButton = document.getElementById(ev.dataTransfer.getData('text'));
      target.appendChild(draggedButton);
    }
  }
}



//SLIDER DE MODULOS
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


//CAPTURA DE IMAGEN
function capturarImagen() {
  const card = document.querySelector('.card-group');

  html2canvas(card).then(function(canvas) {
    const enlace = document.createElement('a');
    enlace.href = canvas.toDataURL('image/png');
    enlace.download = 'Reparto_Módulos.png';
    enlace.click();
  });
}

//PopUp

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
