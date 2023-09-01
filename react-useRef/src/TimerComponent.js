import { useEffect } from "react";

export default function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer 동작 중");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>Timer</>;
}
