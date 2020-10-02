import { useState } from "react";

export default function useVisualMode(initial) {

  // const [mode, setMode] = useState(initial);
  // const [history, setHistory] = useState([]);

  // function transition(update, replace = false) {
  //   if (!replace) {
  //     setHistory(history.concat([mode]))
  //   };
  //   setMode(update);
  // }

  // function back() {
  //   if (history.join()) {
  //     setMode(history.pop());
  //     setHistory(history);
  //   }
  // }

  // return { mode, transition, back };

  const [history, setHistory] = useState([initial]);  function transition(mode, replace = false) {
    setHistory(prev => {
      if (replace) {
        // replace the last item if replace=true
        return [...prev.slice(0, prev.length - 1), mode];
      } else {
        // otherwise add mode to end
        return [...prev, mode];
      }
    });
  }  function back() {
    if (history.length < 2) return;
    // remove last item
    setHistory(prev => [...prev.slice(0, history.length - 1)]);
  }  // return last item on the array
  return { mode: history.slice(-1)[0], transition, back };
}