import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.css']
})
export class ExemplosPipeComponent implements OnInit {

  livro: any = {
    titulo : "sdfsdSDDSds sfsdfs sdf sgrwgrgvsg",
    rating : 4.5423243,
    numeroPaginas: 5,
    preco : 20.0,
    dataLancamento : new Date(2016, 5, 23)
  }; 

  livros: string[] = ['java','kotlin'];
  filtro: string;

  constructor() { }

  ngOnInit() {
  }

  obterCursos(){

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assíncrono'), 2000)
  });


}
