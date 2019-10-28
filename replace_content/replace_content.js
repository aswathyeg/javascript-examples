function changeText(){
var paragraph=document.getElementsByTagName("p");
var newcontent=paragraph[0].innerHTML="NewText 1";
var newcontent=paragraph[1].innerHTML="NewText 2";

}
function newParagraph(){
var element=document.createElement("p");
var main=document.getElementById("main");
main.appendChild(element);
var text=document.createTextNode("This is a 3 in 1 program.First is replacement of text.second is creation of new element & third is removal of elements");
element.appendChild(text);
}
function removeParagraph(){
var elementP=document.getElementsByTagName("p")[2];
var parent=elementP.parentNode;
parent.removeChild(elementP);
}