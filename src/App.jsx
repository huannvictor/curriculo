import { Header } from "./components/Header";
import { LastXP } from "./components/LastXP";

export function App() {
  return (
    <div className="App flex flex-col items-center justify-center gap-4 p-4">
      <Header className="justify-center" />
      <div className="flex gap-3 grid-cols-2">
        <div className="left flex flex-col gap-3 ">
          <LastXP /> 
          <LastXP /> 
        </div>
        <LastXP />
      </div>
    </div>
  );
}
