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
