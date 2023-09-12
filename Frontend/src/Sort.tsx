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
    width: 50%;`;

const Search = styled.div`
    cursor: pointer;
    
    &:hover {
        background-color: rgb(208, 233, 255); 
    }
    `;

interface FilterProps {
    setSortOption: (value: string) => void;
}

function Filter({setSortOption}: FilterProps) {
    const [display, setDisplay] = useState({drop: 'none'});

    const toggleDropdown = () => {
        setDisplay(prevState => ({
            drop: prevState.drop === 'none' ? 'block' : 'none'
        }))
    }
return (
    <div>
        <Input onClick={toggleDropdown}>Filter</Input>
            <Drop style={{display: display.drop}}>
                <Search onClick={() => 
                setSortOption('default')}>Default
                </Search>
                <Search onClick={() => 
                    setSortOption('newest')}>Newest
                </Search>
                <Search onClick={() => 
                    setSortOption('mostRatings')}>Most Ratings
                </Search>
                <Search onClick={() => 
                    setSortOption('bestRatings')}>Best Ratings
                </Search>
            </Drop>
    </div>
)
}

export default Filter;