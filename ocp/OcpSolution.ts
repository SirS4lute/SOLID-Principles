export abstract class Job {
    private id:number;
    private name:string;

    public abstract attackType();
}

export class Knight extends Job {
    public attackType() {
        //taunt enemies
    }
}

export class Mage extends Job {
    public attackType() {
        //cast fireball
    }
}

export class Archer extends Job {
    public attackType() {
        //prepare longshoot
    }
}

/*
 (US) OCP Solution: 
    Here we have our attack types segregated in classes, all classes inherit from job class and each one implements their method attackType, 
    now our classes are open for extension whithout harming their complexity and readability 
    
  (BR) OCP Solução:
    Aqui temos nossos tipos de ataque segregados em classes, todas as classes herdam da classe job e cada uma implementa seu método attackType,
    agora nossas classes estão abertas para extensão sem prejudicar sua complexidade e legibilidade
*/
