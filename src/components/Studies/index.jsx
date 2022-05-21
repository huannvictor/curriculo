import { studies } from "./content"

export function Studies() {
  return(
    <div className="flex flex-col gap-1 max-w-sm bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">FORMAÇÃO ACADÊMICA & ÚLTIMOS CURSOS DA ÁREA</h1>
      <div className="content">
        {
          Object.entries(studies).map(([key, content])=>{
            return(
              <div key={key} className="text-sm flex flex-col mb-2">
                <h2 className="text-brand-500 font-bold">{content.title}</h2>
                <strong className="">{content.entity} - {content.place}</strong>
                <span className=" float-left text-[11px] hover:underline hover:underline-offset-4 hover:decoration-brand-500">
                  <a href={content.link}>confira aqui</a>
                </span>
                <p className="text-xs mb-2">
                {
                  typeof content.subject === "string"
                    ? <p>{content.subject}</p>
                    : <p>{
                      content.subject.map((item) => {
                        return(
                          <li>{item}</li>
                        )
                      })
                    }</p>
                }
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}