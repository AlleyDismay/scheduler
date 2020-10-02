import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment({ id, time, interview }) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const {mode, transition, back} = useVisualMode(interview ? SHOW : EMPTY)

  return <article className="appointment">
    <Header time={time} />

    {/* {(interview ? <Show {...interview} /> : <Empty />)} */}

    {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
    {mode === SHOW && (
      <Show
        student={interview ? interview.student : `Mode is ${mode}, but Interview is ${interview}... And I know the problem is with 'mode ==='`}
        interviewer={interview ? interview.student : {  
          "id": 1,
          "name": "Sylvia Palmer",
          "avatar": "https://i.imgur.com/LpaY82x.png"
        }}
      />
    )}

  </article>
}