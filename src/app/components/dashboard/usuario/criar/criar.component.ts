import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {
  form: FormGroup;

  generos: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'}
  ];

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      nome: ['', Validators.required],
      apelido: ['', Validators.required],
      genero: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  validar(){
    console.log(this.form);
  }

}
