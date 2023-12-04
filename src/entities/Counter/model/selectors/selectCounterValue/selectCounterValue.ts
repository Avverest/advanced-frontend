import { createSelector } from '@reduxjs/toolkit'
import { selectCounter } from '../selectCounter/selectCounter'
import { CounterSchema } from '../../types/CounterSchema'

export const selectCounterValue = createSelector(
  selectCounter,
  (counter: CounterSchema) => counter.value,
)
