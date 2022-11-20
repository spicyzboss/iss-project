import response from '../helpers/response';
import rangeRandom from '../helpers/rangeRandom';

describe('rangeRandom helpers', () => {
  test('random same range', () => {
    expect(rangeRandom(1, 1)).toBe(1);
  });
});

describe('response helpers', () => {
  test('response status 200 message ping', () => {
    expect(response(200, 'ping')).toEqual({
      code: 200,
      message: 'ping',
    });
  });

  test('response status 200 message ping without data', () => {
    expect(response(200, 'ping')).not.toEqual({
      code: 200,
      message: 'ping',
      data: null,
    });
  });
});
