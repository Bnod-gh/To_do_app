import React, { useEffect, useState } from "react";

function Servingfunction() {
  const [datenows, setDatenows] = useState();

  useEffect(() => {
    const settingTime = setInterval(() => {
      const timenow = new Date();
      const datetoday = timenow.toLocaleDateString();
      const timetoday = timenow.toLocaleTimeString();
      setDatenows(`${datetoday}-${timetoday}`);
    }, 1000);
    return()=>clearInterval(settingTime)
  }, []);

  return (
    <div className="text-slate-300 font-bold text-2xl my-2">{datenows}</div>
  );
}

export default Servingfunction;
