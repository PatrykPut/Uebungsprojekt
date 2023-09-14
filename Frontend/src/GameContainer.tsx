import Games from "./GameInfo";
import { useState } from "react";
import Sidebar from "./SideBar";
import styled from 'styled-components';
import { Game } from "./GameInfo";


const BigBox = styled.div`
    display:flex;
`;

const GameInfoToggle =() => {
    const [sortOption, setSortOption] = useState('');
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    return (
<BigBox>
    <Sidebar setSortOption={setSortOption}/>
    <Games sortOption={sortOption} selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>
</BigBox>
);
}

export default GameInfoToggle;