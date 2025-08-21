/*
Abstração:
Esse primeiro pilar conhecemos no tópico anterior: a abstração. Como vimos, ela é a forma como precisamos olhar e entender a identidade de uma entidade, identificando as suas propriedades e as suas características (os seus atributos), além de tudo o que essa entidade pode realizar (os seus métodos).

Encapsulamento:
O encapsulamento é uma das principais e mais importantes técnicas de POO. Como as propriedades e métodos ficam encapsuladas (dentro de cápsulas) na classe, elas podem ficar protegidas e seguras, sem que o código fique visível para outros programadores, por exemplo. 

Para complementar o funcionamento do encapsulamento, os atributos e métodos possuem uma visibilidade, que pode variar entre três tipos, são eles:

•
Público (public): Os atributos e métodos são visíveis por qualquer outra classe, podendo ser acessado e executado.

•
Protegido (protected) :  Os atributos e métodos são visíveis apenas por objetos da própria classe ou de suas classes filhas.

•
Privado (private):: Os atributos e métodos são visíveis apenas pela própria classe, como se fosse reservado para o uso interno.

Herança:
No exemplo inicial de classe fizemos o desenho da classe Pessoa, com os seus atributos (nome, idade, peso etc.) e os seus métodos (andar, falar etc.). 

Agora vamos pensar em outras duas entidades, como o Aluno e o Professor. Ambos possuem exatamente as mesmas características de uma Pessoa, com poucas diferenças entre eles. 

Polimorfismo:
Capacidade de um objeto ou função tem multiplas  formas de comportamento dependendo do contexto.

-Sobrescrita de métodos:
Uma classe filha pode fornecer sua propria implementação de um método que já existe na classe pai (superclasse). nesse caso o do pai é descartado e criado outro.

-Sobrecarga de métodos:
Funções que podem aceitar diferentes tipos de argumentos ese comportar de acordo com o tipo de dado recebido.
*/

class Pessoa {
    constructor(nome, idade, peso, altura, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
    }
    andar() {
        console.log(`${this.nome}: Está andando!`)
    };
    comer(comida) {
        console.log(`${this.nome}: está comendo ${comida}!`)
    };
    falar(fala) {
        console.log(`${this.nome}: está falando: ${fala}!`)
    };
    respirar() {
        console.log(`${this.nome}: Está respirando!`)
    };
}

//Herança:

/*Usamos a palavra extends para indicar que uma classe é filha de outra ex: Classefilha extends Classepai*/

/*A classe Aluno herdou todos os atributos e métodos da classe Pessoa:*/
/*Quando uma classe herda de outra é necessário chamar os atributos da outra classe com a super(), lembrando que todos os valores devem também está dentro do constructor */

class Aluno extends Pessoa {
    constructor(nome, idade, peso, altura, sexo, id, nota) {
        super(nome, idade, peso, altura, sexo)
        this.matricula = id;
        this.nota = nota;
    }
    trancarCurso() {
        console.log(`${this.nome} Trancou o curso!`)
    }
    pagarMensalidade() {
        console.log(`${this.nome} Pagou a mensalidade do curso!`)
    }
};
const aluno = new Aluno('Pedro', 21, 89, 1.96, 'masculino', 972349, 10)

aluno.trancarCurso()