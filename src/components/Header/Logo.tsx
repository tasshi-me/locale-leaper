import React from "react";
import styled from "styled-components";
import logoSvg from "../../assets/locale-leaper-logo.svg";

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return <img className={className} src={logoSvg} alt="LocaleLeaper logo" />;
};

const StyledComponent = styled(Component)`
  height: 2em;
  //will-change: filter;
  //transition: filter 300ms;
  //
  //&:hover {
  //  filter: drop-shadow(0 0 2em #646cffaa);
  //}
  //&:hover {
  //  filter: drop-shadow(0 0 2em #61dafbaa);
  //}
`;

export const Logo = StyledComponent as typeof Component;
