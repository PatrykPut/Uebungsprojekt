import Stars from './Stars';
import Sort from './Sort';
import SearchGame from './SearchGame';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 16vw;
    height:100vh ;
    background-color: lightgrey;
    position: fixed;
    left: 0;
`;

interface SidebarProps {
    setSortOption: (value: string) => void;
    setPlatformOption: (value: string) => void;
    selectedStar: number;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

function Sidebar({ setSortOption, setPlatformOption, selectedStar, setSelectedStar, searchTerm, setSearchTerm }: SidebarProps) {

    return (
        <SidebarContainer data-testid="SidebarContainer">
            <SearchGame searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Stars selectedStar={selectedStar} setSelectedStar={setSelectedStar}/>
            <Sort setSortOption={setSortOption} setPlatformOption={setPlatformOption}/>
        </SidebarContainer>
    )
}

export default Sidebar;