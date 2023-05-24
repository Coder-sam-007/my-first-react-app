import React from "react";
import hero_img from "../assets/images/15.webp";

export default function Hero() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={hero_img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">
              Stay Focused and Accomplish More with TaskTracker
            </h1>
            <p className="lead">
              TaskTracker is a dynamic todo app built to enhance your focus and
              productivity. Seamlessly manage your tasks, deadlines, and
              projects in one centralized location. With TaskTracker, you can
              prioritize your workload, track progress, and celebrate milestones
              along the way. Experience the power of TaskTracker and unlock your
              full potential for success.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2"
              >
                Get Started Now!
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Get Started in Future!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
