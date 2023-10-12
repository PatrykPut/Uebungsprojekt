import { render, screen } from "@testing-library/react"
import Sidebar from "../UserInterface/Sidebar/SideBar"
import '@testing-library/jest-dom';  

test('renders Sidebar and children components', () => {
    const mockProps = {
        setSortOption: jest.fn(),
        setPlatformOption: jest.fn(),
        selectedStar: 0,
        setSelectedStar: jest.fn(),
        searchTerm: '',
        setSearchTerm: jest.fn()    
    };
    render(<Sidebar {...mockProps}/>)

    const sidebarContainer = screen.getByTestId('SidebarContainer');
    expect(sidebarContainer).toBeInTheDocument();

    const searchGame = screen.getByPlaceholderText('Search');
    expect(searchGame).toBeInTheDocument();

    const stars = screen.getAllByText(/★/);
    expect(stars.length).toEqual(5);

    const sort = screen.getByText('Default');
    expect(sort).toBeInTheDocument();
    })