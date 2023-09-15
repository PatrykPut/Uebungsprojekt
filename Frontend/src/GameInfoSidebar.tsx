import Games from "./GameInfo";
import { useState } from "react";
import Sidebar from "./SideBar";
import styled from 'styled-components';
import { Game } from "./GameInfo";

const BigBox = styled.div`
    display:flex;
`;

const GameInfoSidebar =() => {
    const [sortOption, setSortOption] = useState('');
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [selectedStar, setSelectedStar] = useState(0);

    return (
<BigBox>
    <Sidebar setSortOption={setSortOption} selectedStar={selectedStar} setSelectedStar={setSelectedStar}/>
    <Games sortOption={sortOption} selectedGame={selectedGame} setSelectedGame={setSelectedGame} selectedStar={selectedStar}/>
</BigBox>
);
}

export default GameInfoSidebar;