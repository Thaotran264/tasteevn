import cookie from 'cookie'


export default function (req, res) {
    res.setHeader(
        "Set-cookie", cookie.serialize("token",
            "",
            {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: new Date(0),
                sameSite: 'strict',
                path: '/'
            }))
    res.status(200).json({ success: true })
}