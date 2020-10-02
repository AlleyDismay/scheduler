export function getAppointmentsForDay({ days, appointments}, dayWanted) {
  try {
    return days.filter(day => day["name"] === dayWanted)[0]["appointments"].map(appointment => appointments[appointment]);
  }
  catch {
    return [];
  }
}

export function getInterview(...params) {
  try {
    const [state, { student, interviewer }] = params;
    return {
      "interviewer":
        { ...state.interviewers[interviewer] },
      "student": student
    };
  }
  catch { return null; }
}

export function getInterviewsForDay({ days, appointments, interviewers }, interviewWanted) {
  try {
    return days.filter(day => day["name"] === interviewWanted)[0]["interviewers"].map(interview => interviewers[interview]);
  }
  catch {
    return [];
  }
}