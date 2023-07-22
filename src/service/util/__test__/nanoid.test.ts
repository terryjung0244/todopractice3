import { getNanoid } from '../nanoid';

const setNanoId = 'ABCD1234';

jest.mock('service/util/nanoid', () => ({
  getNanoid: () => setNanoId,
}));

//jest.mock을 사용해서, getNanoId을 불렀을때 return되는 값이 setNanoId라고 지정하는 방법

describe('service/util/nanoid', () => {
  it('Should get Nanoid', () => {
    const result = getNanoid();
    expect(result).toStrictEqual(setNanoId);
  });
});

// getNanoid()을 result에 담고, expect(result)의 값이
// toStrictEqual(setNanoId) = 'ABCD1234' 이거야 라고 예측하는것
