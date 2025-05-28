// src/components/ThemeWrapper.tsx
"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import { ReactNode } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}