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
        //npcs cannot level up.
        
    }

}

/*
 (US) LSP Explained: 
    Here we have a logic problem, or a context problem. Our class Npc is inheriting from Character class, but if we pay attention to
    the methods, we'll see that Npc doesn't level up, so it doesn't make sense have a levelUpdate implementation in Npc class, except only in Player class. 
    Liskov Substitution Principle says that, we could change our child class for their father class, and the context has to be the same after that.
    See more in the next principle.

 (BR) LSP Explicado: 
    Aqui temos um problema de lógica ou de contexto. Nossa classe Npc é herdada da classe Character, mas se prestarmos atenção
    nos métodos, veremos que o Npc não sobe de nível, então não faz sentido ter uma implementação de levelUpdate na classe Npc, exceto apenas na classe Player.
    O Princípio de Substituição de Liskov diz que poderíamos mudar nossa classe filha pela classe pai, e o contexto deve ser o mesmo depois disso.
    Veja mais no próximo princípio.
*/