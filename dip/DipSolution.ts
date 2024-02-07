export interface Mount {

}

export class HorseMount implements Mount {

}

export class DragonMount implements Mount {

}

export class Character {
    private id: number;
    private name: string;
    private level: number;
    private healthPoint: number;
    private manaPoint: number;

    private job:any;
    private mount:Mount;

    constructor(mount:Mount) {
        this.mount = mount;
    }

    public createCharacter() {

    }

    public getMount() {
        return this.mount;
    }

}

const characterHuman = new Character(new HorseMount()); //Dependency Injection

const characterDraconic = new Character(new DragonMount()); //Dependency Injection

/*
 (US) DIP Explained: 
    The solution is agregate the classes by their common interface, and now we can pass many mounts we want for Character!

 (BR) DIP Explicado: 
    A solução é agregar as classes pela sua interface comum, e agora podemos passar quantas montarias quisermos para o Personagem!
*/