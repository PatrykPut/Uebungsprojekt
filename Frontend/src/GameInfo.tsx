  /*import './GameInfo.css'

 const GameInfo: React.FC = () => {

  return (
    <div>
      <div className='navbar'>

      </div>
      <div className='header-box'>
        <div className='header'>
          <h1>Newest Games</h1>
        </div>
      </div>
      <div className='info-box'>
        <div className='games'>
          <p>Super Mario Bros</p>
          <p>Erscheinungsdatum: 13.09.1985</p>
          <p>Entwickler: Nintendo</p>
        </div>
        <div className='games'>
          <p>Assassin's Creed Valhalla</p>
          <p>Erscheinungsdatum: 10.11.2020</p>
          <p>Entwickler: Ubisoft</p>
        </div>
        <div className='games'>
          <p>Cyberpunk 2077</p>
          <p>Erscheinungsdatum: 10.12.2020</p>
          <p>Entwickler: CD Projekt</p>
        </div>
        <div className='games'>
          <p>Among Us</p>
          <p>Erscheinungsdatum: 15. Juni 2018</p>
          <p>Entwickler: InnerSloth</p>
        </div>
      </div>
    </div>
  )
  };

  export default GameInfo;*/

import React, { useEffect, useState } from 'react';  
  
  function GameInfo() {
      const [isLoaded, setIsLoaded] = useState(false);      //variable zum checken ob die Daten geladen wurden
      const [game, setGame] = useState<Game | null>(null);  //variable zum speicher der Daten des Spiels 

      interface Game {                                      //Interface für das Game Objekt
        id: number;  
        name: string;  
        releaseDate: string;  
        developer: string;  
      }
    
      useEffect(() => {                                     //GET-Anfrage wird an die URL gesendet, Antwort wird in JSON umgewandelt und aktualisiert den State der game- und isLoaded Variablen
          fetch('http://localhost:8080/game/3')  
              .then(response =>   
                  response.json())  
               
              .then(json => {  
                  setGame(json); 
                  setIsLoaded(true); 
              })  
               
      }, []);   
    
      if (isLoaded) { 
        return ( 
          <div>  
          {game && (  
              <div>  
                  <h2>{game.name}</h2>  
                  <p>{game.releaseDate}</p>  
                  <p>{game.developer}</p>  
              </div>  
          )}  
      </div> 
           
      );}
      else {
        return null
      }  
  }  

  export default GameInfo;  
  