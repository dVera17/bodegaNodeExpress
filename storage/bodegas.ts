import { Type, Transform, Expose } from "class-transformer";
import { MaxLength } from "class-validator";

export class bodegas {
    @Expose({name: "nombre"})
    @Transform(({value}) => {
        if (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(value)) return value;
        else throw {status: 400, message: "El dato ingresado en nombre es incorrecto"};
    })
    @MaxLength(255, { message: () => { throw { status: 400, message: 'El nombre excede el limite de caracteres' }}})  
    name: string
    @Expose({name: "id_responsable"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined) return Number(value);
        else throw {status: 401, message: "El dato que esta tratando de ingresar en id_responsable es invalido"};
    })
    idResponsable: number
    @Expose({name: "estado"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined) return Number(value);
        else throw {status: 401, message: "El dato que esta tratando de ingresar en id_responsable es invalido"};
    })
    @MaxLength(4, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }}})
    status: number
    @Expose({name: "created_by"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) || value === null) return value;
        else throw { status: 400, message: 'El dato ingresado en created_by es incorrecto'};
    })
    createdBy: number
    @Expose({name: "update_by"})
    @Transform(({value}) => {
        if (/^[0-9]+$/.test(value) || value === null) return value;
        else throw { status: 400, message: 'El dato ingresado en updated_by es incorrecto'};
    })
    updatesBy: number

    constructor(nombre: string, id_responsable: number, estado: number, created_by: number, update_by: number){
        this.name = nombre;
        this.idResponsable = id_responsable;
        this.status = estado;
        this.createdBy = created_by;
        this.updatesBy = update_by;
    }
}