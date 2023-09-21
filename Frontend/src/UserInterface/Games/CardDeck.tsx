import styled from 'styled-components';    
import React, { useState, useEffect } from 'react'; 
import { IGame, GameCard } from './GameCard';
import { IRating } from './GameCard';

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
  selectedGame: IGame | null;
  setSelectedGame: React.Dispatch<React.SetStateAction<IGame | null>>;
  selectedStar: number;
  searchTerm: string;
  platformOption: string;
}

function calculateAverageRatings(ratings: IRating[]): number {
    const sum = ratings.reduce((a, b) => a + b.rating, 0);
    return sum / ratings.length;
}

function Games({sortOption, platformOption, selectedStar, searchTerm} : GamesProps) {  
  
  const [games, setGames] = useState<IGame[]>([]);
  
  useEffect(() => {  
    const allGamesWithRatings_URL = `http://localhost:8080/games/sorted?sortOption=${sortOption}`
                                   + (platformOption ? `&platform=${platformOption}` : '')
                                   + (selectedStar ? `&selectedStar=${selectedStar}` : '')
                                   + (searchTerm ? `&searchTerm=${searchTerm}` : '');  
    fetch(allGamesWithRatings_URL)    
      .then((response) => response.json())    
      .then((originalJson: IGame[]) => {
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
