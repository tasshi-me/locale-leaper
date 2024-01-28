import React from "react";
import styled from "styled-components";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

const Component: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledComponent = styled(Component)`
  padding: 0 2em;
` as typeof Component;

export const Card = StyledComponent as typeof Component;
