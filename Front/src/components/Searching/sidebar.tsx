import React from "react";

interface SidebarProps {
  children: React.ReactNode;
  duration: number;
  state: "entering" | "entered";
}

const Sidebar: React.FC<SidebarProps> = ({ children, duration, state }) => {
  const defaultStyle: React.CSSProperties = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateY(101%)"
  };

  const transitionStyles: Record<SidebarProps["state"], React.CSSProperties> = {
    entering: { transform: "translateY(10%)" },
    entered: { transform: "translateY(0)" }
  };

  return (
    <div
      className="sidebar"
      style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}
    >
      {children}
    </div>
  );
};

export default Sidebar;

