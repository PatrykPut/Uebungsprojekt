import Stars from './Stars';
import './Sidebar.css';
import Filter from './Filter';


function Sidebar({ setSortOption }: { setSortOption: (value: string) => void}) {

    return (
        <div className='sidebar'>
            <Filter setSortOption={setSortOption}/>
            <Stars/>
        </div>
    )
}

export default Sidebar;