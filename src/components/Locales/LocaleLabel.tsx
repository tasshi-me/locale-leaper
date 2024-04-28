import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  name: string;
};

const Component: React.FC<Props> = ({ className, name }) => {
  return <span className={className}>{name}</span>;
};

const StyledComponent = styled(Component)`
  font-weight: bold;
`;

export const LocaleLabel = StyledComponent;
