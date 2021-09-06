import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perguntas } from '../interface/pergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(private _http: HttpClient) { }

  getPerguntas() {
    return this._http.get<Perguntas[]>('http://teste.test/perguntas');
  }

  salvarPerguntas(objecto: any) {
    console.log(objecto);
    return this._http.post<any>('http://teste.test/perguntas', objecto);
  }

  eliminarPergunta(id: number) {

  }
}
