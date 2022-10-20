import {Nota} from './nota.class'
export class NotasList {
  constructor() {
    // this.notas = [];
    this.cargarLocalStorage();
  }

  nuevaNota(nota) {
    this.notas.push(nota);
    this.guardarLocalStorage();
  }

  eliminarNota(id) {
    this.notas = this.notas.filter((nota) => nota.id != id);
    this.guardarLocalStorage();
  }

  marcarNota(id) {
    for (let nota of this.notas) {
      if (nota.id == id) {
        nota.completado = !nota.completado;
        break;
      }
    }
  }

  eliminarCompletados() {
    this.notas = this.notas.filter((nota) => !nota.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem('nota', JSON.stringify(this.notas));
  }

  cargarLocalStorage() {
    this.notas = localStorage.getItem('nota')
                ? JSON.parse(localStorage.getItem('nota'))
                : [];

//? También se escribe asi cuando es un solo parametro a pasar
//? this.notas.map(Nota.fromJson) 
    this.notas = this.notas.map(obj=>Nota.fromJson(obj))
  }

}
