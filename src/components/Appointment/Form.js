import React, { useState } from 'react';

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form({ name, interviewer, interviewers, onSave, onCancel }) {

  const [studentName, setName] = useState(name || "");
  const [currentInterviewer, setInterviewer] = useState(interviewer || null);

  return <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name={studentName}
          type="text"
          placeholder="Enter Student Name"
        /*
          This must be a controlled component
        */
        />
      </form>
      <InterviewerList interviewers={interviewers} value={currentInterviewer} onChange={setInterviewer} />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={() => onCancel()}>Cancel</Button>
        <Button confirm onClick={() => {setName(studentName); setInterviewer(null); onSave()}}>Save</Button>
      </section>
    </section>
  </main >


}