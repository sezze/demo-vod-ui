import React from "react";
import ParsedConfiguration from "types/ParsedConfiguration";

const ParsedConfigurationContext = React.createContext<
  ParsedConfiguration | undefined
>(undefined);

export default ParsedConfigurationContext;
