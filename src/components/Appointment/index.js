import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Form from "components/Appointment/Form";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment({ key, id, time, interview, interviewers, bookInterview}) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    bookInterview(id, interview);
    transition(SHOW)
  }

  return <article className="appointment">
    <Header time={time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={interview.student}
        interviewer={interview.interviewer}
        onEdit={() => transition(CREATE)}
        onDelete={() => transition(EMPTY)}
      />
    )}
    {mode === CREATE && <Form
      interviewers={interviewers}
      onSave={() => save}
      onCancel={() => back}
      />}

  </article>
}