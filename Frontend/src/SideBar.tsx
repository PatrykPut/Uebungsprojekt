import Stars from './Stars';
import './Sidebar.css';
import Filter from './Filter';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Filter/>
            <Stars/>
        </div>
    )
}

export default Sidebar;