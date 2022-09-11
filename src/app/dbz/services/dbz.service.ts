import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Bills',
      poder: 80000,
    },
    {
      nombre: 'Goku',
      poder: 64000,
    },
    {
      nombre: 'Vegeta',
      poder: 58000,
    },
    {
      nombre: 'Gohan',
      poder: 52000,
    },
    {
      nombre: 'Frezzer',
      poder: 62000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
