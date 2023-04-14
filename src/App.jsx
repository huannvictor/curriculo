import { Header } from "./components/Header";
import { KnowledgeApplication } from "./components/KnowledgeApplication";
import { LastXP } from "./components/LastXP";
import { PersonalMotivation } from "./components/PersonalMotivation";
import { Studies } from "./components/Studies";
import { BestRepos } from "./components/BestRepos";
import { useState } from "react";

export function App() {
  const [isPtbr, setIsPtBr] = useState(true);

  function toggleLanguage() {
    setIsPtBr(!isPtbr);
  }

  return (
    <div className="App flex flex-col items-center justify-center gap-4 p-4">
      <button
        className="fixed top-1 right-1 p-2 bg-brand-500 text-white rounded-lg hover:opacity-80"
        onClick={toggleLanguage}
      >
        {isPtbr ? "See in English" : "Ver em Português"}
      </button>
      <Header isPtbr={isPtbr} className="justify-center sm:max-w-lg" />
      <div className="flex flex-col gap-3 sm:grid-cols-2 sm:flex-row">
        <div className="left flex flex-col gap-3 text-sm sm:max-w-lg">
          <LastXP isPtbr={isPtbr} />
          <Studies isPtbr={isPtbr} />
        </div>
        <div className="left flex flex-col gap-3 text-sm sm:max-w-lg">
          <PersonalMotivation isPtbr={isPtbr} />
          <KnowledgeApplication isPtbr={isPtbr} />
          <BestRepos isPtbr={isPtbr} />
        </div>
      </div>
    </div>
  );
}
