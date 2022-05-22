import { Header } from "./components/Header";
import { KnowledgeApplication } from "./components/KnowledgeApplication";
import { LastXP } from "./components/LastXP";
import { PersonalMotivation } from "./components/PersonalMotivation";
import { Studies } from "./components/Studies";
import { BestRepos } from "./components/BestRepos"

export function App() {
  return (
    <div className="App flex flex-col items-center justify-center gap-4 p-4">
      <Header className="justify-center sm:max-w-sm" />
      <div className="flex flex-col gap-3 sm:grid-cols-2 sm:flex-row">
        <div className="left flex flex-col gap-3 text-xs sm:max-w-sm">
          <PersonalMotivation />
          <KnowledgeApplication /> 
          <BestRepos />
        </div>
        <div className="left flex flex-col gap-3 text-xs sm:max-w-sm">
          <LastXP /> 
          <Studies/>
        </div>
      </div>
    </div>
  );
}
