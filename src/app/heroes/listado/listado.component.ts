import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'Iroman', 'aquaman', 'batman', 'antman'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    //this.heroes = this.heroes.filter((x) => x !== 'Iroman');
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
