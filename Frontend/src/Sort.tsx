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
        background-color: rgb(208, 233, 255);    
    }
    `;

const Drop = styled.div`
    background-color: rgb(224, 241, 255);
    border: solid greenyellow 0.5px;
    width: 18vw;
    `;

const Search = styled.div`
    cursor: pointer;
    
    &:hover {
        background-color: rgb(208, 233, 255); 
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
                <Search onClick={() => 
                setSortOption(sort1)}>Default
                </Search>
                <Search onClick={() => 
                    setSortOption(sort2)}>Newest
                </Search>
                <Search onClick={() => 
                    setSortOption(sort3)}>Most Ratings
                </Search>
                <Search onClick={() => 
                    setSortOption(sort4)}>Best Ratings
                </Search>
            </Drop>
            <Input onClick={toggleDropdown2}>Platforms</Input>
            <Drop style={{display: display2.drop}}>
                <Search onClick={() => 
                setSortOption(platform1)}>PC
                </Search>
                <Search onClick={() => 
                    setSortOption(platform2)}>Xbox
                </Search>
                <Search onClick={() => 
                    setSortOption(platform3)}>PlayStation
                </Search>
                <Search onClick={() => 
                    setSortOption(platform4)}>Nintendo
                </Search>
            </Drop>
    </div>
)
}

export default Filter;