import Games from "./GameInfo";
import Filter from "./Filter";
import { useState } from "react";

function GameInfoFilter() {
const [sortOption, setSortOption] = useState('')

    return (
<div>
    <Filter setSortOption={setSortOption}/>
    <Games sortOption={sortOption}/>
</div>
);
}

export default GameInfoFilter;