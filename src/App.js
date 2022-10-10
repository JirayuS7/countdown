import React from "react";
import { useEffect, useState } from "react";

function App() {
  const Second = 1000;
  const Minute = Second * 60;
  const Hour = Minute * 60;
 

  const [runing, setruning] = useState(0);
  const [endData, setendData] = useState("December 22,2022 23:59:59");

 
  function CountDown() {
    const now = new Date();
 

    const target = new Date(endData);

    const untillNewyear = target - now;

 
    const countHour = Math.floor(untillNewyear / Hour);
    const countMinute = Math.floor((untillNewyear % Hour) / Minute);
    const countSecond = Math.floor((untillNewyear % Minute) / Second);

    if (target < now) {
      return "นับเวลาเสร็จสิ้น";
    } else {
      return (
        <>
          <div className="container">
            <div id="timeCount" style={{ display: "flex" }}>
              <div style={{ padding: "20px" }}>
                {countHour} :<span style={{ display: "block" }}>ชั่วโมง</span>
              </div>

              <div style={{ padding: "20px" }}>
                {countMinute} :<span style={{ display: "block" }}>นาที</span>
              </div>

              <div style={{ padding: "20px" }}>
                {countSecond} <span style={{ display: "block" }}>วินาที</span>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setruning(CountDown);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h2>
        CountDown <CountDown date={endData} />
      </h2>
   
    </div>
  );
}

export default App;
