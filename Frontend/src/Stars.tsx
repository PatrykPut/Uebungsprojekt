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

type StarProps = {
    isActive: boolean;
    isSelected: boolean;
}
type StarsProps = {
    selectedStar: number;
    setSelectedStar: React.Dispatch<React.SetStateAction<number>>;
}

const spin = keyframes`
from {transform:rotate(0deg)}
to {transform:rotate(40deg)}
`;


const Star = styled.span<StarProps>`
    font-size: 50px; 
    position: relative;
    bottom: 4px;
    cursor: pointer;
    color: ${props => props.isActive ? 'rgb(255, 255, 27)' : props.isSelected ? 'rgb(255, 255, 27)' : ''};

    animation: ${props => props.isActive || props.isSelected ? css`${spin} 2s linear infinite` : 'none'};

    &:hover {
        animation: ${spin} 2s linear infinite;
    }
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
