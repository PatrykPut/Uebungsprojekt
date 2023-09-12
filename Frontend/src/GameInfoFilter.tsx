import Games from "./GameInfo";
import { useState } from "react";
import Sidebar from "./SideBar";
import styled from 'styled-components';

const BigBox = styled.div`
    display:flex;
`;

function GameInfoFilter() {
    const [sortOption, setSortOption] = useState('');
    const [showRatings, setShowRatings] = useState(false);

    const toggleShowRatings = () => {
        setShowRatings(!showRatings);
    }
    return (
<BigBox>
    <Sidebar setSortOption={setSortOption} toggleShowRatings={toggleShowRatings} showRatings={showRatings}/>
    <Games sortOption={sortOption} showRatings={showRatings}/>
</BigBox>
);
}

export default GameInfoFilter;