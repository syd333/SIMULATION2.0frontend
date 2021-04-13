export default (state = { miss: {} }, action) => {
    switch(action.type){
        case 'FETCH_MISSES':
            return {...state, ...action.payload} 
        default:
            return state

    }
}