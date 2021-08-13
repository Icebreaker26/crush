
function nombre()
{

  var texto = document.getElementById("cajanombre").value;

  aleatorio = Math.floor(Math.random() * (20 - 1)) + 1;

  console.log(aleatorio);

  if (aleatorio <=10){

alert("menor que 10");


};

  if (aleatorio >10){

alert("mayor que 10");


};



}
