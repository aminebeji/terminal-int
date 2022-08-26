import React from "react";
import { commands } from "../tools/consts";

const Help = () => {
  return (
    <div>
      <h4>those are the following commands that you can type :</h4>
      {commands.map((item, index) => {
        return (
          <p key={index} className="help_command">
            {item.command}

            <span className="help_description">
              {"          "}
              {item.description}
            </span>
          </p>
        );
      })}
    </div>
  );
};

export default Help;
