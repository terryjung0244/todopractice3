/* eslint-disable testing-library/prefer-screen-queries */
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Button from '../Button';
// import { ButtonPropsType } from '../Button';

// const renderComponent = (props: ButtonPropsType) =>
//   render(<Button {...props} />);

// describe('common/button', () => {
//   const mockButton = jest.fn();

//   let props: ButtonPropsType;
//   beforeEach(() => {
//     props = {
//       text: 'TestTextButton',
//       onClick: mockButton,
//       dataTestId: 'TestButtonId',
//     };
//   });

//   it('Render Reusable Button', () => {
//     const { getByTestId } = renderComponent(props);
//     expect(getByTestId('TestButtonId')).toBeInTheDocument();
//   });

//   it('Should have 100px if width props value is empty', () => {
//     const { getByTestId } = renderComponent(props);
//     expect(getByTestId('TestButtonId')).toHaveAttribute(
//       'style',
//       'width: 100px; height: 40px;',
//     );
//   });

//   it('Should have text "TestTextButton"', () => {
//     const { getByTestId } = renderComponent(props);
//     expect(getByTestId('TestButtonId')).toHaveTextContent('TestTextButton');
//   });

//   it('Button should work', () => {
//     const { getByTestId } = renderComponent(props);
//     const button = getByTestId('TestButtonId');
//     fireEvent.click(button);
//     expect(mockButton).toHaveBeenCalledTimes(1);
//     fireEvent.click(button);
//     expect(mockButton).toHaveBeenCalledTimes(2);
//   });
// });

import react from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';
import { ButtonPropsType } from '../Button';

const renderComponent = (props: any) => render(<Button {...props} />);

describe('common/button', () => {
  const buttonClick = jest.fn(); // 온리 테스트만을 위한것. 아무것도 실행되지 않는다.

  let props: ButtonPropsType;
  // 실제로 사용하는 text나 onClick을 임의로 props을 object로 만든다. 본을 뜬다고 생각하면 된다.
  beforeEach(() => {
    props = {
      text: 'text',
      onClick: buttonClick,
      dataTestId: 'TestBtn',
    };
  });

  // Render Test
  it('Render Reusable Button', () => {
    const { getByTestId } = renderComponent(props);
    //변수에 담아서 const aaa = render(<Button {...props}/>), aaa.getByTestId 보단 {}을 하는게 더 효율적이다
    expect(getByTestId('TestBtn')).toBeInTheDocument();
  });

  // Text Test
  it('Should have text "text"', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('TestBtn')).toHaveTextContent('text');
  });

  it('The button confirms that the click is executed', () => {
    const { getByTestId } = renderComponent(props);
    const button = getByTestId('TestBtn');
    fireEvent.click(button); // 여기서 한번 실행했다.
    expect(buttonClick).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(buttonClick).toHaveBeenCalledTimes(2);
  });
});
