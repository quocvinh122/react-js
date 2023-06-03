import React from "react";
import "./ToggleStyle.css";
// stateless functional component: component nhưng không sử dụng state
// const Toggle = () => {
//     return (
//         <div>

const { useState } = require("react");

//         </div>
//     );
// };
// stateful function component: component có sử dụng state
// function Toggle2(){
//     return <div></div>;
// }

function Toggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((on) => {
        console.log(on);
        return !on;
    })
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
