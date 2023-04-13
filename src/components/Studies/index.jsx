import { studiesTitle, studies } from "./content";
import { studiesEn, studiesTitleEn } from "./contentEn";
import { titleFunction, subjectFunction } from "./functions";

export function Studies({ isPtbr }) {
  return (
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">
        {isPtbr ? studiesTitle : studiesTitleEn}
      </h1>
      <div className="content">
        {Object.entries(isPtbr ? studies : studiesEn).map(([key, content]) => {
          return (
            <div key={key} className="text-sm flex flex-col mb-2">
              <h2 className="text-brand-500 font-bold">{content.title}</h2>
              <div className="studyContainer">
                <strong>
                  {titleFunction(
                    isPtbr,
                    content.isVirtual,
                    content.entity,
                    content.link,
                    content.place
                  )}
                </strong>
                <div className="text-sm mb-2">
                  {subjectFunction(content.subject)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
