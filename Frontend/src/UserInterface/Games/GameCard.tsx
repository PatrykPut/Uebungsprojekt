import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GameContainer = styled.div`
    width: 250px;
    height: 300px;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    border: white solid 1px ;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      border: black solid 1px;
    }
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
     <GameContainer onClick={() => {
      handleClick();
     }}
     onMouseOver={() => {
      showDescription();
     }}
     >   
          <Image src={process.env.PUBLIC_URL + game.image} alt={game.name} />                    
          <h3>{game.name}</h3>    
          <p>{game.releaseDate}</p>    
          <p>{game.developer}</p>  
     </GameContainer>
      );    
  }    