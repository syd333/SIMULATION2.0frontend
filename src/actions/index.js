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

export const slicedMiss = data => {
    return {
        type: 'SLICE_MISS',
        payload: data
    }
}