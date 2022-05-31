const initialState = {
    etag: null,
    items: [],
    kind: null,
    nextPageToken: null,
    pageInfo: null,
    regionCode: null,
    btnStatus: false,
}

export const videosListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VIDEOS':
            return {
                ...state,
                etag: action.payload.etag,
                items: action.payload.items,
                kind: action.payload.kind,
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo,
                regionCode: action.payload.regionCode,
            }
        case 'DISABLE_BTN':
            return {
                ...state,
                btnStatus: false,
            }
        case 'ENABLE_BTN':
            return {
                ...state,
                btnStatus: true,
            }
        default:
            return state
    }
}