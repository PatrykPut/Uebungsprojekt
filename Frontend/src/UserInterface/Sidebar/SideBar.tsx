import Stars from './SidebarComponents/Stars';
import Sort from './SidebarComponents/Sort';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18vw;
    height:100% ;
    background-color: #66a5ad;
    position: fixed;
    left: 0;
    z-index: 1;
`;

const Sidebar = () => {

    return (
        <SidebarContainer data-testid="SidebarContainer">
            <Stars/>
            <Sort/>
        </SidebarContainer>
    )
}

export default Sidebar;