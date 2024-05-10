import { render, screen } from '@testing-library/react';
import CartBox from '@components/user/cart/CartBox'; // Adjust the import path as necessary


describe('CartBox Component', () => {
    test('renders the CartBox component with the correct content', () => {
        const mockProps = {
            title: 'Test Product',
            desc: 'This is a test product description.',
            price: 100,
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        };

        render(<CartBox {...mockProps} />);

        // Check if the title is rendered correctly
        const titleEl = screen.getByText(mockProps.title)
        expect(titleEl.innerHTML).toBe(mockProps.title)

        // Check if the description is rendered correctly
        const descEl = screen.getByText(mockProps.desc)
        expect(descEl.innerHTML).toBe(mockProps.desc);

        // Check if the price is rendered correctly
        const priceEl = screen.getByText(`$ ${mockProps.price}`)
        expect(priceEl.innerHTML).toBe(`$ ${mockProps.price}`);

        // Check if the colors are rendered correctly
        const coloredDivs = screen.getAllByTestId(/color-/i);
        expect(coloredDivs).toHaveLength(mockProps.colors.length);
    });
});