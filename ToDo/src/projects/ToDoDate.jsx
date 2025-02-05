import { useEffect, useState } from "react";

export const ToDoDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currDate = now.toLocaleDateString();
      const currtime = now.toLocaleTimeString();
      setDate(`${currDate} - ${currtime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{date}</h2>;
};
