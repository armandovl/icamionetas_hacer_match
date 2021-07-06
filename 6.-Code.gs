function doGet(e) {
  var template= HtmlService.createTemplateFromFile("1.-index.html");
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); //para iframe
}

// Incluir los css y los js en hojas aparte
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}













