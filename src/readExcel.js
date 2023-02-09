var xlsx=require('xlsx');
var fs=require('fs');
var dataPathExcel='data.xlsx';
var wb=xlsx.readFile(dataPathExcel);
for(let i=0;i<wb.SheetNames.length;i++)
{
    var sheetName=wb.SheetNames[i];
    var sheetValue=wb.Sheets[sheetName];
    var excelData=xlsx.utils.sheet_to_json(sheetValue);
    // console.log(excelData);
    fs.writeFile("excelToJsonSheet"+i+".json",JSON.stringify(excelData),function(err)
    {
        // console.log("Json file is created");
    })
}
