const { add, diff } = require('../utilfuncs/funcs')

describe('test utility functions defined in funcs file', () => {
	test('adds 6 + 6 to equal 12', () => {
		expect(add(6, 6)).toBe(12)
	})

	test('adds 6 + 6 to equal 12', () => {
		expect(add(7, 8)).toBe(15)
	})

	test('adds 6 + 5 to not equal 12', () => {
		expect(add(6, 5)).not.toBe(12)
	})

	test('subtract 10 - 4 to equal 6', () => {
		expect(diff(10, 4)).toBe(6)
	})

	test('subtract 20 - 7 to not equal 13', () => {
		expect(diff(20, 7)).not.toBe(18)
	})
})
