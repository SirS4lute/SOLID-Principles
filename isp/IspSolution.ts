export abstract class Character {
    private id: number;
    private name: string;
    private level: number;
    private healthPoint: number;
    private manaPoint: number;

    private job:any;

    public abstract createCharacter();

}

export interface LevelSystem {
    levelUpdate();
}

export class Player extends Character implements LevelSystem{
    public createCharacter() {
        //player created!   
    }

    public levelUpdate() {
        //player leveled up
    }

}

export class Npc extends Character {
    public createCharacter() {
        //npc created!
    }

}

/*
 (US) ISP Solution: 
    We have separated the levelUpdate method in an interface, and because that we can choose wich (and how many) implementations we gonna use.
    Because that, we can resolve the problem with Npc implementing levelUpdate, now the class doesn't need implement this method anymore.

 (BR) LSP Solução: 
    Separamos o método levelUpdate em uma interface, e por isso podemos escolher quais (e quantas) implementações usaremos.
    Por isso, podemos resolver o problema com o Npc implementando levelUpdate, agora a classe não precisa mais implementar este método
*/