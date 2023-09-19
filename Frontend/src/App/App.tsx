import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../UserInterface/Head/Navbar";
import GameInfoSidebar from "../UserInterface/CardDeckSidebar";
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import { IGame } from "../UserInterface/Games/GameCard";

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

  const [sortOption, setSortOption] = useState('');
    const [selectedGame, setSelectedGame] = useState<IGame | null>(null);
    const [selectedStar, setSelectedStar] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

  return (
    
    <Router>
      <GlobalStyle/>
        <Navbar/>
         <Routes>
          <Route path="/*" element={<GameInfoSidebar sortOption={sortOption} selectedGame={selectedGame} setSortOption={setSortOption} setSelectedGame={setSelectedGame} selectedStar={selectedStar} setSelectedStar={setSelectedStar} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
         </Routes>
    </Router>
  );
};
  
export default App; 