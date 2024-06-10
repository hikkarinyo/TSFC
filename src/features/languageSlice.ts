import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentLanguage: localStorage.getItem('currentLanguage') || 'eng',
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.currentLanguage = action.payload
            localStorage.setItem('currentLanguage', action.payload)
        },
    },
})

export const { setLanguage } = languageSlice.actions
export const selectCurrentLanguage = (state: { language: { currentLanguage: string } }) =>
    state.language.currentLanguage
export default languageSlice.reducer
