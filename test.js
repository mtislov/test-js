class Road {
  constructor(road, n) {

    this.road = road.split('');
    this.n = n;
    this.lights = [];
  }

  runCars() {

    const green = 'G';
    const red = 'R';
    const yellow = 'Y';
    const car = 'C';
    const lastBlock = this.road.length - 1;
  
    for (let i = lastBlock; i >= 0; i--) {
    
      let currentBlock = this.road[i];
      let nextBlock = this.road[i + 1]
      let nextTwoBlock = this.road[i + 2];

      if (currentBlock == car) {
        
        if (i == lastBlock) {
          this.road[lastBlock] = this.checkLights(i);
          continue;
        }

        if (nextBlock == '.' || (nextBlock == 'G' && nextTwoBlock == '.') || (nextBlock == 'G' && nextTwoBlock == undefined) ) {
          this.road[i + 1] = car;
          this.road[i] = this.checkLights(i);
        }

      }
    }
  }

  checkLights ( blockPosition ) {

    let block = '.';                            ////// ПОФИКСИТЬ 
    this.lights.forEach( light => {
      if (light.position == blockPosition) {
        block = light.color;
      }
    });

    return block;
  }

  simulateLights() {
    this.lights = this.lights.map( light => {                /// ОТРЕФАКТОРИТЬ!!!!!!!!!!!
      
      light.timeLeft--;

      if (light.color == 'G' && light.timeLeft == 0) {
        light.color = 'O';
        light.timeLeft = 1;
      } 

      else if (light.color == 'O') {
        light.color = 'R';
        light.timeLeft = 5;
      }

      else if (light.color == 'R' && light.timeLeft == 0) {
        light.color = 'G';
        light.timeLeft = 5;
      }

      if (this.road[light.position] != 'C') {
        this.road[light.position] = light.color;
      }

      return light;

    });
  }

  initLights() {

    this.road.forEach(( el, i)  => {  // ищим светофоры
      if (el != '.' && el != 'C') {

        this.lights.push({
          position: i,
          color: el,
          timeLeft: 5,
        });
      }
    });

  }


  init() {

    let result = [this.road.join('')];
    
    this.initLights();
    for (let i = 1; i <= this.n; i++) {
      
      this.simulateLights();
      this.runCars();
      result.push(this.road.join(''));
      
    }

    return result;
  }



}



function trafficLights(road, n) {
  let game = new Road(road, n);
  return game.init();
  
}


console.log(trafficLights("CCC.G", 6))




/*


[
  "CCC.G...R...", // 0 initial state as passed
  ".CCCG...R...", // 1
  "..CCC...R...", // 2 show 1st car, not the green light
  "..CCGC..R...", // 3 2nd car cannot enter intersection because 1st car blocks the exit
  "...CC.C.R...", // 4 show 2nd car, not the green light
  "...COC.CG...", // 5 3rd car stops for the orange light
  "...CR.C.C...", // 6
  "...CR..CGC..", // 7
  "...CR...C.C.", // 8
  "...CR...GC.C", // 9
  "...CR...O.C.", // 10
  "....C...R..C", // 11 3rd car can proceed
  "....GC..R...", // 12
  "....G.C.R...", // 13
  "....G..CR...", // 14
  "....G..CR...", // 15
  "....O...C..."  // 16
]


*/
      //console.log(currentBlock === car, currentBlock, car);
