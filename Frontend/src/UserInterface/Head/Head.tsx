import styled, { keyframes } from 'styled-components';
import { SearchGame } from './SearchGame';

const HeaderContainer = styled.div`
    display:flex;
    justify-content: left;
    align-items: center;
    background-color: #006c80;
    height:14vh;
    font-size: 50px;
    padding: 20px;
    position: fixed;
    width: 100%;
    z-index: 2;
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

function Head() {
    return (
            <HeaderContainer>
                GameLibrary
                <Controller src="/controller.png" alt='controller'/>
                <SearchGame/>
            </HeaderContainer>
    );
  };

export default Head;