export class TribalData {
    creatureType: string;
    cardsWithType: number;
    commandersWithType: number;
    makesTokensOfType: number;
    turnsIntoCreatureOfType: number;
    hozesType: number;
    lordsOfType: number;
    silverBorderedCardsWithType: number;
    silverBorderedCommanders: number;
    silverBorderedLords: number;

    constructor (creatureType: string){
        this.creatureType = creatureType;
    }
}
