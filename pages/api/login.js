import cookie from 'cookie'


export default function (req, res) {
    res.setHeader(
        "Set-cookie",
        cookie.serialize(
            "token",
            req.body.token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60,
                sameSite: 'strict',
                path: '/'
            }
        )
    )
    res.status(200).json({token: cookie.parse(req.headers.token || '')})
}