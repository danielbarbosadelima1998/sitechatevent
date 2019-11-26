import React, { useState } from "react";

import { TextField, makeStyles } from "@material-ui/core";

import { events } from "../../service/events";

import Message from "../../components/message";

const msg = require("../../service/messages");
// style
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 500
    }
  }
}));

const style = {
  divMain: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "400px",
    margin: "auto"
  },
  inputMessage: {
    position: "relative",
    fontSize: "20px",
    width: "500px"
  },
  enviar: {}
};

const Chat1 = () => {
  const classes = useStyles();

  // States
  const [message, setMessage] = useState();

  // HandleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    msg.push({ name: "daniel", message });
    console.log(msg);
    //events.emit("message1", message); //emitindo as mensagems do chat 1  para o 2
  };

  // Eventos

  //events.on("message2", ) //ouvindo as mensagems do chat 2

  return (
    <div style={{ width: "50%", margin: "0 10px" }}>
      <h1>Chat1</h1>

      <div style={style.divMain}>
        {msg.map((item,index) => 
          <p key={index}> name= {item.name} message= {item.message} </p>
        )}

        <form
          onSubmit={e => handleSubmit(e)}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            onChange={e => setMessage(e.target.value)}
            label="Standard"
          />

          <input
            type="submit"
            variant="contained"
            color="primary"
            value="send"
          />
        </form>
      </div>
    </div>
  );
};

export default Chat1;
