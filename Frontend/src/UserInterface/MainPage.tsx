import { Routes, Route, useMatch } from "react-router-dom";
import Sidebar from "./Sidebar/SideBar";
import styled from 'styled-components';
import CardDeck from "./Games/CardDeck";
import GamePage from "./GameInDetail/GamePage";

const BigBox = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    top: 17vh;
`;

const MainPage =() => {

    const match = useMatch("game/:id") // wenn Url != game/:id dann wird die Sidabar gerendert

    return (
<BigBox>
    {!match && <Sidebar/>}
    <Routes>  
        <Route index element={<CardDeck/>}/>  
        <Route path="game/:id" element={<GamePage/>}/>  
      </Routes>  
</BigBox>
);
}

export default MainPage;