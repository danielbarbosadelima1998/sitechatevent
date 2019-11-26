import React, { useEffect, useState } from "react";

import { events } from "../../service/events";

const style = {
  divMain: {
    pistion: "flex",
    backgroundColor: "lightgrey",
    width: "800px",
    height: "400px",
    alignItems: "center",
    margin: "auto",
    alignContent: "center"
  }
};

const Chat2 = () => {
  const [arrayMessage, setArrayMessage] = useState([]);

  useEffect(() => {
    events.on("pushMessage", text => setArrayMessage([...arrayMessage, text]));
  });

  return (
    <div>
      <h1>Chat2</h1>

      <div style={style.divMain}>
        {arrayMessage &&
          arrayMessage.map((item, index) => (
            <p key={index}>
              {" "}
              name= {item.name} message= {item.message}{" "}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Chat2;
