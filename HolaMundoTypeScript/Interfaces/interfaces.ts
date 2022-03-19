interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string; 
}

let usuario1:Usuario= {nombreUsuario:"Juan",password:"1234"};
let usuario2:Usuario= {nombreUsuario:"Juan",password:"1234",confirmarPassword:"1234"};

console.log(usuario1);
console.log(usuario2.nombreUsuario);

interface Abordar{
    abordarTransporte():void;
}
let avion:Abordar={ abordarTransporte:function(){
    console.log("abordando");
}}

avion.abordarTransporte();

interface Compra{
    IDProducto:string;
    cantidad:number;
    valor:number;
    getHour():any;
}

let compra:Compra={
    getHour:function() {
        console.log(new Date());
    },
    IDProducto:"37R4578",
    cantidad:2,
    valor:10.5

}

compra.getHour();