import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Oops! This is an unsupported page!</h2>
      <p>We only support the kintone website.</p>
    </div>
  );
};

const StyledComponent = styled(Component)`
  font-weight: bold;
  font-size: 1.3em;
`;

export const Unsupported = StyledComponent as typeof Component;
