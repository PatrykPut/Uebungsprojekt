import { useContext, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { GameContext } from '../../../App/GameContext';

const StarContainer = styled.div`
    height: max-content;
    width: 17.6vw;
    padding: 0.2wv;
    color: white;
    border-radius: 20px;
    justify-content:center;
    display: flex;
`;

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
    font-size: 3.5vw; 
    cursor: pointer;
    display:inline-block;
    color: ${props => props.isSelected ? 'rgb(255, 255, 27)' : ''};
    animation: ${props => props.isActive ? css`${spin} 0.5s forwards` : ''};
`;

interface StarProps {
    isActive: boolean;
    isSelected: boolean;
}

const Stars = () => {
    const context = useContext(GameContext);

    const {selectedStar, setSelectedStar,} = context;

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
            data-testid={index < selectedStar ? 'selectedStar' : 'unselectedStar'}
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