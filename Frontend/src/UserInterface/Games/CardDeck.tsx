import styled from 'styled-components';    
import React, { useState, useEffect } from 'react';
import { options } from '../Sidebar/Sort'; 
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
   
const allGamesWithRatings_URL = 'http://localhost:8080/games';  

interface GamesProps {
  sortOption: string;
  selectedGame: IGame | null;
  setSelectedGame: React.Dispatch<React.SetStateAction<IGame | null>>;
  selectedStar: number;
  searchTerm: string;
}

function calculateAverageRatings(ratings: IRating[]): number {
    const sum = ratings.reduce((a, b) => a + b.rating, 0);
    return sum / ratings.length;
}

function Games({sortOption, selectedStar, searchTerm} : GamesProps) {  
  
  const [games, setGames] = useState<IGame[]>([]);
  
  useEffect(() => {    
    fetch(allGamesWithRatings_URL)    
      .then((response) => response.json())    
      .then((originalJson: IGame[]) => {
        let json = [...originalJson]
        if (sortOption === options.sort[0]) {
          
        }
        else if (sortOption === options.sort[1]) {
          json.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        }
        else if (sortOption === options.sort[2])  {
          json.sort((a, b) => b.ratings.length - a.ratings.length);
        }
        else if (sortOption === options.sort[3]) {
          json.sort((a, b) => calculateAverageRatings(b.ratings) - calculateAverageRatings(a.ratings));
        }
        else if (sortOption === options.platform[0] || sortOption === options.platform[1] || sortOption === options.platform[2] || sortOption === options.platform[3]) {
          json = json.filter(game => game.platforms && game.platforms.some(platforms => platforms.platformName === sortOption))
        }
        if (selectedStar > 0) {
          json = json.filter(game => 
            Math.round(calculateAverageRatings(game.ratings)) === selectedStar);
        }
        if (searchTerm) {
          json = json.filter(game => 
            game.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          }
        setGames(json);
      });    
  },[sortOption, selectedStar, searchTerm]);        

  return (
      <AllGamesContainer>
          {games.map((game) => (
              <GameCard key={game.id} game={game}/>
          ))}
      </AllGamesContainer>   
  );    
}  

export default Games; 
