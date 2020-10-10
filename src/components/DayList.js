import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList({ days, day, setDay }) {
  return (
    <ul>
      {days.map((weekday) => {
        return <DayListItem
          key={weekday.name}
          name={weekday.name}
          spots={weekday.spots}
          selected={weekday.name === day}
          setDay={setDay}
        />}
      )
      }
    </ul>
  );
}
