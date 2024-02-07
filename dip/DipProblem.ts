export interface Mount {

}

export class HorseMount implements Mount {

}

export abstract class Character {
    private id: number;
    private name: string;
    private level: number;
    private healthPoint: number;
    private manaPoint: number;

    private job:any;
    private mount:HorseMount;

    public abstract createCharacter();

    public getMount() {
        return new HorseMount();
    }

}

/*
 (US) DIP Explained: 
    Now we have another problem, our class Character needs a mount, but in the way its implemented our character
    will mount only horses, and what will happen if we want to mount another animal or creature?
    The Dependency Inversion Principle says: "You have to depend on abstrations and not on implementations" wich means,
    everytime that we have a class agregated to another, we need care about link them by their interfaces (abstration) and not the class itself
    See the DipSolution

 (BR) DIP Explicado: 
    Agora temos outro problema, nossa classe Character precisa de uma montaria, mas na forma como está implementada o nosso personagem
    montará apenas cavalos, e o que acontecerá se quisermos montar outro animal ou criatura?
    O Princípio da Inversão de Dependência diz: "Você tem que depender de abstrações e não de implementações", o que significa,
    toda vez que temos uma classe agregada a outra, precisamos nos preocupar em vinculá-las por suas interfaces (abstração) e não pela classe em si
    Veja DipSolution
*/