import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import Login from "../../Login/Login";

const Modal = ({ bookNowItemID }) => {
  const { user, loading, setloading } = useContext(AuthContext);
  const [bookingDataInfo, setBookingDataInfo] = useState({});
  const [number, setnumber] = useState(false);
  const [location, setLocationr] = useState(false);
  const neviget = useNavigate("");
  useEffect(() => {
    if (!bookNowItemID) {
      return;
    }

    fetch(`${serverUrl}/book-now/${bookNowItemID}`)
      .then((res) => res.json())
      .then((data) => {
        setBookingDataInfo(data);
      });
  }, [bookNowItemID]);

  const handelBook = (event) => {
    event.preventDefault();
    setnumber(false);
    setLocationr(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;

    const bookingData = {
      name,
      email,
      productName,
      price,
      number,
      location,
      bookingProductId: bookNowItemID,
    };

    fetch(`${serverUrl}/book-now`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          neviget(`/dashboard/payment/${bookNowItemID}`);
          toast.success("your product is book");
        }
      });
    form.reset();
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
          <form onSubmit={handelBook}>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">product name</span>
              </label>
              <input
                type="text"
                name="productName"
                defaultValue={bookingDataInfo?.title}
                disabled
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">product price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={bookingDataInfo?.resalePrice}
                disabled
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your Phone number</span>
              </label>
              <input
                onChange={(e) =>
                  e.target.value ? setnumber(true) : setnumber(false)
                }
                type="number"
                name="number"
                required
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Your location</span>
              </label>
              <input
                onChange={(e) =>
                  e.target.value ? setLocationr(true) : setLocationr(false)
                }
                type="text"
                name="location"
                required
                className="input input-bordered w-full max-w-lg"
              />
            </div>

            <div className="flex justify-start items-center">
              <button className="modal-action" type="submit">
                <label
                  className="btn btn-success btn-sm hover:bg-teal-500 "
                  htmlFor={location && number ? "booking_modal" : ""}
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
