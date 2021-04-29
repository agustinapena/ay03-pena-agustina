$(document).ready(function(){
    var boton1=$("#boton1");
    var boton2=$("#boton2");
    var boton3=$("#boton3");
    var div5=$("#div5");
    boton1.click(function(){
        $("#instagram").hide();
        $("#telefono").hide();
        $("#contacto").hide()
    });
    boton2.click(function(){
        $("#instagram").show();
        $("#telefono").show();
        $("#contacto").show();
    });
    boton3.click(function(){
        $("#titulo").text("¡BIENVENIDO!")
    });
    div5.mouseenter(function(){
        $("#div5").css("color","red")
    });
    div5.mouseleave(function(){  
    $("#div5").css("color","saddlebrown")
    });
});
