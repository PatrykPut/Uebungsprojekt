import { useState } from 'react';
import styled from 'styled-components';

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
}

const Star = styled.span<StarProps>`
    font-size: 50px; 
    position: relative;
    bottom: 4px;
    cursor: pointer;
    color: ${props => props.isActive ? 'rgb(221, 221, 25)' : ''};
`;

function Stars() {
    const [activeStar, setActiveStar] = useState(0);

    const mouseOver = (index : number) => {
        setActiveStar(index);
    };

    const mouseLeave = () => {
        setActiveStar(0)
    };

    return (
        <StarContainer>
            {[...Array(5)].map((star, index) => (
            <Star
            key={index}
            isActive={index < activeStar}
            onMouseOver={() => mouseOver(index + 1)}
            onMouseLeave={mouseLeave}
            >
            &#9733;
            </Star>
            ))}
        </StarContainer>
    );
}

export default Stars;

/*
    
    $animate={color.animateStar1}

    animation: ${props => 
    (props.$animate ? css`${spin} 2s linear infinite` : 'none')};

    const spin = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(40deg);}
`;
    
<{ $animate: boolean }>

    */