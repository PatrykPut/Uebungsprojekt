import styled from 'styled-components';    
import React, { useState, useEffect, useContext } from 'react'; 
import { GameCard } from './GameCard';
import { Game, GameContext } from '../../App/GameContext';

const AllGamesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 60vw;
    justify-content:space-evenly;
    height: max-content;
    margin-top: 20px; 
`;

const CardDeck = () => { 
  
  const context = useContext(GameContext);

if (!context) {
  throw new Error("CardDeck must be used within a GameProvider");
  }

  const {sortOption, platformOption, selectedStar, searchTerm} = context;

  const [games, setGames] = useState<Game[]>([]);
  
  useEffect(() => {  
    const allGamesWithRatings_URL = `http://localhost:8080/games/sorted?sortOption=${sortOption}`
     + (platformOption ? `&platform=${platformOption}` : '')
     + (selectedStar ? `&selectedStar=${selectedStar}` : '')
     + (searchTerm ? `&searchTerm=${searchTerm}` : '');
       
    fetch(allGamesWithRatings_URL)    
      .then((response) => response.json())    
      .then((originalJson: Game[]) => {
        console.log(originalJson);
        const json = [...originalJson]
        setGames(json);
        });
      },[sortOption, selectedStar, searchTerm, platformOption]);
        
  return (
      <AllGamesContainer>
          {games.map((game) => (
              <GameCard key={game.id} game={game}/>
          ))}
      </AllGamesContainer>   
  );    
}  

export default CardDeck; 
