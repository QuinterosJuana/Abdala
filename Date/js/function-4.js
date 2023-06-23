function DiaLaborable(fecha) {
    let dia;

    dia = fecha.getDay();
  
    if (dia >= 1 && dia <= 5){

        document.write('El dia '+ dia + ' es laborable');

    }
    else {

        document.write('El dia '+ dia + ' no es laborable');

    }
  }