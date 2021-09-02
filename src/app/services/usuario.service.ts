import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosUrl = 'http://localhost/erp-xbytes/aluno';

  /* usuarios: Usuario[] = [
    {id: 1, nome: 'Hydrogen', apelido: '1.0079', sexo: 'H'},
    {id: 2, nome: 'Helium', apelido: '4.0026', sexo: 'He'},
    {id: 3, nome: 'Lithium', apelido: '6.941', sexo: 'Li'},
    {id: 4, nome: 'Beryllium', apelido: '9.0122', sexo: 'Be'},
    {id: 5, nome: 'Boron', apelido: '10.811', sexo: 'B'},
    {id: 6, nome: 'Carbon', apelido: '12.0107', sexo: 'C'},
    {id: 7, nome: 'Nitrogen', apelido: '14.0067', sexo: 'N'},
    {id: 8, nome: 'Oxygen', apelido: '15.9994', sexo: 'O'},
    {id: 9, nome: 'Fluorine', apelido: '18.9984', sexo: 'F'},
    {id: 10, nome: 'Neon', apelido: '20.1797', sexo: 'Ne'},
  ]; */

  constructor(private _http: HttpClient) { }

  /* getUsuario() {
    return this.usuarios.slice();
  }

  eliminarUsuario(id: number){
    this.usuarios.splice(id, 1);
  } */

  getUsuario(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>('http://teste.test/aluno');
  }

  saveUsuario(usuario: Usuario) {
    console.log('esta Aqui');
    console.log(usuario);
    return this._http.post<Usuario>('http://teste.test/save', usuario);
  }

  

  eliminarUsuario(id: number){
  }

  private log(message: string)
  {
    return 'Erro ao Carregar...';
  }

  private handleError<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
