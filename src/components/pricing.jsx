import React, { Component } from "react";
import { Pricing_card } from "./card";
import "../App.css";

function Pricing() {
  return (
    <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <div className="d-flex justify-content-around card-deck mb-3 text-center">
        <Pricing_card
          title="Free"
          price={0}
          btnName="SignUp for free"
          details={[
            "10 users included",
            "2 GB of storage",
            "Email support",
            "Help center access",
          ]}
        />
        <Pricing_card
          title="Pro"
          price={15}
          btnName="Get Stared"
          details={[
            "20 users included",
            "10 GB of storage",
            "Priority email support",
            "Help center access",
          ]}
        />
        <Pricing_card
          title="Enterprise"
          price={29}
          btnName="Contact Us"
          details={[
            "30 users included",
            "15 GB of storage",
            "Phone and email support",
            "Help center access",
          ]}
        />
      </div>
    </>
  );
}

export default Pricing;
