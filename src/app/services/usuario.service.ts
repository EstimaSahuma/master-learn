import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [
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
  ];

  constructor() { }

  getUsuario() {
    return this.usuarios.slice();
  }

  eliminarUsuario(id: number){
    this.usuarios.splice(id, 1);
  }
}
