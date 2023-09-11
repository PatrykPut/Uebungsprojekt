import './GameInfo.css'    
import React, { useState, useEffect } from 'react'; 
import Sidebar from './SideBar';    
     
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
      <div className='game'>                                          
        <h3>{game.name}</h3>    
        <p>{game.releaseDate}</p>    
        <p>{game.developer}</p>  
      </div>      
  );    
}    
    
function Rating({rating, game} : {rating : Rating, game: Game}) {    
  return (    
    <div className='game'>    
      <h3>{game.name}</h3>  
      <p>{rating.comment}</p>    
      <p>{rating.rating}</p>    
    </div>    
  );    
}  

function Games({sortOption}: {sortOption : string}) {    
  const [games, setGames] = useState<Game[]>([]);    
  const [showRatings, setShowRatings] = useState(false);  
  
  useEffect(() => {    
    fetch(API_URL)    
      .then((response) => response.json())    
      .then((json) => {
        if (sortOption === 'releaseDate') {
          json.sort((a: Game, b: Game) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        } 
        else if (sortOption === 'mostLiked') {
          json.sort((a: Game, b: Game) => b.ratings.length - a.ratings.length);
        }   
        setGames(json);    
      });    
  },[sortOption]);      
  
  const toggleShowRatings = () => {  
    setShowRatings(!showRatings);  
  } 
  
  return (
    <div className='big-box'> 
      <Sidebar/>   
      <div className='game-box'>
      <button className='button' onClick={toggleShowRatings}>    
            {showRatings ? 'Show Games' : 'Show Ratings'}    
          </button>
        {games.map((game) => (    
          showRatings 
            ? game.ratings && game.ratings.map((rating) => (
          <Rating key={rating.id} rating={rating} game={game}/>
          )) 
          : <Game key={game.id} game={game}/>  
        ))} 
        </div>
      </div>    
  );    
}  

export default Games;