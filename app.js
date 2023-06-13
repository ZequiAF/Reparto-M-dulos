import {obtenerModulos} from 'firebase.js';

window.addEventListener('DOMContentLoaded', async () =>{
  const querySnapshot = await obtenerModulos();
  console.log(querySnapshot)
})