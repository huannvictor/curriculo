import { xpContent, xpTitle } from "./content";
import { xpContentEn, xpTitleEn } from "./contentEn";

export function LastXP({ isPtbr }) {
  return (
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">
        {isPtbr ? xpTitle : xpTitleEn}
      </h1>
      <div className="content">
        {Object.entries(isPtbr ? xpContent : xpContentEn).map(
          ([key, content]) => {
            return (
              <div key={key} className="text-sm flex flex-col mb-2">
                <h2 className="text-brand-500 font-bold">{content.position}</h2>
                <strong className="">
                  {!content.company
                    ? content.period
                    : `${content.company} - ${content.period}`}
                </strong>
                <p className="text-sm mb-2">{content.description}</p>
                <p className="text-sm mb-2">
                  <strong>Soft skills:</strong> {content.softSkills}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
