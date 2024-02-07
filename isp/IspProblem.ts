export abstract class Character {
    private id: number;
    private name: string;
    private level: number;
    private healthPoint: number;
    private manaPoint: number;

    private job:any;

    public abstract createCharacter();

    public abstract levelUpdate();

}

export class Player extends Character {
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

    public levelUpdate() {
        //npcs cannot level up. It doesn't work, but it has to be implemmented
        
    }

}

/*
 (US) ISP Explained: 
    Here we continue with our previous problem, the interface segregation principle can help us with that!
    This says, "One class its not obligated to implement interfaces that it won't be used"
    See the IspSolution.

 (BR) LSP Explicado: 
    Aqui continuamos com nosso problema anterior, o princípio de segregação de interfaces pode nos ajudar nisso!
    O princípio diz: "Uma classe não é obrigada a implementar interfaces que não serão usadas"
    Veja IspSolution.
*/