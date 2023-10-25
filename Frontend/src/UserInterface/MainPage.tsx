import { Routes, Route, useMatch, useLocation, useParams } from "react-router-dom";
import Sidebar from "./Sidebar/SideBar";
import styled, { css, keyframes } from 'styled-components';
import CardDeck from "./Games/CardDeck";
import { GamePage } from "./GameInDetail/GamePage";
import { RecommendedGames } from "./Recommended/RecommendedGames";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MainBox = styled.div`
    display:flex;
    justify-content: center;
    position: relative;
    width: 100%;
    top: 17vh;
`;
  
const fadeEnter = keyframes`  
  0% { opacity: 0; transform: scale(0.1) }  
  100% { opacity: 1; transform: scale(1) }  
`;  
  
const fadeExit = keyframes`  
  0% { opacity: 1; transform: scale(1); }  
  100% { opacity: 0; transform: scale(0.1); }  
`;  
  
const AnimationStyles = css`  
  &.fade-enter {  
    animation: ${fadeEnter} 0.5s linear;  
  }  
    
  &.fade-exit {  
    animation: ${fadeExit} 0.5s linear;  
  }  
`;  
  
const AnimatedDiv = styled.div`  
  ${AnimationStyles}  
`;  

const MainPage =() => {

    const location = useLocation();
    const match = useMatch("game/:id")

    return (
<MainBox>
    {!match && <Sidebar/>}
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Routes>    
                    <Route index element={
                        <AnimatedDiv>
                            <CardDeck/>
                        </AnimatedDiv>
                    }/>    
                    <Route path="game/:id" element={
                        <AnimatedDiv>
                            <GamePage/>
                        </AnimatedDiv>
                    }/>    
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    {!match && <RecommendedGames/>}    
</MainBox>
    );
}

export default MainPage;