/* 
    Un magasin souhaite offrir une réduction sur le prix du produit le plus élevé.
    La fonction doit calculer le prix de vente total
*/

function calculateTotalPrice (ticket, discount) {
    console.log(typeof discount)
    let highestPrice;
    let highestPriceDiscount = 0;
    let totalPrice;
//  chercher le prix le plus élevé ->
if (typeof discount === "number") {
    for (let i = 0; i < ticket.length; i++) {
        let comparatedPrice = ticket[i];
        if (typeof highestPrice === "undefined" || comparatedPrice > highestPrice) {
            highestPrice = comparatedPrice;
            highestPriceDiscount = (highestPrice * discount)/100;
            highestPriceIndex = i;
        }
    }
    // retirer le prix le plus élevé du ticket ->
    ticket.splice(highestPriceIndex, 1);
}

// additionner les autres prix ->
    let sumTicket = 0;
    for (let i = 0; i < ticket.length; i++) {
        sumTicket += ticket[i];
    }
// calcul du prix total
    totalPrice = sumTicket + highestPriceDiscount;
    return totalPrice;
}

console.log("total price", calculateTotalPrice([10.90, 12.30, 50.99, 30]));