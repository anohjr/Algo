/*
    Create a function that returns the name of the winner in a fight between two fighters.
    Each fighter takes turns attacking the other and whoever kills the other first is victorious. 
    Death is defined as having health <= 0.
    Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
    Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. 
    You can mutate the Fighter objects.
    Your function also receives a third argument, a string, with the name of the fighter that attacks first.
*/

function declareWinner(fighter1, fighter2, firstAttacker) {
        let firstFighter;
        let secondFighter;
        
        if (firstAttacker === fighter1.name) {
          firstFighter = fighter1;
          secondFighter = fighter2;
        } else if (firstAttacker === fighter2.name) {
          firstFighter = fighter2;
          secondFighter = fighter1;
        }
        
        while (true) {
          secondFighter.health = secondFighter.health - firstFighter.damagePerAttack;
          if (secondFighter.health <= 0) {
            break;
          }
          firstFighter.health = firstFighter.health - secondFighter.damagePerAttack;
          if (firstFighter.health <= 0) {
            break;
          }
        }
        
        if (firstFighter.health <= 0)
            return secondFighter.name;
        else 
            return firstFighter.name;
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"));
