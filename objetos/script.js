/*
Classe → Modelo/estrutura para criar objetos.

Objeto → Instância (cópia) de uma classe, com dados e comportamentos próprios.

Atributo → Variável dentro do objeto (guarda dados).

Método → Função dentro do objeto (define ações).
*/

//Como criar um objeto?

let pessoa = {
    atributo: 'nome',
    idade: 12,
    altura: 1.86,
    sexo: 'masc',
};

//Como adicionar novo atributo:
pessoa['cor'] = 'pardo';
//Como atualizar um valor de um atributo:
pessoa.idade = 15;
