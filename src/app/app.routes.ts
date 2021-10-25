import {Routes} from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CargaComponent } from './components/carga/carga.component';
import { CarroComponent } from './components/carro/carro.component';
import { ComprasComponent } from './components/compras/compras.component';
import { StockEdicionComponent } from './components/stock/stock-edicion.component';
import { StockComponent } from './components/stock/stock.component';
import { VentasComponent } from './components/ventas/ventas.component';


export const ROUTES: Routes = [
    {path:"home",component: ArticulosComponent},
    {path:"carro",component: CarroComponent},
    {path:"carga",component: CargaComponent},
    {path:"stock",component: StockComponent},
    {path:"stock/editar/:id",component: StockEdicionComponent},
    {path:"ventas",component: VentasComponent},
    {path:"compras",component: ComprasComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}
    
];