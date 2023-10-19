import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Game } from "../../../App/GameContext";

const GameContainerFront = styled.div`
    width: 13vw;
    height: 15vh;
    padding: 1vw;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.9vw;
    margin-bottom: 4vh;
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
        <GameContainerFront onClick={handleClick}>   
            <Image src={process.env.PUBLIC_URL + game.image} alt={game.name} />                    
              <h3>{game.name}</h3>    
        </GameContainerFront>
    );
  }    