function doGet() {
    var html = HtmlService.createTemplateFromFile("index");
    return html.evaluate();
}
function doPost(pd){
    var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var time = new Date();
    var maker = pd.parameters.maker.toString();
    var dresser = pd.parameters.dresser.toString();
    var number = pd.parameters.number.toString();
    var hrc1 = pd.parameters.hrc1.toString();
    var hrc2 = pd.parameters.hrc2.toString();
    var hrc3 = pd.parameters.hrc3.toString();
    var hrc4 = pd.parameters.hrc4.toString();
    var hrc5 = pd.parameters.hrc5.toString();
    sh.appendRow([time,dresser,maker,number,hrc1,hrc2,hrc3,hrc4,hrc5]);
    var resultpage=HtmlService.createTemplateFromFile("result");
    return resultpage.evaluate();
}
