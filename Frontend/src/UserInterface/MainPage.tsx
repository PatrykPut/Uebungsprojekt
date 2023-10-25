import { Routes, Route, useMatch } from "react-router-dom";
import Sidebar from "./Sidebar/SideBar";
import styled from 'styled-components';
import CardDeck from "./Games/CardDeck";
import { GamePage } from "./GameInDetail/GamePage";
import { RecommendedGames } from "./Recommended/RecommendedGames";

const MainBox = styled.div`
    display:flex;
    justify-content: center;
    position: relative;
    width: 100%;
    top: 17vh;
`;

const MainPage =() => {

    const match = useMatch("game/:id")

    return (
<MainBox>
    {!match && <Sidebar/>}
    <Routes>  
        <Route index element={<><CardDeck/></>}/>  
        <Route path="game/:id" element={<GamePage/>}/>  
      </Routes> 
      {!match && <RecommendedGames/>}    
</MainBox>
);
}

export default MainPage;