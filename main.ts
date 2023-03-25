import * as fs from 'fs';

interface CardInterface {
    title: string
    description: string
    picture: string
    attack: number
    defense: number
}

interface DeckInterface {
    cards: Card[]
    name: string
}

class Card implements CardInterface {
    title: string
    description: string
    picture: string
    attack: number
    defense: number

    constructor(info?: CardInterface) {

        if (info) {
            this.title = info.title
            this.description = info.description
            this.picture = info.picture
            this.attack = info.attack
            this.defense = info.defense    
        }
    }    
}

class Deck implements DeckInterface {
    name: string
    cards: Card[]    

    public loadFromFile(path: string) {            
        const jsonString = fs.readFileSync(path, 'utf8');
        const cards = JSON.parse(jsonString)

        this.cards = cards.map((card) => new Card(card))

        console.log(this.cards)
    }
}

const deck = new Deck()
deck.loadFromFile('./card-database.json')

