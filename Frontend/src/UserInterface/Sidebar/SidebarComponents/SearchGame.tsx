import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../../App/GameContext";

const Input = styled.input`
    margin-top: 3vh;
    height: 30px;
    border-radius: 10px;
    border: none;
    margin-right: 10px;
    margin-left: 10px;
    `;

const SearchGame = () => {

    const context = useContext(GameContext);

    const {searchTerm, setSearchTerm} = context;
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
    <Input placeholder="Search" value={searchTerm} onChange={handleChange}/>
        )
}

export default SearchGame;