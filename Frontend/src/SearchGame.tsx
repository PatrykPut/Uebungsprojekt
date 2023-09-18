import styled from "styled-components";

const Input = styled.input`
    margin-top: 20px;
    margin-left:5px;
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
    <div>
    Search
    <Input placeholder="Search" value={searchTerm} onChange={handleChange}>
    
    </Input>
    </div>
        )
}

export default SearchGame;