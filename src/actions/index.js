export const Auth = user => {
    return {
        type: 'AUTH',
        payload: user 
    }
}
