class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre=nombre;
    }

    getNombre():string{
        return this.nombre;
    }


    //metodos estaticos
    static getNumber():number{
        return 25;
    }
}

let persona1 = new Persona("Mari");
console.log(persona1.getNombre())
console.log(Persona.getNumber());