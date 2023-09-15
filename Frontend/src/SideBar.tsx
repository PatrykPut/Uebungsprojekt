import Stars from './Stars';
import Filter from './Sort';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18vw;
    height:100vh ;
    background-color: lightgrey;
`;

interface SidebarProps {
    setSortOption: (value: string) => void;
    selectedStar: number;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
}

function Sidebar({ setSortOption, selectedStar, setSelectedStar }: SidebarProps) {

    return (
        <SidebarContainer>
            <Stars selectedStar={selectedStar} setSelectedStar={setSelectedStar}/>
            <Filter setSortOption={setSortOption}/>
        </SidebarContainer>
    )
}

export default Sidebar;