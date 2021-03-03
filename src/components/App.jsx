import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import GameContainer from "./game/gameContainer";
import Main from "./main/main";

import SettingsContainer from "./settings/settings-container";
import Statistics from "./statistics/statistics";
import StatisticsContainer from "./statistics/statisticsContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/game" component={GameContainer} />
        <Route path="/settings" component={SettingsContainer} />
        <Route path="/statistics" component={StatisticsContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
