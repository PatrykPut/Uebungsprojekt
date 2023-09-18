import Stars from './Stars';
import Filter from './Sort';
import SearchGame from './SearchGame';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18vw;
    height:100vh ;
    background-color: lightgrey;
    position: fixed;
    left: 0;
`;

interface SidebarProps {
    setSortOption: (value: string) => void;
    selectedStar: number;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

function Sidebar({ setSortOption, selectedStar, setSelectedStar, searchTerm, setSearchTerm }: SidebarProps) {

    

    return (
        <SidebarContainer>
            <SearchGame searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Stars selectedStar={selectedStar} setSelectedStar={setSelectedStar}/>
            <Filter setSortOption={setSortOption}/>
        </SidebarContainer>
    )
}

export default Sidebar;