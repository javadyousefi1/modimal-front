import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react';
import FaqBox from '@components/faq/FaqBox';


describe('FaqBox Component', () => {
  // test("renders question correctly", () => {
  //   const question = 'What is your question?';
  //   const answer = 'This is the answer.';

  //   render(<FaqBox question={question} answer={answer} />);

  //   const answerExpectedText = screen.getByText(answer);
  //   const questionExpectedText = screen.getByText(question);

  //   expect(questionExpectedText.innerHTML).toBe(question);
  //   expect(answerExpectedText.innerHTML).toBe(answer);
  // });

  test('expands and collapses on click', () => {

    const question = 'What is your question?';
    const answer = 'This is the answer.';

    render(<FaqBox question={question} answer={answer} />);


    const questionElement = screen.getByText(question);
    const answerElement = screen.getByText(answer).parentElement;
    const button = screen.getByRole("button")

    // Initially, the answer should be collapsed
    expect(answerElement).not.toBeVisible();

    // Clicking on the question should expand the answer
    fireEvent.click(button);
    expect(answerElement).toBeVisible();

    // Clicking again should collapse the answer
    // fireEvent.click(questionElement);
    // expect(questionElement).not.toBeVisible();
  })

})

