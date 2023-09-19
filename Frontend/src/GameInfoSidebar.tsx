import { Routes, Route} from "react-router-dom";
import Sidebar from "./SideBar";
import styled from 'styled-components';
import { Game } from "./GameInfo";
import Games, { GamePage } from "./GameInfo";

const BigBox = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    top: 17vh;
`;

interface GamesProps {
    sortOption: string;
    selectedGame: Game | null;
    setSelectedGame: React.Dispatch<React.SetStateAction<Game | null>>;
    selectedStar: number;
    searchTerm: string;
    setSortOption:(value: string) => void;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
    setSearchTerm: (searchTerm: string) => void;
  }

const GameInfoSidebar =({sortOption, selectedGame, setSortOption, setSelectedGame, selectedStar, setSelectedStar, searchTerm, setSearchTerm} : GamesProps) => {
    
    return (
<BigBox>
    <Sidebar setSortOption={setSortOption} selectedStar={selectedStar} setSelectedStar={setSelectedStar} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <Routes>  
        <Route index element={<Games sortOption={sortOption} selectedStar={selectedStar} searchTerm={searchTerm} selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>}/>  
        <Route path="game/:id" element={<GamePage/>}/>  
      </Routes>  
</BigBox>
);
}

export default GameInfoSidebar;