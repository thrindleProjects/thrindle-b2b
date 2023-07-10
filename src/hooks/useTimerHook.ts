import React, { useEffect, useState } from 'react';

interface useTimerHookProps {
  initialMinutes: number;
  startTimer: boolean;
  toggleStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
  cb?: () => void;
}
const useTimerHook = ({
  initialMinutes,
  startTimer,
  toggleStartTimer,
  cb,
}: useTimerHookProps) => {
  const initialMinutesCounter = initialMinutes ? initialMinutes : 10;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinutesCounter);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimerCounting, setIsTimerCounting] = useState(false);

  // Timer use effect to track the timer
  useEffect(() => {
    if (startTimer === true) {
      const myInterval = setInterval(() => {
        setIsTimerCounting(true);
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            toggleStartTimer(false);
            setMinutes(initialMinutes);
            setSeconds(initialSeconds);
            setIsTimerCounting(false);
            if (cb) cb();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  const resetTimer = () => {
    toggleStartTimer(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    setIsTimerCounting(false);
  };

  return {
    minutes,
    seconds,
    isTimerCounting,
    resetTimer,
  };
};

export default useTimerHook;
