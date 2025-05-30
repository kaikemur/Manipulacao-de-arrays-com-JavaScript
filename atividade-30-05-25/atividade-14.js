/*14 – Destaques da semana no blog
A home do site exibe os 4 artigos mais recentes da semana.
Sua tarefa é gerar uma nova lista com os 4 primeiros artigos, sem alterar o array original.*/

let artigosBlog = [
  "Como usar Docker com Node.js",
  "5 erros comuns em JavaScript",
  "Introdução ao TypeScript",
  "Clean Code na prática",
  "Design Patterns úteis",
  "Refatoração de código",
  "Boas práticas de API REST",
  "Segurança em aplicações web"
];

console.log("artigos do blog :",artigosBlog.slice(0, 5));
console.log(artigosBlog);
