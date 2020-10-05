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

  // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };
  //   bookInterview(id, interview)
  // }

  return <article className="appointment">
    <Header time={time} />

    {/* {(interview ? <Show {...interview} /> : <Empty />)} */}

    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={interview ? interview.student : `Mode is ${mode}, but Interview is ${interview}... And I know the problem is with 'mode ==='`}
        interviewer={interview ? interview.interviewer : {
          "id": 1,
          "name": "Sylvia Palmer",
          "avatar": "https://i.imgur.com/LpaY82x.png"
        }}
        onEdit={() => transition(CREATE)}
        onDelete={() => transition(EMPTY)}
      />
    )}
    {mode === CREATE && <Form
      interviewers={interviewers}
      onSave={() => transition(SHOW)}
      // onSave={save}
      onCancel={() => back()}
      />}

  </article>
}