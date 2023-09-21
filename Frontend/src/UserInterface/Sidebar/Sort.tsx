import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: 100%;
    height: 20px;
    background-color: aliceblue;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    
    &:hover {
        background-color: rgb(190, 225, 255);    
    }
    `;

const Drop = styled.div`
    border: solid greenyellow 0.5px;
    width: 18vw;
    height: 0;
    opacity: 0;
    transition: all 1s;
    overflow: hidden;
    `;

const Search = styled.div<SearchProps>`
    cursor: pointer;
    background-color: ${props => props.isSelected ? 'rgb(168, 215, 255)' : 'rgb(224, 241, 255)'};
    
    &:hover {
        background-color: rgb(168, 215, 255); 
    }
    `;

interface SearchProps {
    isSelected: boolean;
};

interface FilterProps {
    setSortOption: (value: string) => void;
    setPlatformOption: (value: string) => void;
}

export const options = {
    sort: ['Default', 'Newest', 'Most Ratings', 'Best Ratings'],
    platform: ['All', 'PC', 'Xbox', 'PlayStation', 'Nintendo']
}

function Sort({setSortOption, setPlatformOption}: FilterProps) {
    const [display1, setDisplay1] = useState({drop: 'none'});
    const [display2, setDisplay2] = useState({drop: 'none'});
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedPlatformOption, setSelectedPlatformOption] = useState('');

    const toggleDropdown1 = () => {
        setDisplay1(prevState => ({
            drop: prevState.drop === 'none' ? 'block' : 'none'
        }))
    }
    const toggleDropdown2 = () => {
        setDisplay2(prevState => ({
            drop: prevState.drop === 'none' ? 'block' : 'none'
        }))
    }

return (
    <>
        <Button onClick={toggleDropdown1}>Filter</Button>
            <Drop style={{height: display1.drop === 'none' ? '0' : 'auto', opacity: display1.drop === 'none' ? '0' : '1'}}>

                {options.sort.map(option => (
                <Search 
                isSelected={selectedOption === option}
                onClick={() => {
                setSortOption(option);
                setSelectedOption(option);
                }}
                >
                    {option}
                </Search>
                ))}
                
            </Drop>
            <Button onClick={toggleDropdown2}>Platforms</Button>
            <Drop style={{height: display2.drop === 'none' ? '0' : 'auto', opacity: display2.drop === 'none' ? '0' : '1'}}>
                
                {options.platform.map(option => (
                <Search
                isSelected={selectedPlatformOption === option}
                onClick={() => {
                setPlatformOption(option)
                setSelectedPlatformOption(option)
                }}
                >
                    {option}
                </Search>
                ))}
            </Drop>
    </>
)
}

export default Sort;