import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Game, Rating,  } from "../Games/GameCard";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: space-between;  
  width: 60vw;  
  background-color: #fafafa;  
  padding: 20px;  
  border-radius: 10px;  
  //box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  margin-bottom: 20px;
`;

const RatingsHeadline = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
`;

const RatingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

const Ratings = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 25%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  margin: 10px;
`;

const DescriptionContainer = styled.div`
  background-color: #fafafa;
  height: 380px;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.2), 0px 6px 10px -2px rgba(0, 0, 0, 0.1); 
  font-size: 20px;  
`;

const Trailer = styled.iframe`
  background-color: lightgray;
  margin-bottom: 10px;
  margin-right: 10px;
  border: none;
`;

const Trailer_Description = styled.div`
  display: flex;
`;

function GamePage() {  
  const { id } = useParams<{ id: string }>();  
  const [gameWithRatings, setGameWithRatings] = useState<{ game : Game, ratings : Rating[] } | null>(null);  
  
  useEffect(() => {  
    fetch(`http://localhost:8080/game/${id}`)  
      .then((response) => response.json())  
      .then((data: { game : Game, ratings : Rating[] }) => setGameWithRatings(data))  
  }, [id]);  
  
  return gameWithRatings ?  (  
    <MainContainer>
      <GameContainer>
      <div>
      <h1>{gameWithRatings.game.name}</h1>
      <p>{"Developer: " + gameWithRatings.game.developer}</p>
      <p>{"Release Date: " + gameWithRatings.game.releaseDate}</p> 
      </div>
      <img src={process.env.PUBLIC_URL + gameWithRatings.game.image} alt={gameWithRatings.game.name} />
      </GameContainer>

      <Trailer_Description>
      <Trailer width="800" height="400" src={gameWithRatings.game.trailer}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        No Trailer available
        </Trailer> 
      
      <DescriptionContainer>
      <p>{gameWithRatings.game.description}</p>
      </DescriptionContainer>
      </Trailer_Description>

      
        <RatingsHeadline>Ratings</RatingsHeadline>
      <RatingsContainer>
      {gameWithRatings.ratings.map((rating) => (
      <Ratings key={rating.id}>
        <p>{rating.comment}</p>
        <p>{"Rating: " + rating.rating}</p>
      </Ratings>
      ))}  
        </RatingsContainer> 
      
    </MainContainer>  
  ) : (
    null
  );
}  

export default GamePage;