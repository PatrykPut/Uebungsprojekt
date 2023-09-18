import Games from "./GameInfo";
import { useState } from "react";
import Sidebar from "./SideBar";
import styled from 'styled-components';
import { Game } from "./GameInfo";

const BigBox = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    top: 17vh;
`;

const GameInfoSidebar =() => {
    const [sortOption, setSortOption] = useState('');
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [selectedStar, setSelectedStar] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    return (
<BigBox>
    <Sidebar setSortOption={setSortOption} selectedStar={selectedStar} setSelectedStar={setSelectedStar} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <Games sortOption={sortOption} selectedGame={selectedGame} setSelectedGame={setSelectedGame} selectedStar={selectedStar} searchTerm={searchTerm}/>
</BigBox>
);
}

export default GameInfoSidebar;