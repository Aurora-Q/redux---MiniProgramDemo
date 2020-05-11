const initialState = {}

const ats = {
    GET_DETAIL_OTHER_INFO: 'GET_DETAIL_INFO',
    GET_DETAIL_OTHER_INFO_SUCCESS: 'GET_DETAIL_INFO_SUCCESS',
}

export const getDetailOtherInfo = (data) => {
    return {
        type: ats.GET_DETAIL_INFO_SUCCESS,
        payload: data
    }
}

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ats.GET_DETAIL_OTHER_INFO_SUCCESS:
            return {
                ...state
            }
        default:
            return state
    }
}