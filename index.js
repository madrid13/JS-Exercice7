function hakabout(){
  var premier_nombre = document.getElementById("premier_nombre").value;
  var deuxieme_nombre = document.getElementById("deuxieme_nombre").value;
  if (isNaN (premier_nombre) == true ||isNaN (deuxieme_nombre)){
    alert("ceci n'est pas un hombre");
  }
else {
  premier_nombre = parseFloat(premier_nombre);
  deuxieme_nombre = parseFloat(deuxieme_nombre);
  var resultat = (premier_nombre % deuxieme_nombre);
  alert(resultat);
}
}
