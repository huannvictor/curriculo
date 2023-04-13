const birthDate = new Date("1990-09-22");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

export const personalIntroEn = [
  `I am ${age} years old, residing in João Pessoa, state of Paraíba. I am available for both remote and in-person job opportunities and I am also open to proposals to relocate.`,
];
