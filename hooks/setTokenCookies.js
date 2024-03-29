export const setTokenCookies = (token) => {
    fetch('/api/login', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token})
    })
}
export const removeTokenCookies = () => {
    fetch('/api/logout', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    })
}