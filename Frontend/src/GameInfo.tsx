import styled from 'styled-components';    
import React, { useState, useEffect } from 'react';
import { NamedImportBindings } from 'typescript';

const AllGamesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 60vw;
    height: max-content;
    margin-top: 20px; 
    margin-left: 2vw;
`;

const GameContainer = styled.div`
    width: 250px;
    height: 200px;
    justify-content: center;
    border:black solid 1px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover {
    box-shadow:0px 10px 13px -7px #000000 ;
    }
`;
     
const API_URL = 'http://localhost:8080/games';  
  
interface Game {                                            
  id: number;        
  name: string;        
  releaseDate: string;        
  developer: string;      
  ratings: Rating[];      
}      
    
interface Rating {      
  id: number;   
  name: string;     
  comment: string;      
  rating: number;      
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

function Games({sortOption, showRatings}: {sortOption : string, showRatings: boolean}) {    
  const [games, setGames] = useState<Game[]>([]);    
  
  useEffect(() => {    
    fetch(API_URL)    
      .then((response) => response.json())    
      .then((json: Game[]) => {
        if (sortOption === 'newest') {
          json.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        } 
        else if (sortOption === 'mostRatings') {
          json.sort((a, b) => b.ratings.length - a.ratings.length);
        }
        else if (sortOption === 'default')  {
          setGames(json);
        }
        else if (sortOption === 'bestRatings') {
          json.sort((a, b) => calculateAverageRatings(b.ratings) - calculateAverageRatings(a.ratings));
        }  
        setGames(json);    
      });    
  },[sortOption]);        
  
  return (
      <AllGamesContainer>
        {games.map((game) => (    
          showRatings 
            ? game.ratings && game.ratings.map((rating) => (
          <Rating key={rating.id} rating={rating} game={game}/>
          )) 
          : <Game key={game.id} game={game}/>  
        ))} 
        </AllGamesContainer>   
  );    
}  

export default Games;