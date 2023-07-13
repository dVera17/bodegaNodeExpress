var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
import { MaxLength } from "class-validator";
export default class productos {
    constructor(nombre, descripcion, estado, created_by, update_by) {
        this.name = nombre;
        this.description = descripcion;
        this.status = estado;
        this.createdBy = created_by;
        this.updateBy = update_by;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "El dato ingresado en nombre es incorrecto" };
    }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El nombre excede el limite de caracteres' }; } }),
    __metadata("design:type", String)
], productos.prototype, "name", void 0);
__decorate([
    Expose({ name: "descripcion" }),
    Transform(({ value }) => {
        if (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "El dato ingresado en nombre es incorrecto" };
    }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El nombre excede el limite de caracteres' }; } }),
    __metadata("design:type", String)
], productos.prototype, "description", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined)
            return Number(value);
        else
            throw { status: 401, message: "El dato que esta tratando de ingresar en estado es invalido" };
    }),
    MaxLength(4, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }; } }),
    __metadata("design:type", Number)
], productos.prototype, "status", void 0);
__decorate([
    Expose({ name: "created_by" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || value === null)
            return value;
        else
            throw { status: 400, message: 'El dato ingresado en created_by es incorrecto' };
    }),
    __metadata("design:type", Number)
], productos.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: "update_by" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || value === null)
            return value;
        else
            throw { status: 400, message: 'El dato ingresado en updated_by es incorrecto' };
    }),
    __metadata("design:type", Number)
], productos.prototype, "updateBy", void 0);
