"use client";

import { StyledEngineProvider } from "@mui/styled-engine";

interface Props {
  children: React.ReactNode;
}

const StyledEngineWrapper = ({ children }: Props) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default StyledEngineWrapper;
