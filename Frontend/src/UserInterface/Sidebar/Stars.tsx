import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const StarContainer = styled.div`
    width: max-content;
    height: max-content;
    padding: 10px;
    color: white;
    border-radius: 20px;
    position: relative;
`;

interface StarProps {
    isActive: boolean;
    isSelected: boolean;
}
interface StarsProps {
    selectedStar: number;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
}

const spin = keyframes`
from {
    transform:rotate(0deg) scale(1);
    color: none;
}
to {
    transform:rotate(20deg) scale(1.2);
    color: rgb(255, 255, 27)
}
`;

const Star = styled.span<StarProps>`
    font-size: 50px; 
    position: relative;
    bottom: 4px;
    cursor: pointer;
    display:inline-block;
    color: ${props => props.isSelected ? 'rgb(255, 255, 27)' : ''};
    animation: ${props => props.isActive ? css`${spin} 0.5s forwards` : ''};
`;

function Stars({selectedStar, setSelectedStar} : StarsProps) {
    const [activeStar, setActiveStar] = useState(0);

    const mouseOver = (index : number) => {
        setActiveStar(index);
    };

    const mouseLeave = () => {
        setActiveStar(0)
    };

    const starClick = (index : number) => {
        if (index === selectedStar) {
            setSelectedStar(0);
        }
        else {
            setSelectedStar(index);
        }
    };

    return (
        <StarContainer>
            {[...Array(5)].map((star, index) => (
            <Star
            key={index}
            isActive={index < activeStar}
            isSelected={index < selectedStar}
            onMouseOver={() => mouseOver(index + 1)}
            onMouseLeave={mouseLeave}
            onClick={() => starClick(index + 1)}
            >
            &#9733;
            </Star>
            ))}
        </StarContainer>
    );
}

export default Stars;
