import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, MaxLength } from "class-validator";

export class inventarios {
    @Expose({name: "id_producto"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined) return Number(value);
        else throw {status: 401, message: "El dato que esta tratando de ingresar en id_producto es invalido"};
    })
    @MaxLength(20, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }}})
    @IsDefined({ message: () => { throw {status: 401, message: 'El parametro id_producto es obligatorio'}}})
    idProducto: number
    @Expose({name: "id_bodega"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined) return Number(value);
        else throw {status: 401, message: "El dato que esta tratando de ingresar en id_producto es invalido"};
    })
    @MaxLength(20, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }}})
    @IsDefined({ message: () => { throw {status: 401, message: 'El parametro idBodega es obligatorio'}}})
    idBodega: number
    @Expose({name: "cantidad"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined) return Number(value);
        else throw {status: 401, message: "El dato que esta tratando de ingresar en id_producto es invalido"};
    })
    @MaxLength(11, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }}})
    @IsDefined({ message: () => { throw {status: 401, message: 'El parametro quantity es obligatorio'}}})
    quantity: number

    constructor(id_producto: number, id_bodega: number, cantidad: number){
        this.idProducto = id_producto;
        this.idBodega = id_bodega;
        this.quantity = cantidad;
    }
}