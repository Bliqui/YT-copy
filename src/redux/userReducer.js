const initialState = {
    email: null,
    token: null,
    id: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
            }

        case 'REMOVE_USER':
            return {
                ...state,
                email: null,
                token: null,
                id: null,
            }

        default:
            return state
    }
}