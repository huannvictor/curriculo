import avatarImg from "../assets/avatar.png";
import iconWhatsapp from "../assets/iconWhatsapp.svg"
import iconEmail from "../assets/iconEmail.svg"
import iconGitHub from "../assets/iconGitHub.svg"
import iconLinkedIn from "../assets/iconLinkedIn.svg"

const links = {
  whatsapp: {
    icon: iconWhatsapp,
    alt: "ícone do whatsapp",
    text: "+55 83 99980.2317",
    url: "https://wa.me/5583999802317?text=Nos+interessamos+pelo+seu+curriculo+e+gostariamos+de+entrar+em+contato.",
  },
  email: {
    icon: iconEmail,
    alt: "ícone do email",
    text: "huannvictor@gmail.com",
    url: "mailto:huannvictor@gmail.com",
  },
  gitHub: {
    icon: iconGitHub,
    alt: "ícone do Github",
    text: "github.com/huannvictor",
    url: "https://www.github.com/huannvictor",
  },
  linkedIn: {
    icon: iconLinkedIn,
    alt: "ícone do linkedin",
    text: "linkedin.com/in/huannvictor",
    url: "https://www.linkedin.com/in/huannalmeida/",
  },
};

export function Header() {
  return (
    <header className=" flex items-center gap-5">
      <img
        src={avatarImg}
        alt="imagem do perfil"
        className="shadow-md rounded-full bg-brand-500"
      />
      <div className=" flex flex-col justify-center items-center gap-1 max-w-lg bg-stone-100 rounded-xl py-7 px-9 shadow-md">
        <h1 className=" text-2xl font-bold text-brand-500">
          Huann Victor Brito de Almeida
        </h1>
        <h2 className=" text-lg text-brand-500">DESENVOLVEDOR WEB FRONT-END</h2>
        <div className="flex items-center gap-6 w-[435px] text-xs">
          <p className="text-justify">
            Tenho 31 anos, resido em João Pessoa, estado da Paraíba. Estou disponível
            para vagas remotas ou presenciais, também estou aberto a propostas
            para mudar de cidade.
          </p>
          <ul className="flex flex-col gap-0.5">
            {
              Object.entries(links).map(([key, item]) => {
                return(
                  <a 
                    key={key} 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex gap-1.5 hover:underline hover:underline-offset-4 hover:decoration-brand-500"
                  >
                    <img src={item.icon} alt={item.alt} />
                    <p> {item.text} </p>
                  </a>
                )
              })
            }
          </ul>
        </div>
      </div>
    </header>
  );
}
