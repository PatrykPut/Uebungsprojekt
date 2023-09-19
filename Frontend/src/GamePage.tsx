import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Game } from "./GameInfo";
import styled from 'styled-components';

const MainContainer = styled.div`
  justify-content: space-between;
  width: 60vw;
`;

const GameContainer = styled.div`
  background-color: lightgray;
  height:max-content;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  `;

const RatingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Ratings = styled.div`
  background-color: lightgray;
  height:max-content;
  padding: 10px;
  width: 15vw;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const DescriptionContainer = styled.div`
  background-color: lightgray;
  height:max-content;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
`;

const TrailerContainer = styled.div`
  background-color: lightgray;
`;

function GamePage() {  
    const { id } = useParams<{ id: string }>();  
    const [game, setGame] = useState<Game | null>(null);  
    
    useEffect(() => {  
      fetch(`http://localhost:8080/game/${id}`)  
        .then((response) => response.json())  
        .then((data: Game) => setGame(data))  
    }, [id]);  
    
    return game ?  (  
      <MainContainer>
        <GameContainer>
        <h3>{game.name}</h3>
        <p>{game.developer}</p>
        <p>{game.releaseDate}</p> 
        </GameContainer> 
        
        <DescriptionContainer>
        <p>{game.description}</p>
        </DescriptionContainer>

        <iframe width="560" height="315" src={game.trailer} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <RatingsContainer>
        {game.ratings.map((rating) => (
        <Ratings key={rating.id}>
          <p>{rating.comment}</p>
          <p>{rating.rating}</p>
        </Ratings>
        ))}  
          </RatingsContainer> 
      </MainContainer>  
    ) : (
      null
    );
  }  

export default GamePage;