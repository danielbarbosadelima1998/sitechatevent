import { events } from "./events";

events.setMaxListeners(0);

events.on("message", text => {
  events.emit("pushMessage", {name: 'Daniel', message: text});
});
