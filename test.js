

function menStillStanding(cards) {

}
  
  
  

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