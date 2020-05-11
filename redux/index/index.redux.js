// import { request } from '../../lib/server/servers';
//定义初始化sate
const initialState = {
    selectedMenuId: 0,
    list: [],
    goods: [],
    detail: {},
}

//定义type类型
const ats = {
    GET_MENU_LIST: 'GET_MENU_LIST',
    GET_MENU_LIST_SUCCESS: 'GET_MENU_LIST_SUCCESS',

    GET_GOODS_LIST: 'GET_GOODS_LIST',
    GET_GOODS_LIST_SUCCESS: 'GET_GOODS_LIST_SUCCESS',

    GET_CURRENT_MENU_ID: 'GET_CURRENT_MENU_ID',
    GET_CURRENT_MENU_ID_SUCCESS: 'GET_CURRENT_MENU_ID_SUCCESS',

    GET_DETAIL_INFO: 'GET_DETAIL_INFO',
    GET_DETAIL_INFO_SUCCESS: 'GET_DETAIL_INFO_SUCCESS',
}

// 可以使用redux-thunk中间件，通过这种方式调用接口，
/** export const getUserToken = (data) => {
    return (dispatch, getState) => {
        try {
            request("uauth/wechat/get_user_info", {
                data
                success: (res) => {
                    dispatch({
                        type: ats.GET_MENU_LIST_SUCCESS,
                        payload: res.data
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}*/

// 定义action
/**
 * 当一个action依赖另一个action的异步数据时，可放在回调函数中，等成功回调拿到success的信息时，就可以调用下一个action
 */
export const getMenuList = (data, callBack) => {
    console.log('data', data);
    return (dispatch) => {
        dispatch({
            type: ats.GET_MENU_LIST_SUCCESS,
            payload: data,
        })
        callBack(data.menuListMock);
    }
}

export const getGoodsList = (data) => {
    return {
        type: ats.GET_GOODS_LIST_SUCCESS,
        payload: data
    }
}

export const getCurrentMenuId = (data) => {
    return {
        type: ats.GET_CURRENT_MENU_ID_SUCCESS,
        payload: data
    }
}

export const getDetailInfo = (data) => {
    return {
        type: ats.GET_DETAIL_INFO_SUCCESS,
        payload: data
    }
}

// 根据action的type去处理对应的数据，还是采用的样板代码，没有想到比较好的方式去拆分，害
export const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case ats.GET_MENU_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.menuListMock.data,
                selectedMenuId: action.payload.menuListMock.data && action.payload.menuListMock.data[0].menu_id
            }
        case ats.GET_GOODS_LIST_SUCCESS:
            return {
                ...state,
                goods: action.payload.data
            }
        case ats.GET_CURRENT_MENU_ID_SUCCESS:
            return {
                ...state,
                selectedMenuId: action.payload
            }
        case ats.GET_DETAIL_INFO_SUCCESS:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state;
    }
}