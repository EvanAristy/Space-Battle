class SpaceShip {
    constructor(name, hp, firePower, accuracy){
        this.name = name
        this.hp = hp;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
    attack(){
        if(Math.random < SpaceShip.accuracy){
            SpaceShip.hp -= SpaceShip.firepower;
            return SpaceShip.hp;
        }
    }
}

//=====enemy 
const enemy1 = new SpaceShip('Soul Crusher',Math.floor(Math.random() * (6-3+1)) + 3, Math.floor(Math.random() * (4-2+1)) + 2, (Math.floor(Math.random()*(8-6+1)) +6 )/10 )
const enemy2 = new SpaceShip('Dream Destroyer',Math.floor(Math.random() * (6-3+1)) + 3, Math.floor(Math.random() * (4-2+1)) + 2, (Math.floor(Math.random()*(8-6+1)) +6 )/10 )
const enemy3 = new SpaceShip('Fear Envoker',Math.floor(Math.random() * (6-3+1)) + 3, Math.floor(Math.random() * (4-2+1)) + 2, (Math.floor(Math.random()*(8-6+1)) +6 )/10 )
const enemy4 = new SpaceShip('Death Roller Coaster',Math.floor(Math.random() * (6-3+1)) + 3, Math.floor(Math.random() * (4-2+1)) + 2, (Math.floor(Math.random()*(8-6+1)) +6 )/10 )
const enemy5 = new SpaceShip('Void Bringer',Math.floor(Math.random() * (6-3+1)) + 3, Math.floor(Math.random() * (4-2+1)) + 2, (Math.floor(Math.random()*(8-6+1)) +6 )/10 )
const enemy6 = new SpaceShip('Endless Sorrow',Math.floor(Math.random() * (6-3+1)) + 3, Math.floor(Math.random() * (4-2+1)) + 2, (Math.floor(Math.random()*(8-6+1)) +6 )/10 )

//=====enemy array
const enemySquad = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6]


//=====player ship
const myShip = new SpaceShip('USS Hello World', 20, 5, .7 )



console.log(enemyList[0].attack)