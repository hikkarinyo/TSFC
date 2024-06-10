import languageReducer from '../features/languageSlice.ts'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        language: languageReducer,
    },
})
