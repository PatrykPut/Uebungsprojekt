import styled from 'styled-components';    
import { useEffect, useContext, useState } from 'react'; 
import { GameCard } from './GameCard';
import { Game, GameContext } from '../../App/GameContext';

const AllGamesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 60%;
    justify-content:space-evenly;
    height: max-content;
    margin-top: 20px; 
`;

const CardDeck = () => { 
  
  const context = useContext(GameContext);

  const {sortOption, platformOption, selectedStar, searchTerm, allGames, setAllGames} = context;

  useEffect(() => {  
    const allGamesWithRatings_URL = `http://localhost:8080/games/sorted?sortOption=${sortOption}`
     + (platformOption ? `&platform=${platformOption}` : '')
     + (selectedStar ? `&selectedStar=${selectedStar}` : '')
     + (searchTerm ? `&searchTerm=${searchTerm}` : '');
       
     fetch(allGamesWithRatings_URL)    
      .then((response) => response.json())    
      .then((originalJson: Game[]) => {
        const json = [...originalJson]
        setAllGames(json);

        });
      },[sortOption, selectedStar, searchTerm, platformOption, setAllGames]);

  return (
      <AllGamesContainer>
          {allGames.map((game) => (
              <GameCard key={game.id} game={game}/>
          ))}
      </AllGamesContainer>
  );    
}  

export default CardDeck; 
