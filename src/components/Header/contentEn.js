const birthDate = new Date("1990-09-22");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

export const personalIntroEn = [
  `I'm ${age} years old and based in João Pessoa, Paraíba. I'm seeking both remote and on-site opportunities, and I'm open to relocating. Specializing in ReactJS and NextJS, I'm adaptable to different JavaScript frameworks.`,
];
