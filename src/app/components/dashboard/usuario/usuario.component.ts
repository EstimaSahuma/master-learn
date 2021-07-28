import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';


const ELEMENT_DATA: Usuario[] = [
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

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'apelido', 'sexo', 'opcao'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
