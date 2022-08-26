import { TerminalInput, TerminalOutput } from "react-terminal-ui";
import Help from "../components/Help";
import { commandCases } from "../tools/consts";
import { v4 as uuidv4 } from "uuid";

const Add_input_to_terminal = (input, terminalLineData) => {
  return [
    ...terminalLineData,
    <TerminalInput key={uuidv4()}>{input}</TerminalInput>,
  ];
};
export const response_to_input = (
  input,
  terminalLineData,
  setTerminalLineData,
  setTheme
) => {
  var items = Add_input_to_terminal(input, terminalLineData);

  switch (input.split(" " )[0]) {
    case commandCases.HELP:
      setTerminalLineData([
        ...items,
        <TerminalOutput key={uuidv4()}>
          <Help></Help>
        </TerminalOutput>,
      ]);
      break;
    case commandCases.CLEAR:
      setTerminalLineData([]);
      break;
    case commandCases.THEME:
      let ChoosenTheme = input.replace(commandCases.THEME, "");
      setTheme(ChoosenTheme);
      setTerminalLineData(items)
      break;
    default:
      console.log("default");
      break;
  }
};
