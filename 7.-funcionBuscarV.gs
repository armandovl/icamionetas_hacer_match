function buscarPorParametro(parametroNombre){
  var ss= SpreadsheetApp.openById("1di59Bq48WBI4Q30axH8MrciRgjusypa1kCbmdV3Mktc"); //traer la SpreadSheet por su ID
  var sheet= ss.getSheetByName("Sheet2"); // traer la hoja por su nombre
  var values= sheet.getSheetValues(1,1,sheet.getLastRow(),sheet.getLastColumn()); //traer los valores (fila, columna, alto, ancho)

  //console.log(values);

 

  for(i=0;i<=values.length-1;i++){ // ciclo for que recorre los valores
    if (parametroNombre==values[i][0]){ //busca que coincida el nombre con la columna 1

      var correoEnviar= values[i][1]; //imprime el correo
      var escolaridadEnviar=(values[i][3]);  //imprime la escolaridad
      var ciudadEnviar=values[i][4]; //imprime la ciudad
    }
  }

  return [correoEnviar,escolaridadEnviar,ciudadEnviar] ;
}