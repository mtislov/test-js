
class runGame {
    

    constructor (cards, teamA, teamB) {
        this.cards = cards;
        this.teamA = teamA;
        this.teamB = teamB;
    }

    excludeMan(team) {
        if (this.teamA.men < 7 || this.teamB.men < 7) return;
        team.men--;
    }

    giveCards() {
        this.cards.forEach( card => {
            let team = card[0] == 'A' ? this.teamA : this.teamB;
            let player = card.slice(1, -1);
            let cardColor = card.slice(-1);

            if (this.teamA.men < 7 || this.teamA.men < 7) return [this.teamA.men, this.teamB.men];
          
            if (cardColor == 'R' && !team.redCards.has(player)) {
                team.redCards.set(player, 1);
                this.excludeMan(team);
            }

            if (cardColor == 'Y' && !team.redCards.has(player)) {

                if (!team.yellowCards.has(player)) {
                    team.yellowCards.set(player, 1);

                } else if (team.yellowCards.get(player) != "excluded" ) {
                    team.yellowCards.set(player, 'excluded')
                    this.excludeMan(team);
                }
            } 
        })
        return [this.teamA.men, this.teamB.men , this];
    }

}



function menStillStanding(cards) {

    if (!cards[0]) return [11, 11];

    let teamA = {
        redCards: new Map(),
        yellowCards: new Map(),
        men: 11,
    }

    let teamB = {
        redCards: new Map(),
        yellowCards: new Map(),
        men: 11,
    }


    let game = new runGame(cards, teamA, teamB);

    return game.giveCards();
}
  
  

console.log( menStillStanding([ 'B3Y',
  'A2Y',
  'B11Y',
  'A5Y',
  'B9Y',
  'B6Y',
  'A11Y',
  'A10Y',
  'A8Y',
  'B11R',
  'B7Y',
  'B2Y',
  'A11Y',
  'A7Y',
  'B5Y',
  'A8Y',
  'B11Y',
  'A9Y',
  'B5Y' ]) ); 

/// ПЕРЕДЕЛАТЬ СКРИПТ БЕЗ СОРТИРОВКИ

/*


function menStillStanding(cards) {
    let teamA = {
        men: 11,
        redCards: {},
        yellowCards: {},
    }

    let teamB = {
        men: 11,
        redCards: {},
        yellowCards: {},
    }
    
    for (let i = 0; i <= teamA.men; i++) {
      teamA.yellowCards[i] = 0;
      teamB.yellowCards[i] = 0;
    }
    
    console.log(cards)
    
    if (!cards[0]) return [teamA.men, teamB.men];
  
  
    cards.forEach((card, i) => {
  
      let team = card[0] == 'A' ? teamA : teamB;
      let player = card.slice(1, -1);
      let cardColor = card.slice(-1);
  
      if (teamA.men < 7 || teamA.men < 7) return [teamA.men, teamB.men];
  
      if (cardColor == 'R') {
        team.men--;
      }
      
      if (cardColor == 'Y') {
        team.yellowCards[player]++;
  
        if (team.yellowCards[player] == 2) {
          delete team.yellowCards[player];
          team.men--;
        }
      }
    });
  
    console.log( [teamA.men, teamB.men])
    return [teamA.men, teamB.men];
  }
  
 */

