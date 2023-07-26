/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import Hello from '../Hello';
import { render } from '@testing-library/react';

const renderComponent = () => render(<Hello />);

describe('components/testComponent/Hello', () => {
  // 중간에 변수를 지정하면 그 다음에 it()에서 다른 값을 받아서 실행되기에 beforeEach을 사용한다.
  beforeEach(() => {
    console.log('111');
  });

  it('Check Hello Component exsiting', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention

    const { getByTestId } = renderComponent(); // 직접적으로 Hello Comp을 랜더 testing은 할수 없다.
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('world-component')).toBeInTheDocument();

    // 가장 상단에 있는 <div data-testid='helloMain'></div>에 적고 .toBeInTheDocument() method을
    // 사용해서 data-testid='helloMain'값이 있는지 없는지 확인하면 된다.
  });

  it('Check title value', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('hello-text')).toHaveTextContent('Hello');
    //기대하는 값이 Hello가 같으면 패스.
  });
});

// beforeEach(() => {});

// beforeAll(() => {});

// Method: toBeInTheDocument, toHaveTextContent
