import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perguntas } from '../interface/pergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {
  perguntas: Perguntas[] = [
    {id: 1, categoria: 'Medcanica', texto: 'O que é o Mosssssssssssstor', avatar: 'oooooo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'oooooo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'oooooo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'ooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'oooooo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'oooooo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'oooooo', referencia: 'kkkkk'},
    {id: 2, categoria: 'Mecanica', texto: 'O que é o Motor', avatar: 'oooooo', referencia: 'kkkkk'}
  ];

  constructor() { }

  getPerguntas() {
    return this.perguntas.slice();
  }

  eliminarPergunta(id: number) {

  }
}
