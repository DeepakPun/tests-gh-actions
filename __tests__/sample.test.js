const { add, diff } = require('../utilfuncs/funcs')

describe('test add function', () => {
	test('adds 6 + 6 to equal 12', () => {
		expect(add(6, 6)).toBe(12)
	})
})

describe('test diff function', () => {
	test('subtract 10 - 4 to equal 6', () => {
		expect(diff(10, 4)).toBe(6)
	})
})

describe('test diff function', () => {
	test('subtract 20 - 7 to not equal 12', () => {
		expect(diff(20, 7)).not.toBe(12)
	})
})
