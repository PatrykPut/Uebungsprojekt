import './GameInfo.css';
import React, { useEffect, useState } from 'react';  
  
  function GameInfo() {
      const [isLoaded, setIsLoaded] = useState(false);      //variable zum checken ob die Daten geladen wurden
      const [games, setGames] = useState<Game[]>([])        //Array zum speicher der Daten des Spiels 

      interface Game {                                      //Interface für das Game Objekt
        id: number;  
        name: string;  
        releaseDate: string;  
        developer: string;  
      }
    
      useEffect(() => {                                     //GET-Anfrage wird an die URL gesendet, Antwort wird in JSON umgewandelt und aktualisiert den State der games- und isLoaded Variablen
          fetch('http://localhost:8080/games')  
              .then(response =>   
                  response.json())  
               
              .then(json => {  
                  setGames(json); 
                  setIsLoaded(true); 
              })   
      }, []);   
    
      if (isLoaded) {                                       //wenn die Daten geladen wurden wird ein div mit den Daten zurück gegeben
        return ( 
          <div className='games-box'>
            {games.map((game: Game) => ( 
              <div className='game'>  
                  <h2 className='title'>{game.name}</h2>  
                  <p>{game.releaseDate}</p>  
                  <p>{game.developer}</p>  
              </div>  
          ))}  
      </div>    
      );}
       else {
        return null
      }  
  }  

  export default GameInfo;  
  