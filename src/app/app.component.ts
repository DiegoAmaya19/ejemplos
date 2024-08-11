import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalal-principal/pantalal-principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, PantallaPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularLearningApp';
}
