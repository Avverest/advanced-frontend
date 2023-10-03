import { classNames } from 'shared'

describe('classNames', () => {
  test('without params', () => {
    expect(classNames('')).toBe('')
  })
  test('with single class', () => {
    expect(classNames('class1')).toBe('class1')
  })
  test('with three additional classes', () => {
    const expected = 'class1 add1 add2 add3'
    expect(classNames('class1', {}, ['add1', 'add2', 'add3'])).toBe(expected)
  })
  test('with mods', () => {
    const expected = 'class1 add1 add2 add3 mod1 mod2'
    expect(
      classNames(
        'class1',
        { mod1: true, mod2: true },
        ['add1', 'add2', 'add3'],
      ),
    ).toBe(expected)
  })
  test('with one mode true and one false', () => {
    const expected = 'class1 add1 add2 add3 mod1'
    expect(
      classNames(
        'class1',
        { mod1: true, mod2: false },
        ['add1', 'add2', 'add3'],
      ),
    ).toBe(expected)
  })
  test('with one mode true and one undefined', () => {
    const expected = 'class1 add1 add2 add3 mod1'
    expect(
      classNames(
        'class1',
        { mod1: true, mod2: undefined },
        ['add1', 'add2', 'add3'],
      ),
    ).toBe(expected)
  })
})
