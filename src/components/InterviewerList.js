import React from "react";

import InterviewerListItem from "components/InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList({ interviewers, interviewer, setInterviewer }) {
  return (
    <ul>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
          {interviewers.map(({ id, name, avatar }) => {
            return <InterviewerListItem
              id={id}
              name={name}
              avatar={avatar}
              setInterviewer={setInterviewer}
              selected={id === interviewer}
              />
          })
          }
        </ul>
      </section>

    </ul>
  );
}
