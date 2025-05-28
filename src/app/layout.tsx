import { ReactNode } from "react";
import StyledComponentsRegistry from "../components/styled-components-registry";
import ThemeWrapper from "../components/ThemeWrapper";
import { CSSProperties } from "react";
import Toolbar from "../components/Toolbar";

export const metadata = {
  title: "Golfex - Your Golf Mastery Guide",
  description: "A Next.js golf resource with Styled Components",
};

const heroStyle: CSSProperties = {
  background: "#1b5e20", // Dark green from theme
  padding: "4rem 2rem",
  textAlign: "center",
};

const heroTitleStyle: CSSProperties = {
  fontSize: "3rem",
  fontWeight: 700,
  color: "#ffffff", // White for contrast
  margin: 0,
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