class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if (this.tipo == "mago"){
            console.log(`o ${this.tipo} atacou usando magia`)
        } else if (this.tipo == "guerreiro"){
            console.log(`o ${this.tipo} atacou usando espada`)
        }else if (this.tipo == "monge"){
            console.log(`o ${this.tipo} atacou usando artes marciais`)
        }else if (this.tipo == "ninja"){
            console.log(`o ${this.tipo} atacou usando shuriken`)
        }
    }
}

let player_1 = new heroi("Marcio", "22", "monge")
let player_2 = new heroi("Rafael", "19", "guerreiro")
let player_3 = new heroi("Tulio", "20", "mago")
let player_4 = new heroi("Fernando", "27", "ninja")

player_1.atacar()

player_2.atacar()

player_3.atacar()

player_4.atacar()