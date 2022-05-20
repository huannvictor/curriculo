const xpContent = {
  SalesAssistant: {
    position:"ASSISTENTE DE VENDAS",
    company:"EDITORA CONSTRUIR",
    period:"maio de 2018 - Atualmente",
    description:"Auxiliar os supervisores regionais através criação e tratamento de relatórios e planilhas e executando funções administrativas.",
    softSkills:"Trabalho em equipe, proatividade, inovação, noção de regras de negócio."
  },
  FreelancerGraphicDesigner: {
    position:"FREELANCER DESIGNER GRÁFICO",
    company:"",
    period:"fevereiro 2017 - fevereiro 2018",
    description:"Criar mídias digitais para postagens em redes sociais. Design de logos, identidade visual para pessoas físicas, empresas de pequeno porte e outras organizações.",
    softSkills:"Lidar com prazos, relacionamento com cliente, absorver as ideias apresentadas e conseguir expressar em algum tipo de design."
  },
}

export function LastXP() {
  return(
    <div className="flex flex-col gap-1 max-w-sm bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">ULTIMAS EXPERIÊNCIAS</h1>
      <div className="content">
        {
          Object.entries(xpContent).map(([key, content]) => {
            return(
              <div key={key} className="text-sm flex flex-col mb-2">
                <h2 className="text-brand-500 font-bold">{content.position}</h2>
                <strong className="text-xs">{
                  !content.company 
                    ? content.period 
                    : `${content.company} - ${content.period}`
                }</strong>
                <p className="text-xs mb-2">{content.description}</p>
                <p className="text-xs mb-2">
                  <strong>Soft skills:</strong> {content.softSkills}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}