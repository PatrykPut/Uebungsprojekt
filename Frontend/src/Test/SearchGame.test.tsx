import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchGame from '../UserInterface/Sidebar/SearchGame';

test('testing SearchGame Function', () => {
    const setSearchTerm = jest.fn()

    render(<SearchGame searchTerm='' setSearchTerm={setSearchTerm} />);

    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'test' } });
    expect(setSearchTerm).toHaveBeenCalledTimes(1);
    expect(setSearchTerm).toHaveBeenCalledWith('test');
});