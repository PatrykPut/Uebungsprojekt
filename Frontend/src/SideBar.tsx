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

const ToggleRatings = styled.div`
    width: 100%;
    height: max-content;
    background-color: aliceblue;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    text-align: left;
    border-bottom: solid greenyellow 0.5px;

    &:hover {
        background-color: rgb(208, 233, 255); 
    }
`;

function Sidebar({ setSortOption, toggleShowRatings, showRatings }: { setSortOption: (value: string) => void; toggleShowRatings: () => void; showRatings: boolean}) {

    return (
        <SidebarContainer>
            <ToggleRatings onClick={toggleShowRatings}>    
                {showRatings ? 'Show Games' : 'Show Ratings'}    
            </ToggleRatings>
            <Filter setSortOption={setSortOption}/>
            <Stars/>
        </SidebarContainer>
    )
}

export default Sidebar;