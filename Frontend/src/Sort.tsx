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

type SearchProps = {
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

export const sort1 = 'default';
export const sort2 = 'newest';
export const sort3 = 'mostRatings';
export const sort4 = 'bestRatings';
export const platform1 = 'PC';
export const platform2 = 'Xbox';
export const platform3 = 'PlayStation';
export const platform4 = 'Nintendo';

function Filter({setSortOption}: FilterProps) {
    const [display1, setDisplay1] = useState({drop: 'none'});
    const [display2, setDisplay2] = useState({drop: 'none'});
    const [selectedOption, setSelectedOption] = useState('');
    
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

                <Search 
                isSelected={selectedOption === sort1}
                onClick={() => {
                setSortOption(sort1);
                setSelectedOption(sort1)
                }}>Default
                </Search>

                <Search
                isSelected={selectedOption === sort2}
                onClick={() => {
                setSortOption(sort2)
                setSelectedOption(sort2)
                }}>Newest
                </Search>
                
                <Search
                isSelected={selectedOption === sort3}
                onClick={() => {
                setSortOption(sort3)
                setSelectedOption(sort3)
                }}>Most Ratings
                </Search>

                <Search
                isSelected={selectedOption === sort4}
                onClick={() => {
                setSortOption(sort4)
                setSelectedOption(sort4)
                }}>Best Ratings
                </Search>

            </Drop>
            <Input onClick={toggleDropdown2}>Platforms</Input>
            <Drop style={{display: display2.drop}}>

                <Search
                isSelected={selectedOption === platform1}
                onClick={() => {
                setSortOption(platform1)
                setSelectedOption(platform1)
                }}>PC
                </Search>

                <Search
                isSelected={selectedOption === platform2}
                onClick={() => {
                setSortOption(platform2)
                setSelectedOption(platform2)
                }}>Xbox
                </Search>

                <Search
                isSelected={selectedOption === platform3}
                onClick={() => {
                setSortOption(platform3)
                setSelectedOption(platform3)
                }}>PlayStation
                </Search>

                <Search
                isSelected={selectedOption === platform4}
                onClick={() => {
                setSortOption(platform4)
                setSelectedOption(platform4)
                }}>Nintendo
                </Search>

            </Drop>
    </div>
)
}

export default Filter;