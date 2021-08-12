import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Perguntas } from 'src/app/interface/pergunta';
import { PerguntasService } from 'src/app/services/perguntas.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  listPerguntas: Perguntas[] = [];
  displayedColumns: string[] = ['id', 'Pergunta', 'Categoria', 'Opção Correcta', 'opcao'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _perguntaService: PerguntasService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.carregarPerguntas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  carregarPerguntas(){
    this.listPerguntas = this._perguntaService.getPerguntas();
    this.dataSource = new MatTableDataSource(this.listPerguntas);
  }

  eliminar(id: number) {
    //console.log(id);
    this._snackBar.open('Eliminado com Sucesso', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    this._perguntaService.eliminarPergunta(id);
    this.carregarPerguntas();
  }

}
