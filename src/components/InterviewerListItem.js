import React from "react";
import classNames from 'classnames';

import "components/InterviewerListItem.scss";

export default function InterviewerListItem({ id, name, avatar, setInterviewer, selected }) {
  return (
    <li
      selected={selected}
      onClick={setInterviewer(id)}
      className={classNames("interviewers__item", { "interviewers__item--selected": selected})}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {name}
    </li>

  );
}
