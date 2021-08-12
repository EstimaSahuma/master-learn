import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SharedModule } from '../shared/shared.module';
import { CriarComponent } from './usuario/criar/criar.component';
import { CriarQuizComponent } from './reportes/criar-quiz/criar-quiz.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, NavbarComponent, UsuarioComponent, ReportesComponent, CriarComponent, CriarQuizComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
