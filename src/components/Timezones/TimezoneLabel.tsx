import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  utc: string;
  name: string;
  offset: number;
};

const Component: React.FC<Props> = ({ className, utc, name, offset }) => {
  const [date, setDate] = useState(buildLocalDate(offset));

  useEffect(() => {
    const timer = window.setInterval(
      () => setDate(buildLocalDate(offset)),
      1000,
    );
    return () => {
      clearInterval(timer);
    };
  }, [offset]);

  return (
    <span className={className}>
      <span>{utc}</span>
      <span>{name}</span>
      <span>{printTime(date)}</span>
    </span>
  );
};

const buildLocalDate = (offset: number) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset() + offset);
  return date;
};

const printTime = (date: Date) =>
  `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;

const StyledComponent = styled(Component)`
  display: inline-grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  place-content: center;
  place-items: center;

  :first-child {
    place-self: center start;
  }
  :last-child {
    place-self: center end;
  }
`;

export const TimezoneLabel = StyledComponent;
