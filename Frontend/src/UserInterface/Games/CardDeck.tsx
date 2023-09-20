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
        const json = [...originalJson]
        .sort((a, b) => {
          if (sortOption === options.sort[1]) {
            return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
          }
          else if (sortOption === options.sort[2])  {
            return b.ratings.length - a.ratings.length ;
          }
          else if (sortOption === options.sort[3]) {
            return calculateAverageRatings(b.ratings) - calculateAverageRatings(a.ratings);
          }
          return 0;
        })
        .filter(game => {
          if (options.platform.includes(sortOption)) {
            return game.platforms && game.platforms.some(platforms => platforms.platformName === sortOption)
          }
          return true;
        })
        .filter(game => {
          if (selectedStar > 0) {
            return Math.round(calculateAverageRatings(game.ratings)) === selectedStar;
          }
          return true;
        })
        .filter(game => {
          if (searchTerm) {
            return game.name.toLowerCase().includes(searchTerm.toLowerCase())
          }
          return true;
        });
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

//sortOption === options.platform[0] || sortOption === options.platform[1] || sortOption === options.platform[2] || sortOption === options.platform[3]
