import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);

  function transition(update, replace = false) {
    if (!replace) {
      setHistory(history.concat[mode]);
  }
  setMode(update)
  }

  function back() {
    
  }

  return { mode, transition, back };
}

