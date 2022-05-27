const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAV':
            return {
                ...state,
                state: state.concat(action.payload)
            }
        case 'REMOVE_FROM_FAV':
            return {
                ...state,
                state: state.concat(action.payload)
            }
        default:
            return state
    }
}