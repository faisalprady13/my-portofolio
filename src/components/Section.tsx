import React from "react";

interface SectionProps {
  isDarkMode?: boolean;
  isFullScreen?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  isDarkMode = false,
  isFullScreen = true,
  children,
}) => {
  const sectionStyle: React.CSSProperties = {
    width: isFullScreen ? "100vw" : "auto",
    height: isFullScreen ? "100vh" : "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isDarkMode ? "#1a1a1a" : "#f5f5f5",
    color: isDarkMode ? "#ffffff" : "#000000",
    padding: isFullScreen ? "0" : "2rem",
  };

  return <div style={sectionStyle}>{children}</div>;
};

export default Section;
