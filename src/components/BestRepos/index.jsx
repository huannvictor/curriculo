import { reposContent } from "./content";
import iconLink from "../../assets/externalLink.png";
import { reposContentEn } from "./contentEn";

export function BestRepos({ isPtbr }) {
  return (
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">
        BEST REPOS
      </h1>
      <div className="content">
        {Object.entries(isPtbr ? reposContent : reposContentEn).map(
          ([key, content]) => {
            return (
              <div key={key} className="text-sm flex flex-col mb-2">
                <h2 className="text-brand-500 font-bold">{content.title}</h2>
                <div className="repoContent">
                  <strong className="hover:underline hover:underline-offset-4 hover:decoration-brand-500">
                    <a href={content.link} rel="noreferrer" target="_blank">
                      {content.mask}
                    </a>
                    <img
                      className="inline w-[9px] ml-1"
                      src={iconLink}
                      alt="ícone de link externo"
                    />
                  </strong>
                  <div className="content text-sm mb-2">
                    <p>{content.description}</p>
                    <p>Tools: {content.tools}</p>
                    <span>
                      {content.deploy ? (
                        <a
                          href={content.deploy}
                          rel="noreferrer"
                          target="_blank"
                          className="hover:rounded hover:underline-offset-4 bg-brand-300 px-1 text-[10px]"
                        >
                          {isPtbr ? "confira o deploy" : "Check out the deploy"}
                        </a>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
