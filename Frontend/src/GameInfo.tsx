import styled from 'styled-components';    
import React, { useState, useEffect } from 'react';
import { options } from './Sort';

const AllGamesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 60vw;
    justify-content:space-evenly;
    height: max-content;
    margin-top: 20px; 
    
`;

const GameContainer = styled.div`
    width: 250px;
    height: 200px;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-right:10px;
`;
     
const allGamesWithRatings_URL = 'http://localhost:8080/games';  
  
export interface Game {                                            
  id: number;        
  name: string;        
  releaseDate: string;        
  developer: string;
  platformName: string 
  ratings: Rating[]; 
  platforms: Platform[];     
}      
    
interface Rating {      
  id: number;   
  comment: string;      
  rating: number;      
} 

interface Platform {
  id: number;
  platformName: string;
}

interface GamesProps {
  sortOption: string;
  selectedGame: Game | null;
  setSelectedGame: React.Dispatch<React.SetStateAction<Game | null>>;
  selectedStar: number;
  searchTerm: string;
}

function Game({ game }: {game : Game}) {       
  return (   
      <GameContainer>                                          
        <h3>{game.name}</h3>    
        <p>{game.releaseDate}</p>    
        <p>{game.developer}</p>  
      </GameContainer>      
  );    
}    
    
function Rating({rating, game} : {rating : Rating,game : Game}) {    
  return (    
      <GameContainer>    
        <h3>{game.name}</h3>  
        <p>{rating.comment}</p>    
        <p>{rating.rating}</p>    
      </GameContainer>    
  );    
} 

function calculateAverageRatings(ratings: Rating[]): number {
    const sum = ratings.reduce((a, b) => a + b.rating, 0);
    return sum / ratings.length;
}

function Games({sortOption, selectedGame, setSelectedGame, selectedStar, searchTerm}: GamesProps) {    
  const [games, setGames] = useState<Game[]>([]);    
  
  useEffect(() => {    
    fetch(allGamesWithRatings_URL)    
      .then((response) => response.json())    
      .then((originalJson: Game[]) => {
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
        {selectedGame !== null ? (
          selectedGame.ratings.map((rating) => (
            <Rating key={rating.id} rating={rating} game={selectedGame}/>
          ))
        ) : (
          games.map((game) => (
            <div onClick={() => setSelectedGame(game)}>
              <Game key={game.id} game={game}/>
            </div>
          ))
        )}
      </AllGamesContainer>   
  );    
}  

export default Games; 

