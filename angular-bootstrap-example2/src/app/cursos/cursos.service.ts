import { Injectable, EventEmitter } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class CursosService {

  cursos: string[] = ['java','kotlin'];
  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  constructor() { }

  getCursos(){
    return this.cursos;
  }

  addCursos(curso:string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
