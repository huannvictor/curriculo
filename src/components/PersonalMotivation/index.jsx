import { PersonalMotivationContent, PersonalMotivationTitle } from "./content";
import {
  PersonalMotivationContentEn,
  PersonalMotivationTitleEn,
} from "./contentEn";

export function PersonalMotivation({ isPtbr }) {
  return (
    <div className="flex flex-col gap-1 bg-stone-100 rounded-xl py-7 px-9 shadow-md">
      <h1 className="text-lg text-brand-500 font-bold text-center">
        {isPtbr ? PersonalMotivationTitle : PersonalMotivationTitleEn}
      </h1>
      <div className="content text-justify indent-2">
        {Object.entries(
          isPtbr ? PersonalMotivationContent : PersonalMotivationContentEn
        ).map(([key, paragraph]) => {
          return <p key={key}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}
