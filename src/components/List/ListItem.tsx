import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

type Props<Item, Key extends string> = {
  className?: string;
  item: Item;
  createLabel: (item: Item) => string | React.ReactNode;
  createKey: (item: Item) => Key;
  callback: (key: Key) => void;
  current: boolean;
  itemsPerRow?: number;
};

const Component = <Item, Key extends string>({
  className,
  item,
  createLabel,
  createKey,
  callback,
  current,
}: Props<Item, Key>): React.ReactNode => {
  const label = createLabel(item);
  const key = createKey(item);

  const scrollBottomRef = useRef<HTMLLIElement>(null);

  useLayoutEffect(() => {
    scrollBottomRef?.current?.scrollIntoView({ block: "center" });
  }, []);

  return (
    <li className={className} ref={current ? scrollBottomRef : undefined}>
      <button onClick={() => callback(key)}>{label}</button>
    </li>
  );
};

const StyledComponent = styled(Component)`
  width: ${({ itemsPerRow }) => `${itemsPerRow ? 100 / itemsPerRow : 100}%`};
  list-style: none;
    margin: 0;
    
    button {
        width: 100%;
        height: 100%;
        ${({ current }) => (current ? "border-color: #646cff;" : "")}};
    }
` as typeof Component;

export const ListItem = StyledComponent;
