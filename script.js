const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um banco de dados",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variable myVar;",
            "v myVar;",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama a estrutura de controle que permite executar um bloco de código repetidamente enquanto uma condição específica for verdadeira?",
        respostas: [
            "if/else",
            "for",
            "switch",
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "console.log()",
            "log()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método que retorna o tamanho de uma string em JavaScript?",
        respostas: [
            "length()",
            "size()",
            "length",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
        respostas: [
            "function",
            "func",
            "def",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
        respostas: [
            "&",
            "|",
            "||",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
        respostas: [
            "toInt()",
            "parseInteger()",
            "parseInt()",
        ],
        correta: 2
    },
];

const quiz = document.getElementById('quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
}
