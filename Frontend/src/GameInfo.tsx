import './GameInfo.css'
import React, { useState, useEffect } from 'react';   
  
interface Game {                                        
  id: number;    
  name: string;    
  releaseDate: string;    
  developer: string;    
}  
interface Rating {  
  id: number;  
  comment: string;  
  rating: number;  
}  
    
// Die Game-Komponente repräsentiert ein einzelnes Spiel    
function Game({ game }: {game : Game}) {    
  const [ratings, setRatings] = useState<Rating[]>([]);    
    
  useEffect(() => {    
    fetch(`http://localhost:8080/game/${game.id}`)    
      .then((response) => response.json())    
      .then((json) => {    
        setRatings(json.ratings);    
      });    
  }, [game.id]);    
    
  return (    
    <div className='game'>    
      <h2 className='title'>{game.name}</h2>    
      <p>{game.releaseDate}</p>    
      <p>{game.developer}</p>    
      {Array.isArray(ratings) && ratings.map((rating) => (    
        <div key={rating.id}>    
          <p>{rating.comment}</p>    
          <p>{rating.rating}</p>    
        </div>    
      ))}    
    </div>    
  );    
}    
    
// Die Games-Komponente listet alle Spiele auf    
function Games() {    
  const [games, setGames] = useState<Game[]>([]);    
    
  useEffect(() => {    
    fetch('http://localhost:8080/games')    
      .then((response) => response.json())    
      .then((json) => {    
        setGames(json);    
      });    
  }, []);    
    
  return (    
    <div className='games-box'>    
      {games.map((game) => (    
        <Game key={game.id} game={game} />    
      ))}    
    </div>    
  );    
}    
    
export default Games;  
  
  
