import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class JobList extends Component {
  renderJob = (job) => {
    const title = job.company
      ? `${job.title} at ${job.company.name}`
      : job.title;

    return (
      <li className="media" key={job.id}>
        <div className="media-content">
          <Link to={`/jobs/${job.id}`}>{title}</Link>
        </div>
      </li>
    );
  }

  render() {
    const { jobs } = this.props;
    return (
      <ul className="box">
        {jobs.map(this.renderJob)}
      </ul>
    );
  }
}
