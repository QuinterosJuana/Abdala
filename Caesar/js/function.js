function ConvertirFrase(frase, numero){
     
    let alf = 'abcdefghijklmnñopqrstuvwxyz|ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let copia = '';
    let num=0;
    for (let i = 0; i < frase.length; i++){
        for(let j = 0; j < alf.length; j++){

            if (frase[i] == alf[j]){
                num=j;
                for(let x = 0; x < numero; x++){
                    num++;
                    if (num == 27){
                        num = 0;
                    }
                    if(num == 55){
                        num = 28;
                    }
                }
                copia = copia + alf[num];
            }
            
            }
        }

        document.write(copia);
    }