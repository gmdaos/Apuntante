import './main.scss';
import { Nota, NotasList } from './src/class/';
import { crearNotaHTML } from './src/js/componentes';
// import 'bootstrap}'
export const listaNotas = new NotasList();

//? También se escribe asi cuando es un solo paprametro a pasar
//? listaNotas.notas.forEach(crearNotaHTML)
listaNotas.notas.forEach((nota) => crearNotaHTML(nota));

// * para usar la instancia de Nota con sus metodos
// *listaNotas.notas[0].imprimirNota()

const formNota = document.querySelector('.formNota');
const btnCrearNota = document.querySelector('.btnCrearNota');

btnCrearNota.addEventListener('click', () => {
  formNota.classList.toggle('hidden');
  btnCrearNota.textContent = formNota.classList.contains('hidden')
                            ? 'Crear nueva nota'
                            : 'Cancelar creacion';
});
