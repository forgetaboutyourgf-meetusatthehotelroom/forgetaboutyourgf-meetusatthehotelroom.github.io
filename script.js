
var fsize = 16;
window.onload =  function() {script()}

window.onscroll = function() {shrink()}
function shrink(){
  fsize = fsize + 0.01;
  document.getElementById("text").style["fontSize"] = fsize+"px" ;
}

function script(){

for (let step = 1; step < 6; step++) {
   document.getElementById("t"+step).style["fontSize"] = 27+"px" ;}
  var num = 1;

 
 window.setInterval(function () {
 
      if(num=== 1){
   document.getElementById("t1").innerHTML= '<a href="text1.html">Nike Hartmond</a>    <a class="hide">  ☞ 🂡 </a>' };
    if(num=== 2){
   document.getElementById("t2").innerHTML= '<a href="text2.html">Lisa-Marie Wordcel</a>    <a class="hide">  ☞ 🂡 </a>' };
    if(num=== 3){
   document.getElementById("t3").innerHTML= '<a href="text3.html">Baesic Tran</a>    <a class="hide">  ☞ 🂡 </a>' };
      if(num=== 4){
   document.getElementById("t4").innerHTML= '<a href="text4.html">Alexandra Corodan</a>    <a class="hide">  ☞ 🂡 </a>' };
       if(num=== 5){
   document.getElementById("t5").innerHTML= '<a href="text5.html">Marlene Stahl</a>    <a class="hide">  ☞ 🂡 </a>' };
   // increase by num 1, reset to 0 at 4
        num = (num + 1) % 6;
    
  
var myDiv= document.getElementById("t"+num);
var content=  myDiv.innerHTML;
    console.log(content);
        // -600 * 1 = -600, -600 * 2 = -1200, etc 
       myDiv.innerHTML= '☞'+myDiv.innerHTML; 
    }, 800); // repeat forever, polling every 3 seconds
  
 
}
 

 

  