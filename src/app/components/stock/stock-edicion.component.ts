import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Articulo } from "src/app/models/articulo";
import { ArticuloService } from "src/app/services/articulo.service";

@Component({
  selector: "app-stock-edicion",
  templateUrl: "./stock-edicion.component.html",
  styleUrls: ["./stock-edicion.component.css"],
})
export class StockEdicionComponent implements OnInit {
  forma: FormGroup;
  articulo: Articulo;
  image: any;

  constructor(
    private articuloService: ArticuloService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.crearFormulario();
  }

  ngOnInit() {
    this.getArticulo();
  }

  getArticulo(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];
      if (id) {
        this.articuloService.getArticulo(id).subscribe((articulo: any) => {
          this.articulo = articulo;
          this.forma.setValue({
            nombre: this.articulo.nombre,
            precio: this.articulo.precio,
            categoria: this.articulo.categoria,
            imagen: this.articulo.imagen,
            descripcion: this.articulo.descripcion,
          });
          console.log(this.articulo);
        });
      }
    });
  }

  get nombreNoValido() {
    return this.forma.get("nombre").invalid && this.forma.get("nombre").touched;
  }
  get precioNoValido() {
    return this.forma.get("precio").invalid && this.forma.get("precio").touched;
  }
  get categoriaNoValido() {
    return (
      this.forma.get("categoria").invalid && this.forma.get("categoria").touched
    );
  }
  get imagenNoValido() {
    return this.forma.get("imagen").invalid && this.forma.get("imagen").touched;
  }
  get descripcionNoValido() {
    return (
      this.forma.get("descripcion").invalid &&
      this.forma.get("descripcion").touched
    );
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      precio: ["", Validators.required],
      categoria: ["", Validators.required],
      imagen: ["", Validators.required],
      descripcion: ["", Validators.required],
    });
  }

  cargarImagen(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result;
      this.forma.value.imagen =  this.image;
    };
  }

  guardar() {
    console.log(this.forma.value);
    console.log(this.forma.value.categoria);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((ctrl) =>
            ctrl.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    } else {
      this.articulo.nombre = this.forma.value.nombre;
      (this.articulo.precio = this.forma.value.precio),
        (this.articulo.categoria = this.forma.value.categoria)

        if(this.forma.value.imagen !== null ){
          (this.articulo.imagen = this.forma.value.imagen)
        }
        (this.articulo.descripcion = this.forma.value.descripcion),
        console.log("id==", this.articulo.id);
        console.log("imagen==", this.image);
      this.articuloService.update(this.articulo).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
