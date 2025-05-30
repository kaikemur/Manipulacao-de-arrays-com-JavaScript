/* 15 – Remoção de itens inativos no menu
Dois itens do menu de navegação estão obsoletos e precisam ser removidos da posição 2 e 3,
pois o sistema não oferece mais esses serviços.
*/
let menuNavegacao = [
  "Início",
  "Serviços",
  "Portfólio",
  "Blog",
  "Contato",
  "Login",
  "Área do cliente"
];

let itensinativosRemovidos = menuNavegacao.splice(2, 3)
console.log(`depois do splice: ${menuNavegacao}`);
console.log(`elementos Removidos: ${itensinativosRemovidos}`);
