import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-quiz',
  templateUrl: './criar-quiz.component.html',
  styleUrls: ['./criar-quiz.component.css']
})
export class CriarQuizComponent implements OnInit {
  formQuiz: FormGroup;

  generos: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'}
  ];

  constructor() { }

  ngOnInit() {
  }

  validar() {}

}
