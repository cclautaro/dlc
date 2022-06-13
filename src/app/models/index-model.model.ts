export class IndexModel {

    cantidadDocumentos: number;
    cantidadPalabrasActualizadas: number;
    cantidadPalabrasNuevas : number;
    fecha : Date;
    id : number;
    miliSegundos: number;
    minutos: number;
    segundos : number;

    constructor(cantidadDocumentos?: number, 
        cantidadPalabrasActualizadas?: number, 
        cantidadPalabrasNuevas?: number, 
        fecha?: Date, 
        id?: number,
        milisegundos?:number,
        minutos?:number,
        segundos?:number) {
        this.cantidadDocumentos = cantidadDocumentos? cantidadDocumentos : 0;
        this.cantidadPalabrasActualizadas = cantidadPalabrasActualizadas? cantidadPalabrasActualizadas : 0;
        this.cantidadPalabrasNuevas = cantidadPalabrasNuevas? cantidadPalabrasNuevas : 0;
        this.fecha = fecha? fecha : new Date;
        this.id = id? id : 0;
        this.miliSegundos = milisegundos? milisegundos : 0;
        this.minutos = minutos? minutos : 0;
        this.segundos = segundos? segundos : 0;
    }


}
