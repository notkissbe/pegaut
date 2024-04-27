import React from "react";

interface ModalBackdropProps {
  children: React.ReactNode;
  duration: number;
  state: "entering" | "entered";
}

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ children, duration, state }) => {
  const defaultStyle: React.CSSProperties = {
    transition: `background-color ${duration}ms ease-in-out, z-index ${duration}ms ease-in-out`,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: -1000
  };

  const transitionStyles: Record<string, React.CSSProperties> = {
    entering: { backgroundColor: "rgba(0, 0, 0, 0)", zIndex: -1000 },
    entered: { backgroundColor: "rgba(0, 0, 0, 0)", zIndex: 10000 }
  };

  return (
    <div
      className="modal-backdrop"
      style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;

