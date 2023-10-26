import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchGame } from '../UserInterface/Head/SearchGame';
import { GameContext } from '../App/GameContext';
import { mockContext } from './mockContext';

test('testing SearchGame Function', () => {
    const setSearchTerm = jest.fn()

    const value = {...mockContext, setSearchTerm}

    render(<GameContext.Provider value={value}>
        <SearchGame/>
    </GameContext.Provider>);

    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'test' } });
    expect(setSearchTerm).toHaveBeenCalledTimes(1);
    expect(setSearchTerm).toHaveBeenCalledWith('test');
});

export{}