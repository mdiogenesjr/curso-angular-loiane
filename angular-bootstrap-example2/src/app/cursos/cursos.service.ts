import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: string[] = ['java','kotlin'];

  constructor() { }

  getCursos(){
    return this.cursos;
  }

  addCursos(curso:string){
    this.cursos.push(curso);
  }
}
