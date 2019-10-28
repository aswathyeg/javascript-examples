function validateTextbox(){

var name=document.getElementById("name");
var address=document.getElementById("address");

if(name.value==""||address.value==""){
alert("You must fill Name and Address");
name.focus();
name.style.border="3px solid red";
address.focus();
address.style.border="3px solid red"; 
return false;
}
   else if(name.value.length<5){
   alert("please enter atleast 5 charecters for Name");
   name.focus();
   name.style.border="3px solid red";
   return false;
}
}