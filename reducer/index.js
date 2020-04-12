// reducer:既接收旧的state,也接收返回的新的state
export default function rootReducer(state = { data }, action) {
  console.log('3 - stata', state);
  switch (action.type) {
    case 'clear':
      return {
        ...state,
        message: {
          mobile: '',
          code: '',
          companyName: ''
        },
      }
    default:
      return state
  }
}