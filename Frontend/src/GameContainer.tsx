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
    const [showRatings, setShowRatings] = useState(false);
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const toggleShowRatings = () => {
        setShowRatings(!showRatings);
    }
    return (
<BigBox>
    <Sidebar setSortOption={setSortOption} toggleShowRatings={toggleShowRatings} showRatings={showRatings}/>
    <Games sortOption={sortOption} showRatings={showRatings} selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>
</BigBox>
);
}

export default GameInfoToggle;