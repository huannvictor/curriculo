const birthDate = new Date("1990-09-22");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

export const personalIntro = [
  `Tenho ${age} anos e sou da cidade de João Pessoa, Paraíba. Busco oportunidades tanto remotas quanto presenciais, inclusive estou aberto a mudanças de cidade. Especializado em ReactJS e NextJS, estou apto a me adaptar a diferentes frameworks JavaScript.`,
];
