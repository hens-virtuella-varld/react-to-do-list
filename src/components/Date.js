import { useEffect, useState } from "react";
import '../styles/date.css';

const Date = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [date, setDate] = useState(new window.Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new window.Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  console.count("rerender");

  return (
    <div>
      <h1 className="date">
        {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
      </h1>
      <p>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </p>
    </div>
  );
};

export default Date;