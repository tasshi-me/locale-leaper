import React, { useState } from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem.tsx";
import { palette } from "../../designTokens/colors.ts";

type Props<Item, Key extends string> = {
  className?: string;
  items: Item[];
  createLabel: (item: Item) => string | React.ReactNode;
  createKey: (item: Item) => Key;
  callback: (key: Key) => void;
  initialActiveKey?: Key;
  itemsPerRow?: number;
  maxHeight?: string;
};

const Component = <Item, Key extends string>({
  className,
  items,
  createLabel,
  createKey,
  initialActiveKey,
  callback,
  itemsPerRow,
}: Props<Item, Key>): React.ReactNode => {
  const [activeKey, setActiveKey] = useState<string | undefined>(
    initialActiveKey,
  );

  return (
    <ol className={className}>
      {items.map((item) => (
        <ListItem
          key={createKey(item)}
          item={item}
          createLabel={createLabel}
          createKey={createKey}
          current={activeKey !== undefined && createKey(item) === activeKey}
          callback={(key) => {
            setActiveKey(key);
            callback(key);
          }}
          itemsPerRow={itemsPerRow}
        />
      ))}
    </ol>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  border: 1px solid ${palette.common.transparent};
  background: ${palette.dark.eerieBlack};
  border-radius: 8px;
  overflow: scroll;
  ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight}` : "")};

  @media (prefers-color-scheme: light) {
    border: 1px solid ${palette.common.transparent};
    background: ${palette.light.ghostWhite};
  }
` as typeof Component;

export const List = StyledComponent;
