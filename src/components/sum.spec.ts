import { sum } from './sum';

it('sum 5 and 2 will return 7', () => {
  // error TS2322: Type 'number' is not assignable to type 'string'.
  // const a: string = 5;
  // expect(a).toBe(5);
  expect(sum(5, 2)).toBe(7);
});
