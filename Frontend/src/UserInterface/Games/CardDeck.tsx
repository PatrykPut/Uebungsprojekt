import styled from 'styled-components';    
import React, { useState, useEffect } from 'react'; 
import { Game, GameCard } from './GameCard';

const AllGamesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 60vw;
    justify-content:space-evenly;
    height: max-content;
    margin-top: 20px; 
`;

interface GamesProps {
  sortOption: string;
  selectedGame: Game | null;
  setSelectedGame: React.Dispatch<React.SetStateAction<Game | null>>;
  selectedStar: number;
  searchTerm: string;
  platformOption: string;
}

function Games({sortOption, platformOption, selectedStar, searchTerm} : GamesProps) {  
  
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

export default Games; 
