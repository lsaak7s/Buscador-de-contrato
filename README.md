# 🔎 Busca de Contatos com JavaScript
⚙️ Este projeto está em desenvolvimento e recebe melhorias contínuas à medida que avanço nos estudos de JavaScript.

Este projeto foi desenvolvido para praticar lógica de programação utilizando JavaScript puro.

## O que foi desenvolvido

- Busca de contatos através de um campo de texto.
- Comparação entre o valor digitado e os elementos do array.
- Exibição do contato encontrado.
- Mensagem de "Contato não encontrado" caso a busca não tenha sucesso.

## Conceitos praticados

- Arrays
- Laço `for`
- Condicional `if`
- Variáveis de controle (`boolean`)
- `break`
- DOM
- Eventos (`addEventListener`)
- `toUpperCase()`
- Lógica de busca
## 🖼️ Preview

<img width="1889" height="963" alt="image" src="https://github.com/user-attachments/assets/117f3539-c1b0-46e0-941c-30238062897d" />


---
## Fluxo da aplicação

1. O usuário digita um nome.
2. O JavaScript percorre o array utilizando um `for`.
3. Cada elemento é comparado com o valor digitado.
4. Se encontrar:
   - exibe o contato;
   - altera a variável `encontrou` para `true`;
   - interrompe o laço com `break`.
5. Caso termine a busca sem encontrar nenhum resultado, é exibida a mensagem:
