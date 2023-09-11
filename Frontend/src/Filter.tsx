import { useState } from 'react';
import './Filter.css';

interface FilterProps {
    setSortOption: (value: string) => void;
}

function Filter({setSortOption}: FilterProps) {
    const [display, setDisplay] = useState({drop: 'none'});

    const toggleDropdown = () => {
        setDisplay(prevState => ({
            drop: prevState.drop === 'none' ? 'block' : 'none'
        }))
    }
return (
    <div className='filter'>
    <div className='input' onClick={toggleDropdown}>Filter</div>
    <div className='drop' id='drop' style={{display: display.drop}}>

    <div className='search' id='releaseDate' onClick={() => 
    setSortOption('releaseDate')}>Newest</div>
    <div className='search' onClick={() => 
    setSortOption('mostLiked')}>Most liked</div>
    </div>
    </div>
)
}

export default Filter;