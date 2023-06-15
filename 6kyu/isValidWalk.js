/* 
    Vous vivez dans la ville de Cartesia où toutes les routes sont tracées dans un quadrillage parfait. 
    Vous êtes arrivé dix minutes trop tôt à un rendez-vous, vous avez donc décidé d'en profiter pour faire une petite promenade. 
    La ville fournit à ses citoyens une application de génération de marche sur leurs téléphones. 
    Chaque fois que vous appuyez sur le bouton, elle vous envoie un tableau de chaînes d'une lettre représentant les directions à suivre (par exemple, ['n', 's', 'w', 'e']). 
    Vous ne marchez toujours qu'un seul pâté de maisons pour chaque lettre (direction) et vous savez qu'il vous faut une minute pour traverser un pâté de maisons,
    alors créez une fonction qui renverra vrai si la marche que l'application vous donne vous prendra exactement dix minutes (vous ne voulez pas être en avance ou en retard !) 
    et vous ramènera, bien sûr, à votre point de départ. Renvoie faux sinon.
*/

// -> vérifier si la taille du tableau = 10
// -> vérifier s'il y a autant de directions contraires : ex S/N  W/E
function isValidWalk (walk) {
    let countN = 0;
    let countS = 0;
    let countE = 0;
    let countW = 0;
    if (walk.length === 10) {
        for (let i = 0 ; i < walk.length ; i++) {
            if (walk[i] === "n")
                countN ++;
            if (walk[i] === "s")
                countS ++;
            if (walk[i] === "e")
                countE ++;
            if (walk[i] == "w")
                countW ++;
        }
        if (countN === countS && countE === countW)
            return true
        else 
            return false
        
    }
    else 
        return false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// -> should return : true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// -> should return : false
console.log(isValidWalk(['w']));
// -> should return : false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
// -> should return : false
