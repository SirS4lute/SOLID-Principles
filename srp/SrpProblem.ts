export class Character {
    private id: number;
    private name: string;
    private level: number;
    private healthPoint: number;
    private manaPoint: number;

    private job:any;

    public createCharacter = () => {
        
    }

    public levelUpdate = () => {
        
    }

    public createJob = (job = {name: 'knight'}) => {
        this.job = job;
        localStorage.setItem(`characterJob-${this.id}`, JSON.stringify(job))
    }

}

/*
 (US) SRP Explained: 
    The class must have one unique responsibility, single responsibility principle!
    
    Here we have a problem, the method create job doesn't belongs to character, but to job (line: 8). So why are we coding the createJob method in our Character class? See the SrpSolution.

 (BR) SRP Explicado: 
    A classe deve ter uma responsabilidade única, princípio de responsabilidade única!
    
    Aqui temos um problema, o método create job não pertence ao personagem, mas sim ao job (linha: 8). Então, por que estamos codificando o método createJob em nossa classe Character? Consulte a solução Srp.
*/