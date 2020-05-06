import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding-component',
  templateUrl: './data-binding-component.component.html',
  styleUrls: ['./data-binding-component.component.css']
})
export class DataBindingComponentComponent implements OnInit {

  nomeCurso: "angular";
  valorInicial:number =  16;

  constructor() { }

  onMudouValor(evento){
    console.log(evento);
  }

  ngOnInit() {
  }

}
