import { GameContextProps } from "../App/GameContext";

export const mockContext: GameContextProps = {
    sortOption: '',
    setSortOption: jest.fn(),
    platformOption: '',
    setPlatformOption: jest.fn(),
    selectedGame: null,
    setSelectedGame: jest.fn(),
    selectedStar: 0,
    setSelectedStar: jest.fn(),
    searchTerm: '',
    setSearchTerm: jest.fn()
};

