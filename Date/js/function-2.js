function CantidadDiasCatar2022(fechaActual) {

    let fechaCatar2022, diferencia, dias;
    
    fechaActual = new Date();
    fechaCatar2022 = new Date('Dicember 18, 2022');
  
    diferencia = fechaActual.getTime() - fechaCatar2022.getTime();
    dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    return dias;
  }