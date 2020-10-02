import React from "react";
import classNames from 'classnames';

import "components/DayListItem.scss";

export default function DayListItem({ name, setDay, spots, selected }) {

  console.log(name)

  return (
    <li
      selected={selected}
      onClick={() => setDay(name)}
      className={classNames("day-list__item", { "day-list__item--selected": selected, "day-list__item--full": !spots })}
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots || "no"} spot{spots - 1 ? 's' : ''} remaining</h3>
    </li>
  );
}
