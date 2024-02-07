# SOLID Principles Explained 🇺🇸

In this repository i'll explain what is solid and their principles, with examples you can find in the local folders, all made by myself. So, lets begin!

## What is Solid?
Solid is an acronyms for five good practice concepts in object oriented programming:
* [Single Responsibility Principle (__SRP__)](#srpUs)
* [Open-Closed Principle (__OCP__)](#ocpUs)
* [Liskov Substitution Principle (__LSP__)](#lspUs)
* [Interface Segregation Principle (__ISP__)](#ispUs)
* [Dependency Inversion Principle (__DIP__)](#dipUs)

Below you can find each concept explained with the links to their respectives codes, use the __summary__ above to get in the sections.

### Single Responsability Principle <a name="srpUs"></a>
The class must have one __unique__ responsibility, __single responsability principle__! Wich means all variables, methods or logic in our entitie must belongs to the entity context! We need to segregate responsibilities, that concept will
help us in future with maintenance and class extension. We'll see aggregated objects and dependency injection for this to work well!
<br />[(Code Example)](https://github.com/SirS4lute/SOLID-Principles/tree/master/srp)

### Open-Closed Principle <a name="ocpUs"></a>
The OCP says that the class must be open for __extension__ and closed for modification! Which means our class shouldn't try to encompass every scenario, but keep it simple! 
By following this concept, we will avoid many headaches in future maintenance. 
<br />[(Code Example)](https://github.com/SirS4lute/SOLID-Principles/tree/master/ocp)

### Liskov Substitution Principle <a name="lspUs"></a>
Liskov Substitution Principle says that we could change our child class for their father class, and the context has to be the same after that. It isn't a good practice implement a logic if our entitie couldn't use it, 
so we need be careful about our abstract and interface implementations.
<br />[(Code Example)](https://github.com/SirS4lute/SOLID-Principles/tree/master/lsp)

### Interface Segregation Principle <a name="ispUs"></a>
This says that, one class its not obligated to implement interfaces that it won't be used. It's almost the same idea as the previous concept, but more focused on how we can implement the idea in practice. 
So our class doesn't need to implement logic that doesn't fit and doesn't need to implement an interface or method that won't be useful.
<br />[(Code Example)](https://github.com/SirS4lute/SOLID-Principles/tree/master/isp)

### Dependency Inversion Principle <a name="dipUs"></a>
The Dependency Inversion Principle says: "You have to depend on abstrations and not on implementations" wich means, everytime that we have a class agregated to another, 
we need care about link them by their interfaces (abstration) and not the class itself. That way we can desacoplate more our entities from anothers, creating a code flex scenario.
<br />[(Code Example)](https://github.com/SirS4lute/SOLID-Principles/tree/master/dip)

# Princípios do SOLID explicados 🇧🇷

Neste repositório vou explicar o que é solid e seus princípios, com exemplos que você pode encontrar nas pastas locais, todos feitos por mim. Então, vamos começar!

## O que é solid?
Solid é um acrônimo para cinco conceitos de boas práticas em programação orientada a objetos:
* [Princípio de Responsabilidade Única (__SRP__)](#srpBr)
* [Princípio Aberto-Fechado (__OCP__)](#ocpBr)
* [Princípio de Substituição de Liskov (__LSP__)](#lspBr)
* [Princípio de segregação de interface (__ISP__)](#ispBr)
* [Princípio de Inversão de Dependência (__DIP__)](#dipBr)

Abaixo você encontra cada conceito explicado com os links para seus respectivos códigos, use o __sumário__ acima para acessar as seções.

### Princípio de Responsabilidade Única <a name="srpBr"></a>
A classe deve ter uma __responsabilidade única__, __princípio de responsabilidade única__! O que significa que todas as variáveis, métodos ou lógica em nossa entidade devem pertencer ao contexto da entidade! 
Precisamos segregar responsabilidades, esse conceito nos ajudará no futuro com manutenção e extensão de classes. Veremos objetos agregados e injeção de dependência para que isso funcione bem!
<br />[(Exemplo de código)](https://github.com/SirS4lute/SOLID-Principles/tree/master/srp)

### Princípio Aberto-Fechado <a name="ocpBr"></a>
O OCP diz que a classe deve estar aberta para __extensão__ e fechada para modificação! O que significa que nossa classe não deve tentar abranger todos os cenários, mas sim mantê-la simples!
Seguindo esse conceito, evitaremos muitas dores de cabeça em manutenções futuras.
<br />[(Exemplo de código)](https://github.com/SirS4lute/SOLID-Principles/tree/master/ocp)

### Princípio da Substituição de Liskov <a name="lspBr"></a>
O Princípio de Substituição de Liskov diz que podemos mudar nossa classe filha pela classe pai, e o contexto deve ser o mesmo depois disso. Não é uma boa prática implementar uma lógica se nossa entidade não puder usá-la,
portanto, precisamos ter cuidado com nossas implementações de abstrações e de interfaces.
<br />[(Exemplo de código)](https://github.com/SirS4lute/SOLID-Principles/tree/master/lsp)

### Princípio de segregação de interface <a name="ispBr"></a>
Diz que uma classe não é obrigada a implementar interfaces que não serão utilizadas. É quase a mesma ideia do conceito anterior, porém mais focado em como podemos implementar a ideia na prática.
Portanto, nossa classe não precisa implementar uma lógica que não se encaixe e não precisa implementar uma interface ou método que não será utilizado.
<br />[(Exemplo de código)](https://github.com/SirS4lute/SOLID-Principles/tree/master/isp)

### Princípio de inversão de dependência <a name="dipBr"></a>
O Princípio da Inversão de Dependências diz: "Você tem que depender de abstrações e não de implementações" ou seja, toda vez que tivermos uma classe agregada a outra,
precisamos nos preocupar em vinculá-los por suas interfaces (abstração) e não pela classe em si. Dessa forma podemos desacoplar mais nossas entidades de outras, criando um cenário de código flexível.
<br />[(Exemplo de código)](https://github.com/SirS4lute/SOLID-Principles/tree/master/dip)
