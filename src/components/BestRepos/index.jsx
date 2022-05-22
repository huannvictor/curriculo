import {reposContent} from "./content"
import iconLink from "../../assets/externalLink.svg"


export function BestRepos() {
  return(
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">BEST REPOS</h1>
      <div className="content">
        {
          Object.entries(reposContent).map(([key, content]) => {
            return(
              <div  key={key} className="text-sm flex flex-col mb-2">
                <h2 className="text-brand-500 font-bold">{content.title}</h2>
                <div className="repoContent">
                  <strong className="hover:underline hover:underline-offset-4 hover:decoration-brand-500">
                    <a href={content.link} rel="noreferrer" target="_blank">{content.mask} </a>
                    <img className="inline w-[9px]" src={iconLink} alt="ícone de link externo" />
                  </strong>
                  <div className="content text-justify indent-2 text-xs mb-2">
                    <p>{content.description}</p>
                    <p>Tools: {content.tools}</p>
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