function Buy(){
    
    var nom=document.getElementById('N').value;
    var adresse=document.getElementById('A').value;
    if(nom.length<=0){alert('Enter Le Nom');return false}
    if(adresse.length<=0){alert('Enter Le Adresse');return false}
    var a=document.getElementById("list").value;
    if ((a!=3.500)   ||   (a!=4.500)|| (a!=6.900)){
        alert("Veuillez Choisir Un Plat Et Merci");
        return false;
    }
}
function reset(){
    document.getElementById("pla").reset();
}