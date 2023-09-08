import './GameInfo.css'  
import React, { useState, useEffect } from 'react';     
  
interface Game {                                          
  id: number;      
  name: string;      
  releaseDate: string;      
  developer: string;    
  ratings: Rating[];    
}    
  
interface Rating {    
  id: number;    
  comment: string;    
  rating: number;    
}    
  
function Game({ game }: {game : Game}) {     
  return ( 
    <div className='games-box'>
    <div className='game'>  
      <h3>{game.name}</h3>  
      <p>{game.releaseDate}</p>  
      <p>{game.developer}</p>
      </div> 
      <div className='ratings-box'> 
      {game.ratings.map((rating) => (  
        <Rating key={rating.id} rating={rating}/>  
      ))}  
    </div> 
    </div> 
  );  
}  
  
function Rating({rating} : {rating : Rating}) {  
  return (  
    <div className='game none'>  
      <p>{rating.comment}</p>  
      <p>{rating.rating}</p>  
    </div>  
  );  
}  
      
function Games() {  
  const [games, setGames] = useState<Game[]>([]);  
  
  useEffect(() => {  
    fetch('http://localhost:8080/games')  
      .then((response) => response.json())  
      .then((json) => {  
        setGames(json);  
      });  
  },[]);    
    
  return (  
    <div className='big-box'>  
      {games.map((game) => (  
        <Game key={game.id} game={game}/>  
      ))}  
    </div>  
  );  
}   
  
export default Games;  


  
  
  
