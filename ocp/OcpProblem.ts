export class Job {
    private id:number;
    private name:string;

    public attackType = (name: string) => {
        if (name == 'knight') {
            //taunt enemies
        }
        if (name == 'mage') {
            //cast fireball
        }
        if (name == 'archer') {
            //prepare longshoot
        }
    }
}

/*
 (US) OCP Explained: 
    The class must be open for extension and closed for modification!
    Here we got a function (f: attackType) wich return the actions of each job type of the character
    The Problem is, if our options of job increase, our numbers of 'if' increase too, and our method will be very complex. See the OcpSolution.
    
  (BR) OCP Explicado:
    A classe deve estar aberta para extensão e fechada para modificação!
    Aqui temos uma função (f: attackType) que retorna as ações de cada tipo de job do character
    O problema é que, se nossas opções de job aumentarem, nossos números de “if” também aumentarão, e nosso método será muito complexo. Veja a OcpSolution.
*/