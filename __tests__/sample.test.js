const { add, diff } = require('../utilfuncs/funcs')

describe('test utility functions defined in funcs file', () => {
	test('adds 6 + 6 to equal 12', () => {
		expect(add(6, 6)).toBe(12)
	})

	test('adds 7 + 8 to equal 12', () => {
		expect(add(7, 8)).toBe(15)
	})

	test('adds 6 + 5 to equal 11', () => {
		expect(add(6, 5)).toBe(11)
	})

	test('subtract 10 - 4 to equal 6', () => {
		expect(diff(10, 4)).toBe(6)
	})

	test('subtract 20 - 7 to equal 13', () => {
		expect(diff(20, 7)).toBe(13)
	})
})
