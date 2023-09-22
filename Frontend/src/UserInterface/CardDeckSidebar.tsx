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
    setPlatformOption: (value: string) => void;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
    setSearchTerm: (searchTerm: string) => void;
    platformOption: string;
  }

const CardDeckSidebar =({sortOption, selectedGame, setSortOption, setPlatformOption, setSelectedGame, selectedStar, setSelectedStar, searchTerm, setSearchTerm, platformOption} : GamesProps) => {

    const match = useMatch("game/:id")
    
    return (
<BigBox>
    {!match && <Sidebar setSortOption={setSortOption} setPlatformOption={setPlatformOption} selectedStar={selectedStar} setSelectedStar={setSelectedStar} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}
    <Routes>  
        <Route index element={<Games sortOption={sortOption} platformOption={platformOption} selectedStar={selectedStar} searchTerm={searchTerm} selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>}/>  
        <Route path="game/:id" element={<GamePage/>}/>  
      </Routes>  
</BigBox>
);
}

export default CardDeckSidebar;