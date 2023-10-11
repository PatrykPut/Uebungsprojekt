import { render, screen, fireEvent } from "@testing-library/react";
import Sort from "../UserInterface/Sidebar/Sort";
import '@testing-library/jest-dom/extend-expect'; 

test('dropdown menus toggle on button click', () => {

    const setSortOption = jest.fn()
    const setPlatformOption = jest.fn()
    render(<Sort setSortOption={setSortOption} setPlatformOption={setPlatformOption}/>)

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
    render(<Sort setSortOption={setSortOption} setPlatformOption={setPlatformOption}/>)

    fireEvent.click(screen.getByText('Filter'));
    fireEvent.click(screen.getByText('Platforms'));

    fireEvent.click(screen.getByText('Default'));

    expect(setSortOption).toHaveBeenCalledWith('Default');

    fireEvent.click(screen.getByText('All'));

    expect(setPlatformOption).toHaveBeenCalledWith('All');
})