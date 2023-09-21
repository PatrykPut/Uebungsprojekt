import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GameContainer = styled.div`
    width: 250px;
    height: 200px;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      border: black solid 1px;
    }
`;

export interface IGame {                                            
    id: number;        
    name: string;        
    releaseDate: string;        
    developer: string;
    description: string;
    trailer: string;
    platformName: string 
    ratings: IRating[]; 
    platforms: IPlatform[];     
  }

export interface IRating {      
    id: number;   
    comment: string;      
    rating: number;      
  } 
  
export interface IPlatform {
    id: number;
    platformName: string;
  }

export function GameCard({ game }: {game : IGame}) {   
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`game/${game.id}`);
    }
  
    return (   
     <GameContainer onClick={() => {
      handleClick();
      console.log("Click");
     }}>                       
          <h3>{game.name}</h3>    
          <p>{game.releaseDate}</p>    
          <p>{game.developer}</p>  
     </GameContainer>
      );    
  }    

