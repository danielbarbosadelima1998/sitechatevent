import React from "react";

import Chat1 from '../chat1'
import Chat2 from '../chat2'

const Container = () => {
  return(
    <div style={{ display: 'flex' }}>
      <Chat1 />
      <Chat2 />
    </div>
  )
};

export default Container;