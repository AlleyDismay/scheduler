import React from "react";
import classNames from 'classnames';

import "components/DayListItem.scss";

export default function DayListItem({ key, setDay, spots, selected }) {

  return (
    <li
      selected={selected}
      onClick={() => setDay(key)}
      className={classNames("day-list__item", { "day-list__item--selected": selected, "day-list__item--full": !spots })}
    >
      <h2 className="text--regular">{key}</h2>
      <h3 className="text--light">{spots || "no"} spot{spots - 1 ? 's' : ''} remaining</h3>
    </li>
  );
}
