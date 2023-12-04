import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterSlice } from 'entities/Counter'

export function createReduxStore(initialState?: StateSchema) {
  return configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

// export type RootState = ReturnType<typeof createReduxStore().getState>

// export type AppDispatch = typeof createReduxStore.dispatch
