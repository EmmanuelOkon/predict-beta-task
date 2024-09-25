import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{ backgroundColor: "#282c34", padding: "1rem", color: "white" }}
      >
        <h1>My App</h1>
      </header>
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
      <footer
        style={{
          backgroundColor: "#282c34",
          padding: "1rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
