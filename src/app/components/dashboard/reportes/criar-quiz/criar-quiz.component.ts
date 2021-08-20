import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-quiz',
  templateUrl: './criar-quiz.component.html',
  styleUrls: ['./criar-quiz.component.css']
})
export class CriarQuizComponent implements OnInit {

  formQuiz: FormGroup;

  option: FormGroup;
  floatLabelControl = new FormControl('1');

  generos: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'}
  ];

  constructor(fb: FormBuilder) {
      this.option = fb.group({
        floatLabel: this.floatLabelControl
      });
   }

  ngOnInit() {
  }

  validar() {}

}
