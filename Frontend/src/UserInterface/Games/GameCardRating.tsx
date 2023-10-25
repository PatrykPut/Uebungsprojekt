import { useState, useEffect } from 'react';  
import styled from "styled-components"; 
import { Game, Rating } from '../../App/GameContext'; 
  
const Stars = styled.p`  
    position: absolute;  
    bottom: 0;  
    font-size: 20px;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
`;  

const Yellow = styled.span`
    color: rgb(255, 255, 25);
    
`;
  
export const GameCardRating = ({ id } : { id : string}) => {  
    const [gameWithRatings, setGameWithRatings] = useState<{ game : Game, ratings : Rating[] } | null>(null);    
  
    useEffect(() => {     
        fetch(`http://localhost:8080/game/${id}`)      
            .then((response) => response.json())      
            .then((data: { game : Game, ratings : Rating[] }) =>   
                setGameWithRatings(data))     
    } , [id]);    
  
    const ratingLength = gameWithRatings?.ratings.length; 
    const averageRating = gameWithRatings
    ? gameWithRatings.ratings.reduce((acc, rating) => acc + rating.rating, 0) / gameWithRatings.ratings.length 
    : 0;

    const stars = Array.from({ length: 5 }, (_, i) => {
        const star = i < Math.round(averageRating) ? '★' : '☆';
        return i < Math.round(averageRating) ? <Yellow>{star}</Yellow> : star;
    });
  
    return (  
        <Stars>{stars}({ratingLength})</Stars>  
    );  
}  
