
function nombre()
{

  var texto = document.getElementById("cajanombre").value;

  aleatorio = Math.floor(Math.random() * (20 - 1)) + 1;

  console.log(aleatorio);
  console.log(texto);

    if (texto === "") {

      console.log(texto);
      alert("¡Hey! ¿Cual es tu nombre?");
    }

       else if (aleatorio <=10){

         alert("No le gustas" +" "+ texto +" "+ ":(");

       }

       else if (aleatorio >10){

         alert("¡¡¡LE GUSTAS!!!" +" " +  texto + " " + ";)");
       }



};


    document.getElementById("formulario").addEventListener('submit', nombre);
