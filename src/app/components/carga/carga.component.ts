import { Component, OnInit } from '@angular/core';
import { BypassType } from '@angular/core/src/sanitization/bypass';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  forma:FormGroup;
  articulo:Articulo;
  image:any;
  
  constructor(private articuloService: ArticuloService,
              private fb: FormBuilder) {
                this.crearFormulario();
                this.cargarDataAlFormulario();
               }



  ngOnInit() {
   
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get precioNoValido(){
    return this.forma.get('precio').invalid && this.forma.get('precio').touched
  }
  get categoriaNoValido(){
    return this.forma.get('categoria').invalid && this.forma.get('categoria').touched
  }
  get imagenNoValido(){
    return this.forma.get('imagen').invalid && this.forma.get('imagen').touched
  }
  get descripcionNoValido(){
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched
  }

  crearFormulario(){
    this.forma = this.fb.group({
       nombre:['', [Validators.required, Validators.minLength(3)]],
       precio:['', Validators.required],
       categoria:['', Validators.required], 
       imagen:['', Validators.required], 
       descripcion:['', Validators.required], 
      });
   }

   cargarDataAlFormulario(){
    //this.forma.setValue({
       this.forma.reset({
      nombre: '',
      precio: '',
      categoria:'',
      imagen:'',
      descripcion:'',
    });
  }

  cargarImagen(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result;
    }
}


  guardar(){
    console.log(this.forma.value);
    console.log(this.forma.value.categoria);
    if ( this.forma.invalid ) {
      return Object.values(this.forma.controls).forEach(control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( ctrl => ctrl.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }else{
      this.articulo ={
        nombre:this.forma.value.nombre,
        precio:this.forma.value.precio,
        categoria:this.forma.value.categoria,
        imagen:this.image,
        descripcion:this.forma.value.descripcion,
      };
      this.articuloService.create(this.articulo).subscribe(response => {console.log(response)});
    }
    this.forma.reset({
      nombre:'sin nombre'
    });
  }

}
