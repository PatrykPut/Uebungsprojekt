import { render, fireEvent } from "@testing-library/react";
import { GameCard, Game } from "../UserInterface/Games/GameCard";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

test('renders GameCard with correct content', () => {
    const game: Game = {
        id: 1,
        name: 'Test Game',
        releaseDate: '2022-01-01',
        developer: 'Test Developer',
        description: '',
        trailer: ''
    };

    const { getByText } = render(
        <MemoryRouter>
            <GameCard game={game}/>
        </MemoryRouter>
    )

    expect(getByText(game.name)).toBeInTheDocument();
    expect(getByText(game.releaseDate)).toBeInTheDocument();
    expect(getByText(game.developer)).toBeInTheDocument();
});

test('navigates to correct path on click', () => {
    const game: Game = {
        id: 1,
        name: 'Test Game',
        releaseDate: '2022-01-01',
        developer: 'Test Developer',
        description: '',
        trailer: ''
    };

    const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="game/:gameId" element={<div>Game detail page</div>} />
                <Route path="/" element={<GameCard game={game}/>} />
            </Routes>
        </MemoryRouter>
    );

    fireEvent.click(getByText(game.name));

    expect(getByText('Game detail page')).toBeInTheDocument();
});

