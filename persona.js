class Persona{
    constructor(nombre,edad){
        this.nombre=nombre.toUpperCase();
        this.edad=edad;
    }
    saludo(){
        return `Hola soy ${this.nombre}y tengo ${this.edad} años`;
    }
    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
}

export {Persona}