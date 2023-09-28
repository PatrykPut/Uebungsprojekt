import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Game } from "../Games/GameCard";
import styled from 'styled-components';

const MainContainer = styled.div`
  justify-content: space-between;
  width: 60vw;
  background-color: #f3fff3;
  padding: 10px;
`;

const GameContainer = styled.div`
  background-color: lightgray;
  height:max-content;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RatingsWithTitle = styled.div`
  margin-top: 300px;
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

const Trailer = styled.iframe`
  background-color: lightgray;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Trailer_Description = styled.div`
  display: flex;
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

      <Trailer_Description>
      <Trailer width="560" height="315" src={game.trailer} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Trailer> 
      
      <DescriptionContainer>
      <p>{game.description}</p>
      </DescriptionContainer>
      </Trailer_Description>

      <RatingsWithTitle>
        <h3>Ratings</h3>
      <RatingsContainer>
      {game.ratings.map((rating) => (
      <Ratings key={rating.id}>
        <p>{rating.comment}</p>
        <p>{rating.rating}</p>
      </Ratings>
      ))}  
        </RatingsContainer> 
      </RatingsWithTitle>
    </MainContainer>  
  ) : (
    null
  );
}  

export default GamePage;