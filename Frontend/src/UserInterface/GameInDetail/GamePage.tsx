import { useEffect, useState } from "react";
import styled from 'styled-components';
import { RatingButton } from "./RatingButton";
import { Game, Rating } from "../../App/GameContext";
import { useParams } from "react-router-dom";

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #c4dfe6;
`;

const MainContainer = styled.div`
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: space-between;  
  width: 60vw;  
  background-color: #fafafa;
  padding-left: 20px;   
  padding-right: 20px; 
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  margin-bottom: 20px;
`;

const RatingsHeadline = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
  border-top: solid 0.5px;
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
  height: 94%;
  width: 30%;
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
  width: 70%;
  border-radius: 20px;
  height: 100%;
`;

const Trailer_Description = styled.div`
  display: flex;
  width: 100%;
`;

export function GamePage() {   

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { id } = useParams<{ id : string }>(); 
  const [gameWithRatings, setGameWithRatings] = useState<{ game : Game, ratings : Rating[] } | null>(null);  
  
  useEffect(() => {   
     
    fetch(`http://localhost:8080/game/${id}`)    
      .then((response) => response.json())    
      .then((data: { game : Game, ratings : Rating[] }) => 
        setGameWithRatings(data))   
  } , [id]);   
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  return gameWithRatings ? (  
    <BackgroundContainer>
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
      {isVideoLoaded && (
        <Trailer src={gameWithRatings.game.trailer}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        No Trailer available
        </Trailer> 
      )}
      
      <DescriptionContainer>
      <p>{gameWithRatings.game.description}</p>
      </DescriptionContainer>
      </Trailer_Description>

      <RatingButton gameId={id}/>

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
    </BackgroundContainer>  
  ) : (
    <div>Loading...</div>
    );
}  