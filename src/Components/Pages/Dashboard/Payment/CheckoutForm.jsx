import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = ({ booking }) => {
  const [errorCard, setErrorCard] = useState();
  const [success, setSuccess] = useState();
  const [transactionId, setTransactionId] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate("");
  const stripe = useStripe();
  const elements = useElements();
  const { resalePrice, email, name, _id } = booking;

  useEffect(() => {
    fetch(`${serverUrl}/dashboard/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data?.clientSecret));
  }, [resalePrice]);
  // payment handel function
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErrorCard(error.message);
    } else {
      setErrorCard("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name,
            email,
          },
        },
      });

    if (confirmError) {
      setErrorCard(confirmError.message);
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        resalePrice,
        transactionId: paymentIntent.id,
        bookingId: _id,
      };
      fetch(`${serverUrl}/dashboard/payments`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setSuccess("Congrats! your payment completed");
            toast.success("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
            navigate("/dashboard/my-orders");
          }
        });
    }
    setProcessing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-20 px-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{errorCard}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId <span>{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
