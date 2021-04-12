export const Auth = user => {
    return {
        type: 'AUTH',
        payload: user 
    }
}

// export const fetchMiss = () => {
//     return {
//         type: 'GET_ALL_MISSES'
//     }
// }