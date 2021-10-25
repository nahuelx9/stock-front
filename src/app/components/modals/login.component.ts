import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Input()
  modalValor:string;
  @Output()
  login:EventEmitter<string> = new EventEmitter(); 

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("llega login");
  }

  cerrar(){
    this.modalValor ="none"
    this.login.emit(this.modalValor);
  }

}
