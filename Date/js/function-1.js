function CantidadDiasAnioNuevo(fechaActual) {

    let anioNuevo, diferencia, dias;

    fechaActual = new Date();
    anioNuevo = new Date(fechaActual.getFullYear() + 1, 0, 1); 
  
    diferencia = anioNuevo.getTime() - fechaActual.getTime();
    dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    return dias;
  }

 