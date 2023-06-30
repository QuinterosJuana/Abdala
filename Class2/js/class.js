class CEmpleado{

    constructor(nombre, AnioDeIngreso, salario, direccion){

        this.nombre = nombre;
        this.AnioDeIngreso = AnioDeIngreso;
        this.salario = salario;
        this.direccion = direccion;
    }
    MostrarEmpleado(){
        document.write("Nombre "+" Año de Ingreso "+" Salario "+" Direccion ");
        document.write("<br>"+this.nombre + "  " + this.AnioDeIngreso +  "  " + this.salario +  "  " + this.direccion);
    }
}