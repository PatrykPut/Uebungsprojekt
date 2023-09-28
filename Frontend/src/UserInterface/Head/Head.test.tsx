import { render, screen } from '@testing-library/react'
import Head from './Head';

test('rendert den Head ohne Crash', () => {
    render(<Head/>);
}); 

export {};
