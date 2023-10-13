import { render, screen, fireEvent } from "@testing-library/react";
import Sort from "../UserInterface/Sidebar/SidebarComponents/Sort";
import '@testing-library/jest-dom/extend-expect'; 
import { GameContext } from "../App/GameContext";
import { mockContext } from "./mockContext";

test('dropdown menus toggle on button click', () => {

    render(<GameContext.Provider value={mockContext}>
        <Sort/>
    </GameContext.Provider>)

    const filterButton = screen.getByText('Filter');
    const platformButton = screen.getByText('Platforms');

    expect(screen.queryByText('Default')).not.toBeVisible();
    expect(screen.queryByText('All')).not.toBeVisible();

    fireEvent.click(filterButton);
    fireEvent.click(platformButton);

    expect(screen.queryByText('Default')).toBeVisible();
    expect(screen.queryByText('All')).toBeVisible();

    fireEvent.click(filterButton);
    fireEvent.click(platformButton);

    expect(screen.queryByText('Default')).not.toBeVisible();
    expect(screen.queryByText('All')).not.toBeVisible();
})

test('setSprtOption and setPlatformOption are called with correct value', () => {

    const setSortOption = jest.fn();
    const setPlatformOption = jest.fn();

    const value = {...mockContext, setSortOption, setPlatformOption}

    render(<GameContext.Provider value={value}>
        <Sort/>
    </GameContext.Provider>)

    fireEvent.click(screen.getByText('Filter'));
    fireEvent.click(screen.getByText('Platforms'));

    fireEvent.click(screen.getByText('Default'));

    expect(setSortOption).toHaveBeenCalledWith('Default');

    fireEvent.click(screen.getByText('All'));

    expect(setPlatformOption).toHaveBeenCalledWith('All');
})

export{}