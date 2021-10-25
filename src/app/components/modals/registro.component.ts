import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  @Input()
  modalValorRegistro:string;
  @Output()
  registro:EventEmitter<string> = new EventEmitter(); 

  
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  cerrar(){
    this.modalValorRegistro ="none"
    this.registro.emit(this.modalValorRegistro);
  }

}
