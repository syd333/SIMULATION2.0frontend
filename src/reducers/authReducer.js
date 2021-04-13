export default (state = { user: {} }, action) => {
    switch(action.type){
        case 'AUTH':
            return {...state, ...action.payload} 
            case 'LOGOUT':
                return Object.assign({}, state, {
                  status: 'logged out',
                  value: action.value
                })
        default:
            return state

    }
}