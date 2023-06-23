function CantidadDeAniosCompletos(inicio, fin) {

    let completo, inicioCumplido

    completo = fin.getFullYear() - inicio.getFullYear();
    inicioCumplido = new Date(inicio.getFullYear() + completo, inicio.getMonth(), inicio.getDate());
  
    if (inicioCumplido > fin) {
      completo --;
    }
  
    return completo;
  }