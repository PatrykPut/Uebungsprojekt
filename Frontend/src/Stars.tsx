import { useState } from 'react';
import './Stars.css'

function Stars() {
    const [color, setColor] = useState({
        star1: '',
        star2: '',
        star3: '',
        star4: '',
        star5: ''
    });

    const mouseOver1 = () => {
        setColor({
           star1: 'yellow',
           star2: '',
           star3: '',
           star4: '',
           star5: '' 
        });
    }
    const mouseOver2 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: '',
            star4: '',
            star5: ''
        });
    }
    const mouseOver3 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: 'rgb(221, 221, 25)',
            star4: '',
            star5: ''
        });
    }
    const mouseOver4 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: 'rgb(221, 221, 25)',
            star4: 'rgb(221, 221, 25)',
            star5: ''
        });
    }
    const mouseOver5 = () => {
        setColor({
            star1: 'rgb(221, 221, 25)',
            star2: 'rgb(221, 221, 25)',
            star3: 'rgb(221, 221, 25)',
            star4: 'rgb(221, 221, 25)',
            star5: 'rgb(221, 221, 25)'
        });
    }
    const mouseLeave = () => {
        setColor ({
            star1: '',
            star2: '',
            star3: '',
            star4: '',
            star5: ''
        });
    }
    return (
        <div className="star-box">
            <span className="stars" style={{color: color.star1}} onMouseOver={mouseOver1} onMouseLeave={mouseLeave}>&#9733;</span>
            <span className="stars" style={{color: color.star2}} onMouseOver={mouseOver2} onMouseLeave={mouseLeave}>&#9733;</span>
            <span className="stars" style={{color: color.star3}} onMouseOver={mouseOver3} onMouseLeave={mouseLeave}>&#9733;</span>
            <span className="stars" style={{color: color.star4}} onMouseOver={mouseOver4} onMouseLeave={mouseLeave}>&#9733;</span>
            <span className="stars" style={{color: color.star5}} onMouseOver={mouseOver5} onMouseLeave={mouseLeave}>&#9733;</span>
        </div>
    )
}



export default Stars;