import React, { useEffect, useState } from "react";

import { events } from "../../service/events";

const Message = props => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    events.on("message", text => setMessage(text));
  });

  return (
    <div style={{ height: "350px", border: "1px solid" }}>
      {message && (
        <div style={{ backgroundColor: 'red' }}>
          <h5 style={{ margin: "0" }}>{props.name}</h5>
          {message}
        </div>
      )}
    </div>
  );
};

export default Message;
