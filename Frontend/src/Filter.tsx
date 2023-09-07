import { useState } from 'react';
import './Filter.css';

function Filter() {
    const [display, setDisplay] = useState({
        drop: 'none'
});
    const toggleDropdown = () => {
        setDisplay(prevState => ({
            drop: prevState.drop === 'none' ? 'block' : 'none'
        }))
    }
return (
    <div className='box'>
    <div className='input' onClick={toggleDropdown}>Filter</div>
    <div className='drop' id='drop' style={{display: display.drop}}>
    <div className='search' id='releaseDate'>Release Date</div>
    <div className='search'>Most liked</div>
    </div>
    </div>
    
)
}

export default Filter;