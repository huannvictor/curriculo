import { studies } from "./content"
import iconLink from "../../assets/externalLink.svg"
import certificateIcon from "../../assets/certificate.svg"

export function Studies() {
  return(
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">FORMAÇÃO ACADÊMICA & ÚLTIMOS CURSOS DA ÁREA</h1>
      <div className="content">
        {
          Object.entries(studies).map(([key, content])=>{
            return(
              <div key={key} className="text-sm flex flex-col mb-2">
                <h2 className="text-brand-500 font-bold">{content.title}</h2>
                <div className="studyContainer">
                  <strong >
                    {
                      content.isVirtual
                        ? <span>
                            {content.entity}
                            <a className="hover:underline hover:underline-offset-4 hover:decoration-brand-500" href={content.link} rel="noreferrer" target="_blank"> {content.place} </a>
                            <img className="inline w-[9px]" src={iconLink} alt="ícone de link externo" />
                          </span>
                        : <span>
                            {content.entity}
                            <a href={content.link} rel="noreferrer" target="_blank" className="hover:underline hover:bg-brand-300 rounded-md inline hover:underline-offset-4 hover:decoration-brand-500" >
                              <img className="inline px-1" src={certificateIcon} alt="ícone de certificado" />
                            </a>
                            <p>{content.place}</p>
                          </span>
                    }
                  </strong>
                  <div className="text-xs mb-2">
                  {
                    typeof content.subject === "string"
                      ? <p>{content.subject}</p>
                      : <p>{
                        content.subject.map((item) => {
                          return(
                            <li key={Math.random()} >{item}</li>
                          )
                        })
                      }</p>
                  }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}