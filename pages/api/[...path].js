import GetCookie from "../../hooks/getCookies";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const token = GetCookie('user')
  console.log('token', token)
  // if (token) {
  //   req.headers.Authorization = `Bearer ${JSON.parse(token).token}`
  // }
  // console.log('token', JSON.parse(GetCookie('user')).token)
  // const accessToken = cookie.parse(req.headers.cookie || '')
  // console.log('cookies,',accessToken)
  // res.status(200).json({ name: accessToken })
}
