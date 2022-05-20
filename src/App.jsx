import { Header } from "./components/Header";
import { LastXP } from "./components/LastXP";

export function App() {
  return (
    <div className="App flex flex-col items-center justify-center gap-4 p-4">
      <Header />
      <LastXP/>
    </div>
  );
}
