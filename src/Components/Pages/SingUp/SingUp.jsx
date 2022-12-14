import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../Hooks/AllUrl/AllUrl";
import { useToken } from "../../Hooks/UseToken";
import Login from "../Login/Login";

const SingUp = () => {
  const {
    createUserEmailPassword,
    updateUser,
    loading,
    setloading,
    GoogleLogin,
  } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [user, setuser] = useState(null);
  const [singUpUserEmail, setSingUpUserEmail] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    const { email, password, name } = data;
    setSignUPError("");
    createUserEmailPassword(email, password)
      .then((result) => {
        const userUpdateInfo = { displayName: name };
        databaseUserPost(data);
        updateUserProfile(userUpdateInfo, data);
      })
      .catch((err) => {
        console.log(err);
        setSignUPError(err.message);
        setloading(false);
      });
  };

  // google login
  const handelGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        databaseUserPost(result.user);
        setuser(result.user.email);
      })
      .catch((error) => {});
  };
  // update user profile function
  const updateUserProfile = (userUpdateInfo, userData) => {
    updateUser(userUpdateInfo)
      .then((result) => {})
      .catch((updateError) => {
        console.log(updateError);
        setSignUPError(updateError.message);
      });
  };
  // user data post database
  const databaseUserPost = (userData) => {
    const { email, name, selectedRole } = userData;
    const user = {
      email: email ? email : userData?.email,
      name: name ? name : userData?.displayName,
      selectedRole: selectedRole ? selectedRole : "user",
    };

    // user data post
    fetch(`${serverUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setuser(userData?.email);
          setloading(false);
        }
      });
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    } else {
      setloading(false);
    }
  }, [token]);

  if (loading) {
    return <Login />;
  }

  return (
    <div className="from_wraper lg:h-[800px] flex justify-center items-center">
      <div className="lg:w-2/6 w-full px-10 py-20 bg-slate-800 rounded-lg shadow-lg	">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-lg mx-auto"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-lg mx-auto"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-lg mx-auto">
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
                  //   value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-lg mx-auto"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Select</span>
            </label>
            <select
              type="text"
              {...register("selectedRole")}
              className="select input-bordered w-full max-w-lg mx-auto"
            >
              <option>user</option>
              <option>sealer</option>
            </select>
          </div>
          <input
            className="btn btn-accent mt-4 w-full max-w-lg mx-auto"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-3 w-full max-w-lg mx-auto">
          Already have an account
          <Link className="text-emerald-500 ml-3" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider w-full max-w-lg mx-auto">OR</div>
        <button
          onClick={handelGoogleLogin}
          className="btn btn-outline w-full max-w-lg mx-auto"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SingUp;
