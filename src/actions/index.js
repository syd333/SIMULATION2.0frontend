export const Auth = user => {
    return {
        type: 'AUTH',
        payload: user 
    }
}

export const fetchMiss = miss => {
    return {
        type: 'GET_ALL_MISSES',
        payload: miss
    }
}