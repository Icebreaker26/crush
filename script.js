
function nombre()
{

  var texto = document.getElementById("cajanombre").value;

  aleatorio = Math.floor(Math.random() * (20 - 1)) + 1;

  console.log(aleatorio);
  console.log(texto)
;  if (aleatorio <=10){

alert("No le gustas" +" "+ texto +" "+ ":(");


};

  if (aleatorio >10){

alert("¡¡¡LE GUSTAS!!!" +" " +  texto + " " + ";)");


};



}
