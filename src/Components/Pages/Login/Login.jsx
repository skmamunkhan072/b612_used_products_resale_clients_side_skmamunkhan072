import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import Loading from "../Share/Loading/Loading";
import "./Login.css";

const Login = () => {
  const { loginUser, forgotPassword, loading, setloading } =
    useContext(AuthContext);
  const [loginError, setloginError] = useState("");
  const [loginInfo, setloginInfo] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login function
  const handelLogIn = (data) => {
    setloginError("");
    setloginInfo(data);
    loginUser(data.email, data.password)
      .then((result) => {
        toast.success("You Login is successfully");
        navigate("/");
      })
      .catch((err) => {
        const errorMessages = err.message.split("/")[1].split(")")[0];
        setloginError(errorMessages);
        toast.error(`your ${errorMessages}`);
        setloading(false);
      });
  };

  // forgot Password function
  const handelForgotPassword = () => {
    // console.log(loginInfo.email);
    forgotPassword(loginInfo.email)
      .then((result) => {})
      .catch((err) => {});
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="from_wraper h-[800px] flex justify-center items-center">
      <div className="px-10 py-20 bg-slate-800 rounded-lg shadow-lg	">
        <h2 className="text-xl text-center">Log In</h2>
        <form onSubmit={handleSubmit(handelLogIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <small
              onClick={handelForgotPassword}
              className="text-start mt-2 text-teal-400 cursor-pointer	"
            >
              Forgot Password ?
            </small>
          </div>

          <input
            className="btn btn-accent w-full mt-4"
            value="Log in"
            type="submit"
          />
          {loginError && (
            <p className="text-red-600 text-start">{loginError}</p>
          )}
        </form>
        <p className="mt-3">
          If you don't have an account
          <Link className="text-emerald-500	ml-3" to="/singup">
            Please Sing Up
          </Link>
        </p>
        <div className="divider">OR</div>
      </div>
    </div>
  );
};

export default Login;
