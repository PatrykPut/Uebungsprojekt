import Stars from './Stars';
import './Sidebar.css';
import Filter from './Filter';
import ToggleRating from './toggleRating';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Filter/>
            <ToggleRating/>
            <Stars/>
        </div>
    )
}

export default Sidebar;