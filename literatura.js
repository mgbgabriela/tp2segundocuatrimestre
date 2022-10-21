"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var bibliografia_1 = require("./bibliografia");
var Literatura = /** @class */ (function (_super) {
    __extends(Literatura, _super);
    function Literatura() {
        return _super.call(this) || this;
    }
    Literatura.prototype.asignarClasificacion = function () {
        this.numeroInv = +82;
    };
    Literatura.prototype.asignarAutor = function () {
        this.autor = "Gomez";
    };
    Literatura.prototype.asignarTitulo = function () {
        this.titulo = "Creencias";
    };
    return Literatura;
}(bibliografia_1["default"]));
exports["default"] = Literatura;
