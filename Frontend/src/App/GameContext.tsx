import React, { Dispatch, SetStateAction } from "react";

export interface Game {                                            
    id: number;        
    name: string;        
    releaseDate: string;        
    developer: string;
    description: string;
    trailer: string;
    image: string;     
  }

export interface Rating {      
    id: number;   
    comment: string;      
    rating: number;      
  }

export interface GameContextProps {  
    sortOption: string;  
    setSortOption: Dispatch<SetStateAction<string>>;  
    platformOption: string;  
    setPlatformOption: Dispatch<SetStateAction<string>>;  
    selectedGame: Game | null;  
    setSelectedGame: Dispatch<SetStateAction<Game | null>>;  
    selectedStar: number;  
    setSelectedStar: Dispatch<SetStateAction<number>>;  
    searchTerm: string;  
    setSearchTerm: Dispatch<SetStateAction<string>>;  
  }  

export const GameContext = React.createContext<GameContextProps | undefined>(undefined);