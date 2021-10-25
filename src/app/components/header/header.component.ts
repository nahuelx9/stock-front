import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:string;
  registro:string;

  constructor() { }

  ngOnInit() {
  }

  obtenerValor(e){
    this.login = e;
    this.registro = e;
  }

}
