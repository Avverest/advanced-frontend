import { counterSlice, decrement, increment } from '../slice/counterSlice'
import type { CounterSchema } from '../types/CounterSchema'

describe('counterSlice.test', () => {
  test('Increment reducer test', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(
      counterSlice.reducer(state, increment()),
    ).toEqual({ value: 11 })
  })
  test('Decrement reducer test', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(
      counterSlice.reducer(state, decrement()),
    ).toEqual({ value: 9 })
  })
  test('Test undefined state', () => {
    expect(
      counterSlice.reducer(undefined, decrement()),
    ).toEqual({ value: -1 })
  })
})
