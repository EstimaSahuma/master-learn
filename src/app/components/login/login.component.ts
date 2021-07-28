import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) 
  { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  entrar()
  {
    const usuario = this.form.value.usuario;
    const senha = this.form.value.senha;

    if(usuario == 'estima' && senha == '123')
    {
      //Redirect DashBoard
      this.fakeLoading();
    }else{
      //Login But Notification
      this.erro();
      this.form.reset();
    }
  }

  erro() {
    this._snackBar.open('Usuario e/ou Senha Invalido..!', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  fakeLoading() {
    this.loading = true;

    setTimeout(() => {
      //redirect to dashboard
      this.router.navigate(['dashboard'])
    }, 1500);
  }

}
