import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FaqBox from '@components/user/faq/FaqBox';


describe('FaqBox Component', () => {
  test("renders question correctly", () => {
    const question = 'What is your question?';
    const answer = 'This is the answer.';

    render(<FaqBox question={question} answer={answer} />);

    const answerExpectedText = screen.getByText(answer);
    const questionExpectedText = screen.getByText(question);

    expect(questionExpectedText.innerHTML).toBe(question);
    expect(answerExpectedText.innerHTML).toBe(answer);
  });

  test('expands and collapses on click', async () => {
    const question = 'What is your question?';
    const answer = 'This is the answer.';

    render(<FaqBox question={question} answer={answer} />);

    const answerElement = screen.getByText(answer).parentElement;
    const button = screen.getByTestId("openButton");

    // Initially, the answer should be collapsed
    expect(answerElement).not.toBeVisible();

    // Click the button to expand the answer
    fireEvent.click(button);

    // Wait for the answer to become visible
    await waitFor(() => {
      expect(answerElement).toBeVisible();
    }); 

  });

})

