import { render, screen } from "@testing-library/react"
import Sidebar from "../UserInterface/Sidebar/SideBar"
import '@testing-library/jest-dom';  
import { GameContext } from "../App/GameContext";
import { mockContext } from "./mockContext";

test('renders Sidebar and children components', () => {
 
    render(
        <GameContext.Provider value={mockContext}>
            <Sidebar/>
        </GameContext.Provider>
    )

    const sidebarContainer = screen.getByTestId('SidebarContainer');
    expect(sidebarContainer).toBeInTheDocument();

    const searchGame = screen.getByPlaceholderText('Search');
    expect(searchGame).toBeInTheDocument();

    const stars = screen.getAllByText(/★/);
    expect(stars.length).toEqual(5);

    const sort = screen.getByText('Default');
    expect(sort).toBeInTheDocument();
    })
    export {}