class DateHelper{

    dataParaTexto(data) {

        return data.getDate()
        + '/' + (data.getMonth() +1)
        + '/' + data.getFullYear();
    }


    textoParaData(texto) {

        return new Date(...texto.split('-')
        .map(function(item, indice){
            if(indice == 1){
                return item - 1;
            }
            return item;
        }));
    }


}