export class Job {
    private id:number;
    private name:string;

    public createJob = (name: string) => {
        this.id = Math.floor(Math.random() * 100);
        this.name = name;
        localStorage.setItem(`job-${this.id}`, JSON.stringify({'id': this.id, 'name': this.name}))
    }
}

export class Character {
    private id: number;
    private name: string;
    private level: number;
    private healthPoint: number;
    private manaPoint: number;

    private job:Job;

    public createCharacter = () => {
        this.job.createJob('mage');
    }

    public levelUpdate = () => {
        
    }

}

/*
 SRP Solution: 
    We can resolve this by segregating the createJob method in the Job class!
    
    Podemos resolver isso segregando o método createJob na classe Job
*/