import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  function handleClick() {
    if (isRunning) {
      setTime(0);
    }
    setIsRunning(!isRunning);
  }

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold">Stopwatch</h1>
      <p className="text-xl my-3">{time} sec</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export {Stopwatch}