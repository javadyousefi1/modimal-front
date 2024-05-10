import '@testing-library/jest-dom/extend-expect'
import { render, screen, } from '@testing-library/react';
import Button from '@components/shared/Button';

describe('FaqBox Component', () => {
    test("check the text is avalible in button component", () => {
        // props
        const buttonText = 'click me';
        // render component
        render(<Button>{buttonText}</Button>);
        // get button
        const getButton = screen.getByText(buttonText);
        // checking...
        expect(getButton).toBeInTheDocument()
    });

    test("check disabling button", () => {
        // props
        const buttonText = 'click me';
        // render component
        render(<Button disabled={true}>{buttonText}</Button>);
        // get button
        const getButton = screen.getByText(buttonText);
        // checking...
        expect(getButton).toBeDisabled()
    })

})
