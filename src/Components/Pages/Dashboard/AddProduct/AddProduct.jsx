import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { HandelImgHost } from "../../../Hooks/AllFunctionHoks";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import Loading from "../../Share/Loading/Loading";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const AddProduct = () => {
  const [categoryNameData, setCategoryNameData] = useState([]);
  const { user } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState("");
  const [imgHostLink] = HandelImgHost(imageFile);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //new date
  const defaultMonthAndDate = new Date().toLocaleString();
  const newDate = defaultMonthAndDate.split(",")[0].split("/").join("-");
  const newTiem = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  // all category name server data load function
  useEffect(() => {
    fetch(`${serverUrl}/all-products-category/`)
      .then((res) => res.json())
      .then((data) => setCategoryNameData(data));
  }, []);

  // add product function
  const handelAddProduct = (data) => {
    // console.log(data);
    const productData = {
      ...data,
      email: user?.email,
      name: user?.displayName,
      postDate: newDate,
      postTime: newTiem,
      productImageUrl: imgHostLink?.data?.display_url,
      sellersVerify: false,
      advertised: false,
    };
    // console.log(productData);
    fetch(`${serverUrl}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("your products is add");
          navigate("/dashboard/my-products");
        }
      });
  };

  if (!user) {
    return <Loading />;
  }
  return (
    <div className="from_wraper -mt-10 min-h-[100vh]	">
      <div className="mt-10">
        <SectionTitle title={"Add Your Product"} />
      </div>
      <div className="w-3/4 mx-auto pb-10">
        <form className="" onSubmit={handleSubmit(handelAddProduct)}>
          {imgHostLink ? (
            <div className="flex items-center justify-center mx-auto md:w-3/4 lg:w-2/4  my-10">
              <div className="w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <img
                  className="h-[100%] w-full"
                  src={imgHostLink?.data?.display_url}
                  alt="upload img preview"
                ></img>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full my-10">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      Click to upload your product images
                    </span>
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG or JPG (MAX. 800x400px)
                  </p>
                </div>

                <input
                  onChange={(e) => setImageFile(e.target.files)}
                  id="dropzone-file"
                  type="file"
                  accept="productImages/jpg, productImages/png"
                  className="hidden"
                />
              </label>
            </div>
          )}

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="name"
                id="name"
                value={user?.displayName}
                disabled
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                your name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="email"
                value={user?.email}
                disabled
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                your Email
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="floating_phone"
                {...register("number", {
                  required: "number is Required",
                })}
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="location"
                {...register("location", {
                  required: "location is Required",
                })}
                id="location"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="location"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Location
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="title"
                {...register("title", {
                  required: "title is Required",
                })}
                id="title"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="title"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="hasBeenUsed"
                {...register("hasBeenUsed", {
                  required: "hasBeenUsed is Required",
                })}
                id="hasBeenUsed"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="hasBeenUsed"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Has Been Used
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="originalPrice"
                {...register("originalPrice", {
                  required: "originalPrice is Required",
                })}
                id="originalPrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="originalPrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Original Price
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="resalePrice"
                {...register("resalePrice", {
                  required: "resalePrice is Required",
                })}
                id="resalePrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="resalePrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Resale Price
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <select
                type="text"
                name="resalePrice"
                {...register("Category", {
                  required: "Category is Required",
                })}
                id="resalePrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                {categoryNameData.map((category) => (
                  <option
                    className="bg-black"
                    key={category?._id}
                    value={category?.categoryName}
                  >
                    {category?.categoryName}
                  </option>
                ))}
              </select>
              <label
                htmlFor="resalePrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your price Category
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group ">
            <input
              type="text"
              name="textarea_textarea"
              {...register("details", {
                required: "details is Required",
              })}
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
              rows={"1"}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Details
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
