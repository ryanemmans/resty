import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../src/components/form/Form.js';

describe('Testing the Form component', () => {
  it('Should use our callback on submit', () => {

    let callback = jest.fn(); // jest spy

    render(<Form onSubmit={callback} />);

    let button = screen.getByRole('button');
    // let input = screen.getByRole('textbox');
    // fireEvent.keyPress('A');
    fireEvent.click(button);
    // expect(callback).toHaveBeenCalled({text: 'A'});
    expect(callback).toHaveBeenCalled();
  });
});
