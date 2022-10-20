// import '../main.scss'
import { listaNotas } from '../../main';
import { Nota } from '../class/nota.class';

let divNotasContainer = document.querySelector('.notasContainer');
const btnGuardarNota = document.querySelector('.guardarNota');
const formularioNota = document.querySelector('.formNota');
const btnBorrar = document.querySelector('.btnBorrar');
const nodosFormulario = Array.from(formularioNota);


export const crearNotaHTML = (nota) => {
  const htmlNota = `<div class="accordion-item nota" data-id='${nota.id}'>
    <h2 class="accordion-header tituloNota d-flex justify-content-between" id="headingOne">
      <div class="accordion-button d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      ${nota.tituloNota}
      <div class="btn-gestio">
      <input type="checkbox" class="check-input">
      <button class="fa-solid fa-trash text-primary ms-3"></button>
      </div></div></h2>
    <div id="collapseOne" class="cuerpoNota accordion-collapse collapse  show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">${nota.cuerpoNota}</div>
    </div>
  </div>`;
 
  const div = document.createElement('div');
  div.innerHTML = htmlNota;
  divNotasContainer.appendChild(div.firstElementChild);
  return nota.tituloNota != undefined
    ? div.firstElementChild
    : (divNotasContainer.innerHTML = '');
};

//eventos
btnGuardarNota.addEventListener('click', (e) => {
  if (
    nodosFormulario[0].value.length > 0 &&
    nodosFormulario[1].value.length > 0
  ) {
    let infoNota = new Nota(nodosFormulario[0].value, nodosFormulario[1].value);
    listaNotas.nuevaNota(infoNota);
    crearNotaHTML(infoNota);

    formularioNota.reset();
    e.preventDefault();
  }
});

// eventoCheck()

divNotasContainer.addEventListener('click', (e) => {
  let count = [];
  let nodo = e.target;
  let sibling = e.target.nextElementSibling;
  let nombreElemento = e.target.localName;
  let elementoNota = e.target.parentElement.parentElement.parentElement.parentElement;
  const notaId = elementoNota.getAttribute('data-id');

  if (nombreElemento.includes('input')) {

    listaNotas.marcarNota(notaId);

    listaNotas.notas.forEach((el) => {
      el.completado && count.push(el.completado);
    });
    
    nodo.checked&&(sibling.classList.add('ocultarBtn'),elementoNota.classList.add('marcado'));
    !nodo.checked&&(sibling.classList.remove('ocultarBtn'),elementoNota.classList.remove('marcado'));
   
  } else if(nombreElemento.includes('button')){
    listaNotas.eliminarNota(notaId)
    divNotasContainer.removeChild(elementoNota)
  }
  count.includes(true)&&btnBorrar.classList.add('checked');
  (count.length == 0 && nombreElemento.includes('input'))&&btnBorrar.classList.remove('checked'); 
});

btnBorrar.addEventListener('click',()=>{
  let notas = divNotasContainer.children;
  listaNotas.eliminarCompletados()
  for (let i = notas.length -1; i >= 0; i--) {
    let element = notas[i];
    element.classList.contains('marcado')&&divNotasContainer.removeChild(element)
  }
  btnBorrar.classList.remove('checked')
})