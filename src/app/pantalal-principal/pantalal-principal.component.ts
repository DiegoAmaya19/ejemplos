import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PanelPintarComponent } from '../panel-pintar/panel-pintar.component';

@Component({
  selector: 'app-pantalal-principal',
  standalone: true,
  imports: [RouterModule, PanelPintarComponent, RouterOutlet],
  templateUrl: './pantalal-principal.component.html',
  styleUrl: './pantalal-principal.component.css'
})
export class PantallaPrincipalComponent {

}
