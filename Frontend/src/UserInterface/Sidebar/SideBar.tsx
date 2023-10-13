import Stars from './SidebarComponents/Stars';
import Sort from './SidebarComponents/Sort';
import SearchGame from './SidebarComponents/SearchGame';
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

const Sidebar = () => {

    return (
        <SidebarContainer data-testid="SidebarContainer">
            <SearchGame/>
            <Stars/>
            <Sort/>
        </SidebarContainer>
    )
}

export default Sidebar;