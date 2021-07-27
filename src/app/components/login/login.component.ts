import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) 
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
    }else{
      //Login But Notification
    }
  }

}
