import {Persona} from './persona.js';
import {TITULO_PAGINA} from './constante.js';

document.getElementById('titulo').innerHTML= TITULO_PAGINA;

let nombre = prompt("digite su nombre");
let edad = prompt("digite su edad");

let persona= new Persona(nombre,edad);

document.getElementById('nombre').innerHTML=persona.getNombre();
document.getElementById('edad').innerHTML=persona.getEdad();
document.getElementById('saludo').innerHTML=persona.saludo();