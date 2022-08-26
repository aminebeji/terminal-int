import React, { useState } from "react";
import { TerminalOutput } from "react-terminal-ui";
import { v4 as uuidv4 } from "uuid";
import Help from "./Help";
function InitialLines() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={uuidv4()}>
      Welcome to the Amine Beji Terminal UI !&#128075;
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      try <span className="command">--help</span> to see all the commands
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      <Help></Help>
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      <br />
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"***************************"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"***************************"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"*****                 *****"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"*****    Amine Beji   *****"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"*****                 *****"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"***************************"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      {"***************************"}
    </TerminalOutput>,
    <TerminalOutput key={uuidv4()}>
      <br />
    </TerminalOutput>,
  ]);
  return { terminalLineData, setTerminalLineData };
}

export default InitialLines;
