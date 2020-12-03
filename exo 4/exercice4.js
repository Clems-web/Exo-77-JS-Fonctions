/* Ecrire ci dessous une fonction permettant d'ajouter du texte dans le div appelé container */

function addText(texte) {
    let div1 = document.getElementById("container");
    div1.innerHTML = texte;
    return texte;
}

/* Appeler la fonction */

addText("banque");



