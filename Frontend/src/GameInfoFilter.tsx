import Games from "./GameInfo";
import Filter from "./Filter";
import { useState } from "react";
import Sidebar from "./SideBar";
import './GameInfoFilter.css';

function GameInfoFilter() {
const [sortOption, setSortOption] = useState('')

    return (
<div className="bigbox">
    <Sidebar setSortOption={setSortOption}/>
    <Games sortOption={sortOption}/>
</div>
);
}

export default GameInfoFilter;