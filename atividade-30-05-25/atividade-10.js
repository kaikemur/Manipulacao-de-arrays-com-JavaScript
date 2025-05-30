/* 10 – Verificação de produto em estoque
Um cliente ligou perguntando se a loja ainda tem "cadeira gamer" disponível. Confira na lista de estoque.
*/
let estoque = [
  "mesa para PC",
  "cadeira gamer",
  "monitor 27 polegadas",
  "hub USB",
  "mouse sem fio"
];

console.log("verificação se a cadeira gamer esta disponivel`?", estoque.includes(`cadeira gamer`));
