import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
    perspective: 1500px;
    transform-style: preserve-3d;
    width: 250px;
    height: 320px;
    position: relative;
    transition: transform 0.8s;
`;

const CardWrapper = styled.div`
    width: 250px;
    height: 320px;
    perspective: 1000px;
    margin-bottom: 20px;
    &:hover ${CardContainer} {
      transform: rotateY(180deg);
    }
`;

const GameContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 20px;
    border: white solid 1px ;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-right: 10px;
    cursor: pointer;
    backface-visibility: hidden;
    overflow: auto;
`;

const GameContainerBack = styled(GameContainer)`
    transform: rotateY(180deg);
`;

const Image = styled.img`
    height: 100px;
    width: auto;
`;



export interface Game {                                            
    id: number;        
    name: string;        
    releaseDate: string;        
    developer: string;
    description: string;
    trailer: string;
    image: string;     
  }

export interface Rating {      
    id: number;   
    comment: string;      
    rating: number;      
  }
  
export function GameCard({ game }: {game : Game}) { 
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`game/${game.id}`);
    }

    return (   
      <CardWrapper>
        <CardContainer>
        <GameContainer onClick={handleClick}>   
            <Image src={process.env.PUBLIC_URL + game.image} alt={game.name} />                    
              <h3>{game.name}</h3>    
              <p>{game.releaseDate}</p>    
              <p>{game.developer}</p>  
        </GameContainer>
        <GameContainerBack onClick={handleClick}>
          <p>{game.description}</p>
        </GameContainerBack>
     </CardContainer>
      </CardWrapper>
    );
  }    