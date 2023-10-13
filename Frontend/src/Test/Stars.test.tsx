import { render, screen, fireEvent } from "@testing-library/react";
import Stars from "../UserInterface/Sidebar/SidebarComponents/Stars";
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';  
import { GameContext } from "../App/GameContext";
import { mockContext } from "./mockContext";

test('activates correct number of stars on mouseOver', () => {
    
    render(<GameContext.Provider value={mockContext}>
        <Stars/>
    </GameContext.Provider>);

    const stars = screen.getAllByText(/★/);
    fireEvent.mouseOver(stars[2]);

    for (let i = 0; i <= 2; i++) {
        expect(stars[i]).toHaveStyleRule('animation', expect.stringContaining('forwards'));
    }
    for (let i = 3; i <= 4; i++) {
        expect(stars[i]).not.toHaveStyleRule('animation', expect.stringContaining('forwards'));
    }
});

export{}