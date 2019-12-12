import IMask from "imask";

var element = document.getElementById("userPhone");
var maskOptions = {
  mask: '+{375}(00)000-00-00'
};
var mask = IMask(element, maskOptions);