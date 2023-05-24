import React from "react";

function Features() {
  return (
    <div className="container px-4">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 pb-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h3 className="fw-bold">
            Powerful Features to Supercharge Your Productivity
          </h3>
          <p className="text-body-secondary">
            Our todo app is equipped with a comprehensive set of powerful
            features designed to supercharge your productivity. From efficient
            task management to seamless collaboration, our app empowers you to
            stay organized and accomplish more. With intuitive reminders and
            notifications, you'll never miss a deadline again. Gain valuable
            insights into your productivity with progress tracking, visualizing
            your accomplishments and setting milestones. Discover the ultimate
            tool for optimizing your workflow and achieving your goals with our
            feature-packed todo app.
          </p>
          <a href="#" className="btn btn-success btn-lg">
            Add Tasks now
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                <h4 className="fw-semibold mb-0 py-3 text-center px-2">
                  Task Management
                </h4>
              </div>

              <p className="text-body-secondary">
                Effortlessly create, organize, and manage your tasks. Add due
                dates, set priorities, and categorize tasks for better
                organization.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                <h4 className="fw-semibold mb-0 py-3 text-center px-2">
                  Progress Tracking
                </h4>
              </div>

              <p className="text-body-secondary">
                Gain insights into your productivity and track your progress
                over time. Visualize completed tasks, set milestones, and
                measure your achievements to stay motivated and focused.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                <h4 className="fw-semibold mb-0 py-3 text-center px-2">
                  Reminders and Notifications
                </h4>
              </div>

              <p className="text-body-secondary">
                Never miss a deadline again. Set reminders and receive
                notifications to stay on track and ensure timely completion of
                your tasks.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                <h4 className="fw-semibold mb-0 py-3 text-center px-2">
                  Collaboration and Sharing
                </h4>
              </div>

              <p className="text-body-secondary">
                Collaborate with teammates, friends, or family members by
                sharing tasks and projects. Delegate responsibilities, assign
                tasks, and track progress together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
