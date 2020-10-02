import React, { useState } from 'react';

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form({ name, interviewer, interviewers, onCancel, onSave }) {

  const [nameState, setName] = useState(name || "");
  const [interviewerState, setInterviewer] = useState(interviewer || null);

  return <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name={nameState}
          type="text"
          placeholder="Enter Student Name"
        /*
          This must be a controlled component
        */
        />
      </form>
      <InterviewerList
        interviewers={interviewers}
        value={interviewerState}
        onChange={setInterviewer}
      />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={() => { setName(""); setInterviewer(null); onCancel() }}>Cancel</Button>
        <Button confirm onClick={onSave}>Save</Button>
      </section>
    </section>
  </main>


}