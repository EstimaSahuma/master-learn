import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarQuizComponent } from './criar-quiz.component';

describe('CriarQuizComponent', () => {
  let component: CriarQuizComponent;
  let fixture: ComponentFixture<CriarQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
