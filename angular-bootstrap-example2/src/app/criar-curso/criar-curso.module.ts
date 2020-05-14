import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCursoComponent } from './criar-curso.component';



@NgModule({
  declarations: [CriarCursoComponent],
  exports:[CriarCursoComponent],
  imports: [
    CommonModule
  ]
})
export class CriarCursoModule { }
