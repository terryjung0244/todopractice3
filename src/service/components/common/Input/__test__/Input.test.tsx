/* eslint-disable testing-library/prefer-screen-queries */
import react from 'react';
import { fireEvent, render } from '@testing-library/react';
import { InputPropsType } from '../Input.interface';
import Input from '../Input';

const renderComponent = (props: InputPropsType) => render(<Input {...props} />);

describe('Common/input', () => {
  const inputOnChange = jest.fn();

  let props: InputPropsType;
  beforeEach(() => {
    props = {
      name: 'title',
      value: '',
      onChange: inputOnChange,
      dataTestId: 'input',
    };
  });

  it('Render InputComp', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('input')).toBeInTheDocument();
  });

  it('should contain name attribute in InputComp', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('input')).toHaveAttribute('name', 'title');
  });

  it('test onChange Event', () => {
    const { getByTestId } = renderComponent(props);
    const input = getByTestId('input');
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
    expect(inputOnChange).toHaveBeenCalledTimes(1);
    fireEvent.change(input, {
      target: {
        value: 'world',
      },
    });
    expect(inputOnChange).toHaveBeenCalledTimes(2);
  });
});
