import styled from 'styled-components';

const Header = styled.div`
    display:flex;
    justify-content: left;
    align-items: center;
    background-color: gray;
    height:10vh;
    font-size: 50px;
    padding: 20px;
`;

const NavbarContainer = styled.div`
    display: flex;
    height: 4vh;
    background-color: rgb(72, 124, 107);
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`; 

const Controller = styled.img`
    height: 100px;
    margin-left: 20px;
`;

const MainContainer = styled.div`
    width:100vw;
    position: fixed;
    opacity: 1;
    z-index: 1;
`;

function Head() {
    return (
        <MainContainer>
            <Header>
                GameLibrary
                <Controller src="/controller.png" alt='controller'/>
            </Header>
            <NavbarContainer>
                <span>Home</span>
                <span>Games</span>
                <span>News</span>
                <span>Reviews</span>
                <span>Shop</span>
            </NavbarContainer>
        </MainContainer>
    );
  };

export default Head;