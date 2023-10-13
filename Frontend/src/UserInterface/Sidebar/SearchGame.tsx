import styled from "styled-components";

const Input = styled.input`
    margin-top: 20px;
    height: 30px;
    border-radius: 10px;
    border: none;
    margin-right: 10px;
    margin-left: 10px;
    `;

interface SearchGameProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

function SearchGame ({searchTerm, setSearchTerm} : SearchGameProps) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
    <Input placeholder="Search" value={searchTerm} onChange={handleChange}/>
        )
}

export default SearchGame;