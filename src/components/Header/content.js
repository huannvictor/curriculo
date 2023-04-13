const birthDate = new Date("1990-09-22");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

export const personalIntro = [
  `Tenho ${age} anos, resido em João Pessoa, estado da Paraíba. Estou disponível para vagas remotas ou presenciais, também estou aberto a propostas para mudar de cidade.`,
];
