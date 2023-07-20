import React from 'react';
import Hello from '../Hello';
import { render } from '@testing-library/react';

describe('components/testComponent/Hello', () => {
  it('Check Hello Component exsiting', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const result = render(<Hello />); // 직접적으로 Hello Comp을 랜더 testing은 할수 없다.
    expect(result).getByTestId('helloMain').toBeInTheDocument();
    // 가장 상단에 있는 <div data-testid='helloMain'></div>에 적고 .toBeInTheDocument() method을
    // 사용해서 data-testid='helloMain'값이 있는지 없는지 확인하면 된다.
  });
});
