import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Game } from "../../../App/GameContext";

const CardContainer = styled.div`
    perspective: 1500px;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.4s;
`;

const CardWrapper = styled.div`
    width: 13.5vw;
    height: 21vh;
    perspective: 1000px;
    border-radius: 10px;
    margin-bottom: 30px;
    &:hover ${CardContainer} {
      transform: rotateY(180deg);
    }
`;

const GameContainerFront = styled.div`
    position: absolute;
    bottom: 100px;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 1vw;
    border: white solid 1px ;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
    backface-visibility: hidden;
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.9vw;
`;

const GameContainerBack = styled(GameContainerFront)`
    transform: rotateY(180deg);
    overflow: auto;
`;

const Image = styled.img`
    height: 55%;
    width: 100%;
`;
  
export function RecommendedGameCard({ game }: {game : Game}) { 
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`game/${game.id}`);
    }

    return (   
      <CardWrapper>
        <CardContainer>
        <GameContainerFront onClick={handleClick}>   
            <Image src={process.env.PUBLIC_URL + game.image} alt={game.name} />                    
              <h3>{game.name}</h3>    
        </GameContainerFront>
        <GameContainerBack onClick={handleClick}>
          <p>{game.description}</p>
        </GameContainerBack>
     </CardContainer>
      </CardWrapper>
    );
  }    