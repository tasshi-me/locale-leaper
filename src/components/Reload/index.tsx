import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  visible: boolean;
  callback: () => void;
};

const Component: React.FC<Props> = ({ className, visible, callback }) => {
  return (
    visible && (
      <button
        className={className}
        onClick={async () => {
          await chrome.tabs.reload();
          callback();
        }}
      >
        Reload to apply changes!
      </button>
    )
  );
};

const StyledComponent = styled(Component)`
  background: dodgerblue;
  border-color: dodgerblue;
  color: white;
  font-weight: bold;
  font-size: 1.3em;

  margin: 0.5em 0;

  &:hover {
    background: #1975ce;
    border-color: #1975ce;
  }

  @media (prefers-color-scheme: light) {
    background: deepskyblue;
    border-color: deepskyblue;
    &:hover {
      background: #0bace1;
      border-color: #0bace1;
    }
  }
`;

export const Reload = StyledComponent as typeof Component;
