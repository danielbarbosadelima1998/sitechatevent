import React, {  useEffect,useState } from "react";

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
  events.setMaxListeners(0);
  const [array, setArray] = useState([]);
 
  //events.on("pushMessage", );
  // states
  // const [messageReceived, setMessageReceived] = useState();


    events.on("message1", text => setArray([...array, {name: 'Dani', message: text}]))
 

  return (
    <div>
      <h1>Chat2</h1>

      <div style={style.divMain}>mensagem Recebida: {array.map((item,index) => <p key={index}> {item.name}: {item.message} </p>)} </div>
    </div>
  );
};

export default Chat2;
