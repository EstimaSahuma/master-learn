import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {
  valor: number;
  usuario: Usuario;
  form: FormGroup;

  generos: any[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Femenino', viewValue: 'Femenino' }
  ];

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      apelido: ['', Validators.required],
      genero: ['', Validators.required],
      idade: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  validar() {
    console.log(this.form.value.nome);

    this.usuario = {
      nome: this.form.value.nome,
      apelido: this.form.value.apelido,
      genero: this.form.value.genero,
      user: 'Nao',
      idade: this.form.value.idade
    };

    //this.valor = this._usuarioService.saveUsuario(this.usuario).subscribe();
      console.log(this._usuarioService.saveUsuario(this.usuario).subscribe());/* 
      if (this._usuarioService.saveUsuario(this.usuario).subscribe()) {
        this._snackBar.open('Eliminado com Sucesso', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      } else {
        this._snackBar.open('Eliminado com Sucesso', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      } */

    this.router.navigate(['dashboard'])
  }



}
