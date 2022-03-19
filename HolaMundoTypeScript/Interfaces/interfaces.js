"use strict";
let usuario1 = { nombreUsuario: "Juan", password: "1234" };
let usuario2 = { nombreUsuario: "Juan", password: "1234", confirmarPassword: "1234" };
console.log(usuario1);
console.log(usuario2.nombreUsuario);
let avion = { abordarTransporte: function () {
        console.log("abordando");
    } };
avion.abordarTransporte();
let compra = {
    getHour: function () {
        console.log(new Date());
    },
    IDProducto: "37R4578",
    cantidad: 2,
    valor: 10.5
};
compra.getHour();
