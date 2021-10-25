import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { LoginComponent } from './components/modals/login.component';
import { RegistroComponent } from './components/modals/registro.component';
import { RouterModule } from '@angular/router';

//importar rutas
import { ROUTES } from './app.routes';
import { CarroComponent } from './components/carro/carro.component';
import { CargaComponent } from './components/carga/carga.component';
import { StockComponent } from './components/stock/stock.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ComprasComponent } from './components/compras/compras.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockEdicionComponent } from './components/stock/stock-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticulosComponent,
    LoginComponent,
    RegistroComponent,
    CarroComponent,
    CargaComponent,
    StockComponent,
    VentasComponent,
    ComprasComponent,
    StockEdicionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
