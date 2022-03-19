"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    //metodos estaticos
    static getNumber() {
        return 25;
    }
}
let persona1 = new Persona("Mari");
console.log(persona1.getNombre());
console.log(Persona.getNumber());
