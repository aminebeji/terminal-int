import React from "react";

function InvalidCommand() {
  return (
    <div>
      <span className="error">ERR</span> invalid command .
      <br />
      <span className="tips">TIP</span> for help please type <span>--help</span>{" "}
      to get more information
    </div>
  );
}

export default InvalidCommand;
