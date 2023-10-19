import { useContext, useState } from 'react';
import styled from 'styled-components';
import { GameContext } from '../../../App/GameContext';

const Drop = styled.select`
    border: solid greenyellow 0.5px;
    height: 3vh;
    cursor: pointer;
    `;

const Option = styled.option`
    cursor: pointer;
    `;

export const options = {
    sort: ['Default', 'Newest', 'Most Ratings', 'Best Ratings'],
    platform: ['All', 'PC', 'Xbox', 'PlayStation', 'Nintendo']
}

const Sort = () => {

    const context = useContext(GameContext);

    const {setSortOption, setPlatformOption} = context;

return (
    <>
            <Drop onChange={(e) => {
                const selectedOption = e.target.value;
                setSortOption(selectedOption);
            }}>
                {options.sort.map((option, index) => (
                <Option 
                key={index}
                value={option}
                >
                    {option}
                </Option>
                ))}
                
            </Drop>

            <Drop onChange={(e) => {
                const selectedPlatformOption = e.target.value;
                setPlatformOption(selectedPlatformOption);
            }}>
                {options.platform.map((option, index) => (
                <Option
                key={index}
                value={option}
                >
                    {option}
                </Option>
                ))}
            </Drop>
    </>
)
}

export default Sort;