import avatarImg from "./assets/avatar.png"

export function App() {
  return (
    <div className="App">
      <header>
        <img src={avatarImg} alt="imagem do perfil" />
        <div>
          <h1>Huann Victor Brito de Almeida</h1>
          <h2>DESENVOLVEDOR WEB FRONT-END</h2>
          <div>
            <p>
            Tenho 31 anos, resido em João Pessoa, estado da Paraíba, disponível para vagas remotas ou presenciais também estou aberto a protostas para mudar de cidade. 
            </p>
            <ul>
              <li>+55 83 99980.2317</li>
              <li>huannvictor@gmail.com</li>
              <li>github.com/huannvictor</li>
              <li>linkedin.com/in/huannvictor</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
