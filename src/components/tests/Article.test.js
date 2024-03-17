import { render, screen, cleanup } from '@testing-library/react';
import Article from '../Article';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
})
test('should render Article component', () => {
    render(<Article/>);
    const linkElement = screen.getByTestId('link-1');
    expect(linkElement).toBeInTheDocument();
})


test('matches snapshot', () => {
    
})