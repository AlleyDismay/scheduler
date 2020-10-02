import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);

  function transition(update, replace = false) {
    if (!replace) {
      setHistory([mode].concat(history));
    }
    setMode(update)
  }

  function back() {
    if (history.join()) {
      setMode(history.shift());
      setHistory(history);
    }
  }

  return { mode, transition, back };
}

