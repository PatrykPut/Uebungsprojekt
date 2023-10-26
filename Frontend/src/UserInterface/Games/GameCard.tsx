import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Game } from "../../App/GameContext";
import { GameCardRating } from "./GameCardRating";

const CardContainer = styled.div`
    transform-style: preserve-3d;
    height: 100%;
    transition: transform 0.4s;
`;

const CardWrapper = styled.div`
    width: 260px;;
    height: 330px;
    perspective: 1000px;
    margin-top: 3vh;
    &:hover ${CardContainer} {
      transform: rotateY(180deg);
    }
`;

const GameContainerFront = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
    cursor: pointer;
    backface-visibility: hidden;
    overflow: hidden;
    background-color: white;
`;

const GameContainerBack = styled(GameContainerFront)`
    transform: rotateY(180deg);
    overflow: auto;
`;

const Image = styled.img`
    height: 100px;
    width: auto;
`;
  
export function GameCard({ game }: {game : Game}) { 
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`game/${game.id}`);
    }

    return (   
      <CardWrapper>
        <CardContainer>
        <GameContainerFront onClick={handleClick}>   
            <Image src={process.env.PUBLIC_URL + game.image} alt={game.name} />                    
              <div>
              <h3>{game.name}</h3>    
              <p>{game.releaseDate}</p>    
              <p>{game.developer}</p>
              </div>
              <GameCardRating id={game.id.toString()}/>  
        </GameContainerFront>
        <GameContainerBack onClick={handleClick}>
          <p>{game.description}</p>
        </GameContainerBack>
     </CardContainer>
      </CardWrapper>
    );
  }    