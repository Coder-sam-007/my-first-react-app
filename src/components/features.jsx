import React from "react";
import { Feature_card } from "./feature-card";

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
            <Feature_card
              title="Task Management"
              desc="Effortlessly create, organize, and manage your tasks. Add due dates, set
        priorities, and categorize tasks for better organization."
            />
            <Feature_card
              title="Progress Tracking"
              desc=" Gain insights into your productivity and track your progress
                over time. Visualize completed tasks, set milestones, and
                measure your achievements to stay motivated and focused."
            />
            <Feature_card
              title="Reminders and Notifications"
              desc="  Never miss a deadline again. Set reminders and receive
                notifications to stay on track and ensure timely completion of
                your tasks."
            />
            <Feature_card
              title=" Collaboration and Sharing"
              desc=" Collaborate with teammates, friends, or family members by
                sharing tasks and projects. Delegate responsibilities, assign
                tasks, and track progress together."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
