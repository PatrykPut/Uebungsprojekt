import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../App/GameContext";

const Input = styled.input`
    height: 30px;
    border-radius: 10px;
    border: none;
    position: relative;
    z-index: 3;
    margin-left: 20.5%;
    `;

export const SearchGame = () => {

    const context = useContext(GameContext);

    const {searchTerm, setSearchTerm} = context;
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
    <Input placeholder="Search" value={searchTerm} onChange={handleChange}/>
        )
}
