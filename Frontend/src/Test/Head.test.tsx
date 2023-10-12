import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';  
import Head from '../UserInterface/Head/Head';

test('rendering Head & checking for Navbar Elements', () => {

    render(<Head/>);

    const navItems = ['Home', 'Games', 'News', 'Reviews', 'Shop'];

    navItems.forEach(item => {
        const element = screen.getByText(item);
        expect(element).toBeInTheDocument();
    });
}); 

test('checking if controller is loaded correctly', () => {
    render(<Head/>)

    const image = screen.getByRole('img', {name: /controller/i});

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/controller.png');
});

export {};
