export class Nota {
  
  static fromJson({id,tituloNota, cuerpoNota, completado, creado}){
    const tempNota = new Nota(tituloNota,cuerpoNota)
    tempNota.id = id;
    tempNota.completado =completado;
    tempNota.creado =creado;

    return tempNota;
  }

  constructor(tituloNota, cuerpoNota) {
    this.tituloNota = tituloNota;
    this.cuerpoNota = cuerpoNota;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }

  imprimirNota(){
    console.log(`${this.tituloNota} - ${this.id}`) 
  }
}
