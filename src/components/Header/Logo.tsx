import React from "react";
import styled from "styled-components";
import reactLogo from "../../assets/react.svg";

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return <img className={className} src={reactLogo} alt="React logo" />;
};

const StyledComponent = styled(Component)`
  height: 2em;
  padding: 0.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }
`;

export const Logo = StyledComponent as typeof Component;
