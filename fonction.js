
function test(){
  var pointure = document.getElementById('pointure').value;
  var annee = document.getElementById('annee').value;
  if(isNaN(pointure) || isNaN(annee)){
    return "Error";
  }
  else {
    pointure = parseFloat(pointure);
    annee = parseFloat(annee);
    var resultat = pointure * 2;
    resultat = resultat + 5;
    resultat = resultat * 50;
    resultat = resultat - annee;
    resultat = resultat + 1766;
    return resultat;
  }
}
function resultat(){
  alert(test());
}
