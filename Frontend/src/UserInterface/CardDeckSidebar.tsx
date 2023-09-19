import { Routes, Route, useMatch } from "react-router-dom";
import Sidebar from "./Sidebar/SideBar";
import styled from 'styled-components';
import Games from "./Games/CardDeck";
import GamePage from "./GameInDetail/GamePage";
import { IGame } from "./Games/GameCard";



const BigBox = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    top: 17vh;
`;

interface GamesProps {
    sortOption: string;
    selectedGame: IGame | null;
    setSelectedGame: React.Dispatch<React.SetStateAction<IGame | null>>;
    selectedStar: number;
    searchTerm: string;
    setSortOption:(value: string) => void;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
    setSearchTerm: (searchTerm: string) => void;
  }

const GameInfoSidebar =({sortOption, selectedGame, setSortOption, setSelectedGame, selectedStar, setSelectedStar, searchTerm, setSearchTerm} : GamesProps) => {

    const match = useMatch("game/:id")
    
    return (
<BigBox>
    {!match && <Sidebar setSortOption={setSortOption} selectedStar={selectedStar} setSelectedStar={setSelectedStar} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}
    <Routes>  
        <Route index element={<Games sortOption={sortOption} selectedStar={selectedStar} searchTerm={searchTerm} selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>}/>  
        <Route path="game/:id" element={<GamePage/>}/>  
      </Routes>  
</BigBox>
);
}

export default GameInfoSidebar;