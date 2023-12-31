import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { selectCounter } from './selectCounter'

describe('selectCounter', () => {
  test('Should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(selectCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
