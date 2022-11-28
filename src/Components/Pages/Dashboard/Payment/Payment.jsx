import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"Please Payment"} />
      </div>
      <div className="mt-20 w-96 mx-auto bg-gray-300 p-10 rounded-lg text-black">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
