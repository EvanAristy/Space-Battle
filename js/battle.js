const heroName = document.querySelector("#hero-ship")
const enemyName = document.querySelector("#enemy-ship")
const playerStats = document.querySelector("#playerStats")

// stats
const myHp = document.querySelector("#myHP")
const enemyHp = document.querySelector("#enemyHP")
const enemyFp = document.querySelector("#enemyFP")
const enemyAc = document.querySelector("#enemyAc")

class SpaceShip {
  constructor(name, hp, firePower, accuracy) {
    this.name = name;
    this.hp = hp;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }


  attack(target) {
    // if math.random is less than .7 then its a hit
    heroName.innerHTML = myShip.name
    enemyName.innerHTML = enemySquad[0].name
  
    

    while(myShip.hp && enemySquad[0]?.hp > 0) {

    
    if (myShip.accuracy > Math.random()) {
      console.log("Fire!!! Direct hit");
      enemySquad[0].hp -= myShip.firePower;
      
      if (enemySquad[0].hp <= 0) {
        let graveYard = enemySquad.shift();
        // console.log("Enemy ship " + enemySquad[0]?.name + " destroyed!");
        const message = enemySquad[0]?.name ? 'enemy ship destroyed': 'no more enemies'
        console.log(message)
      } else {
        console.log("We missed! They opened fire");
        if (Math.random < enemySquad[0].accuracy) {
          myShip.hp -= enemySquad[0].firepower;
          console.log("We're hit! We have " + myShip.hp + "hp left");
        } else {
          console.log("We've evaded enemy fire");
        }
      }
    } else {
      console.log("We missed!!");
      if(Math.random() < enemySquad[0].accuracy){
          myShip.hp -= enemySquad[0].firePower;
          console.log("Enemy fired. We're taking taking on damage. Hull is at " + myShip.hp)
      } else {
          console.log("Enemy opened fire. We narrowly escaped")
      }
    }
  }

  
    // if enemy hp is <= 0 enemy ship destroyed. enemy squad .pop method
    //if i miss or enemy ship survives then they attack.if math.random is less than their accuracy then then their firepower minus myship hp. if not they miss.if they hit then its enemy firepower minus my ships hp
    
  }
}

class Enemies extends SpaceShip {
  constructor(name, hp, firePower, accuracy) {
    super();
  }
}

//=====enemy
const enemy1 = new SpaceShip(
  "Soul Crusher",
  Math.floor(Math.random() * (6 - 3 + 1)) + 3,
  Math.floor(Math.random() * (4 - 2 + 1)) + 2,
  (Math.floor(Math.random() * (8 - 6 + 1)) + 6) / 10
);
const enemy2 = new SpaceShip(
  "Dream Destroyer",
  Math.floor(Math.random() * (6 - 3 + 1)) + 3,
  Math.floor(Math.random() * (4 - 2 + 1)) + 2,
  (Math.floor(Math.random() * (8 - 6 + 1)) + 6) / 10
);
const enemy3 = new SpaceShip(
  "Fear Envoker",
  Math.floor(Math.random() * (6 - 3 + 1)) + 3,
  Math.floor(Math.random() * (4 - 2 + 1)) + 2,
  (Math.floor(Math.random() * (8 - 6 + 1)) + 6) / 10
);
const enemy4 = new SpaceShip(
  "Death Roller Coaster",
  Math.floor(Math.random() * (6 - 3 + 1)) + 3,
  Math.floor(Math.random() * (4 - 2 + 1)) + 2,
  (Math.floor(Math.random() * (8 - 6 + 1)) + 6) / 10
);
const enemy5 = new SpaceShip(
  "Void Bringer",
  Math.floor(Math.random() * (6 - 3 + 1)) + 3,
  Math.floor(Math.random() * (4 - 2 + 1)) + 2,
  (Math.floor(Math.random() * (8 - 6 + 1)) + 6) / 10
);
const enemy6 = new SpaceShip(
  "Endless Sorrow",
  Math.floor(Math.random() * (6 - 3 + 1)) + 3,
  Math.floor(Math.random() * (4 - 2 + 1)) + 2,
  (Math.floor(Math.random() * (8 - 6 + 1)) + 6) / 10
);

//=====enemy array
const enemySquad = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

//=====player ship
const myShip = new SpaceShip("USS Hello World", 20, 5, 0.7);

myShip.attack()


