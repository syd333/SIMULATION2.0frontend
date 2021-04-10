export const Auth = user => {
    return {
        type: 'AUTH',
        payload: user 
    }
}

// export const fetchMiss = () => {
//     return {
//         type: 'FETCH_MISS'
//     }
// }