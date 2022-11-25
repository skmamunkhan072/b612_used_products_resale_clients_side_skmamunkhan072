import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import Login from "../../Login/Login";

const Modal = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelBook = (data) => {
    const { number, userLocation } = data;
    console.log(number, userLocation);
  };

  if (loading) {
    return <Login />;
  }
  return (
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-lg relative">
          <label
            htmlFor="booking_modal"
            className="modal-action absolute -top-3 right-5 cursor-pointer hover:bg-slate-700 p-1 rounded-lg"
          >
            <IoMdClose className="text-3xl" />
          </label>

          <h3 className="font-bold text-lg text-start">
            Congratulations random Internet user!
          </h3>
          <form onSubmit={handleSubmit(handelBook)}>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                value={user.displayName}
                disabled
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <input
                type="text"
                defaultValue={user.email}
                value={user.email}
                disabled
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your Phone number</span>
              </label>
              <input
                type="text"
                {...register("number", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your location</span>
              </label>
              <input
                type="text"
                {...register("userLocation", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-lg"
              />
            </div>

            <div className="flex justify-start items-center">
              <button className="modal-action" type="submit">
                <label
                  className="btn btn-success btn-sm hover:bg-teal-500 "
                  htmlFor="booking_modal"
                >
                  submit
                </label>
              </button>
              <button className="modal-action ml-10">
                <label
                  className="btn btn-outline btn-success btn-sm"
                  htmlFor="booking_modal"
                >
                  cancel
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
