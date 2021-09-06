import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerguntasService } from 'src/app/services/perguntas.service';

@Component({
  selector: 'app-criar-quiz',
  templateUrl: './criar-quiz.component.html',
  styleUrls: ['./criar-quiz.component.css']
})
export class CriarQuizComponent implements OnInit {
  objecto: any;

  form: FormGroup;

  floatLabelControl = new FormControl('1');

  categoria: any[] = [
    { value: '1', viewValue: 'CONDUÇÃO' },
    { value: '2', viewValue: 'MECANICA' }
  ];

  constructor(fb: FormBuilder, private _pergunta: PerguntasService, private router: Router) {
    this.form = fb.group({
      floatLabel: this.floatLabelControl,
      categoria: ['', Validators.required],
      pergunta: ['', Validators.required],
      avatar: ['', Validators.required],

      /*  */
      opcao1: ['', Validators.required],
      //avatar1: ['', Validators.required],
      status1: ['', Validators.required],
      /*  */
      //avatar2: ['', Validators.required],
      opcao2: ['', Validators.required],
      status2: ['', Validators.required],
      /*  */
      //avatar3: ['', Validators.required],
      opcao3: ['', Validators.required],
      status3: ['', Validators.required],
      /*  */
      //avatar4: ['', Validators.required],
      opcao4: ['', Validators.required],
      status4: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  validar() { 
    this.objecto = {
      categoria: this.form.value.categoria,
      pergunta: this.form.value.pergunta,
      avatar: this.form.value.avatar,

      opcao1: this.form.value.opcao1,
      //avatar1: this.form.value.avatar1,
      status1: 1,//this.form.value.status1,

      opcao2: this.form.value.opcao2,
      //avatar2: this.form.value.avatar2,
      status2: 1,//this.form.value.status2,

      opcao3: this.form.value.opcao3,
      //avatar3: this.form.value.avatar3,
      status3: 1,//this.form.value.status3,

      opcao4: this.form.value.opcao4,
      //avatar4: this.form.value.avatar4,
      status4: 1,//this.form.value.status4,
    }

    console.log(this._pergunta.salvarPerguntas(this.objecto).subscribe());

    this.router.navigate(['dashboard'])
  }

}
