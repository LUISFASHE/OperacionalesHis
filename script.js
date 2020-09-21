
function open_reports() {
    
    var microred = document.getElementById("micro");
    var mic = microred.options[microred.selectedIndex].value;


    var ipress = document.getElementById("eess");
    var ess = ipress.options[ipress.selectedIndex].value;

    var meses = document.getElementById("mes");
    var mes = meses.options[meses.selectedIndex].value;
    var popUp;
    if (mes === "") { alert("Ingrese Mes"); }

    
       
           
            if (document.getElementById("adultomayor").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportAdultoMayor"; }
            if (document.getElementById("cancer").checked) {popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportCancer"; }
            if (document.getElementById("esni").checked) {popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportEsni"; }
            if (document.getElementById("atenciones").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportGeneraAtcyAtd"; }
            if (document.getElementById("joven").checked) {popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportJoven"; }
            if (document.getElementById("morbilidad").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportGeneralMorbilidad"; }
            if (document.getElementById("materno").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportMaterno"; }
                                                                     
            if (document.getElementById("nino").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportNino"; }
            if (document.getElementById("notransmisibles").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportNoTrasmisible"; }
            if (document.getElementById("nutricion").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportNutricion"; }
            if (document.getElementById("plani").checked) {popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportPlanificacionFamiliar"; }
            if (document.getElementById("mental").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportSaludMental"; }
            if (document.getElementById("tbc").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportTBC"; }
            if (document.getElementById("vih").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportVIH"; }
            if (document.getElementById("adulto").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportAdulto"; }
            if (document.getElementById("adolescente").checked) {popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportAdolescente"; }
            if (document.getElementById("bucal").checked) {popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportSaludBucal"; }
            if (document.getElementById("familiar").checked) { popUp="https://webapp.minsa.gob.pe/reporthisdw/reportdw.aspx?pReporte=17-02-" + mic + "-" + ess + "---2020-" + mes + "-reportSaludFamiliar"; }

           
             document.getElementById('miframe').src = popUp;
            
           
    
   

}


function open_vacunas() 
{
var microred = document.getElementById("micro");
var mic = microred.options[microred.selectedIndex].value;


var ipress = document.getElementById("eess");
var ess = ipress.options[ipress.selectedIndex].value;

var meses = document.getElementById("mes");
var mes = meses.options[meses.selectedIndex].value;



var inicio = prompt("Dia de Inicio");
var fin=prompt("Dia Fin")

popUp = "https://wsalud.minsa.gob.pe/reporteshis/Inmunizaciones/Vacunados.aspx?parametro=112-17-02-" + mic + "-" + ess + "-0-" + inicio + "/" + mes + "/2020-" + fin + "/" + mes + "/2020";
document.getElementById('miframe').src = popUp;


}
function open_personal()
{
document.getElementById('miframe').src ="";
let f=new Date();
var microred = document.getElementById("micro");
var mic = microred.options[microred.selectedIndex].value;


var ipress = document.getElementById("eess");
var ess = ipress.options[ipress.selectedIndex].value;

var meses = document.getElementById("mes");
var mes = meses.options[meses.selectedIndex].value;
var variable = '';
if (mes === "") { alert("Ingrese Mes"); }
else {
    // var inicio = prompt("Dia de Inicio");
    // var fin = prompt("Dia Fin")
    if (mic === "00") { variable = "892"; }
    if (mic === "01") { variable = "605"; }
    if (mic === "02") { variable = "893"; }
    if (mic === "03") { variable = "897"; }
    if (mic === "04") { variable = "898"; }
    if (mic === "05") { variable = "896"; }
    if (mic === "06") { variable = "1049"; }
    if (mic === "07") { variable = "894"; }
    if (mic === "08") { variable = "895" };
    //var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/NominalTramaTodo.aspx?parametro=7-17-02-" + mic + "--" + variable + "-2020" + mes + "" + inicio + "-2020" + mes + "" + fin + "";
    var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/ExportarMaestroPersonal.aspx?parametro="+variable+"-17-02-"+mic+"-2020"+mes+"0"+f.getDate()+"-2020"+mes+"0"+f.getDate()+"-";
    document.getElementById('miframe').src = popUp;
    document.getElementById('descripcion').textContent="Maestro_Personal";
    //window.open("https://wsalud.minsa.gob.pe/reporteshis/his/ExportarMaestroPersonal.aspx?parametro="+variable+"-17-02-"+mic+"-2020"+mes+"0"+f.getDate()+"-2020"+mes+"0"+f.getDate()+"-");
}
}


function open_registrador()
{
document.getElementById('miframe').src ="blank.html";
let f=new Date();
var microred = document.getElementById("micro");
var mic = microred.options[microred.selectedIndex].value;


var ipress = document.getElementById("eess");
var ess = ipress.options[ipress.selectedIndex].value;

var meses = document.getElementById("mes");
var mes = meses.options[meses.selectedIndex].value;
var variable = '';
if (mes === "") { alert("Ingrese Mes"); }
else {
    // var inicio = prompt("Dia de Inicio");
    // var fin = prompt("Dia Fin")
    if (mic === "00") { variable = "892"; }
    if (mic === "01") { variable = "605"; }
    if (mic === "02") { variable = "893"; }
    if (mic === "03") { variable = "897"; }
    if (mic === "04") { variable = "898"; }
    if (mic === "05") { variable = "896"; }
    if (mic === "06") { variable = "1049"; }
    if (mic === "07") { variable = "894"; }
    if (mic === "08") { variable = "895" };
    //var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/NominalTramaTodo.aspx?parametro=7-17-02-" + mic + "--" + variable + "-2020" + mes + "" + inicio + "-2020" + mes + "" + fin + "";
    var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/ExportarMaestroRegistrador.aspx?parametro="+variable+"-17-02-"+mic+"-2020"+mes+"0"+f.getDate()+"-2020"+mes+"0"+f.getDate()+"-";
    document.getElementById('miframe').src = popUp;
    document.getElementById('descripcion').textContent="Maestro_Registrador";
   
}
}

function open_paciente()
{

document.getElementById('miframe').src="";
let f=new Date();
var microred = document.getElementById("micro");
var mic = microred.options[microred.selectedIndex].value;


var ipress = document.getElementById("eess");
var ess = ipress.options[ipress.selectedIndex].value;

var meses = document.getElementById("mes");
var mes = meses.options[meses.selectedIndex].value;
var variable = '';
if (mes === "") { alert("Ingrese Mes"); }
else {
    // var inicio = prompt("Dia de Inicio");
    // var fin = prompt("Dia Fin")
    if (mic === "00") { variable = "892"; }
    if (mic === "01") { variable = "605"; }
    if (mic === "02") { variable = "893"; }
    if (mic === "03") { variable = "897"; }
    if (mic === "04") { variable = "898"; }
    if (mic === "05") { variable = "896"; }
    if (mic === "06") { variable = "1049"; }
    if (mic === "07") { variable = "894"; }
    if (mic === "08") { variable = "895" };
    //var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/NominalTramaTodo.aspx?parametro=7-17-02-" + mic + "--" + variable + "-2020" + mes + "" + inicio + "-2020" + mes + "" + fin + "";
    var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/ExportarMaestroPaciente.aspx?parametro="+variable+"-17-02-"+mic+"-2020"+mes+"0"+f.getDate()+"-2020"+mes+"0"+f.getDate()+"-";
    document.getElementById('miframe').src = popUp;
    document.getElementById('descripcion').textContent="Maestro_Paciente";
}
}










function open_archivo_plano()
{
document.getElementById('miframe').src ="";
var microred = document.getElementById("micro");
var mic = microred.options[microred.selectedIndex].value;


var ipress = document.getElementById("eess");
var ess = ipress.options[ipress.selectedIndex].value;

var meses = document.getElementById("mes");
var mes = meses.options[meses.selectedIndex].value;
var variable='';
if (mes === "") { alert("Ingrese Mes"); }
else {
    var inicio = prompt("Dia de Inicio");
    var fin = prompt("Dia Fin");
    if (mic === "00") { variable = "892"; }
    if (mic === "01") { variable = "605"; }
    if (mic === "02") { variable = "893"; }
    if (mic === "03") { variable = "897"; }
    if (mic === "04") { variable = "898"; }
    if (mic === "05") { variable = "896"; }
    if (mic === "06") { variable = "1049"; }
    if (mic === "07") { variable = "894"; }
    if (mic === "08") { variable = "895" };
    var popUp = "https://wsalud.minsa.gob.pe/reporteshis/his/NominalTramaNuevo.aspx?parametro=7-17-02-"+mic+"--"+variable+"-2020"+mes+""+inicio+"-2020"+mes+""+fin+"";
    document.getElementById('miframe').src = popUp;
    document.getElementById('descripcion').textContent="Maestro_Nominal_Trama_Nuevo";
}
}



var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
var d = new Date();

if (d.getMonth() === 0) { document.ready = document.getElementById("mes").value = "01"; }
if (d.getMonth() === 1) { document.ready = document.getElementById("mes").value = "02"; }
if (d.getMonth() === 2) { document.ready = document.getElementById("mes").value = "03"; }
if (d.getMonth() === 3) { document.ready = document.getElementById("mes").value = "04"; }
if (d.getMonth() === 4) { document.ready = document.getElementById("mes").value = "05"; }
if (d.getMonth() === 5) { document.ready = document.getElementById("mes").value = "06"; }
if (d.getMonth() === 6) { document.ready = document.getElementById("mes").value = "07"; }
if (d.getMonth() === 7) { document.ready = document.getElementById("mes").value = "08"; }
if (d.getMonth() === 8) { document.ready = document.getElementById("mes").value = "09"; }
if (d.getMonth() === 9) { document.ready = document.getElementById("mes").value = "10"; }
if (d.getMonth() === 10){ document.ready = document.getElementById("mes").value = "11"; }
if (d.getMonth() === 11){ document.ready = document.getElementById("mes").value = "12"; }


$("#reporte").on('click',function(){

    if ($('.custom-control-input').is(':checked')==false) {
        alert('Seleccione Algun Reporte');
    }

});
var options = {
    "": [""],
    "00": ["","365-Hospital"],
    "01": ["","367-Ataura", "368-Huertas", "369-Paca", "370-Canchapunco", "371-Paccha Miraflores", "372-Masajcancha", "373-Patacancha", "376-Sausa", "377-Yauyos", "378-Huancas"],
    "02": ["","379-Acolla", "380-El Tingo", "381-Sacas", "382-Yanamarca", "383-Pachascucho", "384-Tingo Paccha", "385-Marco", "386-Yanacancha", "388-Pomacancha", "389-Armonia", "11899-Casablanca", "391-Tunanmarca", "11256-(6874-Chuquishuari)"],
    "03": ["","374-Parco", "375-Ullusca", "424-Canchayllo","425-El Rosario","426-Janjaillo","427-Llocllapampa","428-Matachico"],
    "04": ["","429-Chacapalpa", "430-HuayHuay", "431-Suitucancha","559-Oroya","560-Huaynacancha","561-Marcapomacocha","562-San Francisco de Yantac","563-Morococha","564-Paccha la Oroya","566-Santa Rosa de Sacco","567-Yauli la Oroya","31141-Juan Pablo II","31140-San Francisco de Asis de Pucara","31247-Huari"],
    "05": ["","409-Apata", "410-Nueva Esperanza", "411-San Jose", "412-Chicche", "413-Paucar", "414-El Mantaro", "415-Huamali", "416-San Lorenzo"],
    "06": ["","393-Julcan", "394-Masma", "395-Masma Chicche", "397-Molinos", "398-Quero", "399-Curimarca"],
    "07": ["","400-Huaripampa", "401-Huancani", "402-Muqui","403-Muquiyauyo","404-Sincos","405-Llacuaripampa","406-Aramachay","407-Sallahuachac","408-Chalchuas"],
    "08": ["","417-Pancan", "418-Huasquicha", "419-Ricran","421-Apaycancha","422-San Pedro de Chunan","423-Yauli-Jauja"],
    
}

$(function () {
    var fillSecondary = function () {
        var arreglo = [];
        var selected = $('#micro').val();
        $('#eess').empty();
        options[selected].forEach(function (element, index) {
        arreglo=element.split("-");
        $('#eess').append('<option value="' + arreglo[0] + '">' + element+ '</option>');
        });
    }
    $('#micro').change(fillSecondary);
    fillSecondary();
});

document.oncontextmenu = function(){return false}
