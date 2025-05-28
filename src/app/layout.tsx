import { ReactNode } from "react";
import StyledComponentsRegistry from "../components/styled-components-registry";
import ThemeWrapper from "../components/ThemeWrapper";
import Toolbar from "../components/Toolbar";

export const metadata = {
  title: "Golfinity",
  description: "Your Golf Mastery Guide",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <ThemeWrapper>
            <Toolbar />
            {children}
          </ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}