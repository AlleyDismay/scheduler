export function getAppointmentsForDay({ days, appointments, interviewers }, dayWanted) {
  try {
    return days.filter(day => day["name"] == dayWanted)[0]["appointments"].map(appointment => appointments[appointment]);
  }
  catch {
    return [];
  }
}

export function getInterview(...params) {
  try {
    const [{ days, appointments, interviewers}, { student, interviewer }] = params;
    return {
      "interviewer":
        { ...interviewers[interviewer] },
      "student": student
    };
  }
  catch { return null; }
}