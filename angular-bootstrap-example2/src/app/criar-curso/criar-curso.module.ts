import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoComponent } from '../receber-curso/receber-curso.component';



@NgModule({
  declarations: [CriarCursoComponent,
    ReceberCursoComponent],
  exports:[CriarCursoComponent],
  imports: [
    CommonModule
  ]
})
export class CriarCursoModule { }
