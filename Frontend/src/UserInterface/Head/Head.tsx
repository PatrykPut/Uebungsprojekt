import styled, { keyframes } from 'styled-components';

const HeaderContainer = styled.div.withConfig({
    displayName: 'Header'
})`
    display:flex;
    justify-content: left;
    align-items: center;
    background-color: #006c80;
    height:10vh;
    font-size: 50px;
    padding: 20px;
`;

const NavbarContainer = styled.div`
    display: flex;
    height: 4vh;
    background-color: #66a5ad;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 30px;
`; 

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Controller = styled.img`
    height: 100px;
    margin-left: 20px;
    animation: ${spin} 5s infinite linear;
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
            <HeaderContainer>
                GameLibrary
                <Controller src="/controller.png" alt='controller'/>
            </HeaderContainer>
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