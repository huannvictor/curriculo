import { knowledgeTitle, knowledgeList } from "./content";
import { knowledgeListEn, knowledgeTitleEn } from "./contentEn";

export function KnowledgeApplication({ isPtbr }) {
  return (
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">
        {isPtbr ? knowledgeTitle : knowledgeTitleEn}
      </h1>
      <ul className="content">
        {Object.entries(isPtbr ? knowledgeList : knowledgeListEn).map(
          ([key, item]) => {
            return (
              <li key={key} className="list-disc">
                {item}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
