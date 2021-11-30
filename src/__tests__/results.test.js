import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from '../components/results/Results.js';

describe('Testing the Results component', () => {
  it('Should render data.text', () => {

    let dataProp = {text: 'test'};

    render(<Results data={dataProp}/>);
    let displayText = screen.getByTestId('data');
    expect(displayText).toHaveTextContent(dataProp.text);
  });
});
