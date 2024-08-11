import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  mensaje(nombre: String){
    return "Hola Don "+nombre+" todo bien";
  }

  caracteresMensaje(nombre:String):number{

    let contador:number = 0;

    for(let i=0;i<nombre.length;i++){
      if(nombre[i] != " "){
        contador++;
      }
    }

    return contador;
  }
}
