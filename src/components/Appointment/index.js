import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment({ id, time, interview, interviewers, bookInterview, cancelInterview }) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    bookInterview(id, interview)
    transition(SHOW)
  }

  function deleting() {
    cancelInterview(id)
    transition(EMPTY)
  }

  return <article className="appointment">
    <Header time={time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={interview.student}
        interviewer={interview.interviewer}
        onEdit={() => transition(CREATE)}
        onDelete={deleting}
      />
    )}
    {mode === CREATE && <Form
      interviewers={interviewers}
      onSave={save}
      onCancel={() => back}
    />}
    {mode === SAVING && <Status message={SAVING}/>}

  </article>
}