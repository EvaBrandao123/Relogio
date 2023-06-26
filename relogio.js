function clock(){

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s =new Date().getUTCSeconds();
    var am = h >= 12 ? "PM" : "AM";
    var ampm= document.getElementById("periodo").innerHTML=am;


    h = (h < 10 ) ? "0" + h : h;
    m = (m < 10 ) ? "0" + m  : m;
    s = (s < 10 ) ? "0" + s : s;



    var hora=document.getElementById("hora").innerHTML=h;
    var minutos=document.getElementById("minutos").innerHTML=m;
    var segundo=document.getElementById("segundos").innerHTML=s;
    


   }
var interval=setInterval(clock,1000);