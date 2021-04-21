export const Auth = user => {
    return {
        type: 'AUTH',
        payload: user 
    }
}

export const fetchMiss = miss => {
    return {
        type: 'FETCH_MISSES',
        payload: miss
    }
}

export const selectedMis = miss => {
    return {
        type: 'SELECTED_MIS',
        payload: miss
    }
}

export const addMiss = newMiss => {
    return {
        type: 'ADD_MISS',
        payload: newMiss
    }
}

export const deleteMiss = miss => {
    return {
        type: 'DELETE_MISS',
        payload: miss
    }
}

export const getFavorites = favorites => {
    return {
        type: 'GET_FAVORITES',
        payload: favorites
    }
}

export const likeMiss = data => {
    return {
        type: 'LIKE_MISS',
        payload: data
    }
}

export const unLikeMiss = data => {
    return {
        type: 'UNLIKE_MISS',
        payload: data
    }
}