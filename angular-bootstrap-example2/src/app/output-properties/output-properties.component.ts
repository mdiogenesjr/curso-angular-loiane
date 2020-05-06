import { Component, OnInit, Input , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor=0;
 
  @Output() mudouValor= new EventEmitter();

  @ViewChild('campoinput', {static: false}) campoValorInput: ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    //this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
