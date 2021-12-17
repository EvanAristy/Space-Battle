const heroName = document.querySelector("#hero-ship");
const enemyName = document.querySelector("#enemy-ship");

// stats
const myHp = document.querySelector("#myHP");
const myFp = document.querySelector("#myFP");
const myAc = document.querySelector("#myAc");
const enemyHp = document.querySelector("#enemyHP");
const enemyFp = document.querySelector("#enemyFP");
const enemyAc = document.querySelector("#enemyAc");

class SpaceShip {
  constructor(name, hp, firePower, accuracy) {
    this.name = name;
    this.hp = hp;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }

  attack(target) {
    // if math.random is less than .7 then its a hit
    // names
    heroName.innerHTML = myShip.name;
    enemyName.innerHTML = enemySquad[0].name;
    // player stats
    myHp.innerHTML = myShip.hp;
    myFp.innerHTML = myShip.firePower;
    myAc.innerHTML = myShip.accuracy;
    // enemy stats
    enemyHp.innerHTML = enemySquad[0].hp;
    enemyFp.innerHTML = enemySquad[0].firePower;
    enemyAc.innerHTML = enemySquad[0].accuracy;

    while (myShip.hp && enemySquad[0]?.hp > 0) {
      if (myShip.accuracy > Math.random()) {
        console.log("Fire!!! Direct hit");
        enemySquad[0].hp -= myShip.firePower;

        if (enemySquad[0].hp <= 0) {
          let graveYard = enemySquad.shift();
          // console.log("Enemy ship " + enemySquad[0]?.name + " destroyed!");
          // manara helped with the nullish coalescing
          const message = enemySquad[0]?.name
            ? "enemy ship destroyed"
            : "no more enemies";
          console.log(message);
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
        if (Math.random() < enemySquad[0].accuracy) {
          myShip.hp -= enemySquad[0].firePower;
          console.log(
            "Enemy fired. We're taking taking on damage. Hull is at " +
              myShip.hp
          );
        } else {
          console.log("Enemy opened fire. We narrowly escaped");
        }
      }
    }
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

// myShip.attack()

// ==================== game ===========
// document.addEventListener("DOMContentLoaded", function (event) {
//   // your code here
// });
// names
heroName.innerHTML = myShip.name;
enemyName.innerHTML = enemySquad[0].name;
// player stats
myHp.innerHTML = myShip.hp;
myFp.innerHTML = myShip.firePower;
myAc.innerHTML = myShip.accuracy;
alert(`We missed. Enemy returning fire`);
// enemy stats
enemyHp.innerHTML = enemySquad[0].hp;
enemyFp.innerHTML = enemySquad[0].firePower;
enemyAc.innerHTML = enemySquad[0].accuracy;

while (myShip.hp > 0 && enemySquad[0]?.hp > 0) {
  y = prompt(
    `Alien ship ${enemySquad[0].name} spotted. Should we Engage, 'y'/'n' ?`
  );

  if (y === "y") {
    if (myShip.accuracy > Math.random()) {
      enemySquad[0].hp -= myShip.firePower;
      enemyHp.textContent = enemySquad[0].hp;
      alert(`Direct hit on ${enemySquad[0].name}`);
      if (enemySquad[0].hp > 0) {
        alert(`${enemySquad.name} is still standing. They are returning fire!!`);
      } else {
        alert(`Alien ship ${enemySquad[0].name} destroyed!!`);
        graveYard = enemySquad.shift();
        enemyName.textContent = enemySquad[0].name;
      }
    } else {
      if (Math.random() < enemySquad[0].accuracy) {
        myShip.hp -= enemySquad[0].firePower;
        myHp.textContent = myShip.hp;
        alert(`We're hit!! Hull taking damage. We have ${myShip.hp} left`);
      } else {
        alert(`We evaded enemy fire`);
      }
    }
  } else {
    prompt("Stop being scared!! We're attacking right, 'y'/'n' ?");
  }
}
