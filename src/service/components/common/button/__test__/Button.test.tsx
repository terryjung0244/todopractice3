/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';
import { ButtonPropsType } from '../Button';

const renderComponent = (props: ButtonPropsType) =>
  render(<Button {...props} />);

describe('common/button', () => {
  const mockButton = jest.fn();

  let props: ButtonPropsType;
  beforeEach(() => {
    props = {
      text: 'TestTextButton',
      onClick: mockButton,
      dataTestId: 'TestButtonId',
    };
  });

  it('Render Reusable Button', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('TestButtonId')).toBeInTheDocument();
  });

  it('Should have 100px if width props value is empty', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('TestButtonId')).toHaveAttribute(
      'style',
      'width: 100px; height: 40px;',
    );
  });

  it('Should have text "TestTextButton"', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('TestButtonId')).toHaveTextContent('TestTextButton');
  });

  it('Button should work', () => {
    const { getByTestId } = renderComponent(props);
    const button = getByTestId('TestButtonId');
    fireEvent.click(button);
    expect(mockButton).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(mockButton).toHaveBeenCalledTimes(2);
  });
});
