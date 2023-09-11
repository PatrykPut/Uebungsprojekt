import Stars from './Stars';
import './Sidebar.css';
import Filter from './Filter';
import { useState } from "react";


function Sidebar() {
const [sortOption, setSortOption] = useState('');

    return (
        <div className='sidebar'>
            <Filter setSortOption={setSortOption}/>
            <Stars/>
        </div>
    )
}

export default Sidebar;