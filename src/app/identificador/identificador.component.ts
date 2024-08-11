import { Component, Inject } from '@angular/core';
import { MensajeService } from '../mensaje.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identificador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './identificador.component.html',
  styleUrl: './identificador.component.css'
})
export class IdentificadorComponent {

  nombreClase: String = "styleMostrarDetallesUser";

  nombreInsertadoUser: String = "";

  nombreUser: String = "";

  numeroCaracteres: number | undefined = undefined;

  constructor(@Inject(MensajeService) private mensajeService: MensajeService){}

  caracteresMensaje(nombre:String){
    this.numeroCaracteres = this.mensajeService.caracteresMensaje(nombre);
    this.nombreUser = this.mensajeService.mensaje(nombre);
  }

}
