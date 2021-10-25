import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  
  articulos:Articulo[];
  sumTotal:number = 0;

  constructor(private articuloService:ArticuloService) { }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe((articulo : any) =>{
      this.articulos = articulo;
      this.articulos.forEach(e =>{
       this.sumTotal  += e.precio;
   });
   });
  }

  eliminar(id){
    this.articuloService.delete(id).subscribe(res =>{console.log(res)});
  }

  

}
