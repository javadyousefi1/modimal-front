// import '@testing-library/jest-dom/extend-expect'
// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import Input from '@components/inputs/Input';
// import userEvent from '@testing-library/user-event';
// import jest from 'jest-mock';

// describe('FaqBox Component', () => {

//     test('checking input typing', async () => {

//         let name = "name-input"
//         let placeHolder = "placeHolder-input"
//         const type = "text"
//         const mockFunction = jest.fn();


//         render(<Input name={name} placeHolder={placeHolder} type={type} onChange={mockFunction} value="" />);

//         const input = screen.getByPlaceholderText(placeHolder);

//         fireEvent.click(input);
//         // fireEvent.change(input, { target: { value: 'New Value' } });

//         userEvent.type(input, 'New Value');


//         expect(mockFunction).toHaveBeenCalledWith(expect.objectContaining({
//             target: expect.objectContaining({
//               value: 'New Value'
//             })
//          }));

//             // Check if the mock function was called once
//             // await waitFor(() => expect(mockFunction).toHaveBeenCalledTimes(1));


//             // expect(input.value).toBe("New Value");

//             // Check if the mock function was called with the correct argument
//             // expect(mockFunction).toHaveBeenCalledWith('New Value');

//             // console.log(input)

//             // const answerElement = screen.getByText(answer).parentElement;
//             // const button = screen.getByTestId("openButton");

//             // Initially, the answer should be collapsed
//             // expect(answerElement).not.toBeVisible();

//             // Click the button to expand the answer
//             // fireEvent.click(button);

//             // Wait for the answer to become visible
//             // await waitFor(() => {
//             //     expect(answerElement).toBeVisible();
//             // });

//         });

//     })


