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
}
let mateus = new Pessoa("mateus", 21, 1.86)
console.log(mateus)