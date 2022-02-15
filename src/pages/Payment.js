import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const location = useLocation();
  const { title, price } = location.state;

  const [paymentDone, serPaymentDone] = useState();

  const protect = (price / 10).toFixed(2);
  const fraisPort = (price / 20).toFixed(2);
  const total = (Number(protect) + Number(fraisPort) + Number(price)).toFixed(
    2
  );

  const handlePayment = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElements(CardElement);
  };
  // URL : https://lereacteur-vinted-api.herokuapp.com/payment
  return (
    <div className="payment-container">
      <div className="payment-card">
        <p className="payment-title">Résumé de la commande</p>
        <div className="payment-resume">
          <ul>
            <li>
              <span>Commande</span>
              <span>{price} €</span>
            </li>
            <li>
              <span>Frais protection acheteurs</span>
              <span>{protect} €</span>
            </li>
            <li>
              <span>Frais de port</span>
              <span>{fraisPort} €</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="payment-total">
          <span className="bold">Total</span>
          <span className="bold">{total} €</span>
        </div>
        <div className="payment-resume-container">
          <p className="payment-resume-text">
            Il ne vous rester plus qu'une étape pour vous offrir{" "}
            <span className="bold">{title}</span>. Vous allez payer{" "}
            <span className="bold">{price} €</span> (frais de port inclus).
          </p>
          <div className="divider"></div>
          <Elements stripe={stripePromise}>
            <form onSubmit={handlePayment}>
              <CardElement></CardElement>
              <button className="payment-pay-button" type="submit">
                Pay
              </button>
            </form>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
