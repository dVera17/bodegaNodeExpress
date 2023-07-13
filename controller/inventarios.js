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
import { IsDefined, MaxLength } from "class-validator";
export default class inventarios {
    constructor(id_producto, id_bodega, cantidad) {
        this.idProducto = id_producto;
        this.idBodega = id_bodega;
        this.quantity = cantidad;
    }
}
__decorate([
    Expose({ name: "id_producto" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined)
            return Number(value);
        else
            throw { status: 401, message: "El dato que esta tratando de ingresar en id_producto es invalido" };
    }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }; } }),
    IsDefined({ message: () => { throw { status: 401, message: 'El parametro id_producto es obligatorio' }; } }),
    __metadata("design:type", Number)
], inventarios.prototype, "idProducto", void 0);
__decorate([
    Expose({ name: "id_bodega" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined)
            return Number(value);
        else
            throw { status: 401, message: "El dato que esta tratando de ingresar en id_producto es invalido" };
    }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }; } }),
    IsDefined({ message: () => { throw { status: 401, message: 'El parametro idBodega es obligatorio' }; } }),
    __metadata("design:type", Number)
], inventarios.prototype, "idBodega", void 0);
__decorate([
    Expose({ name: "cantidad" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value === 'number' && value != undefined)
            return Number(value);
        else
            throw { status: 401, message: "El dato que esta tratando de ingresar en id_producto es invalido" };
    }),
    MaxLength(11, { message: () => { throw { status: 400, message: 'El dato ingresado excede el limite de caracteres' }; } }),
    IsDefined({ message: () => { throw { status: 401, message: 'El parametro quantity es obligatorio' }; } }),
    __metadata("design:type", Number)
], inventarios.prototype, "quantity", void 0);
