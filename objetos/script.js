/*
Classe → Modelo/estrutura para criar objetos.

Objeto → Instância (cópia) de uma classe, com dados e comportamentos próprios.

Atributo → Variável dentro do objeto (guarda dados).

Método → Função dentro do objeto (define ações).
*/

//Como criar um objeto?

const pessoa = {
    nome: 'Mateus',
    idade: 12,
    altura: 1.86,
    sexo: 'masc',
    comer: function () {
        console.log(pessoa.nome + ' ' + 'comeu uma maça')
    }
};

//Como adicionar novo atributo:
pessoa['cor'] = 'pardo';
//Como atualizar um valor de um atributo:
pessoa.idade = 15;

//Como chamar um método?
pessoa.comer()

//Como criar classes?
class Pessoa {
    constructor(v1, v2, v3) {
        this.nome = v1;
        this.idade = v2;
        this.altura = v3;
    }
    andar(andou) {
        console.log(this.nome + ' andou ' + andou + ' ' + 'passos!')
    }
}
//como criar objetos com o modelo:

let mateus = new Pessoa("mateus", 21, 1.86)
let luan = new Pessoa("Luan", 15, 1.75)

//como exibir:
// nome.atributo

console.log('Olá meu nome é ' + mateus.nome + ' tenho ' + mateus.idade + ' anos ' + ' e ' + mateus.altura + ' de altura!')

console.log('Olá meu nome é ' + luan.nome + ' tenho ' + luan.idade + ' anos ' + ' e ' + luan.altura + ' de altura!')

// nome.método()
mateus.andar(20)
luan.andar(235)