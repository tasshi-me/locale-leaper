import React from "react";
import styled from "styled-components";
import { palette } from "../../designTokens/colors.ts";

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
  background: ${palette.dark.paoloVeroneseGreen};
  border-color: ${palette.dark.paoloVeroneseGreen};
  color: white;
  font-weight: bold;
  font-size: 1.3em;

  margin: 0.5em 0;

  &:hover {
    background: ${palette.light.persianGreen};
    border-color: ${palette.light.persianGreen};
  }

  @media (prefers-color-scheme: light) {
    background: ${palette.light.persianGreen};
    border-color: ${palette.light.persianGreen};
    &:hover {
      background: ${palette.dark.paoloVeroneseGreen};
      border-color: ${palette.dark.paoloVeroneseGreen};
    }
  }
`;

export const Reload = StyledComponent as typeof Component;
