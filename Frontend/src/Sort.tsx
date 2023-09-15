import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.div`
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
    `;

interface SearchProps {
    isSelected: boolean;
};

const Search = styled.div<SearchProps>`
    cursor: pointer;
    background-color: ${props => props.isSelected ? 'rgb(168, 215, 255)' : 'rgb(224, 241, 255)'};
    
    &:hover {
        background-color: rgb(168, 215, 255); 
    }
    `;

interface FilterProps {
    setSortOption: (value: string) => void;
}

export const options = {
    sort: ['Default', 'Newest', 'Most Ratings', 'Best Ratings'],
    platform: ['PC', 'Xbox', 'PlayStation', 'Nintendo']
}

function Filter({setSortOption}: FilterProps) {
    const [display1, setDisplay1] = useState({drop: 'none'});
    const [display2, setDisplay2] = useState({drop: 'none'});
    const [selectedOption, setSelectedOption] = useState('');
    //const sortOptions = [options.sort, options.platform];
    
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
    <div>
        <Input onClick={toggleDropdown1}>Filter</Input>
            <Drop style={{display: display1.drop}}>

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
            <Input onClick={toggleDropdown2}>Platforms</Input>
            <Drop style={{display: display2.drop}}>
                
                {options.platform.map(option => (
                <Search
                isSelected={selectedOption === option}
                onClick={() => {
                setSortOption(option)
                setSelectedOption(option)
                }}
                >
                    {option}
                </Search>
                ))}

                
            </Drop>
    </div>
)
}

export default Filter;