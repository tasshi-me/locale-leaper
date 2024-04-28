import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

type Props = PropsWithChildren<{
  className?: string;
  icon: IconType;
}>;

const Component = ({ className, icon, children }: Props): React.ReactNode => {
  return (
    <span className={className}>
      {icon({ display: "inline", size: "1rem" })}
      {children}
      <span className="dummy" />
    </span>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 0.2rem;
  }

  span.dummy {
    width: 1rem;
    height: 1rem;
    margin: 0 0.2rem;
  }
` as typeof Component;

export const TextWithIcon = StyledComponent;
