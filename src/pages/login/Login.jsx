import { useState } from "react";
import { useForm } from "react-hook-form";

function Doctor() {
  const [swipe, setSwipe] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-sm mx-auto pt-10 ">
      <div className="text-start space-y-2">
        <h3 className="text-4xl font-medium">Login </h3>
        <p className="text-[#717aa1] text-sm mt-4">
          Welcome back! Please enter your details.
        </p>
        <p className="text-base font-medium">
          Sign in with
          <span
            onClick={() => setSwipe(!swipe)}
            className="text-[#0e82fd] underline cursor-pointer pl-1"
          >
            {swipe ? "Phone number" : "Email"}
          </span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md md:mx-auto mt-14 mx-3"
      >
        {swipe ? (
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("emil", { required: true })}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
        ) : (
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("number", { required: true })}
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone Number
            </label>
          </div>
        )}
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("password", { required: true })}
            type="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <button type="submit" className="primaryButton py-2  w-full ">
          Register Now
        </button>
      </form>
    </div>
  );
}

export default Doctor;
