const { stringLength, reverseString, capitalize } = require('./string.js'); 

test('returns character count of function argument', () => {
  expect(stringLength('back')).toBe(4)
})

test('throws on error', () => {
  expect(() => {
    stringLength('');
  }).toThrow();
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh")
})

test("capitalyze string", () => {
  expect(capitalize('hi')).toMatch('Hi')
  expect(capitalize('Hi')).toMatch('Hi')
  expect(capitalize('hello World')).toMatch('Hello World')
  expect(capitalize('a')).toMatch('A')
})