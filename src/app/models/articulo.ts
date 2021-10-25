
export class Articulo {
    public id?: number;
    public nombre: string;
    public precio: number;
    public descripcion: string;
    public categoria: string;
    public fechaCarga?: Date;
    public fechaActualzacion?:Date;
    public imagen:ArrayBuffer;
}