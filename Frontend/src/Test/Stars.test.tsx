import { render, screen, fireEvent } from "@testing-library/react";
import Stars from "../UserInterface/Sidebar/Stars";
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';  

test('activates correct number of stars on mouseOver', () => {
    
    render(<Stars selectedStar={0} setSelectedStar={jest.fn()} />);

    const stars = screen.getAllByText(/★/);
    fireEvent.mouseOver(stars[2]);

    for (let i = 0; i <= 2; i++) {
        expect(stars[i]).toHaveStyleRule('animation', expect.stringContaining('forwards'));
    }
    for (let i = 3; i <= 4; i++) {
        expect(stars[i]).not.toHaveStyleRule('animation', expect.stringContaining('forwards'));
    }
});

test('should change the color of the first Star when clicked', () => {

    const setSelectedStar = jest.fn();

    const { rerender } = render(<Stars selectedStar={0} setSelectedStar={setSelectedStar}/>);

    const stars = screen.getAllByText(/★/);

    fireEvent.click(stars[0]);

    rerender(<Stars selectedStar={1} setSelectedStar={setSelectedStar}/>)

    expect(stars[0]).toHaveStyleRule('color', 'rgb(255, 255, 27)');

    for (let i = 1; i < stars.length; i++) {
        expect(stars[i]).not.toHaveStyleRule('color', 'rgb(255, 255, 27)');
    }

    expect(setSelectedStar).toHaveBeenCalledWith(1);
});

test('when third star is clicked should change color of the first 3 stars', () => {

    const setSelectedStar = jest.fn();

    const { rerender } = render(<Stars selectedStar={0} setSelectedStar={setSelectedStar}/>);

    const stars = screen.getAllByText(/★/)

    fireEvent.click(stars[2]);

    rerender(<Stars selectedStar={3} setSelectedStar={setSelectedStar}/>)

    for (let i = 0; i < 3; i++) {
        expect(stars[i]).toHaveStyleRule('color', 'rgb(255, 255, 27)')
    }

    for (let i = 3; i < stars.length; i++) {
        expect(stars[i]).not.toHaveStyleRule('color', 'rgb(255, 255, 27)')
    }

    expect(setSelectedStar).toHaveBeenCalledWith(3);
})