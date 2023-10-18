import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Head from "../UserInterface/Head/Head";
import MainPage from "../UserInterface/MainPage";
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import { Game, GameContext } from "./GameContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;  
  }
`;

function App () {
    const [platformOption, setPlatformOption] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [selectedStar, setSelectedStar] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    
  return (
    
    <Router>
      <GlobalStyle/>
        <Head/>
         <GameContext.Provider value={{ sortOption, setSortOption, platformOption, setPlatformOption, selectedGame, setSelectedGame, selectedStar, setSelectedStar, searchTerm, setSearchTerm, allGames, setAllGames}}>
            <Routes>
              <Route path="/*" element={<MainPage/>}/>
            </Routes>
         </GameContext.Provider>
    </Router>
  );
};
  
export default App; 