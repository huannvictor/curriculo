import { knowledgeList } from "./content"

export function KnowledgeApplication(){
  return(
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">CONHECIMENTO PARA ESTA VAGA</h1>
      <ul className="content">
        {
          knowledgeList.map((item) => {
            return (<li className="list-disc">{item}</li>)
          })
        }
      </ul>
    </div>
  )
}