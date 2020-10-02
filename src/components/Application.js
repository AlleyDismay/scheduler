import React, { useState, useEffect } from "react";

import axios from "axios";

import DayList from "components/DayList";

import "components/Application.scss";

import Appointment from "components/Appointment";

import {getAppointmentsForDay, getInterview} from "helpers/selectors.js";

export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const day = () => { return state.day };
  const days = () => { return state.days };
  // const appointments = () => { return state.appointments };
  // const interviewers = () => { return state.interviewers };

  const appointments = getAppointmentsForDay(state, day);
  
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview)
  });

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState({ ...state, days });
  const setAppointments = appointments => setState({ ...state, appointments });

  // const statePromises = Promise.all([axios.get("api/days"), axios.get("api/appointments")])
  const statePromises = Promise.all(["day", "appointment", "interviewer"].map(thing => { return axios.get(`api/${thing}s`) }));

  useEffect(() => {
    statePromises
      .then(([daysResp, appointsResp, intervsResp]) => {
        setState({
          day: state.day,
          days: daysResp.data,
          appointments: appointsResp.data,
          interviewers: intervsResp.data
        });
      });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"><DayList
          days={days()}
          day={day()}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {/* {Object.values(appointments()).map((appointment) => { return <Appointment {...appointment} /> })} */}
        {appointments.map((appointment) => { return <Appointment {...appointment} /> })}
        <Appointment key="last" time="5pm" />

      </section>
    </main>
  );
}