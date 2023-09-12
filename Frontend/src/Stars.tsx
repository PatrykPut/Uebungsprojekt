import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const StarContainer = styled.div`
    background-color: rgb(85, 85, 85);
    width: max-content;
    height: max-content;
    padding: 10px;
    color: white;
    border-radius: 20px;
    position: relative;
    top: 500px;
    display: none;
`;

const spin = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(40deg);}
`;

const Star = styled.span<{ $animate: boolean }>`
    font-size: 50px; 
    position: relative;
    bottom: 4px;
    cursor: pointer;
    animation: ${props => 
    (props.$animate ? css`${spin} 2s linear infinite` : 'none')};
`;

function Stars() {
    const [color, setColor] = useState({
        star1: '',
        star2: '',
        star3: '',
        star4: '',
        star5: '',
        animateStar1: false
    });

    const mouseOver1 = () => {
        setColor({
           star1: 'yellow',
           star2: '',
           star3: '',
           star4: '',
           star5: '', 
           animateStar1: true,
        });
    }
    console.log(color.animateStar1);
    const mouseOver2 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: '',
            star4: '',
            star5: '',
            animateStar1: true
        });
    }
    const mouseOver3 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: 'rgb(221, 221, 25)',
            star4: '',
            star5: '',
            animateStar1: true
        });
    }
    const mouseOver4 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: 'rgb(221, 221, 25)',
            star4: 'rgb(221, 221, 25)',
            star5: '',
            animateStar1: true
        });
    }
    const mouseOver5 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: 'rgb(221, 221, 25)',
            star4: 'rgb(221, 221, 25)',
            star5: 'rgb(221, 221, 25)',
            animateStar1: true
        });
    }
    const mouseLeave = () => {
        setColor ({
            star1: '',
            star2: '',
            star3: '',
            star4: '',
            star5: '',
            animateStar1: false
        });
    }
    return (
        <StarContainer>
            <Star style={{color: color.star1}} $animate={color.animateStar1} onMouseOver={mouseOver1} onMouseLeave={mouseLeave}>&#9733;</Star>
        </StarContainer>
    )
}

export default Stars;


    /*<Star style={{color: color.star2}} onMouseOver={mouseOver2} onMouseLeave={mouseLeave}>&#9733;</Star>
    <Star style={{color: color.star3}} onMouseOver={mouseOver3} onMouseLeave={mouseLeave}>&#9733;</Star>
    <Star style={{color: color.star4}} onMouseOver={mouseOver4} onMouseLeave={mouseLeave}>&#9733;</Star>
    <Star style={{color: color.star5}} onMouseOver={mouseOver5} onMouseLeave={mouseLeave}>&#9733;</Star>*/