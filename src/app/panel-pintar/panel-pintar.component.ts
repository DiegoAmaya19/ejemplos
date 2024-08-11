import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-pintar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-pintar.component.html',
  styleUrl: './panel-pintar.component.css'
})
export class PanelPintarComponent {

  color: String = "#212";

  rango: number = 2;

  cambiarColor(color:String){
    this.color = color;
  }

  mouseMove(Evento:any){

    let y = Evento.clientY;

    let x = Evento.clientX;

    console.log('Se movio el mouse');

    if(y>100 && y<400-this.rango){

        this.drawColoredPoint(x, y);
      
    }   

  }

  limpiar(){

    console.clear();

    const canvas = document.getElementById('canvas');

    canvas?.replaceChildren();
  }

  drawColoredPoint(x: number, y: number) {
    const pointElement = document.createElement('div');
    pointElement.style.position = 'absolute';
    pointElement.style.left = `${x}px`;
    pointElement.style.top = `${y}px`;
    pointElement.style.width = `${this.rango}px`;
    pointElement.style.height = `${this.rango}px`;
    pointElement.style.display = 'block';
    pointElement.style.borderRadius = '70%';
    pointElement.style.backgroundColor = `${this.color}`;
  
    const canvas = document.getElementById('canvas');

    canvas?.appendChild(pointElement);
  }

}
