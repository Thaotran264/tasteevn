import Link from "next/link";
import React, { useContext, useState } from "react";
import axiosClient from "../../api-client/axios-client";
import NavbarSecond from "../../components/NavbarSecond";
import { useRouter } from "next/router";
import { DataContext } from "../../store/globalState";
import Notify from "../../components/Notify";

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const { state, dispatch } = useContext(DataContext);
  // const [toastmsg, settoastmsg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data)
    const url = "/Users/Login";
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    try {
      const res = await axiosClient.post(url, data);
      if (res.successful) {
        console.log("data", res);
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("userInfo", JSON.stringify(res.fullName));
        router.push("/");
        dispatch({
          type: "NOTIFY",
          payload: { success: res.successful },
        });
      } else {
        dispatch({ type: "NOTIFY", payload: { error: res.error } });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="vh-100 align-items-center d-flex bg-light">
      <div className="container ">
        <div
          className="mx-auto bg-white py-4 px-4 border rounded border-secondary"
          style={{ maxWidth: 400 }}
        >
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <a>Forgot your password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-dark bg-dark bg-opacity-75 w-100"
            >
              Login
            </button>
            {/* <p className='text-center mb-0'>OR</p>
                        <button className="btn btn-primary w-100 mb-3">Continue with Facebook</button>
                        <button className="btn btn-outline-secondary text-dark w-100 mb-2">Continue with Google</button> */}
            <span>
              Dont &apos;t have a account???{" "}
              <Link
                className="text-danger"
                href="/register"
                style={{ cursor: "pointer" }}
              >
                Resigter
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
