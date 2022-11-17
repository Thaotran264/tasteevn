import Cookie from "js-cookie";

const SetCookie = (cookieName, user) => {
Cookie.set(cookieName, user, {
    expires: 1,
    secure:true,
    sameSite: 'strict',
    path: '/'
})
}

export default SetCookie