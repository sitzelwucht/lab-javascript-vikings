// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }

}

// Viking
class Viking {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
    }


    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0)
            return `${this.name} has received ${damage} points of damage`
        else
            return `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super()
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0)
            return `A Saxon has received ${damage} points of damage`
        else 
            return 'A Saxon has died in combat'
    }

}

// War
class War {
    
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)

    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        this.randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        this.randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let dmg = this.randSaxon.receiveDamage(this.randViking.strength)

        for(let i = 0; i < this.saxonArmy.length; i++) {
            if(this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(i, 1)
            }
        
        }
        return dmg
    }

    saxonAttack() {
        this.randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        this.randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let dmg = this.randViking.receiveDamage(this.randSaxon.strength)

        for(let i = 0; i < this.vikingArmy.length; i++) {
            if(this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i, 1)
            }
        
        }
       return dmg

    }

    showStatus() {
        if(!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if(!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if(this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
