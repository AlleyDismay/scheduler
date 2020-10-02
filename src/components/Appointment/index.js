import React, {useState} from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Form from "components/Appointment/Form.js";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment({ id, time, interview, interviewers, bookInterview }) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  // const [{ mode, transition, back }, setMode] = useState(useVisualMode(interview ? SHOW : EMPTY));

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    // const interview = {
    //   student: name,
    //   interviewer
    // };
    bookInterview(id, interview);
  }

  console.log("interview", interview);
  console.log("mode result", interview ? SHOW : EMPTY);
  console.log("mode selection", useVisualMode(interview ? SHOW : EMPTY))
  console.log("mode", mode);

  return <article className="appointment">
    <Header time={time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={interview ? interview.student : `This Interview is ${interview}. The mode is ${mode}. "interview ? SHOW : EMPTY" is ${interview ? SHOW : EMPTY}. Well, something's wrong with Mode === SHOW...`}
        // student={interview.student}
        // interviewer={interview.interviewer}
        // student="Only Monday Doesn't Break. Days Change but Interview is Null when It shouldn't be..."
        interviewer={{
          "id": 1,
          "name": "Sylvia Palmer",
          "avatar": "https://i.imgur.com/LpaY82x.png"
        }}
      />
    )}
    {/* {(interview ? SHOW : EMPTY) === SHOW && (
      <Show
        student={interview ? interview.student : `This Interview is ${interview}. The mode is ${mode}.`}
        // student={interview.student}
        // interviewer={interview.interviewer}
        // student="Only Monday Doesn't Break. Days Change but Interview is Null when It shouldn't be..."
        interviewer={{
          "id": 1,
          "name": "Sylvia Palmer",
          "avatar": "https://i.imgur.com/LpaY82x.png"
        }}
      />
    )} */}
    {mode === CREATE && <Form
      name=""
      interviewers={interviewers}
      interviewer={interviewers[0]}
      onSave={() => save("", interviewers[0])}
      onCancel={() => { back() }}
    />}
  </article>
}