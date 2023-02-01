

function valider() {
    let mdp = document.forms[0]["mdp"].value;
    let nom = document.forms[0]["nom"].value;
    let msgErreur = document.getElementById("erreur_mdp")
    if (nom === mdp) {
        msgErreur.classList.remove("invisible")
        return false;
    } else {
        msgErreur.classList.add("invisible")
        return true;
    }

}