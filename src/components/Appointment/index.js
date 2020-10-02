import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";

export default function Appointment({id, time, interview }) {
  return <article className="appointment">
    <Header time={time} />
    {(interview ? <Show {...interview}/> : <Empty />)}
</article>
}