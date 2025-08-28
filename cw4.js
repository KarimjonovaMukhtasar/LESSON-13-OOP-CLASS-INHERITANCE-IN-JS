class Player{
    constructor(name, health, weapon){
    this.name = name
    this.health = health
    this.weapon = weapon
    }
    takeDamage(amount){
    this.health -= amount;
    console.log(`${this.name} ${amount} zarar oldi. Qolgan sog'lig'i: ${this.health}`)
    if(this.health <= 0){
    console.log(`${this.name} o'yindan chiqdi`)
    }
}

attack(target){
    console.log(`${this.name}${target.name} ga hujum qilmoqda`)
    this.weapon.shoot(target)

}
reloadWeapon(amount){
    this.weapon.reload(amount)
}
}


class Terrorist extends Player{
    constructor(name,weapom){
        super(name, 100, weapon)
        this.team = "Terrorist"
    }
    plantBomb(){
    console.log(`${this.name} bomba o'rnatmoqda`)
}
}

class CounterTerrorist extends Player{
    constructor(name,weapon){
        super(name, 100, weapon)
        this.team = "Counter-Terrorist"
    }
}

let player = new Player("Sabina", 100, "gun")
console.log(player)