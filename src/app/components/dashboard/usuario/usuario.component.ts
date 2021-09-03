import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  displayedColumns: string[] = ['id', 'nome', 'apelido', 'sexo', 'opcao'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.carregarUsuario();
  }

  carregarUsuario() {
    this._usuarioService.getUsuario().subscribe((usuario) => {

      this.listUsuarios = usuario;
      //console.log(this.listUsuarios);
      this.dataSource = new MatTableDataSource(usuario);

      this.dataSource.paginator = this.paginator;
    });

  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  eliminar(id: number) {
    //console.log(id);
    this._snackBar.open('Eliminado com Sucesso', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    this._usuarioService.eliminarUsuario(id);
    this.carregarUsuario();
  }

}
