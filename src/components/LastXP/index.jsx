import { xpContent } from "./content"

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
                <strong className="">{
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