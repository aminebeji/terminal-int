import { useEffect, useState } from "react";
import Terminal, { ColorMode } from "react-terminal-ui";
import InitialLines from "../components/InitialLines";
import { response_to_input } from "../scripts/InputScript";

function TerminalView() {
  const { terminalLineData, setTerminalLineData } = InitialLines();
  const [ThemeMode , setThemeMode] = useState("Light")
  useEffect(() => {
    console.log(terminalLineData);
  }, [terminalLineData]);
  const changeTerminalLines = (output ) => {
    setTerminalLineData(output)
  }
  return (
    <Terminal
      name="Welcome To my terminal !"
      colorMode={ColorMode[ThemeMode]}
      onInput={(terminalInput) => {
        if (terminalInput === "--clear")  {
          setTerminalLineData([])
        }
        response_to_input(terminalInput,terminalLineData ,changeTerminalLines ,setThemeMode );
      }}
      startingInputValue="--help"
    >
      {terminalLineData}
    </Terminal>
  );
}

export default TerminalView;
