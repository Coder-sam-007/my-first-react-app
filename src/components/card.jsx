import React from "react";

export const Feature_card = ({ title, desc }) => {
  return (
    <div className="col d-flex flex-column gap-2">
      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
        <h4 className="fw-semibold mb-0 py-3 text-center px-2">{title}</h4>
      </div>

      <p className="text-body-secondary">{desc} </p>
    </div>
  );
};

export const Pricing_card = ({ title, price, details, btnName }) => {
  return (
    <>
      <div className="card mb-4 box-shadow bg-secondary">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${price} <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-lg btn-block btn-outline-secondary"
          >
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};
