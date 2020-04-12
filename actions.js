// dispatch一个action,返回action指定的type,并将传入的数据返回，reducer接收返回的新的state
export const clear = (data) => {
    return {
        type: 'clear',
        payload: data
    }
}