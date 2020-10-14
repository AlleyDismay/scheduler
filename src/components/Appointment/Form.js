import React, { useState } from 'react';

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form({ name, interviewer, interviewers, onSave, onCancel }) {

  const [newName, setName] = useState(name || "");
  const [newInterviewer, setInterviewer] = useState(interviewer || null);

  return <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name={name}
          type="text"
          placeholder="Enter Student Name"
        /*
          This must be a controlled component
        */
        />
      </form>
      <InterviewerList interviewers={interviewers} value={newInterviewer} setInterviewer={setInterviewer} />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={() => onCancel()}>Cancel</Button>
        <Button confirm disabled={!newInterviewer} onClick={() => {onSave(newName, newInterviewer)}}>Save</Button>
      </section>
    </section>
  </main >


}