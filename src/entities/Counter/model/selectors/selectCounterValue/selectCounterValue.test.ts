import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import {
  selectCounterValue,
} from './selectCounterValue'

describe('selectCounterValue.test', () => {
  test('Should return value from counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(selectCounterValue(state as StateSchema)).toEqual(10)
  })
})
