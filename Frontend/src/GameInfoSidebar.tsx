import GameInfo from './GameInfo';
import Sidebar from './SideBar';
import './GameInfoSidebar.css';


function GameInfoSidebar() {
    return (
        <div className='gameinfosidebar'>
            <Sidebar/>
            <GameInfo/>
        </div>
    )
}

export default GameInfoSidebar;