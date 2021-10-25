import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

   articulos:Articulo[];

  constructor(private activateRoute: ActivatedRoute,
              private articuloService: ArticuloService) { }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe((articulo : any) =>{
       this.articulos = articulo;
    });
  }

}
